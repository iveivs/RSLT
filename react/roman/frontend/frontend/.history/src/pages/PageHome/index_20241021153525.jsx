import styles from "./PageHome.module.css";
function PageHome() {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h1>Pizza</h1>
                        </div>
                        <div className="col-3">
                            <h1>Pizza</h1>
                        </div>
                        <div className="col-3">
                            <h1>Pizza</h1>
                        </div>
                        
                    </div>
                </div>
            </header>

            <header className={styles.banner}>
                <div className="container indent"></div>
            </header>
            <header className={styles.products}>
                <div className="container indent"></div>
            </header>
            <header className={styles.reviews}>
                <div className="container indent"></div>
            </header>
            <footer className={styles.footer}>
                <div className="container indent"></div>
            </footer>
        </>
    );
}

export default PageHome;
