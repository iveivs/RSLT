import styles from './PageProducts.module.css'

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
                    products.map( product => {
                        return (
                            <div className="col-3">
                                <h3>{product.name}</h3>
                                <p>{product.p}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PageProducts