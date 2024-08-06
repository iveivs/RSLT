import { Link } from "react-router-dom"
export const NotFound = () => {
    return (
        <div>
            Страница не найден
            <Link to="/">
                <button>
                На главную
                </button>
            </Link>
        </div>
    )
}