import React from "react";
import styles from '../styles/styles.module.css'

const Repository = props => {
  const { full_name, avatar_url, url, html_url } = props.item;

  return (
    <a href={html_url} target="_blank" className={styles.card}>
      <div className={styles.dFlex}>
        <div>
          <h3>{full_name}</h3>
          <p>{url}</p>
        </div>
      </div>
    </a>
  );
};

export default Repository;