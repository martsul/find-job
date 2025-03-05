import { Details } from "../../components/details/details";
import { CandidatesCardsContainer } from "../../components/candidates-cards/candidates-cards-container";
import { Recommendation } from "../../components/recommendation/recommendation";
import { SearchBar } from "../../components/search-bar/search-bar";
import { DETAILS_DATA } from "../../mock/details-data";
import styles from "./candidates.module.css";

export const Candidates = () => {
  return (
    <>
      <SearchBar></SearchBar>
      <div className={styles.container}>
        <Details data={DETAILS_DATA} />
        <Recommendation>
          <CandidatesCardsContainer />
        </Recommendation>
      </div>
    </>
  );
};
