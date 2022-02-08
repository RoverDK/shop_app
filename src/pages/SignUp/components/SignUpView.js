import {
  Button,
  FormGroup,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { AddressForm } from "./AddressForm";

import { useStyles } from "../styles";

export function SignUpView({
  formValues,
  visible,
  handleVisible,
  handleSubmit,
  handleChange,
}) {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.signUpText} variant="h3">
        Sign Up
      </Typography>
      <FormGroup className={classes.root}>
        <TextField
          className={`${classes.textField} ${classes.signUpChild}`}
          variant="outlined"
          value={formValues.name}
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="Email"
          type="email"
        />
        <TextField
          className={`${classes.textField} ${classes.signUpChild}`}
          variant="outlined"
          value={formValues.name}
          name="firstName"
          onChange={(e) => handleChange(e)}
          placeholder="Your first name"
          type="text"
        />
        <TextField
          className={`${classes.textField} ${classes.signUpChild}`}
          variant="outlined"
          value={formValues.name}
          name="lastName"
          onChange={(e) => handleChange(e)}
          placeholder="Your last name"
          type="text"
        />
        <AddressForm
          formValues={formValues}
          handleChange={handleChange}
          className={`${classes.textField} ${classes.signUpChild} ${classes.address}`}
        />
        <TextField
          className={`${classes.textField} ${classes.signUpChild} ${classes.select}`}
          select
          label="Gender"
          variant="outlined"
          name="gender"
          value={formValues.name}
          onChange={(e) => handleChange(e)}
          SelectProps={{
            MenuProps: {
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              getContentAnchorEl: null,
            },
          }}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
        <OutlinedInput
          className={`${classes.textField} ${classes.signUpChild}`}
          value={formValues.name}
          name="password"
          onChange={(e) => handleChange(e)}
          placeholder="Enter password"
          type={visible ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleVisible}>
                {visible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <TextField
          className={`${classes.textField} ${classes.signUpChild}`}
          variant="outlined"
          value={formValues.name}
          name="phone"
          onChange={(e) => handleChange(e)}
          placeholder="Your phone number"
          type="text"
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          onClick={handleSubmit}
        >
          <Typography variant="h6">Sign Up</Typography>
        </Button>
      </FormGroup>
    </>
  );
}
