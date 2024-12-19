import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { gotoCheckOut } from "../../Store/slice/cart";
import { useEffect } from "react";

const CartCheckout = () => {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.carts.isCheckOut);
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.carts
  );

  return (
    <>
      <div className="cart-checkout">
        <p className="mb-0 border-bottom">Summary</p>
        <ul className="mb-0 border-bottom top">
          <li className="d-flex justify-content-between">
            <span>{`Product(${totalQuantity})`}</span>
            <span>{totalPrice}$</span>
          </li>
          <li className="d-flex justify-content-between">
            <span>Shipping</span>
            <span>Gratits</span>
          </li>
        </ul>
        <ul className="mb-0 bottom">
          <li className="d-flex justify-content-between">
            <span>Total (including VAT)</span>
            <span>{totalPrice}$</span>
          </li>
        </ul>
        <div className="btn-checkout">
          {checkout ? (
            <p className="mb-0">
              <Link>
                <FaArrowLeftLong />
                Back To Shopping
              </Link>
            </p>
          ) : (
            <>
              <button
                type="submit"
                onClick={() => dispatch(gotoCheckOut(true))}
              >
                GO TO CHECKOUT
              </button>
              <p className="mb-0" style={{ padding: "4px 0" }}>
                or
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartCheckout;
