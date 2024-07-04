import { Button } from "@mui/material";
import { Formik, FormikTouched } from "formik";
import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import { Form2Schema, form1Schema, form2Schema } from "./FormSchema";
import styles from "./FormsWrapper.module.scss";

function FormsWrapper() {
  const [step, setStep] = useState<number>(0);

  function getValidationSchema() {
    switch (step) {
      case 0:
        return form1Schema;
      case 1:
        return form2Schema;
      default:
        return form2Schema;
    }
  }

  const initialValues: Form2Schema = {
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    vat: "",
    moreInfo: "",
  };
  function onSubmit(event: any) {
    console.log("xd");
  }
  function handleNextClick() {
    console.log("next");
    setStep((prev) => prev + 1);
  }
  function handlePreviousClick() {
    setStep((prev) => prev - 1);
  }

  function fnIsTouched({
    name,
    age,
    phone,
    email,
    address,
    vat,
    moreInfo,
  }: FormikTouched<{
    name: string;
    age: string | number;
    phone: string;
    email: string;
    address: string;
    vat: string | number;
    moreInfo: string;
  }>) {
    if (step === 0) return name || age || phone || email;
    if (step === 1) return address || vat || moreInfo;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, touched, handleSubmit }) => {
        return (
          <div className={styles.container}>
            <div className={styles.headerWrapper}>
              <Button disabled variant={step === 0 ? "contained" : "outlined"}>
                0
              </Button>
              <Button disabled variant={step === 1 ? "contained" : "outlined"}>
                1
              </Button>
            </div>
            <div className={styles.formWrapper}>
              {step === 0 && <Form1 />}
              {step === 1 && <Form2 />}
            </div>
            <div className={styles.footerWrapper}>
              <Button
                disabled={step === 0}
                variant="outlined"
                onClick={handlePreviousClick}
              >
                Previous
              </Button>
              <Button
                onClick={() =>
                  step === 1 ? handleSubmit() : handleNextClick()
                }
                disabled={!isValid || !fnIsTouched(touched)}
                variant="contained"
                type={step === 1 ? "submit" : "button"}
              >
                {step === 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default FormsWrapper;
