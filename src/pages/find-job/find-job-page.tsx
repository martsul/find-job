import { Details } from "../../components/details/details";
import { JobCardsContainer } from "../../components/job-cards/job-cards-container";
import { Recommendation } from "../../components/recommendation/recommendation";
import { SearchBar } from "../../components/search-bar/search-bar";
import { DETAILS_DATA } from "../../mock/details-data";
import styles from "./find-job-page.module.css";

export const FindJobPage = () => (
  <>
    <SearchBar></SearchBar>
    <div className={styles.container}>
      <Details data={DETAILS_DATA} />
      <Recommendation>
        <JobCardsContainer />
      </Recommendation>
    </div>
  </>
);
