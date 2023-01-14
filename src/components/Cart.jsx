import { useDispatch } from "react-redux"
import { removeProduct } from "../store/CartSlice"



function Cart({ product }) {

    const {title, id, price, image, rating } = product

    const dispatch = useDispatch()

    const deleteProduct = (id) => {
        dispatch(removeProduct(id))
    }

    return (
        <div className="col mb-5">
            <div className="card h-100">

                <img className="card-img-top" src={image} alt="img" />

                <div className="card-body p-4">
                    <div className="text-center">

                        <h5 className="fw-bolder">{title}</h5>

                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {rating.rate} &nbsp; <div className="bi-star-fill"></div>
                        </div>

                        <div className="d-flex justify-content-center small text-primary mb-2">
                            Total Rating {rating.count}
                        </div>
                        <div className="d-flex justify-content-center fs-5">
                            ₹{price}
                        </div>
                    </div>

                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><button className="btn btn-outline-danger  mt-auto" onClick={() => deleteProduct(id)}>Remove item</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart