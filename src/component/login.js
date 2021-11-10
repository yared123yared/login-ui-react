import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button , Typography, Link} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 280,
        margin: "20px auto"
    }
    const avatarStyle = { backgroundColor: "#4cc7b9" }
    const btnStyle={margin:'8px 0 8px'}
    const textFieldStyle={margin:'8px '}
    const handleChange = () => {

    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>

                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2> Sign In</h2>
                </Grid>
              
               <TextField style={textFieldStyle} id="standard-basic"variant="standard" label="Username" placeholder="Enter User Name" fullWidth required />
                <TextField style={textFieldStyle} id="standard-basic" variant="standard" label="Password" placeholder="Enter Password " fullWidth required type="password" />
              

                <FormControlLabel
                    label="Remmber me"
                    // align="left"
                    
                    control={
                        <Checkbox
                        name="checked8"
                        color="primary"
                            // checked={checked[0] && checked[1]}
                            // indeterminate={checked[0] !== checked[1]}
                            onChange={
                                handleChange
                            }
                        />
                    }
                />
                <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle}>Sign In</Button>
                <Typography>
                    <Link href="#">
                        Forgot Password?
                    </Link>
                </Typography>
                <Typography> Do you have an account?
                    <Link href="#">
                        Sign Up?
                    </Link>
                </Typography>
            </Paper>
        </Grid>

    );
}

export default Login;