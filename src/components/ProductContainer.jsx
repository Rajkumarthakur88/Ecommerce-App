import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import ProductCard from './ProductCard'

function ProductContainer() {

    const { products, isLoading, isError, isSuccess } = useSelector(state => state.product)
    const dispatch = useDispatch()
    // const [products, setProducts] = useState("")

    useEffect(() => {

        // const getData = async () => {
        //     const response = await fetch(`https://fakestoreapi.com/products`)
        //     const data = await response.json()

        //     setProducts(data)
        // }
        // getData()

        dispatch(fetchProducts())

    }, [])

    if (isLoading) {
        return <h1 className='text-center my-5'> Loading...</h1>
    }
    
    if (isError) {
        return <h1 className='text-center my-5'> Something Went Wrong..</h1>
    }

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {

                        products.map((product) => <ProductCard product={product} />)
                    }

                </div>
            </div>

        </section >
    )
}

export default ProductContainer