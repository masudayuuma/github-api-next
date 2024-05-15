// Signup.js
import React from 'react';
import { useRecoilState } from 'recoil';
import styles from '../styles/styles.module.css';
import { useRouter } from 'next/router';
import { usernameState ,emailState} from './atom';
// import { usernameState, emailState } from '../atom.js'; // パスは実際のファイルの場所に合わせて変更してください

const Signup = () => {
    const router = useRouter();
    const [username, setUsername] = useRecoilState(usernameState);
    const [email, setEmail] = useRecoilState(emailState);

    const handleSignup = () => {
        // Perform any necessary validation here

        // Redirect to the index page with query parameters
        router.push(`/home?username=${username}&email=${email}`);
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Signup Page</h1>
            <input
                className={styles.input}
                type="text"
                placeholder="GitHub Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className={styles.input}
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSignup} className={styles.button}>
                Signup
            </button>
        </main>
    );
};

export default Signup;



// 上のでエラー出たら
// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from '../styles/styles.module.css'

// const Signup = () => {
//     const router = useRouter();
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');

//     const handleSignup = () => {
//         // Perform any necessary validation here

//         // Redirect to the index page with query parameters
//         router.push(`/home?username=${username}&email=${email}`);
//     };

//     return (
//         <main className={styles.main}>
//             <h1 className={styles.h1}>Signup Page</h1>
//             <input className={styles.input}
//                 type="text"
//                 placeholder="GitHub Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <input className={styles.input}
//                 type="email"
//                 placeholder="Email Address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <button onClick={handleSignup} className={styles.button}>Signup</button>
//         </main>
//     );
// };

// export default Signup;

// import React from 'react';
// import { atom, useRecoilState, RecoilRoot } from 'recoil';


// const emailState = atom({
//   key: 'emailState', // unique ID (with respect to other atoms/selectors)
//   default: '', // default value (aka initial value)
// });

// function Signup() {
//   const [email, setEmail] = useRecoilState(emailState);

//   const handleSignup = () => {
//     // Signup logic here
//   };

//   return (
//     <main>
//       <input
//         type="email"
//         placeholder="Email Address"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleSignup} >Signup</button>
//     </main>
//   );
// };

// function App() {
//   return (
//     <RecoilRoot>
//       <Signup />
//     </RecoilRoot>
//   );
// }

// export default App;