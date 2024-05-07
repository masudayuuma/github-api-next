import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/styles.module.css";
import axios from "axios";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {
  userState,
  followersState,
  followingState,
  reposState,
} from "../atom";

function MyAccount() {
  const router = useRouter();
  const { user } = router.query;

  const [userData, setUserData] = useRecoilState(userState);
  const followers = useRecoilValue(followersState);
  const following = useRecoilValue(followingState);
  const repos = useRecoilValue(reposState);

  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`https://api.github.com/users/${user}`)
        .then((res) => setUserData(res.data))
        .catch((error) => console.error(error));
    }
  }, [user]);

  useEffect(() => {
    if (userData) {
      axios
        .get(userData.repos_url)
        .then((res) => setUserRepos(res.data))
        .catch((error) => console.error(error));
    }
  }, [userData]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <h1>マイアカウント詳細</h1>
          {userData && (
            <>
              <p>アカウント名 {userData.login}</p>
              <img src={userData.avatar_url} alt="image" />
              {followers && <p>フォロワー数: {followers.length}</p>}
              {following && <p>フォロー数: {following.length}</p>}
              {repos && (
                <div>
                  <h2>レポジトリ一覧</h2>
                  <ul>
                    {userRepos.map((repo) => (
                      <li key={repo.id}>
                        <Link href={repo.html_url}>{repo.full_name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p>マイアカウントページ {userData.url}</p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { user } = context.query;
  return {
    props: {
      user,
    },
  };
}

export default MyAccount;













// import React, { useEffect } from "react";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { useRouter } from "next/router";
// import styles from '../../styles/styles.module.css'
// import axios from "axios";
// import { Header } from "../../components/Header";
// import { Footer } from "../../components/Footer";
// import { userState, followersState, followingState, reposState } from "../atom";

// function MyAcount() {
//   const router = useRouter();
//   const { user } = router.query;

//   const [userData, setUserData] = useRecoilState(userState);
//   const followers = useRecoilValue(followersState);
//   const following = useRecoilValue(followingState);
//   const repos = useRecoilValue(reposState);

//   useEffect(() => {
//     if (user) {
//       axios.get(`https://api.github.com/users/${user}`)
//         .then((res) => { setUserData(res.data) })
//         .catch((error) => console.error(error));
//     }
//   }, [user]);

//   useEffect(() => {
//     if (userData) {
//       axios.get(userData.followers_url)
//         .then((res) => { setFollowers(res.data) })
//         .catch((error) => console.error(error));
//     }
//   }, [userData]);

//   useEffect(() => {
//     if (userData) {
//       axios.get(userData.following_url)
//         .then((res) => { setFollowing(res.data) })
//         .catch((error) => console.error(error));
//     }
//   }, [userData]);

//   useEffect(() => {
//     if (userData) {
//       axios.get(userData.repos_url)
//         .then((res) => { setRepos(res.data) })
//         .catch((error) => console.error(error));
//     }
//   }, [userData]);

//   return (
//     <>
//     <Header />
//     <main className={styles.main}>
//       <div>
//         <h1>マイアカウント詳細</h1>
//         {userData && (
//           <>
//             <p>アカウント名 {userData.login}</p>
//             <img src={userData.avatar_url} alt="image" />
//             {followers && <p>フォロワー数: {followers.length}</p>}
//             {following && <p>フォロー数: {following.length}</p>}
//             {repos && (
//               <div>
//                 <h2>レポジトリ一覧</h2>
//                 <ul>
//                   {repos.map((repo) => (
//                     <li key={repo.id}>
//                       <Link href={repo.html_url}>{repo.full_name}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <p>マイアカウントページ {userData.url}</p>
//           </>
//         )}
//       </div>
//     </main>
//     <Footer />
//     </>
//   );
// }

// export async function getServerSideProps(context) {
//   const { user } = context.query;
//   return {
//     props: {
//       user
//     }
//   };
// }

// export default MyAcount;



// import React, { useEffect, useState } from "react";
// import Link from 'next/link'
// import styles from '../../styles/styles.module.css'
// import axios from "axios";
// import { Header } from "../../components/Header";
// import { Footer } from "../../components/Footer";

// function MyAcount({ user }) {
//   const [userData, setUserData] = useState(null);
//   const [followers, setFollowers] = useState(null);
//   const [following, setFollowing] = useState(null);
//   const [repos, setRepos] = useState(null);

//   useEffect(() => {
//     if (user) {
//       axios.get(`https://api.github.com/users/${user}`)
//         .then((res) => { setUserData(res.data) })
//         .catch((error) => console.error(error));
//     }
//   }, [user]);

//   useEffect(() => {
//     if (userData) {
//       axios.get(userData.followers_url)
//         .then((res) => { setFollowers(res.data) })
//         .catch((error) => console.error(error));
//     }
//   }, [userData]);

//   useEffect(() => {
//     if (userData) {
//       axios.get(userData.following_url)
//         .then((res) => { setFollowing(res.data) })
//         .catch((error) => console.error(error));
//     }
//   }, [userData]);

//   useEffect(() => {
//     if (userData) {
//       axios.get(userData.repos_url)
//         .then((res) => { setRepos(res.data) })
//         .catch((error) => console.error(error));
//     }
//   }, [userData]);

//   return (
//     <>
//     <Header />
//     <main className={styles.main}>
//       <div>
//         <h1>マイアカウント詳細</h1>
//         {userData && (
//           <>
//             <p>アカウント名 {userData.login}</p>
//             <img src={userData.avatar_url} alt="image" />
//             {followers && <p>フォロワー数: {followers.length}</p>}
//             {following && <p>フォロー数: {following.length}</p>}
//             {repos && (
//               <div>
//                 <h2>レポジトリ一覧</h2>
//                 <ul>
//                   {repos.map((repo) => (
//                     <li key={repo.id}>
//                       <Link href={repo.html_url}>{repo.full_name}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <p>マイアカウントページ {userData.url}</p>
//           </>
//         )}
//       </div>
//     </main>
//     <Footer />
//     </>
//   );
// }

// export async function getServerSideProps(context) {
//   const { user } = context.query;
//   return {
//     props: {
//       user
//     }
//   };
// }

// export default MyAcount;
