import React from 'react';
import IndexPage from './IndexPage';

function Pagination(props) {

    return (
        <nav aria-label="Page navigation example" className="pt-5">
            <ul className="pagination justify-content-center justify-content-lg-end">
                <li className="page-item">
                    <button className="page-link">
                        <span>«</span>
                    </button>
                </li>
                <IndexPage />
                <li className="page-item">
                    <button className="page-link">
                            <span>»</span>
                    </button>
                </li>
            </ul>
            <div className="pagination justify-content-center justify-content-lg-end">
                <p className="text-small text-muted mb-0">Showing 1–9 of 1 results</p>
            </div>
        </nav>
    );
}

export default Pagination;