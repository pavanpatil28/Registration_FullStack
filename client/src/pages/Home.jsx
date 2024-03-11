const Home = () => {
    return(
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>
                            We are the World Best IT Company
                        </p>
                        <h1>Welcome to Thapa Technical</h1>
                        <p>
                            Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At Thapa Technical, we specialize in providing innovative IT services and solutions tailored to meet your unique needs.
                        </p>

                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="primary-btn">connect now</button>
                            </a>
                            <a href="/services">
                                <button className="secondary-btn">learn more</button>
                            </a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src="/Images/img1.png" alt="" width={400} height={500}/>
                    </div>
                </div>  
            </section>

            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>registered companies</p>
                    </div>
                    <div className="div1">
                        <h2>100,00+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>500+</h2>
                        <p>Well known Developers</p>
                    </div>
                    <div id="last-child" className="div1">
                        <h2>24/7</h2>
                        <p>Service</p>
                    </div>
                </div>
            </section>

            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-image">
                            <img src="/Images/img1.png" alt="" width={400} height={500}/>
                        </div>

                    <div className="hero-content">
                        <p>
                            We are here to help you
                        </p>
                        <h1>Get Started Today</h1>
                        <p>
                            Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let's discuss how Thapa Technical can help your business thrive in the digital age. 
                        </p>

                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="primary-btn">connect now</button>
                            </a>
                            <a href="/services">
                                <button className="secondary-btn">learn more</button>
                            </a>
                        </div>
                    </div>
                </div>  
            </section>

        </main>

    )
}

export default Home