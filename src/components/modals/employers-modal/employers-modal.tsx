import { FC } from "react";
import { Briefcase } from "../../../svg/briefcase";
import { DocumentText } from "../../../svg/document-text";
import { DollarCircle } from "../../../svg/dollar-circle";
import { Flag } from "../../../svg/flag";
import { Location } from "../../../svg/location";
import { UserTick } from "../../../svg/user-tick";
import { Button } from "../../button/button";
import { SvgFromText } from "../../svg-from-text/svg-from-text";
import styles from "./employers-modal.module.css";
import { EmploymentsDetails } from "../../../redux/entities/employments-details/employments-details-slice";

type EmployersModalHeaderType = Pick<
  EmploymentsDetails,
  "company" | "location" | "name" | "timeOfPost"
>;
type EmployersModalTableType = Pick<EmploymentsDetails, "mainInfo">;
type EmployersModalDescriptionType = Pick<EmploymentsDetails, "text">;
type EmployersModalRequirementsType = Pick<EmploymentsDetails, "requirements">;

export const EmployersModal: FC<{ data: EmploymentsDetails }> = ({ data }) => {
  const {
    logo,
    company,
    location,
    mainInfo,
    name,
    requirements,
    text,
    timeOfPost,
  } = data;

  return (
    <div className={styles.modal}>
      <p className={styles.top}>Job Details</p>
      <SvgFromText text={logo} />
      <EmployersModalHeader
        company={company}
        location={location}
        name={name}
        timeOfPost={timeOfPost}
      />
      <EmployersModalTable mainInfo={mainInfo} />
      <EmployersModalDescription text={text} />
      <EmployersModalRequirements requirements={requirements} />
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

const EmployersModalHeader: FC<EmployersModalHeaderType> = ({
  company,
  location,
  name,
  timeOfPost,
}) => {
  const howOldPosted = new Date().getTime() - new Date(timeOfPost).getTime();
  const hours = Math.floor(howOldPosted / 3600000);

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h3 className={styles.name}>{name}</h3>
        {howOldPosted < 86400000 && <span className={styles.banner}>New</span>}
      </div>
      <div className={styles.employersDetails}>
        <span className={styles.company}>{company}</span>
        <div className={styles.location}>
          <span className={styles.locationSvg}>
            <Location color="#7F879E" />
          </span>
          <span className={styles.address}>{location}</span>
        </div>
        <span className={styles.date}>{timeFormat(hours)}</span>
      </div>
    </div>
  );
};

const EmployersModalTable: FC<EmployersModalTableType> = ({ mainInfo }) => {
  const { employeeType, experience, offerSalary, workLevel } = mainInfo;

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

const EmployersModalDescription: FC<EmployersModalDescriptionType> = ({
  text,
}) => {
  return (
    <div className={styles.description}>
      <h4 className={styles.descriptionTitle}>Job Description</h4>
      <p className={styles.descriptionText}>{text}</p>
    </div>
  );
};

const EmployersModalRequirements: FC<EmployersModalRequirementsType> = ({
  requirements,
}) => {
  return (
    <div className={styles.requirements}>
      <h4 className={styles.requirementsTitle}>Requirements</h4>
      <ul className={styles.requirementsList}>
        {requirements.map((element, index) => (
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
