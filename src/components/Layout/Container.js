import styles from "./Container.module.css";

const Container = (props) => {
  let classes = props.className
    ? `${styles.container} ${props.className}`
    : styles.container;
  return (
    <div id={props.id} className={classes}>
      {props.children}
    </div>
  );
};

export default Container;
