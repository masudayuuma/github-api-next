// import React, { useState } from "react";
// import { search } from "../../utils";
// import Results from "../../components/Results";
// import styles from '../../styles/styles.module.css'
// import { Header } from "../../components/Header";
// import { Footer } from "../../components/Footer";

// const RepositoriesSearch = () => {
//   const [repositories, setRepositories] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [value, setValue] = useState("");

//   const performSearch = async val => {
//     setLoading(true);
//     const items = await search(
//       `https://api.github.com/search/repositories?q=${val}`
//     );
//     setRepositories(items);
//     setLoading(false);
//   };

//   const onChangeHandler = async e => {
//     performSearch(e.target.value);
//     setValue(e.target.value);
//   };

//   const renderRepositories = () => {
//     if (!repositories) {
//       return <h1>検索結果はありません</h1>;
//     }
//     return <Results repositories={repositories} />;
//   }

//   return (
//     <>
//       <Header />
//       <main className={styles.main}>
//         <input
//           value={value}
//           onChange={e => onChangeHandler(e)}
//           placeholder="調べ物はなんですか"
//           className={styles.input}
//         />
//         {renderRepositories()}
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default RepositoriesSearch;

import React, { useState } from "react";
import { search } from "../../utils";
import Results from "../../components/Results";
import styles from '../../styles/styles.module.css';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const RepositoriesSearch = () => {
  const [repositories, setRepositories] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1); // ページ番号を管理する状態

  const performSearch = async (val, page = 1) => {
    setLoading(true);
    const items = await search(
      `https://api.github.com/search/repositories?q=${val}&per_page=20&page=${page}`
    );
    setRepositories(items);
    setLoading(false);
  };

  const onChangeHandler = async e => {
    setPage(1); // 検索クエリが変更されたらページをリセット
    performSearch(e.target.value, 1);
    setValue(e.target.value);
  };

  const onPageChange = async newPage => {
    setPage(newPage);
    performSearch(value, newPage);
  };

  const renderRepositories = () => {
    if (!repositories) {
      return <h1>検索結果はありません</h1>;
    }
    return (
      <>
        <Results repositories={repositories} />
        <div className={styles.pagination}>
          <button 
            onClick={() => onPageChange(page - 1)} 
            disabled={page === 1}
          >
            Previous
          </button>
          <span>Page {page}</span>
          <button onClick={() => onPageChange(page + 1)}>
            Next
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <input
          value={value}
          onChange={e => onChangeHandler(e)}
          placeholder="調べ物はなんですか"
          className={styles.input}
        />
        {loading ? <h3>Loading...</h3> : renderRepositories()}
      </main>
      <Footer />
    </>
  );
}

export default RepositoriesSearch;
