import { createSlice } from "@reduxjs/toolkit";
import { getEmployments } from "./get-employments";

export type Employment = {
  _id: string;
  logo: string;
  filtersInfo: string[];
  descriptors: string[];
  title: string;
  company: string;
  location: string;
  salary: string;
  workTime: string;
  text: string;
};

export type EmploymentState = {
  entities: Record<Employment["_id"], Employment>;
  ids: Employment["_id"][];
  requestStatus: string;
  collectionOfRelevantCards: Record<string, number>;
};

const initialState: EmploymentState = {
  entities: {},
  ids: [],
  requestStatus: "idle",
  collectionOfRelevantCards: {},
};

const memo: Record<string, string[]> = {};

export const employmentsSlice = createSlice({
  name: "employments",
  initialState,
  reducers: {},
  selectors: {
    selectCollectionOfRelevantCards: (state) => {
      return state.collectionOfRelevantCards;
    },
    selectEmploymentsFilteredIds: (state, filters: Set<string>) => {
      const key = Array.from(filters).sort().join(",") + state.ids.join(",");

      if (memo[key]) {
        return memo[key];
      }

      let result = [];

      if (!filters.size) {
        result = state.ids;
      } else {
        const { entities } = state;

        for (const key in entities) {
          const filtersInfoSet = new Set(entities[key].filtersInfo);
          let isCorrectObject = true;

          for (const currentFilter of filters) {
            if (!filtersInfoSet.has(currentFilter)) {
              isCorrectObject = false;
              break;
            }
          }

          if (isCorrectObject) {
            result.push(key);
          }
        }
      }

      memo[key] = result;

      return result;
    },
    selectEmploymentById: (state, id: string) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getEmployments.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getEmployments.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getEmployments.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce(
          (acc: EmploymentState["entities"], employment: Employment) => {
            acc[employment._id] = employment;

            return acc;
          },
          {}
        );

        state.ids = payload.map(({ _id }: Employment) => _id);

        const tempCollectionOfRelevantCards: EmploymentState["collectionOfRelevantCards"] =
          {};
        state.ids.forEach((id) => {
          const { filtersInfo } = state.entities[id];
          filtersInfo.forEach((element) => {
            if (!tempCollectionOfRelevantCards[element]) {
              tempCollectionOfRelevantCards[element] = 0;
            }

            tempCollectionOfRelevantCards[element]++;
          });
        });

        state.collectionOfRelevantCards = tempCollectionOfRelevantCards;

        state.requestStatus = "fulfilled";
      }),
});

export const {
  selectEmploymentById,
  selectEmploymentsFilteredIds,
  selectCollectionOfRelevantCards,
} = employmentsSlice.selectors;
