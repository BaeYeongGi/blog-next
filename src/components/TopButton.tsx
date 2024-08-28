import { Up } from "@/public/images/svg";
import styles from "@/src/styles/TopButton.module.css";

const TopButton = () => {
  return (
    <button className={styles.button}>
      <Up/>
    </button>
  );
};

export default TopButton;