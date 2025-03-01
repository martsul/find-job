import { Briefcase } from "../../../svg/briefcase";
import { DocumentText } from "../../../svg/document-text";
import { DollarCircle } from "../../../svg/dollar-circle";
import { Flag } from "../../../svg/flag";
import { Location } from "../../../svg/location";
import { UserTick } from "../../../svg/user-tick";
import { Button } from "../../button/button";
import { SvgFromText } from "../../svg-from-text/svg-from-text";
import styles from "./employers-modal.module.css";

const data = {
  logo: `<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="90" height="90" rx="45" fill="#F5F7FF"/>
<g clip-path="url(#clip0_1572_15154)">
<path d="M30 28H62V60H30V28Z" fill="#FF0066"/>
<path d="M40.8888 38.2975C41.9009 38.2828 42.7109 37.4529 42.7012 36.4407C42.6913 35.4283 41.8654 34.6143 40.853 34.6192C39.8407 34.624 39.0227 35.4459 39.0225 36.4583C39.0234 36.7019 39.0724 36.9429 39.1668 37.1674C39.2612 37.392 39.3991 37.5956 39.5726 37.7666C39.7461 37.9376 39.9517 38.0725 40.1776 38.1637C40.4035 38.2548 40.6452 38.3004 40.8888 38.2977V38.2975ZM37.0193 48.1447C36.9134 48.5976 36.858 49.0608 36.8543 49.5259C36.8543 51.145 37.7323 52.2202 39.5985 52.2202C41.146 52.2202 42.4017 51.3012 43.3042 49.8164L42.7524 52.0308H45.8244L47.5819 44.9908C48.0209 43.2064 48.8708 42.281 50.161 42.281C51.176 42.281 51.8072 42.912 51.8072 43.9553C51.8122 44.2897 51.7659 44.6229 51.6702 44.9434L50.7652 48.1805C50.6357 48.6263 50.5711 49.0885 50.5733 49.5527C50.5733 51.0887 51.4783 52.2152 53.3713 52.2152C54.9905 52.2152 56.2808 51.1732 56.9938 48.6759L55.7867 48.2087C55.1825 49.8829 54.6617 50.1849 54.2507 50.1849C53.8398 50.1849 53.6183 49.9112 53.6183 49.3619C53.6301 49.0737 53.6761 48.788 53.7553 48.5107L54.6347 45.3557C54.8321 44.707 54.9339 44.033 54.9368 43.3549C54.9368 40.9945 53.5095 39.7633 51.7803 39.7633C50.161 39.7633 48.515 41.2237 47.6919 42.761L48.2948 40.0013H43.6035L42.9444 42.4333H45.1409L43.7893 47.84C42.7268 50.2004 40.7762 50.2388 40.5317 50.1838C40.1297 50.0928 39.8737 49.9405 39.8737 49.4157C39.8854 48.9908 39.9499 48.569 40.0657 48.16L42.1239 39.9949H36.9118L36.2539 42.4269H38.4209L37.0193 48.1447Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1572_15154">
<rect width="32" height="32" fill="white" transform="translate(30 28)"/>
</clipPath>
</defs>
</svg>
`,
  name: "Narrative designer",
  timeOfPost: new Date(),
  company: "Invision",
  location: "Chicago, IL, USA",
  mainInfo: {
    experience: "2 Years",
    workLevel: "Senior Level",
    employeeType: "Fulltime Job",
    offerSalary: ["$25,000", "Month"],
  },
  text: "Frogwares is currently looking for a Narrative Designer to join the dynamic team of game designers for its upcoming titles. Our expert team creates games which are highly praised by millions of players, as well as industry experts all over the world.",
  requirements: [
    "At least 3 years of experience on a similar position;",
    "English – Upper intermediate (B2) or higher;",
    "Strong dramatic writing skills in English;",
    "Deep understanding of story structure, non-linear narrative methods;",
    "Passion for video games of various genres, especially for the open-world genre;",
  ],
};

export const EmployersModal = () => {
  return (
    <div className={styles.modal}>
      <p className={styles.top}>Job Details</p>
      <SvgFromText text={data.logo} />
      <EmployersModalHeader />
      <EmployersModalTable />
      <EmployersModalDescription />
      <EmployersModalRequirements />
      <EmployersModalFooter />
    </div>
  );
};

const timeFormat = (hours: number) => {
  if (hours === 0) {
    return "Posted few minutes ago";
  } else if (hours === 1) {
    return `Posted ${hours} hour ago`;
  } else {
    return `Posted ${hours} hours ago`;
  }
};

const EmployersModalHeader = () => {
  const howOldPosted = new Date().getTime() - data.timeOfPost.getTime();
  const hours = Math.floor(howOldPosted / 3600000);

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h3 className={styles.name}>{data.name}</h3>
        {howOldPosted < 1740850264628 && (
          <span className={styles.banner}>New</span>
        )}
      </div>
      <div className={styles.employersDetails}>
        <span className={styles.company}>{data.company}</span>
        <div className={styles.location}>
          <span className={styles.locationSvg}>
            <Location color="#7F879E" />
          </span>
          <span className={styles.address}>{data.location}</span>
        </div>
        <span className={styles.date}>{timeFormat(hours)}</span>
      </div>
    </div>
  );
};

const EmployersModalTable = () => {
  const { employeeType, experience, offerSalary, workLevel } = data.mainInfo;

  return (
    <div className={styles.table}>
      <div className={styles.column}>
        <p className={styles.columnName}>Experience</p>
        <div className={styles.columnInfo}>
          <span className={styles.columnsSvg}>
            <UserTick />
          </span>
          <span className={styles.columnText}>{experience}</span>
        </div>
      </div>
      <div className={styles.column}>
        <p className={styles.columnName}>Work Level</p>
        <div className={styles.columnInfo}>
          <span className={styles.columnsSvg}>
            <Flag />
          </span>
          <span className={styles.columnText}>{workLevel}</span>
        </div>
      </div>
      <div className={styles.column}>
        <p className={styles.columnName}>Employee Type</p>
        <div className={styles.columnInfo}>
          <span className={styles.columnsSvg}>
            <Briefcase />
          </span>
          <span className={styles.columnText}>{employeeType}</span>
        </div>
      </div>
      <div className={styles.column}>
        <p className={styles.columnName}>Offer Salary</p>
        <div className={styles.columnInfo}>
          <span className={styles.columnsSvg}>
            <DollarCircle />
          </span>
          <span className={styles.columnText}>
            <strong>{offerSalary[0]}</strong>/{offerSalary[1]}
          </span>
        </div>
      </div>
    </div>
  );
};

const EmployersModalDescription = () => {
  return (
    <div className={styles.description}>
      <h4 className={styles.descriptionTitle}>Job Description</h4>
      <p className={styles.descriptionText}>{data.text}</p>
    </div>
  );
};

const EmployersModalRequirements = () => {
  return (
    <div className={styles.requirements}>
      <h4 className={styles.requirementsTitle}>Requirements</h4>
      <ul className={styles.requirementsList}>
        {data.requirements.map((element, index) => (
          <li key={index} className={styles.requirementsItem}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

const EmployersModalFooter = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>Are you interested in this Job?</p>
      <div className={styles.buttons}>
        <Button
          info={{
            kind: "base",
            size: "big",
            style: "neutral",
            type: "button",
          }}
        >
          Messages
        </Button>
        <Button
          info={{
            kind: "base",
            size: "big",
            style: "secondary",
            type: "button",
          }}
        >
          <span className={styles.document}>
            <DocumentText />
          </span>
          <span>Apply Now</span>
        </Button>
      </div>
    </div>
  );
};
