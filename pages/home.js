import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/styles.module.css'
import { Footer } from '../components/Footer'
import { useRecoilValue } from 'recoil';
import { usernameState } from './atom'; // Modified import statement

export function Home() {
  const username = useRecoilValue(usernameState);

  return (
    <div className={styles.container}>
      <Head>
        <title>Github Repositories Search</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {username}ようこそ
        </h1>

        <p className={styles.description}>
          Githubにあるリポジトリを検索できます
        </p>

        <div className={styles.grid}>
          <Link href={`/myacount/${username}`} className={styles.card}>
            <h3>Acount &rarr;</h3>
            <p>あなたのアカウントページへ</p>
          </Link>

          <Link href="/repositories-search" className={styles.card}>
            <h3>Repositories &rarr;</h3>
            <p>あなたにぴったりのリポジトリ探しましょう</p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;




// import Head from 'next/head'
// import Link from 'next/link'
// import styles from '../styles/styles.module.css'
// import { Footer } from '../components/Footer'
// import { useRouter } from 'next/router';
// import { useRecoilValue, RecoilRoot } from 'recoil';
// import { usernameState } from '.';

// export function Home() {
//   const router = useRouter();
//   const username = useRecoilValue(usernameState);

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Github Repositories Search</title>
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           {username}ようこそ
//         </h1>

//         <p className={styles.description}>
//           Githubにあるリポジトリを検索できます
//         </p>

//         <div className={styles.grid}>
//           <Link href={`/myacount/${username}`} className={styles.card}>
//             <h3>Acount &rarr;</h3>
//             <p>あなたのアカウントページへ</p>
//           </Link>

//           <Link href="/repositories-search" className={styles.card}>
//               <h3>Repositories &rarr;</h3>
//               <p>あなたにぴったりのリポジトリ探しましょう</p>
//           </Link>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   )
// }

// function App() {
//   return (
//       <RecoilRoot>
//           <Home />
//       </RecoilRoot>
//   );
// }

// export default App;

// import Head from 'next/head'
// import Link from 'next/link'
// import styles from '../styles/styles.module.css'
// import { Footer } from '../components/Footer'
// import { useRouter } from 'next/router';

// export default function Home() {
//   const router = useRouter();
//   const { username } = router.query;

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Github Repositories Search</title>
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           {username}ようこそ
//         </h1>

//         <p className={styles.description}>
//           Githubにあるリポジトリを検索できます
//         </p>

//         <div className={styles.grid}>
//           <Link href={`/myacount/${username}`} className={styles.card}>
//             <h3>Acount &rarr;</h3>
//             <p>あなたのアカウントページへ</p>
//           </Link>

//           <Link href="/repositories-search" className={styles.card}>
//             <h3>Repositories &rarr;</h3>
//             <p>あなたにぴったりのリポジトリ探しましょう</p>
//           </Link>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   )
// }
