import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className='widget widget-search'>
            <form className='search-wrapper mb-3'>
                <input
                    type="text"
                    name='search'
                    id='search'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type='submit'>
                    <i className='icofont-search-2'></i>
                </button>
            </form>

            {/* showing search result */}
            <div>
                {searchTerm &&
                    filteredProducts.map((product) => (
                        <Link key={product.id} to={`/shop/${product.id}`}>
                            <div className="d-flex gap-3 p-2">
                                <div className="pro-thumb h-25 flex-shrink-0">
                                    <img src={product.img} alt={product.name} width={70} />
                                </div>

                                <div className="product-content">
                                    <p>{product.name}</p>
                                    <h6>${product.price}</h6>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Search;
