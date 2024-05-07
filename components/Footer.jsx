import styles from '../styles/styles.module.css';
 
export function Footer (){

    // const [user, setUser] = useState(null);
    
    // useEffect(() => {
    //     axios.get("https://api.github.com/search/users?q=masudayuuma")
    //       .then((res) => { setUser(res.data.items[0]) })
    //       .catch((error) => console.error(error));
    //   }, []);

    return(    
        <footer className={styles.footer}>
        <a
          href="https://github.com/masudayuuma"
          target="_blank"
          rel="creater github page"
        >
          Created by masudayuuma
        </a>
        </footer> 

        );
    }