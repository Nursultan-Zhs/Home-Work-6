import axios from 'axios';
import { useEffect, useState } from 'react';
import { Casual, Filter } from '../../widgets/categoryPage';
import '../../app.css';

export const Category = () => {
    const [product, setProduct] = useState();
    const [filterData, setFilterData] = useState([]);
    const [priceRange, setPrice] = useState([0, 500]);
    const [select, setSelect] = useState('all');

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        axios('https://api.escuelajs.co/api/v1/products')
        .then(({data}) => {
            setProduct(data);
            setFilterData(data);
        })
    }, []);
    
    const filterProducts = () => {
        if(select === 'all'){
            const filtered = product.filter((product) => product.price >= priceRange[0] 
            && product.price <= priceRange[1]);
            setFilterData(filtered);
            setTotalProducts(filtered.length);
        }else{
            const filtered = product.filter((product) => product.price >= priceRange[0] 
            && product.price <= priceRange[1] && product.category.name === select);
            setFilterData(filtered);
            setTotalProducts(filtered.length);
        }

        setCurrentPage(1); 
    }
    
    return (
        <div className='container flexCont'>
            <Filter priceRange={priceRange} setPrice={setPrice} 
            setSelect={setSelect} filterProducts={filterProducts} select={select} />
            <Casual product={filterData} currentPage={currentPage} 
            productsPerPage={productsPerPage} totalProducts={totalProducts} setCurrentPage={setCurrentPage} />
        </div>
    );
}
