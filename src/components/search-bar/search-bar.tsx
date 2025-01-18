import { Search } from "../../svg/search";
import { Button } from "../button/button";
import { SelectInSearch } from "../select-in-search/select-in-search";
import styles from "./search-bar.module.css";

export const SearchBar = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <form className={styles.form}>
          <label className={styles.textLabel}>
            <span className={styles.svgContainer}>
              <Search />
            </span>
            <input
              type="text"
              placeholder="Product Designer"
              className={styles.input}
            />
          </label>
          <SelectInSearch />
          <Button
            info={{
              size: "big",
              style: "secondary",
              kind: "base",
              type: "submit",
            }}
          >
            Search
          </Button>
        </form>
      </div>
    </section>
  );
};
