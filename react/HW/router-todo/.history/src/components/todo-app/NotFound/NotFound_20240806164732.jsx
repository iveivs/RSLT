import { Link } from "react-router-dom"
export const NotFound = () => {
    return (
        <div>
            <p>Страница не найденa</p>
            <Link to="/">
                <button>
                На главную
                </button>
            </Link>
        </div>
    )
}