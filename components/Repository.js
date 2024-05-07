import React from "react";
import styles from '../styles/styles.module.css'
import Link from 'next/link'; 

const Repository = props => {
  const { full_name, avatar_url, url, html_url, id } = props.item;

  return (
    <Link href={`/repo/${id}`} className={styles.repo}>
        <div className={styles.dFlex}>
          <div>
            <h3>{full_name}</h3>
            <p>{url}</p>
          </div>
        </div>
    </Link>
  );
};

export default Repository;
