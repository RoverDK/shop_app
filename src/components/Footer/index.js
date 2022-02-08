import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography variant="subtitle1">
        Best shop ever &reg; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
