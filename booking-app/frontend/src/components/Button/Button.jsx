import styles from "./Button.module.scss";

function Button(props) {
  return (
    <button className={`${styles.btn} ${styles[props.variant]}`}>
      {props.children}
    </button>
  );
}

export default Button;
