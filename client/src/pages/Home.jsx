import React from 'react';
import { motion } from 'framer-motion';
import logoHero from '../assets/logo-2.png';
import Navbar from '../components/Navbar';
import background from '../assets/bg-apartment.jpg';
import { Link } from 'react-router-dom';
import mumbaiImg from '../assets/properties/mumbai.jpg';
import delhiImg from '../assets/properties/delhi.jpg';
import goaImg from '../assets/properties/goa.jpg';


const Home = () => {
  const featuredCards = [
    {
        title: 'Cozy Studio - Mumbai',
        desc: 'Furnished ₹15,000/month',
        img: mumbaiImg,    },
    {
        title: 'City Center Apt - Delhi',
        desc: 'Priced ₹20,300/month',
        img: delhiImg,    },
    {
        title: '2BHK Beachfront - Goa',
        desc: 'Priced ₹48,000/month',
        img: goaImg,    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-36 pb-24 text-center">
        {/* Logo */}
        <motion.img
          src={logoHero}
          alt="Rental Logo"
          className="w-32 md:w-40 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Rental Estate
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl text-[#FFD347] mb-6 font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          A Legacy in Living
        </motion.p>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link to="/browse">
            <button className="bg-[#FFD347] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#ffb347] transition">
              Get Started
            </button>
          </Link>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="mt-10 flex justify-center w-full max-w-md bg-white rounded-full overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Search for city location..."
            className="flex-1 px-4 py-3 text-black placeholder-gray-500 focus:outline-none"
          />
          <button className="bg-[#FFD347] text-black px-6 py-3 font-semibold hover:bg-[#ffb347]">
            Search
          </button>
        </motion.div>

        {/* Featured Listings */}
        <motion.h2
          className="text-3xl font-title mt-20 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Featured Listings
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {featuredCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md text-left text-gray-900 hover:scale-[1.02] transition-transform duration-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;