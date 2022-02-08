import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  textField: {
    margin: "6px auto",
  },
  signUpChild: {
    width: "60%",
    maxWidth: "36rem",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  address: {
    border: "1px solid #CCC",
    borderRadius: "4px",
    boxShadow: "none",
  },
  signUpText: {
    marginBottom: "50px",
    textAlign: "center",
  },
  submitButton: {
    margin: "20px auto",
    fontSize: "18px",
    boxShadow: "-1px 2px #CCC",
    border: "1px solid #CCC",
    width: "18%",
  },
});
