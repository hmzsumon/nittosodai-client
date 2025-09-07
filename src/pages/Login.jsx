import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import LanguageContext from '../context/LanguageContext';

const Login = () => {
  const navigate = useNavigate();
  const { signInWithEmail, signInWithGoogle } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);

  const t = {
    en: {
      title: 'Login | NittoSodai',
      welcome: 'Welcome Back',
      email: 'Email',
      password: 'Password',
      login: 'Login',
      or: 'OR',
      google: 'Login with Google',
      noAccount: "Don't have an account?",
      register: 'Register',
      success: 'Login Successful',
      failed: 'Login Failed',
      googleFailed: 'Google Sign-In Failed',
      invalidEmail: 'Please enter a valid email address.',
      emptyPassword: 'Please enter your password.',
    },
    bn: {
      title: 'লগইন | নিত্যসদাই',
      welcome: 'আবার স্বাগতম',
      email: 'ইমেইল',
      password: 'পাসওয়ার্ড',
      login: 'লগইন করুন',
      or: 'অথবা',
      google: 'গুগল দিয়ে লগইন করুন',
      noAccount: 'একাউন্ট নেই?',
      register: 'নিবন্ধন করুন',
      success: 'সফলভাবে লগইন হয়েছে',
      failed: 'লগইন ব্যর্থ হয়েছে',
      googleFailed: 'গুগল লগইন ব্যর্থ হয়েছে',
      invalidEmail: 'দয়া করে একটি বৈধ ইমেইল ঠিকানা দিন।',
      emptyPassword: 'আপনার পাসওয়ার্ড লিখুন।',
    },
  }[language];

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!validateEmail(email)) {
      Swal.fire({ icon: 'error', title: t.failed, text: t.invalidEmail });
      return;
    }

    if (!password) {
      Swal.fire({ icon: 'error', title: t.failed, text: t.emptyPassword });
      return;
    }

    try {
      await signInWithEmail(email, password);
      Swal.fire({ icon: 'success', title: t.success });
      navigate('/profile');
    } catch (error) {
      Swal.fire({ icon: 'error', title: t.failed, text: error.message });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/profile');
    } catch (error) {
      Swal.fire({ icon: 'error', title: t.googleFailed, text: error.message });
    }
  };

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl shadow-md p-8">
          <div className="text-center mb-6">
            <img src="/logo.jpg" alt="NittoSodai Logo" className="w-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">{t.welcome}</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                name="email"
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder={t.password}
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              {t.login}
            </button>
          </form>

          {/* OR separator */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-sm text-gray-500">{t.or}</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg bg-white hover:bg-gray-100 transition"
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
            <span>{t.google}</span>
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            {t.noAccount}{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              {t.register}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
