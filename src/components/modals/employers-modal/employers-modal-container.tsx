import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { EmployersModal } from "./employers-modal";
import { getEmploymentsDetails } from "../../../redux/entities/employments-details/get-employments-details";
import { selectEmploymentDetailsById } from "../../../redux/entities/employments-details/employments-details-slice";

export const EmployersModalContainer = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmploymentsDetails(id));
  });

  const data = useAppSelector((state) =>
    selectEmploymentDetailsById(state, id)
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  return <EmployersModal data={data} />;
};
