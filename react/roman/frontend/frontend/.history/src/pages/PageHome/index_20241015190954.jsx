import styles from "./PageHome.module.css";
function PageHome() {
    return (
        <>
            <header className={styles.header}>
                <div className="container"></div>
            </header>

            <header className={styles.banner}>
                <div className="container in"></div>
            </header>
            <header className={styles.products}>
                <div className="container"></div>
            </header>
            <header className={styles.reviews}>
                <div className="container"></div>
            </header>
            <footer className={styles.footer}>
                <div className="container"></div>
            </footer>
        </>
    );
}

export default PageHome;
