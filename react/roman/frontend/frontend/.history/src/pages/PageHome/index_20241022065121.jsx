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
                            <ul className="menu_items">
                                <li className="menu_item">
                                    <a className="underline-effect">Home</a>
                                </li>
                                <li className="menu_item">
                                    <a className="underline-effect">Catalog</a>
                                </li>
                                <li className="menu_item">
                                    <h4 className="underline-effect">Reviews</h4>
                                </li>
                            </ul>
                            
                            
                            
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
