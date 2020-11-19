


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

import guitar from '../ui/guitar.png';
import fire from '../config/fire';
import { render } from '@testing-library/react';




// class App extends React.Component{
//   constructor(prosp){
//     super(prosp);
//       this.state={
//         user:{

//         }
      
//     } 
//   }
  
//   authListener(){
//     fire.auth().onAuthStateChanged((user)=>{
//       if (user){
//         this.setState({})
//       }
//       else{
//         this.setState({user:null})
//       }

//     })

//   }
//   render(){
//     return(
//       <div className="App">
//         {this.state.user ? (<Home/>):(<Login/>)}
//       </div>
//     );
//   }
// }

  const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),

    },
  }));
  function Mail (){
  
     
    
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
        Login With Email
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
        <div className="p1">
          

        
          <Typography>Login with Email And Password</Typography>
            <form>
                <input id=" email"type="email"className="ab" placeholder="Email"/>
                 
                <input id="password" type="password"className="ab" placeholder="Password" />
               
                <button  className="sub" type="submit">Login</button>
                <button className="sub" type="submit">Sign Up</button>
              
            </form>
            <p>We wont share your personal information with anyone</p>
        
          

        </div>
        
      </Popover>
    </div>
  );}
    





export default Mail;
