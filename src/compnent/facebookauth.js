
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import guitar from '../ui/guitar.png'
import Mail from '../compnent/emailauth';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),

  },
}));

export default function SimplePopover() {
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
        Login
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
        <div className="pop">
        <img src={guitar} height="100" width="150" />
        <h6 className="heading">Help make Olx safer place to Buy and Sell</h6>
        <Typography className="typography f"><FacebookIcon/>Login with Facebook.</Typography>
        
        <Typography className="typography f flex aic "><EmailIcon/><Mail/></Typography>
        <p>We wont share your personal information with anyone</p>
    
        <p>if you continue,you are accepting Term and Conditions and Privacy Policy of OLX.</p>

        </div>
        
      </Popover>
    </div>
  );
}

