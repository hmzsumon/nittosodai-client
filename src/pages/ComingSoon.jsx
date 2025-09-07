import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-01T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      } else {
        const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Coming Soon | NittoSodai</title>
      </Helmet>

      <div className="w-full bg-gradient-to-r from-indigo-700 to-purple-600 text-white text-sm md:text-base py-2 px-4 text-center font-medium shadow-md z-50">
        🚀 Launching in November! Stay Tuned for the NittoSodai Grand Opening!
      </div>

      <div className="min-h-[60vh] bg-gradient-to-br from-indigo-200 via-sky-100 to-cyan-100 flex items-center justify-center px-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-10 py-12">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-gray-800">Coming Soon</h1>
            <p className="text-lg text-gray-700">
              We're working hard to bring you an exciting experience. Our launch is just around the corner!
            </p>

            <div className="flex justify-center md:justify-start gap-6 text-gray-700 font-bold text-lg">
              {['Days', 'Hours', 'Mins', 'Secs'].map((label, i) => (
                <div className="text-center" key={label}>
                  <div className="text-4xl font-extrabold">
                    {Object.values(timeLeft)[i]}
                  </div>
                  <div>{label}</div>
                </div>
              ))}
            </div>

            <button className="mt-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition">
              Back to Home
            </button>

            <div className="flex justify-center md:justify-start gap-5 mt-6 text-gray-700">
              <a href="https://facebook.com/nittosodai.coms" className="hover:text-indigo-600 transition"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:text-indigo-600 transition"><FaTwitter size={20} /></a>
              <a href="https://www.instagram.com/matiursabirin/profilecard/?igsh=dTd3d21sdnYweWR3" className="hover:text-indigo-600 transition"><FaInstagram size={20} /></a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="https://i.ibb.co/wZsJk5sM/Grocery-Store-Promotion-Instagram-Post.png"
              alt="Coming Soon"
              className="w-full max-w-sm md:max-w-md animate-fade-in"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
