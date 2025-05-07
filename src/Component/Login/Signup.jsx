import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleDiscoverRedirect = () => {
    navigate("/Discover");
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    termsAccepted: Yup.boolean()
      .oneOf([true], "You must accept the Terms and Privacy Policy")
      .required("You must accept the Terms and Privacy Policy"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
    validationSchema,
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((user) => user.email === values.email);

      if (userExists) {
        formik.setFieldError(
          "email",
          "User already exists! Please use a different email."
        );
        return;
      }

      const userData = {
        username: values.username,
        email: values.email,
        password: values.password,
        authProvider: "email",
      };

      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));


      setSuccess("Account created successfully!");

      formik.resetForm();
      
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    },
  });

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-sky-400">
        <div className="h-[50%] flex w-full max-w-[900px] bg-white shadow-lg shadow-sky-500 border-sky-500 border-[2px] flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 md:p-10 order-2 md:order-1">
            <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-sky-500 hover:text-sky-700">
                Sign in
              </a>
            </p>
            <form className="mt-6" onSubmit={formik.handleSubmit}>
              {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

              <label className="block text-gray-700 text-sm font-medium">
                Username
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="JohnDoe"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mt-2 w-full px-4 py-3 border ${
                    formik.touched.username && formik.errors.username
                      ? "border-red-500"
                      : "border-sky-500"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500`}
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
                )}
              </label>

              <label className="block mt-4 text-gray-700 text-sm font-medium">
                E-mail
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mt-2 w-full px-4 py-3 border ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-sky-500"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500`}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                )}
              </label>

              <label className="block mt-4 text-gray-700 text-sm font-medium">
                Password
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`mt-2 w-full px-4 py-3 border ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-sky-500"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500`}
                  />
                  <div
                    className="text-xl absolute right-3 top-4 cursor-pointer text-sky-800"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <BsEye /> : <BsEyeSlash />}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                )}
              </label>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formik.values.termsAccepted}
                  onChange={formik.handleChange}
                  className="mr-2"
                />
                <label htmlFor="termsAccepted" className="text-sm text-gray-700">
                  I agree to the Terms and Privacy Policy
                </label>
              </div>
              {formik.touched.termsAccepted && formik.errors.termsAccepted && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.termsAccepted}
                </div>
              )}

              <button
                type="submit"
                className="mt-6 w-full bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 bg-sky-900 text-white p-6 md:p-10 order-1 md:order-2">
            <div className="flex justify-end">
              <a href="/support" className="text-sm underline">
                Support
              </a>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold">S9r Technologies Pvt. Ltd.</h2>
              <p className="mt-4 text-sm">
                Join our community of innovators and tech enthusiasts
              </p>
              <button onClick={() => {
            handleDiscoverRedirect();
          }}   className="mt-4 bg-white text-sky-900 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                Learn more
              </button>
              <div className="mt-8 text-gray-300">
                <p>CEO</p>
                <h3 className="text-4xl font-bold">Suzal Sharma</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;