import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';
import Search from './Search'
import SignUp  from './Sinup';
import './Signin.css'
import { GoogleLogin, GoogleLogout } from "react-google-login";
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
const clintid="543936503413-ru08a4ukg3tmsljv4r2c2nhmo0h8sah4.apps.googleusercontent.com"
const theme = createTheme();

export default function SignIn() {
  const [sinin,setSignIn]=useState(true)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [showloginbutton, setshowloginbutton] = useState(true);
  const [showlogoutbutton, setshowlogutbutton] = useState(false);
  const [pass,setpass]=useState(false);
  const [email,setemail]=useState(false);
  const[searchmenu,setSearchMenu]=useState(false);
  const gotoSearch=()=>{
    if(pass===true && email===true){
      setSearchMenu(true)
    }
  }
  const responseGoogle = (response) => {
    console.log(response);
    setSearchMenu(true)
    setshowloginbutton(false);
    setshowlogutbutton(true);
  };
  const logout = (response) => {
    setshowlogutbutton(false);
    setshowloginbutton(true);
    console.log(response);
  };
const responseGoogle2=(response)=>{
  console.log(response)
}
  return (<>{searchmenu?<Search/>:
    <ThemeProvider theme={theme}>
      {sinin?
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.pinimg.com/originals/52/c7/9d/52c79d5bada3ad8ef095ec6dd019ddb8.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                onChange={(e)=>{
                  const email=e.target.value;
                  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                  if(email.match(regexEmail)){
                  setemail(true)
                  }
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
              onChange={(e)=>{
                const pass=e.target.value;
                if(pass!==undefined && pass.length >=8){
                setpass(true)
                }
              }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={gotoSearch}
              >
                Sign In
              </Button>
              {showloginbutton ? (
                <GoogleLogin
                className="search_bar1"
                // style={{width:"100%"}}
                  clientId={clintid}
                  buttonText="Login with google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle2}
                  cookiePolicy={"single_host_origin"}
                />
              ) : null}

              {showlogoutbutton ? (
                <GoogleLogout
                className="search_bar2"
                  clientId={clintid}
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                />
              ) : null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>{
                  setSignIn(false);
                }}
              >
                Sign UP
              </Button>
              
            
            </Box>
          </Box>
        </Grid>
      </Grid> :<SignUp/>}
    </ThemeProvider>
   }
    </>
  );
}
