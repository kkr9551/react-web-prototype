import React from "react";
import Footer from "../Footer";

const Main = () => {
    return (
        <>
        <div className="header">
            <div className="row1">
                <h1>Banned Books Museum</h1>
            </div>
            
            <div className="row2">
                <h2>Start Your Trip</h2> 
                
                <img src="./images/allBooks.JPG" alt="" />
            </div>
        </div>
        <div>
            <Footer />
        </div> 
        </>
    );
}

export default Main;