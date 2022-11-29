import React, { Component } from "react";
import Link from 'next/link'
import { search } from "../../utils";
import Results from "../../components/Results";
import styles from '../../styles/styles.module.css'

class RepositoriesSearch extends Component {
  state = {
    repositories: null,
    loading: false,
    value: ""
  };

  search = async val => {
    this.setState({ loading: true });
    const items = await search(
      `https://api.github.com/search/repositories?q=${val}`
    );
    const repositories = items;

    this.setState({ repositories, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderRepositories() {
    let repositories = <h1>There's no repositories</h1>;
    if (this.state.repositories) {
      repositories = <Results repositories={this.state.repositories} />;
    }

    return repositories;
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
          placeholder="Type something to search for a repository"
          className={styles.input}
        />
        {this.renderRepositories}
      </main>
    );
  }
}

export default RepositoriesSearch;

