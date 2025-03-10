import { FC, useState } from "react";
import { DocumentText } from "../../svg/document-text";
import { Heart } from "../../svg/heart";
import { More } from "../../svg/more";
import { Button } from "../button/button";
import { PostInfo } from "../post-info/post-info";
import { PostsDescriptionItem } from "../posts-description-item/posts-description-item";
import styles from "./job-card.module.css";
import { SvgFromText } from "../svg-from-text/svg-from-text";
import { Employment } from "../../redux/entities/employments/employments-slice";
import { Modal } from "../modals/modal";
import { EmployersModalContainer } from "../modals/employers-modal/employers-modal-container";

type Props = {
  data: Employment;
};

export const JobCard: FC<Props> = ({ data }) => {
  const { descriptors, logo, _id } = data;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <SvgFromText text={logo} />
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
      <PostInfo data={data} />
      <div className={styles.descriptionItems}>
        {descriptors.map((item, ind) => (
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
            click: () => {
              setIsOpenModal(true);
            },
          }}
        >
          Detail Information
        </Button>
      </div>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <EmployersModalContainer id={_id} />
      </Modal>
    </div>
  );
};
