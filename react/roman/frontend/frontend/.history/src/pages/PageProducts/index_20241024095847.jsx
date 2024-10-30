import styles from './PageProducts.module.css'
import { isDataArray } from '../../utils/utils'
const products = [
    {id: 1, name: 'Товар 1', description: '', price: 1000},
    {id: 2, name: 'Товар 2', description: '', price: 1000},
    {id: 3, name: 'Товар 3', description: '', price: 1000},
    {id: 4, name: 'Товар 4', description: '', price: 1000},
]

function PageProducts() {
    console.log('TEST');
    return(
        <div className='indent container'>
            <h2></h2>
            <div className="row">
                {
                    isDataArray(products) ? (
                        products.map( product => {
                            return (
                                <div key={product.id} className={"col-3 " + styles.product}>
                                    <h3>{product.name}</h3>
                                    <p>{product.price} руб</p>
                                </div>
                            ) 
                        })
                    ) : (
                        <p>Товары не найдены</p>
                    )
                }
            </div>
        </div>
    )
}

export default PageProducts

