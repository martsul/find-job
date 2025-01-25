import { DetailsAndResults } from "../../components/details-and-results/details-and-results";
import { SearchBar } from "../../components/search-bar/search-bar";
import { FilterCard } from "../../types/details";

const DETAILS_DATA: FilterCard[] = [
  {
    title: "Experience Level",
    type: "experience",
    info: ["0-2 years", "3-5 years", "6-9 years", "10+ years"],
  },
  {
    title: "Type of employment",
    type: "type",
    info: ["Fulltime", "Part-Time", "Remote", "Internship/Trainee", "Hourly"],
  },
  {
    title: "Location",
    type:"location",
    info: ["Saudi Arabia", "United States", "Germany", "Australia"],
  },
];

export const FindJobPage = () => (
  <>
    <SearchBar></SearchBar>
    <DetailsAndResults data={DETAILS_DATA} />
  </>
);
