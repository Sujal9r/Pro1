import { useState, useEffect } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isGoogleScriptLoaded, setIsGoogleScriptLoaded] = useState(false);

const navigate = useNavigate();

const handleDiscoverRedirect = () => {
  navigate("/Discover");
};

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required"),
    rememberMe: Yup.boolean()
  });

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fromSignup = urlParams.get("fromSignup");
    
    if (fromSignup === "true") {
      setSuccess("Account created successfully! Please log in.");
    }
  }, []);

  useEffect(() => {
    const loadGoogleScript = () => {
      if (document.getElementById("google-signin-script")) {
        setIsGoogleScriptLoaded(true);
        initializeGoogle();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.id = "google-signin-script";
      script.onload = () => {
        setIsGoogleScriptLoaded(true);
        initializeGoogle();
      };
      document.body.appendChild(script);
    };

    loadGoogleScript();

    return () => {
    };
    // eslint-disable-next-line
  }, []);

  const initializeGoogle = () => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id:
        "1066605323207-il47212s282t9mm75vq0r61eig2toje1.apps.googleusercontent.com",
      callback: handleGoogleSignIn,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("google-signin-button"),
      {
        type: "standard",
        theme: "outline",
        size: "large",
        text: "signin_with",
        shape: "rectangular",
        logo_alignment: "center",
        width: 320,
      }
    );
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setError("");
    setSuccess("");

    const { email, password, rememberMe } = values;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      const userInfo = {
        email: user.email,
        username: user.username,
        authProvider: "email",
      };

      setSuccess("Login successful! Redirecting...");

      if (rememberMe) {
        localStorage.setItem("currentUser", JSON.stringify(userInfo));
      } else {
        sessionStorage.setItem("currentUser", JSON.stringify(userInfo));
      }

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } else {
      setError("Invalid email or password");
    }
    
    setSubmitting(false);
  };

  const handleGoogleSignIn = (response) => {
    if (response && response.credential) {
      try {
        const base64Url = response.credential.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );

        const { email, name, picture } = JSON.parse(jsonPayload);

        // Create a userInfo object specifically for Google sign-in
        const userInfo = {
          email,
          username: name,
          profilePicture: picture,
          authProvider: "google",
        };

        setSuccess("Google login successful!");

        // Store the Google user info in localStorage or sessionStorage
        const rememberMe = document.querySelector('input[name="rememberMe"]')?.checked || false;
        if (rememberMe) {
          localStorage.setItem("currentUser", JSON.stringify(userInfo));
        } else {
          sessionStorage.setItem("currentUser", JSON.stringify(userInfo));
        }

        // Check if this Google user exists in our users database
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find((user) => user.email === email && user.authProvider === "google");

        // If user doesn't exist, add them to the database with the correct authProvider
        if (!existingUser) {
          users.push({
            email,
            username: name,
            authProvider: "google",
            profilePicture: picture,
          });
          localStorage.setItem("users", JSON.stringify(users));
        }

        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } catch (err) {
        setError("Google sign-in error. Please try again.");
        console.error("Google sign-in error:", err);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-purple-400">
        <div className="flex w-full max-w-[900px] bg-white shadow-lg shadow-purple-500 border-purple-500 border-[2px] flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 md:p-10 order-2 md:order-1">
            <h1 className="text-3xl font-bold text-gray-800">Sign in</h1>
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-purple-500 hover:text-purple-700"
              >
                Create now
              </a>
            </p>
            
            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
            {success && <p className="text-green-500 text-sm mt-4">{success}</p>}
            
            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="mt-6">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium">
                      E-mail
                      <div className="mt-2">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Developer@gmail.com"
                          className={`w-full px-4 py-2 border ${
                            errors.email && touched.email ? "border-red-500" : "border-purple-500"
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        />
                      </div>
                      <ErrorMessage 
                        name="email" 
                        component="div" 
                        className="text-red-500 text-xs mt-1" 
                      />
                    </label>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium">
                      Password
                      <div className="relative mt-2">
                        <Field
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="••••••••"
                          className={`w-full px-4 py-2 border ${
                            errors.password && touched.password ? "border-red-500" : "border-purple-500"
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        />
                        <div
                          className="text-xl absolute right-3 top-2.5 cursor-pointer text-purple-800"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? <BsEye /> : <BsEyeSlash />}
                        </div>
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </label>
                  </div>

                  <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
                    <label className="flex items-center text-sm">
                      <Field
                        type="checkbox"
                        name="rememberMe"
                        className="mr-2"
                      />
                      Remember me
                    </label>
                    <a
                      href="/forgot-password"
                      className="text-sm text-purple-500 hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 w-full bg-purple-500 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </button>

                  <div className="mt-6 text-center text-gray-600">
                    <p>or</p>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-center">
                      <div
                        id="google-signin-button"
                        className="w-full max-w-xs"
                        style={{ minHeight: "40px" }}
                      ></div>
                    </div>

                    {!isGoogleScriptLoaded && (
                      <button
                        type="button"
                        disabled
                        className="w-full max-w-xs mx-auto flex items-center justify-center border border-purple-500 py-2.5 rounded-md text-gray-700 bg-white"
                      >
                        <FcGoogle className="text-xl mr-2" />
                        Continue with Google
                      </button>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="w-full md:w-1/2 bg-purple-900 text-white p-6 md:p-10 order-1 md:order-2">
            <div className="flex justify-end">
              <a href="/support" className="text-sm underline">
                Support
              </a>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold">S9r Technologies Pvt. Ltd.</h2>
              <p className="mt-4 text-sm">
                Empowering Innovation, Transforming Technology
              </p>
              <button onClick={() => {
            handleDiscoverRedirect();
          }} className="mt-4 bg-white text-purple-900 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
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

export default Login;