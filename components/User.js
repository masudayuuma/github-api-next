import React from "react";
import styles from '../styles/styles.module.css'

const User = props => {
  const { login, avatar_url, url, html_url } = props.item;

  return (
    <a href={html_url} target="_blank" className={styles.card}>
      <div className={styles.dFlex}>
        <div>
          <img
            src={avatar_url}
            alt={url}
            className={styles.img}
          />
        </div>
        <div>
          <h3>{login}</h3>
          <p>{url}</p>
        </div>
      </div>
    </a>
  );
};

export default User;