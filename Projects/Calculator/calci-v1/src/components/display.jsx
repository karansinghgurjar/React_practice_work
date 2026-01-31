import styles from "../App.module.css";
const Display = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      value={displayValue}
      type="text"
      readOnly
    ></input>
  );
};
export default Display;
