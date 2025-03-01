import { FC } from "react";
import { JobCard } from "./job-card";
import { useAppSelector } from "../../redux/hooks";
import { selectEmploymentById } from "../../redux/entities/employments/employments-slice";

export const JobCardContainer: FC<{ id: string }> = ({ id }) => {
  const data = useAppSelector((state) => selectEmploymentById(state, id));

  return <JobCard data={data} />;
};
