import { FC } from "react";
import { Heart } from "../../svg/heart";
import { Location } from "../../svg/location";
import { DollarCircle } from "../../svg/dollar-circle";
import { Button } from "../button/button";
import { MessageText } from "../../svg/message-text";
import styles from "./candidates-card.module.css";

const DATA = {
  img: "https://s3-alpha-sig.figma.com/img/7253/45db/53edc66922cb46d2770e0d27a2271dbd?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d9DPuLwKcVxs5nzwxM9QAQ2V1LBDbEmY2NGH-og1yMP4A-zqFGEY4eFz6S1FiGBSWX-3fDvzk30GacAWAyuByuEJOnm8QnccR5y7dZL4U77EyO3iv8zbWwuKqtQ~beXLTVmaCeMwECpqby4MXKPAu2JLZmEq7fzjQT-jweZp39oQDgtRtAT6bzW4ocDZ88f0nAAOw5MIONUwiRoHJQ3IjxpvKYhybNJgptbP6maHxvSXKAAMErhGP~DEztZcaOWj8KLuRu-eZU0V4iYtlDB-~sGWQL95jFK1CS4PDfS7aAJm4b8nHMZLyLPvlWXmjs8KNzCkr2KEvfF~FHmLFs96ag__",
  name: "Syeda Johnston",
  age: "22",
  experience: "2y 6m",
  specialization: "Product UX Designer",
  location: "California, USA",
  salary: "$100,000",
  workTime: "Month",
  text: "Part-time. 2.6 years experience. Higher education",
  descriptors: ["Part-time", "UI Design", "Designer", "Remote"],
};

type CandidatesCardHeaderType = {
  src: string;
};

type CandidatesCardMainInfoType = {
  specialization: string;
  salary: string;
  workTime: string;
  text: string;
  location: string;
  name: string;
  age: string;
  experience: string;
};

type CandidatesCardDescriptorsType = {
  descriptors: string[];
};

export const CandidatesCard = () => {
  return (
    <div className={styles.card}>
      <CandidatesCardHeader src={DATA.img} />
      <CandidatesCardMainInfo
        age={DATA.age}
        name={DATA.name}
        experience={DATA.experience}
        salary={DATA.salary}
        specialization={DATA.specialization}
        text={DATA.text}
        workTime={DATA.workTime}
        location={DATA.location}
      />
      <CandidatesCardDescriptors descriptors={DATA.descriptors} />
      <CandidatesCardButtons />
    </div>
  );
};

const CandidatesCardHeader: FC<CandidatesCardHeaderType> = ({ src }) => {
  return (
    <div className={styles.header}>
      <div className={styles.imgContainer}>
        <img src={src} alt="candidate" className={styles.img} />
      </div>
      <button className={styles.headerButton}>
        <p className={styles.heart}>
          <Heart />
        </p>
      </button>
    </div>
  );
};

const CandidatesCardMainInfo: FC<CandidatesCardMainInfoType> = ({
  salary,
  specialization,
  text,
  workTime,
  location,
  name,
  age,
  experience,
}) => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.nameLine}>
        <span className={styles.cardText}>
          {name}, {age} y.o.
        </span>
        <span className={styles.cardText}>{experience}</span>
      </div>
      <h4 className={styles.specialization}>{specialization}</h4>
      <div className={styles.contacts}>
        <div className={styles.location}>
          <span className={styles.locationSvg}>
            <Location color="#7F879E" />
          </span>
          <span className={styles.cardText}>{location}</span>
        </div>
        <div className={styles.salary}>
          <span className={styles.dollar}>
            <DollarCircle />
          </span>
          <span className={styles.cardText}>
            <strong>{salary}</strong> /{workTime}
          </span>
        </div>
      </div>
      <p className={styles.mainText}>{text}</p>
    </div>
  );
};

const CandidatesCardDescriptors: FC<CandidatesCardDescriptorsType> = ({
  descriptors,
}) => {
  return (
    <div className={styles.descriptors}>
      {descriptors.map((e, ind) => (
        <span className={styles.descriptor} key={ind}>
          {e}
        </span>
      ))}
    </div>
  );
};

const CandidatesCardButtons = () => {
  return (
    <div className={styles.buttons}>
      <Button info={{ kind: "base", size: "medium", style: "secondary" }}>
        <span className={styles.message}>
          <MessageText />
        </span>
        <span>Send message</span>
      </Button>
      <Button info={{ kind: "base", size: "medium", style: "neutral" }}>
        Detail Information
      </Button>
    </div>
  );
};
