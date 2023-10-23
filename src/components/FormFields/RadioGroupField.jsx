import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormLabel, Typography } from "@material-ui/core";

const RadioGroupField = ({
  field,
  form: { touched, errors },
  name,
  options,
  children,
  ...props
}) => {
  const fieldName = name || field.name;

  return (
    <React.Fragment>
      <RadioGroup {...field} {...props} name={fieldName}>
        <FormLabel
          component="legend"
          style={{
            color: `${
              touched[fieldName] && errors[fieldName]
                ? "var(--error-color)"
                : "var(----main-color)"
            }`,
            position: "absolute",
            margin: "-10px -15px"
          }}
        >
          {" "}
          <Typography
            noWrap
            variant="body1"
            style={{
              padding: 0,
              top: "-10px",
              position: "absolute",
              width: "330px"
            }}
          >
            {props.label}
          </Typography>
        </FormLabel>

        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            // control={<StyledRadio />}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>

      {/* {touched[fieldName] &&
        errors[fieldName] &&
        _renderHelperText(errors[fieldName])} */}
    </React.Fragment>
  );
};

export default RadioGroupField;
