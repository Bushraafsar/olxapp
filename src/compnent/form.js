
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

export default function FormPopover() {
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
      <a aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>+ Sell</a>
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
        <div className="pop2">
        <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Add Title*</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="add title" />
        </div>
        
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Add Description*</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="add description" rows={3} defaultValue={""} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1 b">SET PRICE</label>
          <input type="text" className="form-control" id="exampleFormControlInput1"  />
        </div>
        
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1 b">ADD PHOTO</label>
         
        </div>
        <center><button className="form-submit" type="submit">Submit</button></center>
      </form>
        </div>
        
      </Popover>
    </div>
  );
}

