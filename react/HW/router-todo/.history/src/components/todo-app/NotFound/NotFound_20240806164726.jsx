import { Link } from "react-router-dom"
export const NotFound = () => {
    return (
        <div>
            Страница не найденa
            <Link to="/">
                <button>
                На главную
                </button>
            </Link>
        </div>
    )
}