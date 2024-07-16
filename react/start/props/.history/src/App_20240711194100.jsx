// // Продолжение кода из урока(prop-types)
// import PropTypes from 'prop-types'
// import { useState } from 'react'

// const Product = ({name, price}) => {
//   const [amount, setAmount] = useState(1)
//     return <>
//       <div>{namr} - {price}</div>
//       <div>Количество: {amount}</div>
//     </>
// }

// Product.PropTypes = {
//   name: PropTypes.string,
//   price: PropTypes.number
// }
import { useState } from "react";
import styles from "./App.module.css";

const Counter = ({ value, setValue }) => {
    return (
        <>
            <div>{value} <Данные из каунтера</div>
            <button onClick={() => setValue(value + 1)}>+ 1</button>
        </>
    );
};

const App = () => {
    const { value, setValue } = useState(0);

    return (
            <div className={styles.app}>
                <label>Счётчик: </label>
                <Counter value={value} setValue={setValue} />
            </div>
    );
};

export default App;
