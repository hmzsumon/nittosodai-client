import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaImage,
  FaEye,
  FaEyeSlash,
  FaMapMarkerAlt,
  FaLocationArrow,
} from "react-icons/fa";

import { storage } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";

const Register = () => {
  const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    zip: "",
    photo: null,
  });
  const [showPassword, setShowPassword] = useState(false);

  const t = language === "bn";

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loading = Swal.fire({
      title: t ? "লোড হচ্ছে..." : "Please wait...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await createUser(formData.email, formData.password);
      let photoURL = "";

      if (formData.photo) {
        const photoRef = ref(storage, `users/${res.user.uid}/${formData.photo.name}`);
        await uploadBytes(photoRef, formData.photo);
        photoURL = await getDownloadURL(photoRef);
      }

      await updateUser({ displayName: formData.name, photoURL });

      Swal.fire({
        icon: "success",
        title: t ? "নিবন্ধন সফল হয়েছে!" : "Registration Successful!",
      });
      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: t ? "ত্রুটি!" : "Error!",
        text: err.message,
      });
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        icon: "success",
        title: t ? "গুগল দিয়ে সাইন ইন সফল!" : "Google sign-in successful!",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: t ? "ত্রুটি!" : "Error!",
        text: error.message,
      });
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <Helmet>
        <title>{t ? "নিবন্ধন করুন" : "Register"} | NittoSodai</title>
        <meta
          name="description"
          content={
            t
              ? "NittoSodai-তে আপনার অ্যাকাউন্ট তৈরি করুন এবং স্মার্ট কেনাকাটা শুরু করুন।"
              : "Create your NittoSodai account and start smart shopping."
          }
        />
      </Helmet>

      <div className="bg-white w-full max-w-6xl rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Side Image & Title */}
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-100 p-10">
          <img
          src="logo.jpg"
          alt="Shopping"
         className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold text-center text-blue-700">
            {t ? "নিত্যসদাই তে স্বাগতম" : "Welcome to NittoSodai"}
          </h2>
          <p className="text-center mt-2 text-gray-700">
            {t ? "স্মার্ট কেনাকাটার একটি নতুন অভিজ্ঞতা" : "A smarter way to shop for daily needs."}
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            {t ? "একটি অ্যাকাউন্ট তৈরি করুন" : "Create an Account"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block font-medium mb-1">
                <FaUser className="inline mr-1" /> {t ? "নাম" : "Full Name"}
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">
                <FaEnvelope className="inline mr-1" /> {t ? "ইমেইল" : "Email"}
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium mb-1">
                <FaLock className="inline mr-1" /> {t ? "পাসওয়ার্ড" : "Password"}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-2 rounded-lg pr-10"
                />
                <span
                  className="absolute top-2.5 right-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium mb-1">
                <FaPhone className="inline mr-1" /> {t ? "ফোন নম্বর" : "Phone Number"}
              </label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-medium mb-1">
                <FaMapMarkerAlt className="inline mr-1" /> {t ? "ঠিকানা" : "Address"}
              </label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg"
              />
            </div>

            {/* ZIP Code */}
            <div>
              <label className="block font-medium mb-1">
                <FaLocationArrow className="inline mr-1" /> {t ? "পোস্টকোড" : "ZIP Code"}
              </label>
              <input
                type="text"
                name="zip"
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg"
              />
            </div>

            {/* Photo */}
            <div>
      {/* Label above the upload box */}
      <label className="block font-medium mb-2">
        <FaImage className="inline mr-2 text-orange-500" />
        {t ? 'প্রোফাইল ছবি' : 'Profile Photo'}
      </label>

      {/* Upload box */}
      <label
        htmlFor="photo-dropbox"
        className="flex cursor-pointer justify-center items-center rounded-md border border-dashed border-gray-300 bg-white px-4 py-6 text-sm transition hover:border-gray-400 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500"
        tabIndex={0}
      >
        <svg
          className="h-6 w-6 stroke-gray-400 mr-2"
          viewBox="0 0 256 256"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M80,128a80,80,0,1,1,144,48"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="118.1 161.9 152 128 185.9 161.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="152"
            y1="208"
            x2="152"
            y2="128"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </svg>
        <span className="text-xs font-medium text-gray-600">
          {t ? 'ফাইল দিন অথবা ' : 'Drop files to Attach, or '}
          <span className="text-blue-600 underline">
            {t ? 'ব্রাউজ করুন' : 'browse'}
          </span>
        </span>

        {/* Hidden input */}
        <input
          id="photo-dropbox"
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          className="sr-only"
        />
      </label>
    </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {t ? "নিবন্ধন করুন" : "Register"}
            </button>
          </form>

          {/* Google Sign Up Button */}
          <div className="mt-4">
            <p className="text-center text-sm mb-2">
              {t ? "অথবা নিচে ক্লিক করুন" : "Or sign up with"}
            </p>
            <button
              onClick={handleGoogleSignup}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded flex items-center justify-center gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              {t ? "গুগল দিয়ে সাইন আপ করুন" : "Sign up with Google"}
            </button>
          </div>

          {/* Login Redirect */}
          <p className="text-center text-sm">
            {t ? "ইতোমধ্যে একটি অ্যাকাউন্ট আছে?" : "Already have an account?"} {" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              {t ? "লগইন করুন" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
