import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LanguageContext from '../context/LanguageContext';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      title: 'Customer Profile',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      bio: 'About',
      notAvailable: 'Not Provided',
      locationValue: 'Dhaka, Bangladesh',
    },
    bn: {
      title: 'কাস্টমার প্রোফাইল',
      name: 'নাম',
      email: 'ইমেইল',
      phone: 'ফোন',
      location: 'অবস্থান',
      bio: 'পরিচিতি',
      notAvailable: 'প্রদত্ত নয়',
      locationValue: 'ঢাকা, বাংলাদেশ',
    },
  };

  const t = translations[language] || translations.en;

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4" aria-label={t.title}>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Cover Image */}
        <div className="relative">
          <img
            src="https://source.unsplash.com/1600x400/?shopping,ecommerce"
            alt={t.title + ' Cover'}
            className="w-full h-52 object-cover"
          />
          <div className="absolute -bottom-14 left-6">
            <img
              src={user?.photoURL || '/default-avatar.png'}
              alt={user?.displayName || t.notAvailable}
              className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-md"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="pt-20 px-6 pb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            {user?.displayName || t.notAvailable}
          </h2>
          <p className="text-gray-600 text-sm">
            {t.bio}: {user?.bio || (language === 'bn' ? 'নিত্তসদাই এর স্মার্ট গ্রোসারি শপার।' : 'Smart grocery shopper at NittoSodai.')}
          </p>

          {/* Contact Details */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
            <p>
              <FaEnvelope className="inline mr-2 text-blue-600" aria-hidden="true" />
              {t.email}: {user?.email || t.notAvailable}
            </p>
            <p>
              <FaPhone className="inline mr-2 text-green-500" aria-hidden="true" />
              {t.phone}: {user?.phoneNumber || t.notAvailable}
            </p>
            <p>
              <FaMapMarkerAlt className="inline mr-2 text-red-500" aria-hidden="true" />
              {t.location}: {t.locationValue}
            </p>
          </div>

          {/* Social Media (Optional) */}
          <div className="mt-6 flex space-x-5" aria-label={language === 'bn' ? 'সোশ্যাল মিডিয়া লিঙ্ক' : 'Social Media Links'}>
            <a
              href="#"
              title="LinkedIn"
              className="text-blue-700 hover:text-blue-800"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              title="Facebook"
              className="text-blue-600 hover:text-blue-700"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              title="Twitter"
              className="text-sky-500 hover:text-sky-600"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
