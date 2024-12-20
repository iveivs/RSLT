import PropTypes from "prop-types";
import { styled } from "styled-components";
import { Button } from "../../../../components";

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
    return (
        <div className={className}>
            <Button disabled={page === 1} onClick={() => setPage(1)}>
                начало{" "}
            </Button>
            <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Предыдущая{" "}
            </Button>
            <div className="current-page">Страница: {page}</div>
            <Button
                disabled={page === lastPage}
                onClick={() => setPage(page + 1)}
            >
                Следущая{" "}
            </Button>
            <Button
                disabled={page === lastPage}
                onClick={() => setPage(lastPage)}
            >
                конец{" "}
            </Button>
        </div>
    );
};

export const Pagination = styled(PaginationContainer)`
    display: flex;
    justify-content: center;
    margin: 0 0 20px;
    padding: 0 35px;

    & button {
        margin: 0 5px;
    }

    & .current-page {
        width: 100%;
        height: 32px;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ccc;
    }
`;

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
};
