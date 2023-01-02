
import { useSelector } from 'react-redux'
import Cart from '../components/Cart'
import TotalCartItems from '../components/TotalCartItems'

function CartsContainer() {
    const cart = useSelector(state => state.cart)

    if (cart.length === 0) {
        return (
            <div className='container empty-cart'>
                <h1 className='text-center my-5 '>No Items in Your Cart</h1>
            </div>
        )
    }

    return (
        <>
            <TotalCartItems />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {

                            cart.map(product => <Cart product={product} />)

                        }

                    </div>
                </div>

            </section >
        </>
    )
}

export default CartsContainer