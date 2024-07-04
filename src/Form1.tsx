import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import "./App.css";
import { Form1Schema } from "./FormSchema";

function Form1() {
  const { values, handleChange, handleBlur, touched, errors } =
    useFormikContext<Form1Schema>();
  return (
    <>
      <TextField
        fullWidth
        name="name"
        label="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      />
      <TextField
        fullWidth
        name="age"
        label="Age"
        type={"number"}
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.age && Boolean(errors.age)}
        helperText={touched.age && errors.age}
      />
      <TextField
        fullWidth
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        fullWidth
        name="phone"
        label="Phone"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.phone && Boolean(errors.phone)}
        helperText={touched.phone && errors.phone}
      />
    </>
  );
}

export default Form1;
