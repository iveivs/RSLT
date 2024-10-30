import styles from "./PageHome.module.css";
function PageHome() {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className="header row">
                        <div className="logo col-3">
                            <img src="/images/logoPizza.avif" alt="Logo" className="logo-img"/>
                        </div>
                        <nav className="menu col-3">
                            <h4 className="underline-effect">Home</h4>
                            <h4 className="underline-effect">Catalog</h4>
                            <h4 className="underline-effect">Reviews</h4>
                        </nav>
                        <div className="header_options col-3">
                            <div className="icon-cover">
                                <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                            </div>
                            <div className="icon-cover">
                                <i class="fa fa-user-o" aria-hidden="true"></i>
                            </div>
                            
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
