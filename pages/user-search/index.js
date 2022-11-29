import React, { Component } from "react";
import Link from 'next/link'
import { search } from "../../utils";
import Results from "../../components/Results";
import styles from '../../styles/styles.module.css'

class UserSearch extends Component {
  state = {
    users: null,
    loading: false,
    value: ""
  };

  search = async val => {
    this.setState({ loading: true });
    const items = await search(
      `https://api.github.com/search/users?q=${val}`
    );
    const users = items;

    this.setState({ users, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderUsers() {
    let users = <h1>There's no users</h1>;
    if (this.state.users) {
      users = <Results users={this.state.users} />;
    }

    return users;
  }

  render() {
    return (
      <main className={styles.main}>
        <div className={styles.linkBack}>
          <Link href="/">
            <p>&larr; Back</p>
          </Link>
        </div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search a user"
          className={styles.input}
        />
        {this.renderUsers}
      </main>
    );
  }
}

export default UserSearch;
