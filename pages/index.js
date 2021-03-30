import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Arvo"/>
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Montserrat"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.split}>
                    <div className={styles.column}>
                        <h1>
                            <strong>Hi! I’m a full-stack developer based in Columbia, MO.</strong>
                        </h1>
                        <p>
                            Focus in Shopify, WordPress, React/Angular web-apps, and cross-platform mobile applications. With almost a decade of experience I can bring your project to life.
                        </p>
                    </div>
                    <div className={styles.column}>
                        <img width={"100%"} src={"https://www.centerforempathy.org/wp-content/uploads/2019/11/placeholder.png"}/>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                </a>
            </footer>
        </div>
    )
}
