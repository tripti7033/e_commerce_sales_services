import React from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { useStyles } from './Contact.style';

const Contacts = () => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h1" className={classes.title} gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle} paragraph>
        We're here to help! Reach out to us for any inquiries or support.
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className={classes.formPaper}>
            <Typography variant="h5" gutterBottom>
              Send Us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                required
              />
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                margin="normal"
                type="tel"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: 16 }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className={classes.contactPaper}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Box className={classes.contactInfo}>
              <Email className={classes.icon} />
              <Typography variant="body1">support@salesandservices.com</Typography>
            </Box>
            <Box className={classes.contactInfo}>
              <Phone className={classes.icon} />
              <Typography variant="body1">+1 (123) 456-7890</Typography>
            </Box>
            <Box className={classes.contactInfo}>
              <LocationOn className={classes.icon} />
              <Typography variant="body1">
                123 Sales Street, Service City, SC 12345
              </Typography>
            </Box>

            {/* Embedded Map */}
            <Box className={classes.mapContainer}>
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d5a5c5f6b5c4!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625070000000!5m2!1sen!2sus"
                className={classes.map}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;