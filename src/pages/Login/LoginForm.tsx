import { useFormik } from "formik";
import FadeIn from "react-fade-in";
import { FC, useState } from "react";
import * as Yup from "yup";
import visible from "../../assets/images/visible.svg";
import notVisible from "../../assets/images/notvisible.svg";
import { ButtonLoader } from "../../components/Loader";

interface LoginFormProps {
  loading: boolean;
  mutate: any;
}

export const LoginForm: FC<LoginFormProps> = ({ loading, mutate }) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().min(6, "Too Short!").required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ email, password }) => {
      await mutate({ email, password });
    },
    validationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          id="email"
          name="email"
          inputMode="numeric"
          className="auth-input"
          placeholder="Student Id"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <FadeIn>
            <div className="error">{formik.errors.email}</div>
          </FadeIn>
        ) : null}
        <div className="password">
          <input
            id="password"
            name="password"
            inputMode="text"
            type={passwordVisible ? "text" : "password"}
            className="auth-input"
            placeholder="Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <img
            src={passwordVisible ? notVisible : visible}
            onClick={() => setPasswordVisible((prevState) => !prevState)}
            alt=""
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <FadeIn>
            <div className="error">{formik.errors.password}</div>
          </FadeIn>
        ) : null}
        <button type="submit" disabled={loading} className="primary-btn ">
          {loading ? <ButtonLoader /> : "Log In"}
        </button>
      </div>
    </form>
  );
};
