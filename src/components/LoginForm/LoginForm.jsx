import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .then(() => {
        actions.resetForm();
      })
      .catch(() => {
        actions.resetForm();
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Email
            <Field type="email" name="email" />
          </label>
          <label className={styles.label}>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
}
