import React from "react";
import Repository from "./Repository";
import styles from '../styles/styles.module.css'

const Results = ({repositories}) => {
  let cards = <h3>Loading...</h3>;

  if (repositories) {
    cards = repositories.map((m, i) => <Repository key={i} item={m} />);
  }
  return (
    <div className={styles.grid}>
      <div className={styles.grid}>{cards}</div>
    </div>
  );
};

export default Results;

