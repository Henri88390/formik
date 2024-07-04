import { InferType, lazy, number, object, string } from "yup";

export const form1Schema = object({
  name: string().required(),
  age: lazy((value) =>
    value === ""
      ? string().required()
      : number().min(18, "Must be 18 years old").required()
  ),
  phone: string().required(),
  email: string().email("Enter a valid email").required("Email is required"),
});

export const form2Schema = form1Schema.concat(
  object({
    address: string().required(),
    vat: lazy((value) =>
      value === "" ? string().required() : number().required()
    ),
    moreInfo: string().required(),
  })
);

export type Form1Schema = InferType<typeof form1Schema>;
export type Form2Schema = InferType<typeof form2Schema>;
