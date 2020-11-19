import { Link } from 'react-router-dom';
import React from 'react';

function Footer(){
    

    return(
        <React.Fragment>
        <div className="flex footer">
            <div className="block flex flex-col">
                <h2 className="title flex flex-col s16 fontb color">Popular Categories</h2>
                <Link to="/" className="noul noulh font s14 color">Cars</Link>
                <Link to="/" className="noul noulh font s14 color">Flat for rent</Link>
                <Link to="/" className="noul noulh font s14 color">Jobs</Link>
                <Link to="/" className="noul noulh font s14 color">Mobile phones</Link>
                
            </div>

            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">Trending searchs</h2>
                <Link to="/" className="noul noulh font s14 color">Bikes</Link>
                <Link to="/" className="noul noulh font s14 color">Watches</Link>
                <Link to="/" className="noul noulh font s14 color">Books</Link>
                <Link to="/" className="noul noulh font s14 color">Dogs</Link>
                
            </div>

            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">About Us</h2>
                <Link to="/" className="noul noulh font s14 color">About OLX</Link>
                <Link to="/" className="noul noulh font s14 color">OLX Blog</Link>
                <Link to="/" className="noul noulh font s14 color">Contact Us</Link>
                <Link to="/" className="noul noulh font s14 color">OLX for Businesses</Link>
                
            </div>

            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">OLX</h2>
                <Link to="/" className="noul noulh font s14 color">Help</Link>
                <Link to="/" className="noul noulh font s14 color">Sitmap</Link>
                <Link to="/" className="noul noulh font s14 color">Leagal and privacy information</Link>
                
                
            </div>

        </div>
        <div className="footerb flex">
            

            <h2 className="cfff font s13 ">Other countries India-South Africa-Indonesia</h2>
            <h2 className="r cfff font s13 ">Free Classifieds in Pakistan 2016-2020 OLX</h2>

        </div>



        </React.Fragment>
    )

}






export default Footer;