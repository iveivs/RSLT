import classes from './PageHome.module.css'

function PageHome() {
    return(
        <>
            <header className={classes.header}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>Pizza delivery</h1>
                        </div>
                        <div className="col-6">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </header>

            <section className={classes.banner}>
                <div className="container indent"></div>
            </section>

            <section className={classes.products}>
                <div className="container indent"></div>
            </section>

            <section className={classes.reviews}>
                <div className="container indent"></div>
            </section>

            <footer className={classes.footer}>
                <div className="container indent"></div>
            </footer>
        </>
    )
}

export default PageHome