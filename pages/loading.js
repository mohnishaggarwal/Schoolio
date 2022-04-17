import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

const Loading = () => {
    const [msg, setMsg] = useState("Looking for 🍪s...");
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            setMsg("🍪s found, logging you in...");
            setTimeout(() => {
                router.push({pathname: "home", query: {login: "success"}})
            }, 1500)
        }, 2500)
    }, [])
    return (
        <div className={styles.container}>
            <div className="flex flex-col justify-center items-center py-32">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
                <p className="inconsolata">{msg}</p>
            </div>
        </div>
    )
}

export default Loading;
