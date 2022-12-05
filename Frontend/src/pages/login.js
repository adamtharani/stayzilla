import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Copyright from '../components/Copyright';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {Alert} from "@mui/material";
import {useState} from "react";

export default function Login() {
    return (
        <React.Fragment>
            <ResponsiveAppBar/>
            <LoginBody/>
        </React.Fragment>
    );
}

const theme = createTheme();

function LoginBody() {
    const [showError, setShowError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const Error = () => <Alert severity="error">{errorText}</Alert>;
    const history = useHistory();
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        var object = {};
        data.forEach((value, key) => object[key] = value);
        await axios.post("http://localhost:3006/login", object, {})
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem("token", res.data.token);
                    history.push("/");
                } else {
                    <Alert severity="error">This is an error alert — check it out!</Alert>
                }
            })
            .catch((err) => {
                console.log(err.response.data);
                setShowError(true);
                setErrorText(err.response.data);
            });
    }

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
                    <Box component="form" onSubmit={handleLogin} noValidate sx={{mt: 1}}> <TextField
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        {showError ? <Error /> : null}
                        <Grid container>
                            <Grid item xs>
                                <Link href="forgot/" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="../register/" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}