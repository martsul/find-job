import { FooterNavBlock } from "../footer-nav-block/footer-nav-block";
import styles from "./footer-nav.module.css";

const DATA_OF_NAV = [
  {
    title: "Employers",
    links: ["Start Hiring", "Volunteer", "Diversity and Inclusion"],
  },
  {
    title: "Candidates",
    links: [
      "Get Hired",
      "Internships",
      "Temporary Employment",
      "Graduates",
      "Volunteer",
    ],
  },
  {
    title: "Company",
    links: [
      "For Students",
      "Careers",
      "Brand Ambassadors",
      "About",
      "Resources",
      "Blog",
    ],
  },
];

export const FooterNav = () => {
  return (
    <nav className={styles.nav}>
      {DATA_OF_NAV.map((item) => {
        const { title, links } = item;
        return <FooterNavBlock title={title} links={links} />;
      })}
    </nav>
  );
};
