import styles from "./FormFind.module.css";

export const FormFind = ({ findInput, setFindInput }) => {
    const handleChangeFormFind = (e) => {
        setFindInput(e.target.value);
    };
    return (
        <div>
            <input
                className={styles.find_input}
                value={findInput}
                onChange={handleChangeFormFind}
                type="text"
                placeholder="Поиск задачи"
            />
        </div>
    );
};
