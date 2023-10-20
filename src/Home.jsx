import React from 'react'
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';



const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container p-0">
                <div className="row">
                    <div className="col-12">
                        <Jumbotron />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                        <Card />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;