import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='default-pagination lab-ul'>

            {/* Previous */}
            <li>
                <button
                    onClick={() => activePage > 1 && paginate(activePage - 1)}
                    className='bg-transparent'
                >
                    <i className='icofont-rounded-left'></i>
                </button>
            </li>

            {pageNumbers.map((number) => (
                <li
                    key={number}
                    className={`page-item ${number === activePage ? "bg-warning" : ""}`}
                >
                    <button
                        onClick={() => paginate(number)}
                        className='bg-transparent'
                    >
                        {number}
                    </button>
                </li>
            ))}

            {/* Next */}
            <li>
                <button
                    onClick={() =>
                        activePage < pageNumbers.length && paginate(activePage + 1)
                    }
                    className='bg-transparent'
                >
                    <i className='icofont-rounded-right'></i>
                </button>
            </li>

        </ul>
    );
};

export default Pagination;
