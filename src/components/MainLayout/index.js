import { Box } from "@material-ui/core";
import { Footer } from "../Footer";
import { useStyles } from "./styles";
import { Header } from "../Header";

export const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Box className={classes.body}>{children}</Box>
      <Footer />
    </>
  );
};
