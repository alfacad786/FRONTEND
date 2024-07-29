import React, { useState } from "react";
import "./component.css";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Button from "@mui/material";
import { Button, Input, Text } from "@chakra-ui/react";

const Add_Product = () => {
  const navigate = useNavigate();

  // ------------------s3 insert data in bucket-------------

  const validFileType = ["image/jpeg", "image/jpg", "image/png", "image/pdf"];
  const [error, setError] = useState("");
  const [Image, setImage] = useState("");

  // const [formData, setFormData] = useState({
  //   image: "",
  // });
  const [formData, setFormData] = useState(new FormData());

  const handleUpload = (e) => {
    console.log(e);
    const file = e.target.files[0];
    console.log(file);
    console.log(file.path);
    if (!validFileType.find((type) => type === file.type)) {
      setError("File must be jpeg/jpg/png/pdf  format");
      return;
    }
    // setImage(file);
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.files[0],
    // });
    // setFormData({ [e.target.name]: file.name });
    formData.set("image", file);
  };
  const handleChange = (e) => {
    formData.set(e.target.name, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/newUser/", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      .then((response) => {
        console.log("this is", response.data, "data");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    navigate("/");
  };

  return (
    <div className="component">
      <form onSubmit={handleSubmit} className="form">
      
        <div>
          <label htmlFor="image">Image* :</label>
          <input name="image" type="file" id="image" onChange={handleUpload} className="inp" />

          {error && <Text color="red.500">{error}</Text>}
        </div>

        <div>
          <label htmlFor="username">Username:</label>
          <input name="username" type="text" id="username" onChange={handleChange} className="inp" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input name="password" type="password" id="password" onChange={handleChange} className="inp" />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" id="name" onChange={handleChange} className="inp" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input name="address" type="text" id="address" onChange={handleChange} className="inp" />
        </div>
        <div>
          <label htmlFor="mobileno">Mobile No:</label>
          <input name="mobileno" type="text" id="mobileno" onChange={handleChange} className="inp" />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
// *==================*=*=**=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=======================*

return(
  <ThemeProvider theme={defaultTheme}>
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor:"snow",
        padding:"10px",
        borderRadius:"10px",
        boxShadow:"5px 5px 25px grey ",

      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Copyright sx={{ mt: 5 }} />
  </Container>
</ThemeProvider>
)
};

export default Add_Product;
