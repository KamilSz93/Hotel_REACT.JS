import React from "react";
import styles from "./header.module.css";
import widthMousePosition from "../../hoc/withMousePosition";

function Header(props) {
  const paralaxStyles = {
    transform: `translate(
        ${props.mouseX / -20}px,
        ${props.mouseY / 120}px
      )`,
  };

  return (
    <header className={`${styles.header}`}>
      <div className={styles.headerImage} style={paralaxStyles}></div>
      {props.children}
    </header>
  );
}

export default widthMousePosition(Header);
