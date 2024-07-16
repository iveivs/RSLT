// Продолжение кода из урока(prop-types)
import PropTypes from 'prop-types'
import { useState } from 'react'

// import styles from "./App.module.css";

const Product = ({name, price}) => {
  const [] = useState(1)
    return <div>{namr} - {price}</div>
}

Product.PropTypes = {
  name: PropTypes.string,
  price: PropTypes.number
}
