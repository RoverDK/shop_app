import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { validation } from "../../../utils/validation";
import { useStyles } from "../styles";

export const Login = ({
  formValues,
  handleChange,
  handleSubmit,
  visible,
  handleVisible,
  handleClose,
  open,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      className={classes.dialog}
      onClose={handleClose}
      open={open}
    >
      <Box className={classes.dialogBox}>
        <DialogTitle>
          <Typography align="center" variant="h3">
            Login
          </Typography>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="logInForm">
            <TextField
              className={classes.child}
              fullWidth
              variant="outlined"
              value={formValues.name}
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Email"
              type="email"
            />
            <OutlinedInput
              className={classes.child}
              fullWidth
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
            <Button
              className={`${classes.child} ${classes.submitButton}`}
              variant="contained"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </form>
          <Box className={classes.signUpLink}>
            <Typography>Dont have an account?</Typography>
            <Link href="/signup">Sign up</Link>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
