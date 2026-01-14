import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'


// for parabul item layer 
import ProductCards from './ProductCards'
import Pagination from './Pagination'
const showResults = "Showing 01 - 12 of 139 Results"
import Data from "../products.json"
import ShopCategory from './ShopCategory'
import Search from './Search'
import PopularPost from './PopularPost'
import Tags from './Tags'

const Shop = () => {
    const [GridList, setGridList] = useState(true)
    const [products, setproducts] = useState(Data)
    // console.log(products);

    // Pagination. add some logics for Pagination --- 
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // function to change the current page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //   Filter product based on category 
    const [selectedCategory, setSelectedCategory] = useState("All");
    const menuItems = [...new Set(Data.map((Val) => Val.category))];  // ...new is a spread operator

    const filterItem = (curcat) => {
        // For check the new category -
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        })
        setSelectedCategory(curcat);
        setproducts(newItem);
    }


    return (
        <div>
            <PageHeader title="Our Shop Page" curPage="Shop" />

            {/* Shop page / Shop Main Content */}
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Left side of the Main Content */}
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* Layout and title here ---- */}
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p> {showResults} </p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>
                                </div>
                                {/* Product cards --- */}
                                <div>
                                    <ProductCards GridList={GridList} products={currentProduct} />
                                </div>

                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>
                        {/* Right side of the Main Content */}
                        <div className="col-lg-4 col-12">
                            {/* A cementic tag as aside  */}
                            <aside>

                                {/* For search functionality */}
                                <Search products={products} GridList={GridList} />
                                <ShopCategory
                                    filterItem={filterItem}
                                    setItem={setproducts}
                                    menuItems={menuItems}
                                    setProducts={setproducts}
                                    selectedCategory={selectedCategory}
                                />
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Shop