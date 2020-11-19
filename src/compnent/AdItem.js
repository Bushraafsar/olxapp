import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from '../ui/img1.jpg';
import img2 from '../ui/img2.jpg';
import img3 from '../ui/img3.jpg';
import img4 from '../ui/img4.jpg';
import img5 from '../ui/img5.jpg';
import img6 from '../ui/img6.jpg';
import img7 from '../ui/img7.jpg';
import img9 from '../ui/img9.jpg';
import img10 from '../ui/img10.jpg';
import img11 from '../ui/img11.jpg';
import img12 from '../ui/img12.jpg';
import img8 from '../ui/img8.jpg';






function Maincard(){
    return(
     <React.Fragment>   
    <div className="main">
        <h2 className="base">Based on your search</h2>
       
        
    <div className="based-search flex">     

        <div className="card " style={{width: '18rem'}}>
            <img src={img1} height="200" width="50" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Rs.60,000</h5>
            <p className="card-text">Mobile in good condition</p>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">Karachi,Pakistan</li>
            </ul>
           
        </div>
    
        <div className="card" style={{width: '18rem'}}>
                <img src={img2} height="200" width="50" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Rs.8,000</h5>
                <p className="card-text">Computer table with chair in wood</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Karachi,Pakistan</li>
                </ul>
            
        </div>
        
        <div className="card" style={{width: '18rem'}}>
                <img src={img3} height="200" width="50" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Rs.40,000</h5>
                <p className="card-text">70cc Bike in ok condition</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Karachi,Pakistan</li>
                </ul>
            
        </div>
        
        <div className="card" style={{width: '18rem'}}>
                <img src={img4} height="200" width="50" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Rs.50,000</h5>
                <p className="card-text">Split AC second hand in working</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Karachi,Pakistan</li>
                </ul>
            
        </div>

    </div>
    
    </div> 
    
    <div className="main2">
        <h2 className="base">Fresh Recommendations</h2>
       
        
    <div className="based-search flex">     

        <div className="card " style={{width: '18rem'}}>
            <img src={img5} height="200" width="50" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Rs.15,000</h5>
            <p className="card-text">Parrot in healthy condition</p>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">Karachi,Pakistan</li>
            </ul>
           
        </div>
    
        <div className="card" style={{width: '18rem'}}>
                <img src={img6} height="200" width="50" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Rs.60,000</h5>
                <p className="card-text">Fridge in good working condition</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Karachi,Pakistan</li>
                </ul>
            
        </div>
        
        <div className="card" style={{width: '18rem'}}>
                <img src={img7} height="200" width="50" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Rs.40,000</h5>
                <p className="card-text">Oven in good condition</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Karachi,Pakistan</li>
                </ul>
            
        </div>
        
        <div className="card" style={{width: '18rem'}}>
                <img src={img8} height="200" width="50" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Rs.30,000</h5>
                <p className="card-text">Washing Machine second hand in working</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Karachi,Pakistan</li>
                </ul>
            
        </div>

    </div>
    
    </div> 
    
    <div className="main3">
        
       
        
    <div className="based-search flex">     

        <div className="card " style={{width: '18rem'}}>
            <img src={img9} height="200" width="50" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Rs.20,000</h5>
            <p className="card-text">Comfortable and stylish Sofa in good condition</p>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">Lahore,Pakistan</li>
            </ul>
           
        </div>
    
        <div className="card" style={{width: '18rem'}}>
                <img src={img10} height="200" width="50" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Rs.75,000</h5>
                <p className="card-text">Cupboard in brown color in reasonable price</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Karachi,Pakistan</li>
                </ul>
            
        </div>
        
        <div className="card" style={{width: '18rem'}}>
                <img src={img11} height="200" width="50" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Rs.70,000</h5>
                <p className="card-text">Rickshaw in ok condition</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Karachi,Pakistan</li>
                </ul>
            
        </div>
        
        <div className="card" style={{width: '18rem'}}>
                <img src={img12} height="200" width="50" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Rs.10,000</h5>
                <p className="card-text">Kids Cycle in good condition</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Karachi,Pakistan</li>
                </ul>
            
        </div>

    </div>
    
    </div> 
    
    
    </React.Fragment>
    );
}
    
         
     

  
export default Maincard;