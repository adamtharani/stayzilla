import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Copyright from '../components/Copyright';
import axios from "axios";
import {useHistory} from "react-router-dom";
import {Alert} from "@mui/material";
import {useState} from "react";

export default function Register() {
    return (
        <React.Fragment>
            <ResponsiveAppBar/>
            <RegisterBody/>
        </React.Fragment>
    );
}

function RegisterTOS(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/TOS">
                Terms of Service
            </Link>{' '}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

function RegisterBody() {
    const [showError, setShowError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const Error = () => <Alert severity="error">{errorText}</Alert>;
    const history = useHistory();
    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        var object = {};
        data.forEach((value, key) => object[key] = value);
        await axios.post("http://localhost:3006/register", object, {})
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem("token", res.data.token);
                    axios.get("http://localhost:3006/auth/is-verify", {headers: {token: localStorage.token}})
                        .then((res) => {
                            if (res.status === 200) {
                                history.push("/");
                            } else {
                                setShowError(true);
                                setErrorText("Something went wrong while authenticating your account. Please try again later.");
                            }
                        });
                }
            })
            .catch((err) => {
                setShowError(true);
                setErrorText(err.response.data);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSignUp} noValidate sx={{mt: 1}}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="first_name"
                            label="First Name"
                            name="first_name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="last_name"
                            label="Last Name"
                            name="last_name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
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
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirm-password"
                            label="Confirm Password"
                            type="password"
                            id="confirm-password"
                            autoComplete="confirm-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            required
                            label="Accept our TOS"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Create Account
                        </Button>
                        {showError ? <Error /> : null}
                    </Box>
                </Box>
                <RegisterTOS sx={{mt: 1, mb: 1}}/>
                <Copyright sx={{mt: 1, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}