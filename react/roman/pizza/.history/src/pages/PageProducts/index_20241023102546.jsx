import styles from './PageProducts.module.css'
import { isDataArray } from '../../utils/utils'
const products = [
    {id: 1, name: 'Товар 1', description: '', price: 1000},
    {id: 1, name: 'Товар 2', description: '', price: 1000},
    {id: 1, name: 'Товар 3', description: '', price: 1000},
    {id: 1, name: 'Товар 4', description: '', price: 1000},
]

function PageProducts() {
    return(
        <div className='indent container'>
            <h2></h2>
            <div className="row">
                {
                    isDataArray(products) ? (
                        

                }
            </div>
        </div>
    )
}

export default PageProducts