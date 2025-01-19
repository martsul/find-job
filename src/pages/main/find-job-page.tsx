import { DetailsAndResults } from "../../components/details-and-results/details-and-results";
import { SearchBar } from "../../components/search-bar/search-bar";
import { FilterCard } from "../../types/details";

const DETAILS_DATA: FilterCard[] = [
  {
    title: "Experience Level",
    info: [
      { name: "0-2", text: "0-2 years" },
      { name: "3-5", text: "3-5 years" },
      { name: "6-9", text: "6-9 years" },
      { name: "10+", text: "10+ years" },
    ],
  },
  {
    title: "Type of employment",
    info: [
      { name: "Fulltime", text: "Fulltime" },
      { name: "Part-Time", text: "Part-Time" },
      { name: "Remote", text: "Remote" },
      { name: "Internship/Trainee", text: "Internship/Trainee" },
      { name: "Hourly", text: "Hourly" },
    ],
  },
  {
    title: "Location",
    info: [
      { name: "Saudi Arabia", text: "Saudi Arabia" },
      { name: "United States", text: "United States" },
      { name: "Germany", text: "Germany" },
      { name: "Australia", text: "Australia" },
    ],
  },
];

export const FindJobPage = () => (
  <>
    <SearchBar></SearchBar>
    <DetailsAndResults data={DETAILS_DATA} />
  </>
);
