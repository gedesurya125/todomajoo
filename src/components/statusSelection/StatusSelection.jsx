import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const StatusSelection = ({value, handleChange}) => {
  // const [value, setValue] = React.useState("female");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  // console.log('STATUS VALUE', value)
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Status</FormLabel>
      <RadioGroup
        aria-label="status"
        name="status"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel value="0" control={<Radio />} label="Not finish" />
        <FormControlLabel value="1" control={<Radio />} label="Finish" />
      </RadioGroup>
    </FormControl>
  );
};

export default StatusSelection;
