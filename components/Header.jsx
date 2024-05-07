import Link from "next/link";
import styles from '../styles/styles.module.css';
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { useRouter } from "next/router";
import { userState } from "../pages/atom";

export function Header (){
    const router = useRouter();
    const { user } = router.query;

    const [userData, setUserDate] = useRecoilState(userState);

    useEffect(() => {
        if (user) {
          axios.get(`https://api.github.com/users/${user}`)
            .then((res) => { setUserData(res.data) })
            .catch((error) => console.error(error));
        }
      }, [user]);
    
    // useEffect(() => {
    //     axios.get("https://api.github.com/search/users?q=masudayuuma")
    //       .then((res) => { setUser(res.data.items[0]) })
    //       .catch((error) => console.error(error));
    //   }, []);
    
      
    return(
        <header>
            <div className={styles.header}>
                <Link href="/home">
                        <p>&larr; 戻る</p>
                </Link>
                {userData && userData.avatar_url && (
                    <Link href="/myacount/[user].js" >
                        <img src={userData.avatar_url} alt="アイコン" className={styles.headerIcon}/>
                    </Link>
                )}
            </div>
        </header>
    );
}

// import Link from "next/link";
// import styles from '../styles/styles.module.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export function Header (){
//     const [user, setUser] = useState(null);
    
//     useEffect(() => {
//         axios.get("https://api.github.com/search/users?q=masudayuuma")
//           .then((res) => { setUser(res.data.items[0]) })
//           .catch((error) => console.error(error));
//       }, []);
    
      
//     return(
//         <header>
//             <div className={styles.header}>
//                 <Link href="/home">
//                         <p>&larr; 戻る</p>
//                 </Link>
//                 {user && user.avatar_url && (
//                     <Link href="/user-search/acount" >
//                         <img src={user.avatar_url} alt="アイコン" className={styles.headerIcon}/>
//                     </Link>
//                 )}
//             </div>
//         </header>
//     );
// }
