import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TextField,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowDownOutlined } from "@material-ui/icons";
import { useStyles } from "../styles";

export const AddressForm = ({ formValues, handleChange, className }) => {
  const classes = useStyles();

  return (
    <Accordion className={className}>
      <AccordionSummary expandIcon={<KeyboardArrowDownOutlined />}>
        <Typography>Address Information</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <TextField
            value={formValues.name}
            name="country"
            onChange={handleChange}
            className={classes.textField}
            fullWidth
            placeholder="Country"
            type="text"
            variant="outlined"
          />
          <TextField
            value={formValues.name}
            name="city"
            onChange={handleChange}
            className={classes.textField}
            fullWidth
            placeholder="City"
            type="text"
            variant="outlined"
          />
          <TextField
            value={formValues.name}
            name="address1"
            onChange={handleChange}
            className={classes.textField}
            fullWidth
            placeholder="Address1"
            type="text"
            variant="outlined"
          />
          <TextField
            value={formValues.name}
            name="address2"
            onChange={handleChange}
            className={classes.textField}
            fullWidth
            placeholder="Address2"
            type="text"
            variant="outlined"
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
