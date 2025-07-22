import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope, FaTrophy, FaUpload, FaPlay } from 'react-icons/fa';
import Navbar from './components/Navbar';
import SkillTimeline from './components/SkillTimeline';
import ExperienceCard from './components/ExperienceCard';
import ContactForm from './components/contact';
import { personalInfo, experiences, hackathons, socialLinks } from './data/content';
import photo from "./assets/img/moi.png";
import photo2 from "./assets/img/moi2.jpeg";


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = `${personalInfo.name} | ${personalInfo.title}`;

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Particle animation
  const ParticleField = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: darkMode 
              ? 'linear-gradient(135deg, #0c0c0c 0%, #3f3f3f 50%, #facc15 100%)' 
              : 'linear-gradient(135deg, #facc15 0%, #e879f9 50%, #581c87 100%)' 
          }}
          
        />
        <ParticleField />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-montserrat">
              {currentText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              className="text-xl md:text-2xl text-white/80 mb-8"
            >
              Front-End Developer
              <motion.span className="block mt-2">
                Building smart interfaces with React, Angular & AI
              </motion.span>
            </motion.p>

          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/20"
          >
            <span className="flex items-center space-x-2">
              <span>View My Work</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaArrowDown />
              </motion.div>
            </span>
          </motion.button>
          {/* 
                    {/* Image à droite */}
                    {/* <div className="absolute w-[1000px] opacity-40 pointer-events-none">
            <img src={photo} alt="Moi" className="w-full h-auto object-contain" />
          </div> */} 

        </div>

        {/* Floating shapes */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-20 h-20 border-2 border-white/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-16 h-16 bg-teal-500/20 rounded-lg backdrop-blur-sm"
        />
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? 'from-yellow-400' : 'via-pink-400'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-700 bg-clip-text text-transparent font-montserrat"
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile test test estseteste  Photo */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className={`w-80 h-80 mx-auto rounded-full flex items-center justify-center border-4 border-yellow-400 via-pink-400/20`}
            >
              <img
                src={photo2}
                alt="Moi"
                className="max-w-full max-h-full object-contain rounded-full"
                style={{ filter: 'none' }}
              />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 via-pink-400 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r via-pink-400 from-yellow-400 rounded-lg"
            />
          </motion.div>


            {/* Bio and Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  {personalInfo.bio}
                </motion.p>
              </div>

              {/* Video placeholder */}
              <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`rounded-xl p-6 text-sm ${
                darkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-gray-100 text-gray-700 border border-gray-300'
              }`}
            >
              <p>
                Actuellement en alternance en développement front-end, je suis ouverte aux collaborations sur des projets web ambitieux, 
                innovants ou à fort impact. J'aime particulièrement transformer des idées en interfaces claires et dynamiques, que ce soit avec React, Angular ou d'autres technologies modernes.
              </p>
            </motion.div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${darkMode ? 'from-yellow-400' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-pink-400 bg-clip-text text-transparent font-montserrat"
          >
            Technical Skills
          </motion.h2>

          <SkillTimeline darkMode={darkMode} />
        </div>
      </section>

      {/* Experience Section */}
          <section id="experience" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-pink-400 bg-clip-text text-transparent">
              Expériences Professionnelles
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
              {experiences.map((exp, index) => (
                <ExperienceCard key={exp.id} experience={exp} index={index} darkMode={darkMode} />
              ))}
            </div>
          </div>
        </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-8 px-2 overflow-hidden">
        {/* Background gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: darkMode 
              ? 'linear-gradient(135deg, #0c0c0c 0%, #3f3f3f 50%, #facc15 100%)' 
              : 'linear-gradient(135deg, #facc15 0%, #e879f9 50%, #581c87 100%)' 
          }}
        />

        {/* Wave animation */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute bottom-0 left-0 w-full h-8 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              fill="rgba(255,255,255,0.1)"
              animate={{
                d: [
                  "M321.39,56.44c58-10.79,114.16-30.13,...Z",
                  "M321.39,76.44c58-10.79,114.16-50.13,...Z",
                  "M321.39,56.44c58-10.79,114.16-30.13,...Z"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Contact Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white font-montserrat text-center"
          >
            Let's Connect
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Informations à gauche */}
            <div className="flex-1 space-y-4 text-white/90">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-medium hover:bg-gray-100 transition w-fit"
              >
                <FaEnvelope />
                <span>{personalInfo.email}</span>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <span>📱</span>
                <span>{personalInfo.phone}</span>
              </motion.div>

              {/* Ajoute d'autres infos si besoin, ex. localisation, LinkedIn, etc. */}
            </div>

            {/* Formulaire compact */}
            <div className="max-h-[500px] overflow-auto">
              <ContactForm />
            </div>
        </div>
            <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm"
        >
          © 2025 {personalInfo.name}. Built with ❤️ using React, TypeScript & Framer Motion.
        </motion.p>

        </div>
        </section>

      
    </div>
  );
};

export default App;