import './casual.css';
import {Card} from '../../../entities'
import {Link} from 'react-router-dom';

export const Casual = ({product, currentPage, productsPerPage, setCurrentPage, totalProducts}) => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

    const nextPage = () => {
        if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
            setCurrentPage((prevPage) => prevPage + 1);
        }        
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };
    return (
        <div className="casualBlock">
            <h1>Casual</h1>  
            <div className="casualCont">
                {
                    currentProducts && 
                    currentProducts.map((item) => (
                        <div key={item.id}>
                            <Link to={`/detail/${item.id}`}><Card img={item.category.image} title={item.title} rate={item?.rating?.rate} price={item.price} /></Link>
                        </div>
                    ))
                }
            </div>

            <div className="pagination">
                <div className='btnPrevious'>
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Previous
                    </button>
                </div>
                <div>
                    <span>Page {currentPage}</span>
                </div>
                <div className='btnNext'>
                    <button onClick={nextPage} disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}>
                        Next
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            
        </div>
    );
}

