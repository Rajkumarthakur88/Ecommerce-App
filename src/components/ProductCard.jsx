import React from 'react'
import { useDispatch } from 'react-redux'
import { addTocart } from '../store/CartSlice'

function ProductCard({ product }) {

    const dispatch = useDispatch()

    const { title, id, price, image, rating } = product

    const handleCart = () => {
        dispatch(addTocart(product))
    }

    return (

        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{fontSize:"15px"}} >{title}</h5>
                <p className="card-text text-warning">{rating.rate}</p>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={() => handleCart()}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ProductCard