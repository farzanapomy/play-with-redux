import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBrands, toggleStock } from '../../redux/actions/filterAction';
const Home = () => {
  const [products, setProducts] = useState([]);
  const filters = useSelector((state) => state.filter.filters);
  console.log(filters);
  const { brands, stock } = filters;

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const activeClass = 'text-white  bg-indigo-500 border-white';

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrands('amd'))}
          className={`border px-3 py-2 rounded-full font-semibold`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrands('intel'))}
          className={`border px-3 py-2 rounded-full font-semibold`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {products.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
