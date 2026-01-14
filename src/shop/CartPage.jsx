import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from './CheckOutPage';


const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    // Fetch Cart Items from local Storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setcartItems(storedCartItems);
  }, [])

  // Calculate Total pricess 
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  }

  // Handle option. Handle Quantity Increase functionality --- 
  const handleIncrease = (item) => {
    item.quantity += 1;
    setcartItems([...cartItems]);

    // Update Local Storage Value with new Cart Items ---
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  //  Handle Quantity Decrease functionality --- 
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setcartItems([...cartItems]);

      // Update Local Storage Value with new Cart Items ---
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }

  // Handle Item Remove. Handle Item delete Functionality ---- 
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItems) => cartItems.id !== item.id);

    //Update New Cart -
    setcartItems(updatedCart);

    // Update local Storage - 
    updateLocalStorage(updatedCart);
  }

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Cart SubTotal -- 
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0)

  // Calculate order Total --
  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title={"Shop cart"} curPage={"Cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* Cart Top -- */}
            <div className='cart-top'>
              <table>
                {/* Table Header - */}
                <thead>
                  <tr>
                    <th className='cat-product'>Product</th>
                    <th className='cat-price'>Price</th>
                    <th className='cat-quantity'>Quantity</th>
                    <th className='cat-toprice'>Total</th>
                    <th className='cat-edit'>Edit</th>
                  </tr>
                </thead>
                {/* Table Body - */}
                <tbody>
                  {
                    cartItems.map((item, indx) => (
                      <tr key={indx}>
                        <td className='product-item cat-product'>
                          <div className="p-thumb">
                            <Link to="/shop"><img src={item.img} alt="" /></Link>
                          </div>
                          <div className="p-content">
                            <Link to="/shop">{item.name}</Link>
                          </div>
                        </td>
                        <td className="cat-price">$ {item.price}</td>
                        <td className="cat-quantity">
                          <div className="cart-plus-minus">
                            <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                            <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                            <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                          </div>
                        </td>
                        <td className='cat-toprice'>$ {calculateTotalPrice(item)}</td>
                        <td className="cat edit">
                          <a href="#" onClick={() => handleRemoveItem(item)}>
                            <img src={delImgUrl} alt="" />
                          </a>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            {/*  -----Cart Top Ends------ */}

            {/* Cart Bottom - */}
            <div className="cart-bottom">

              {/* CheckOut Box --- */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input className='cart-page-input-text' type="text" name='coupon' id='coupon' placeholder='Coupon Code ...' />
                  <input type="submit" value={"Apply Coupon"} />
                </form>

                <form className='cart-checkout'>
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckOutPage/>
                  </div>
                </form>
              </div>
              {/* CheckOut Box Ends --- */}

              {/* Shoping Box -- */}
              <div className="shiping-box">
                <div className="row">
                  {/* Left Side of the Shiping Box */}
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select >
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="usa">United State (USA)</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pak">Pakisthan</option>
                          <option value="ind">India</option>
                          <option value="np">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shipping-select">
                        <select >
                          <option value="uk">New York</option>
                          <option value="usa">London</option>
                          <option value="bd">Bhaka</option>
                          <option value="pak">korachi</option>
                          <option value="ind">New Delhi</option>
                          <option value="np">Kathmandu</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input type="text" name='postalCode' id='postalCode' placeholder='Postcode/ZIP *' className='cart-page-input-text'/>
                      <button type='Submit'>Set Address</button>
                    </div>
                  </div>

                  {/* Right Side of the shiping Box */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className='pull-left'>Cart Subtotal</span>
                          <p className='pull-right'>$ {cartSubtotal}</p>
                        </li>
                        <li>
                          <span className='pull-left'>Shipping and Handling</span>
                          <p className='pull-right'>Free shipping</p>
                        </li>
                        <li>
                          <span className='pull-left'>Order Total</span>
                          <p className='pull-right'>$ {orderTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage