import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../../Store/slice/cart";

const CartDetail = () => {
  const dispatch = useDispatch();
  const getCart = useSelector((state) => state.carts.cart);

  return (
    <>
      <div className="cart-detail">
        <p className="mb-0 border-bottom">Cart - {getCart.length} Items</p>
        {getCart?.map((item, index) => {
          return (
            <>
              <div
                className="border-bottom d-flex align-items-center justify-content-between"
                key={index}
              >
                <div className="image">
                  <img
                    src={`https://websitebook-api.vercel.app${item.image}`}
                    alt=""
                  />
                </div>

                <div className="name">
                  <ul>
                    <li>{item.name}</li>
                    <li>
                      <span>Author:</span> {item.author}
                    </li>
                    <li>
                      <span>Categories:</span> {item.author}
                    </li>
                  </ul>
                </div>

                <div className="input-quality">
                  <button
                    onClick={() => dispatch(decreaseItemQuantity(item.id))}
                  >
                    -
                  </button>
                  <input type="number" value={item.quantity} min="0" />
                  <button
                    onClick={() => dispatch(increaseItemQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                <div className="price">
                  <p className="mb-0">{item.price}$</p>
                </div>

                <div
                  className="delete"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <button>
                    <MdOutlineDelete />
                  </button>
                </div>
              </div>
            </>
          );
        })}
        {getCart?.length === 0 && (
          <div className="empty-cart-message">No products in your cart.</div>
        )}
      </div>
    </>
  );
};

export default CartDetail;
