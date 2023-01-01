import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';
import { actionTypes } from '../state/ProductState/actionTypes';

const Cart = () => {
  const { dispatch } = useProducts();
  const {
    state: { cart, loading, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && cart.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!loading && !error && cart.length) {
    content = cart.map((product) => (
      <div>
        <ProductCard key={product.id} product={product} />
        <button
          className="bg-indigo-500 rounded-full py-1  ml-2 px-12 flex-1 text-white text-bold"
          onClick={() =>
            dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product })
          }
        >
          Remove from list
        </button>
      </div>
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Cart;
