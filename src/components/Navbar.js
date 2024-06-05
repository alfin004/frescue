import React from 'react';

const Header = () => {
    return (
        <header className="header-compact header-absolute">
            <div className="top-nav top-header sticky-header">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="navbar-top">
                                <button className="navbar-toggler d-xl-none d-inline navbar-menu-button me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                                    <span className="navbar-toggler-icon">
                                        <i className="fa-solid fa-bars"></i>
                                    </span>
                                </button>
                                <a href="index.html" className="web-logo nav-logo">
                                    <img src="../assets/images/logo/1.png" className="img-fluid blur-up lazyload" alt="" />
                                </a>
                                {/* Add more elements as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
