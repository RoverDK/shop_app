import { Box, Button, Typography } from "@material-ui/core";
import { AccountBox, Menu } from "@material-ui/icons";
import { useState } from "react";
import { LoginContainer } from "../Login/containers/LoginContainer";
import { useStyles } from "./styles";

export function Header() {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.header}>
      <Button href="/">
        <Typography variant="h5">LOGO</Typography>
      </Button>
      <Box>
        <Button onClick={() => setOpen(true)}>
          <AccountBox />
        </Button>
        <Button>
          <Menu />
        </Button>
      </Box>
      {open && <LoginContainer handleClose={handleClose} open={open} />}
    </Box>
  );
}
