import { Link } from "react-router-dom"
export const NotFound = () => {
    return (
        <div>
            <p>Страница не найденa</p>
            <Link to="/">
                <button className="">
                На главную
                </button>
            </Link>
        </div>
    )
}