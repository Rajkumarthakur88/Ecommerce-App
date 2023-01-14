import { useSelector } from 'react-redux'

function TotalCartItems() {

    const {cart} = useSelector(state => state.cart)
    const TotalPrice = cart.reduce((p, c) => {
        return p + c.price
    }, 0)
    return (
        <>
            <div className='container mt-5'>
                <div className="card text-center w-100">

                    <div className="card-body total-items-cart-container">
                        <h2 className="card-title  card-heading ">Your Items </h2>
                        <h5 className="card-text  text-danger mt-4"> Total Items <span className=' bg-danger total-items'>{cart.length}</span> </h5>
                        <h5 className="card-text bg-primary text-light p-3 mt-3"> Total Price <span className='text-light'>₹{TotalPrice.toFixed(1)}  </span> </h5>

                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalCartItems