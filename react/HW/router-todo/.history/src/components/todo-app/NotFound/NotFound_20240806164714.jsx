import { Link } from "react-router-dom"
export const NotFound = () => {
    return (
        <div>
            Страница не найдена
            b
            <Link to="/">
                <button>
                На главную
                </button>
            </Link>
        </div>
    )
}