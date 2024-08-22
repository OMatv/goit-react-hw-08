import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";
import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(register(values));
      actions.resetForm();
    } catch (error) {
      actions.resetForm();
      // Можна додатково додати логіку для обробки помилок
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Username
            <Field type="text" name="name" />
          </label>
          <label className={styles.label}>
            Email
            <Field type="email" name="email" />
          </label>
          <label className={styles.label}>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
