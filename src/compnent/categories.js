
import {Link} from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import EmailIcon from '@material-ui/icons/Email';
import guitar from '../ui/guitar.png'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),

  },
}));

export default function SecondPopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <a aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
          <ExpandMoreIcon/>
      </a>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <div className="pop1">
        
            <h2 className="cats">All Categories</h2>

            <div className="flex footer1">
            <div className="block flex flex-col">
                <h2 className="title flex flex-col s16 fontb color">Animals</h2>
                <Link to="/" className="noul noulh font s12 color">Other Animals</Link>
                <Link to="/" className="noul noulh font s12 color">Pet Food and Accessories</Link>
                <Link to="/" className="noul noulh font s12 color">Horses</Link>
                <Link to="/" className="noul noulh font s12 color">Livestock</Link>
                <Link to="/" className="noul noulh font s12 color">Dogs</Link>
                <Link to="/" className="noul noulh font s12 color">Cats</Link>
                <Link to="/" className="noul noulh font s12 color">Hens and Assel</Link>
                <Link to="/" className="noul noulh font s12 color">Birds</Link>
                <Link to="/" className="noul noulh font s12 color">Fish and Aquariums</Link>
            </div>

            <div className="block flex flex-col">
                <h2 className="title flex flex-col s16 fontb color">Fashion and Beauty</h2>
                <Link to="/" className="noul noulh font s12 color">Other Fashion</Link>
                <Link to="/" className="noul noulh font s12 color">Couture</Link>
                <Link to="/" className="noul noulh font s12 color">Lawn and Pret</Link>
                <Link to="/" className="noul noulh font s12 color">Wedding</Link>
                <Link to="/" className="noul noulh font s12 color">Watches</Link>
                <Link to="/" className="noul noulh font s12 color">Skin and Hair</Link>
                <Link to="/" className="noul noulh font s12 color">Make Up</Link>
                <Link to="/" className="noul noulh font s12 color">Jewellery</Link>
                <Link to="/" className="noul noulh font s12 color">Footwear</Link>
            </div>

            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">Services</h2>
                <Link to="/" className="noul noulh font s12 color">Farm and Fresh Food</Link>
                <Link to="/" className="noul noulh font s12 color">Catering and Resturant</Link>
                <Link to="/" className="noul noulh font s12 color">Home Decor</Link>
                <Link to="/" className="noul noulh font s12 color">Movers and Packers</Link>
                <Link to="/" className="noul noulh font s12 color">Drivers and Taxi</Link>
                <Link to="/" className="noul noulh font s12 color">Event Services</Link>
                <Link to="/" className="noul noulh font s12 color">Web Development</Link>
                <Link to="/" className="noul noulh font s12 color">Maids and Domestic Help</Link>
                <Link to="/" className="noul noulh font s12 color">Health and Beauty</Link>
            </div>

            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">Vchicles</h2>
                <Link to="/" className="noul noulh font s12 color">Tractors and Trailers</Link>
                <Link to="/" className="noul noulh font s12 color">Boats</Link>
                <Link to="/" className="noul noulh font s12 color">Other Vchicles</Link>
                <Link to="/" className="noul noulh font s12 color">Rickshaw and Chingchi</Link>
                <Link to="/" className="noul noulh font s12 color">Cycles</Link>
                <Link to="/" className="noul noulh font s12 color">Busses, Vans and Trucks</Link>
                <Link to="/" className="noul noulh font s12 color">Spare parts</Link>
                <Link to="/" className="noul noulh font s12 color">Car Accessories</Link>
                <Link to="/" className="noul noulh font s12 color">Cars</Link>
                
            </div>

            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">Electronics and Home Appliances</h2>
                <Link to="/" className="noul noulh font s12 color">Washing Machines</Link>
                <Link to="/" className="noul noulh font s12 color">Fridges</Link>
                <Link to="/" className="noul noulh font s12 color">AC and Colors</Link>
                <Link to="/" className="noul noulh font s12 color">Kitchen Appliances</Link>
                <Link to="/" className="noul noulh font s12 color">Generators, UPS</Link>
                <Link to="/" className="noul noulh font s12 color">Other Home Appliances</Link>
                <Link to="/" className="noul noulh font s12 color">Games and Entertainment</Link>
                <Link to="/" className="noul noulh font s12 color">TV-Video-Audio</Link>
                
                
            </div>

        </div>

        <div className="flex footer1">
            <div className="block flex flex-col">
                <h2 className="title flex flex-col s16 fontb color">Furniture and Home Decor</h2>
                <Link to="/" className="noul noulh font s12 color">Office Furniture</Link>
                <Link to="/" className="noul noulh font s12 color">Other Household Items</Link>
                <Link to="/" className="noul noulh font s12 color">Curtains and Blinds</Link>
                <Link to="/" className="noul noulh font s12 color">Rugs and Carpets</Link>
                <Link to="/" className="noul noulh font s12 color">Beds and Wardrobes</Link>
                <Link to="/" className="noul noulh font s12 color">Garden and Outdoor</Link>
                <Link to="/" className="noul noulh font s12 color">Paintings and Mirrors</Link>
                <Link to="/" className="noul noulh font s12 color">Tablets and Dinning </Link>
                <Link to="/" className="noul noulh font s12 color">Home Decorations</Link>
                
            </div>

            <div className="block flex flex-col">
                <h2 className="title flex flex-col s16 fontb color">Jobs</h2>
                <Link to="/" className="noul noulh font s12 color">Other Jobs</Link>
                <Link to="/" className="noul noulh font s12 color">Part-Time</Link>
                <Link to="/" className="noul noulh font s12 color">Medical</Link>
                <Link to="/" className="noul noulh font s12 color">Domestic Staff</Link>
                <Link to="/" className="noul noulh font s12 color">Accounting and Finance</Link>
                <Link to="/" className="noul noulh font s12 color">Sales</Link>
                <Link to="/" className="noul noulh font s12 color">Hotels</Link>
                <Link to="/" className="noul noulh font s12 color">IT and Networking</Link>
                <Link to="/" className="noul noulh font s12 color">Clerical and Administration</Link>
                
            </div>

            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">Business, Industries and Agriculture</h2>
                <Link to="/" className="noul noulh font s12 color">Medical and Pharma</Link>
                <Link to="/" className="noul noulh font s12 color">Ohter Business and Industry</Link>
                <Link to="/" className="noul noulh font s12 color">Agriculture</Link>
                <Link to="/" className="noul noulh font s12 color">Construction</Link>
                <Link to="/" className="noul noulh font s12 color">Other</Link>
                <Link to="/" className="noul noulh font s12 color">Business for sale</Link>
                <Link to="/" className="noul noulh font s12 color">Trade and industrial</Link>
                <Link to="/" className="noul noulh font s12 color">Food and Resturant</Link>
                
            </div>

            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">Kids</h2>
                <Link to="/" className="noul noulh font s12 color">Kids Accessories</Link>
                <Link to="/" className="noul noulh font s12 color">Kids Bikes</Link>
                <Link to="/" className="noul noulh font s12 color">Swings and Slides</Link>
                <Link to="/" className="noul noulh font s12 color">Prams and walkers</Link>
                <Link to="/" className="noul noulh font s12 color">Kids Cloths</Link>
                <Link to="/" className="noul noulh font s12 color">Toys</Link>
                <Link to="/" className="noul noulh font s12 color">Kids Furniture</Link>
                
            </div>

            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">Books,Sports and Hobbies</h2>
                <Link to="/" className="noul noulh font s12 color">Gym and Fitness</Link>
                <Link to="/" className="noul noulh font s12 color">Other Hobbies</Link>
                <Link to="/" className="noul noulh font s12 color">Sports Equipment</Link>
                <Link to="/" className="noul noulh font s12 color">Books and Magzines</Link>
                <Link to="/" className="noul noulh font s12 color">Musical Instruments</Link>
                
                
            </div>

        </div>

        </div>
        
      </Popover>
    </div>
  );
}

