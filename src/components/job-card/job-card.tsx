import { DocumentText } from "../../svg/document-text";
import { Heart } from "../../svg/heart";
import { More } from "../../svg/more";
import { Button } from "../button/button";
import { PostInfo } from "../post-info/post-info";
import { PostsDescriptionItem } from "../posts-description-item/posts-description-item";
import styles from "./job-card.module.css";

const POST_INFO_DATA = {
  title: "Product Designer - Racuten Analytics",
  company: "Racuten",
  location: "California, USA",
  salary: { sum: "$7,000", time: "Month" },
  text: "Full stack developer TextMagic is an international SaaS technology company. Our flagship product is an SMS messaging platform used worldwide (including the USA, UK, Canada, and Australia)...",
};

const svg = (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="72" height="72" rx="36" fill="#E9DFF0" />
    <g clip-path="url(#clip0_3046_573)">
      <path
        d="M52.0362 48.4L26.2522 52L21.9629 48.4H52.0362ZM31.1336 45.7013H26.2522V20H34.3216C36.6719 20.0011 38.9257 20.9348 40.5882 22.5963C42.2506 24.2577 43.1858 26.511 43.1882 28.8613C43.1882 31.84 41.7109 34.4667 39.4562 36.0853L46.6802 45.7H40.5669L34.5856 37.728H31.1336V45.7013ZM31.1336 32.848H34.3229C35.3795 32.8469 36.3926 32.4267 37.1398 31.6796C37.8869 30.9324 38.3072 29.9193 38.3082 28.8627C38.3054 27.8069 37.8845 26.7953 37.1376 26.0491C36.3907 25.303 35.3786 24.8831 34.3229 24.8813H31.1336V32.848Z"
        fill="#9747FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_3046_573">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(21 20)"
        />
      </clipPath>
    </defs>
  </svg>
);

const DescriptionsItems = ["Fulltime", "No experience", "Designer", "Remote"];

export const JobCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        {svg}
        <div className={styles.headButtons}>
          <Button
            info={{
              kind: "svground",
              size: "xsmall",
              style: "bordered",
              type: "button",
            }}
          >
            <span className={styles.heart}>
              <Heart />
            </span>
          </Button>
          <Button
            info={{
              kind: "svground",
              size: "xsmall",
              style: "bordered",
              type: "button",
            }}
          >
            <span className={styles.more}>
              <More />
            </span>
          </Button>
        </div>
      </div>
      <PostInfo data={POST_INFO_DATA} />
      <div className={styles.descriptionItems}>
        {DescriptionsItems.map((item, ind) => (
          <PostsDescriptionItem key={ind} text={item} />
        ))}
      </div>
      <div className={styles.descriptionItems}>
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
        <Button
          info={{
            kind: "base",
            size: "big",
            style: "neutral",
            type: "button",
          }}
        >
          Detail Information
        </Button>
      </div>
    </div>
  );
};
