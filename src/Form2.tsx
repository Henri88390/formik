import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import "./App.css";
import { Form2Schema } from "./FormSchema";

function Form1() {
  const { values, handleChange, handleBlur, touched, errors, isValid } =
    useFormikContext<Form2Schema>();
  return (
    <>
      <TextField
        fullWidth
        name="address"
        label="address"
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.address && Boolean(errors.address)}
        helperText={touched.address && errors.address}
      />
      <TextField
        fullWidth
        name="vat"
        type={"number"}
        label="vat"
        value={values.vat}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.vat && Boolean(errors.vat)}
        helperText={touched.vat && errors.vat}
      />
      <TextField
        fullWidth
        name="moreInfo"
        label="moreInfo"
        value={values.moreInfo}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.moreInfo && Boolean(errors.moreInfo)}
        helperText={touched.moreInfo && errors.moreInfo}
      />
    </>
  );
}

export default Form1;
