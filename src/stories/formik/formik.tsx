import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .password()
    .required("Required")
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special",
    )
    .minLowercase(1, "password must contain at least 1 lower case letter")
    .minUppercase(1, "password must contain at least 1 upper case letter")
    .minNumbers(1, "password must contain at least 1 number")
    .minSymbols(1, "password must contain at least 1 special character"),
});

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label>email</label>
          <Field type="email" name="email" />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <label>password</label>
          <Field type="password" name="password" />
          {errors.password && touched.password && <div>{errors.password}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
