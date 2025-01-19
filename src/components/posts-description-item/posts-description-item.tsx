import styles from "./posts-description-item.module.css";

export const PostsDescriptionItem = ({ text }: { text: string }) => {
  return <p className={styles.item}>{text}</p>;
};
