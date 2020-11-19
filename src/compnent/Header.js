import React from 'react';
import logo from '../ui/olxlogo2.png'
import phoneapp from '../ui/phoneapp.png'
import apple from '../ui/apple.png'
import google from '../ui/google.png'
import banner from '../ui/banner1.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CountrySelect from '../compnent/countrysel';
import Facebook from '../compnent/facebookauth';
import SecondPopover from '../compnent/categories';
import FormPopover from '../compnent/form';
import SimplePopover from '../compnent/facebookauth';
import  Maincard from '../compnent/AdItem';

function Header(){

    const nav = [
        {ID :1 , label : "Mobile Phones"},
        {ID :2 , label : "Cars"},
        {ID :3 , label : "Motorcycles"},
        {ID :4 , label : "Houses"},
        {ID :5 , label : "TV-Video-Audio"},
        {ID :6 , label : "Tablets"},
        {ID :1 , label : "Land & Plots"},
    ]

    return(
        <React.Fragment>
        <div className="header fixed aic flex">
            <div className="headerlogo flex">
                <img src={logo} alt="logo" heigth="100px" width="100px" />  
            </div>
            <CountrySelect/>
            
            <div className="search rel aic flex">
                <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="query s15 font"/>
                <button className="icon-search go"><SearchIcon/></button>

            </div>

            <div className="actions flex aic">
                <Link to="/account/singin "className="fontb color s15 noulh noul">
                    <SimplePopover/></Link>
                <button className="sell">
                    <div className="icon-plus"/>
                    <FormPopover/>
                    

                </button>
            </div>
            
        </div>

        <div className="hnav fixed aic flex">
           <button className="view-cates flex color aic">
               <h2 className="s18 font">All categories</h2>
                <SecondPopover/>
           </button>
        {
            nav.map(item =>{
                return(
                <Link to={"/browser/" + item.ID} className="apple noul oulh color font bl s15">{item.label}</Link>
                )
            })
        }
            
        </div>
    
    
    
        
    <div className="banner">
        <img src={banner} alt="banner"  width="100%" />
    </div>

    <div className="history">
        < Maincard/>
        
    </div>

    <div>
        <button className="load-more fontb anims c333 ">Load more</button>
    </div>
    <div className="app-ribbon flex">
        <div className="img">
            < img className="bl" src={phoneapp}/>
        </div> 

        <div className="meta aic ">    
            <h2 className="fontb s24 color title try">TRY THE OLX APP</h2>
            
            <h2 className="font s16 clor slogan">Buy, Sell and find about anything using the app on your mobile</h2>    
        </div>   
        <div className="link">
            <h2 className="title fontb s24 color">Get Your App Today</h2>
            <div className="flex as">
                <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home" className="noul bl"><img src={apple}/></a>     
                <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home" className="noul bl"><img src={google}/></a>
            </div>       
    </div>    
    </div> 


   
        </React.Fragment>
    )
        
}


export default Header;