import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Container} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function MainPageSearchBar() {
    const [checkInDate, setCheckInDate] = React.useState(null);
    const [checkOutDate, setCheckOutDate] = React.useState(null);
    const [size, setSize] = React.useState(null);
    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                border: 1,
                borderColor: 'grey.500',
                borderRadius: 5, mt: 8, mb: 5, p: 5,
                backgroundColor: 'grey.50',
            }}
        >
            <Grid container spacing={1}>
                <Grid md={3.5}>
                    <TextField
                        city_search
                        id="filled-required"
                        label="City Search"
                        fullWidth
                    />
                </Grid>

                <Grid md={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Bed Size</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            label="size"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Small</MenuItem>
                            <MenuItem value={20}>Medium</MenuItem>
                            <MenuItem value={30}>Large</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid md>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Check-in"
                            value={checkInDate}
                            onChange={(newValue) => {
                                setCheckInDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid md>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Check-out"
                            value={checkOutDate}
                            onChange={(newValue) => {
                                setCheckOutDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid md>
                    <Stack spacing={1} direction="row-reverse">
                        <Button variant="contained" endIcon={<KeyboardArrowRightIcon/>}>SEARCH</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}
