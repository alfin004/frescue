import React from 'react';

const Homescreen = () => {
    return (
        <section class="home-search-full pt-0">
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-12">
                    <div class="slider-animate">
                        <div>
                            <div class="home-contain rounded-0 p-0">
                                <img src="../assets/images/vegetable/bg-img.jpg"
                                    class="img-fluid bg-img blur-up lazyload bg-top" alt=""></img>
                                <div class="home-detail p-center text-center  position-top">
                                    <div>
                                        <div class="content">
                                            <h1>Let's work together to combat food waste.</h1>
                                            <h3>Use the Frescue app now to discover shops and restaurants in your area and rescue Surprise Bags of surplus food at a great price, preventing it from going to waste.</h3>
                                            <div class="search-box">
                                                <input type="search" class="form-control"
                                                    placeholder="I'm searching for..."></input>
                                                <i data-feather="search"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Homescreen;
