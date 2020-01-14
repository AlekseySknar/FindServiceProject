import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MultipleSelect from "./MultipleSelect";

import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';

export default function SimpleContainer() {
    var formStyle = {
        border: "4px double black",
        background: "#fc3",
        padding: 10
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Paper elevation={0}>
                    <Typography component="h1" variant="h4" align="center">
                        Form request
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Shipping address
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={1}>
                            <PhoneAndroidRoundedIcon fontSize="large" />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="Phone manufacturer"
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Phone model"
                                fullWidth
                                autoComplete="lname"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <h1>HH</h1>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment>
    );
}