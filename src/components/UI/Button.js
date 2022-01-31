import styles from "./Button.module.css";

const Button = (props) => {
  let classes = props.class && props.class === "alt" ? styles.alt : styles.main;

  classes = props.className ? `${classes} ${props.className}` : classes;
  return <button className={classes}>{props.children}</button>;
};

export default Button;
