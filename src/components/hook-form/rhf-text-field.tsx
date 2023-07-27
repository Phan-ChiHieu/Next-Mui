import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = TextFieldProps & {
  name: string;
};

export default function RHFTextField({
  name,
  helperText,
  type,
  ...other
}: TInputProps) {
  console.log(">> other", other);
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: {error} }) => {
          return (
            <TextField
              {...field}
              fullWidth
              type={type}
              value={type === "number" && field.value === 0 ? "" : field.value}
              onChange={(event) => {
                if (type === "number") {
                  field.onChange(Number(event.target.value));
                } else {
                  field.onChange(event.target.value);
                }
              }}
              {...other}
              error={!!error}
              helperText={error ? error.message : helperText}
            />
          );
        }}
      />
    </div>
  );
}


// tai lieu
// https://react-hook-form.com/docs/usecontroller
// https://react-hook-form.com/advanced-usage#FormProviderPerformance