import styles from './PageHome.module.css'
function PageHome() {
    return (
        <>
            <header className={styles.header}>
                <div className="container"></div>
            </header>
            <header className={styles.banner}></header>
            <header className={styles.products}></header>
            <header className={styles.reviews}></header>
            <footer className={styles.footer}></footer>
        </>
    )
}

export default PageHome