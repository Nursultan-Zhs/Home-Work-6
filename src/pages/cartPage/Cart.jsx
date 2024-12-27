import '../../widgets/cart/cart.css'
import reactCart from '../../imgs/cart/image8.jpg'
import reactCart2 from '../../imgs/cart/Vector.jpg'


export const Cart = () => {
    return (
        <div className='cartCont'>
            <h1 className='TTT'>Your Cart</h1>
            <div className='mainCart'>
                <div className='WWW'>  
                    <img className='imgCart' src={reactCart} alt="" />
                    <h3>Gradient Graphic T-shirt</h3>
                    <p>Size: Large</p>
                    <p className='AWA'>Color: White</p>
                    <h1 className='III'>$145</h1>
                    <img className='imgCart2' src={reactCart2} alt="" />
                    <div className='One'>-  1  +</div> 
                    <hr />
                </div>
            </div>
        </div>
    );
}