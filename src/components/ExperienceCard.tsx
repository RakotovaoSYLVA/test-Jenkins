import React from 'react';
import { motion } from 'framer-motion';
import { Experience, socialLinks } from '../data/content';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope, FaTrophy, FaUpload, FaPlay } from 'react-icons/fa';
import { useState } from 'react';

interface Props {
  experience: Experience;
  index: number;
  darkMode: boolean;
}

const ExperienceCard: React.FC<Props> = ({ experience, index, darkMode }) => {
  const isImage = experience.logo?.includes('/') || experience.logo?.includes('assets');
  const [rotate, setRotate] = useState({ x: 0, y: 0 });


  return (
    <motion.div
      key={experience.id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={(e) => {
        const card = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientY - card.top) / card.height - 0.5) * 10; // tilt X
        const y = ((e.clientX - card.left) / card.width - 0.5) * 10; // tilt Y
        setRotate({ x: -x, y });
      }}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      className={`p-6 rounded-xl border text-center max-w-xs w-full flex flex-col items-center transition-transform duration-300 ease-out
        ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
        shadow-xl hover:shadow-2xl hover:shadow-yellow-400/30`}
    >

      {/* Logo */}
      <div className="mb-2">
        {isImage ? (
          <img
            src={experience.logo}
            alt={experience.company}
            className="w-32 h-32 object-contain mx-auto"
          />
        ) : (
          <div className="w-32 h-32 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-600 mx-auto">
            {experience.logo}
          </div>
        )}
      </div>

      {/* Texte de l’entreprise et position */}
      <div className="mb-2">
        <h3 className="text-xl font-semibold text-yellow-400">{experience.company}</h3>
        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {experience.position}
        </p>
      </div>

      {/* Period */}
      <div className={`text-xs mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {experience.period}
      </div>

      {/* Description */}
      <ul className={`text-sm space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {experience.description.slice(0, 3).map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-pink-400">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Réseaux sociaux */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-between items-center w-full mt-4"
      >
        {/* GitHub à gauche */}
        <a
          href={experience.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center space-x-2 transition ${
            darkMode ? 'text-white hover:text-yellow-400' : 'text-gray-800 hover:text-yellow-600'
          }`}
        >
          <FaGithub size={20} />
          <span>Code</span>
        </a>

        {/* Lien live à droite */}
        <a
          href={experience.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm underline transition ${
            darkMode ? 'text-white hover:text-green-400' : 'text-gray-800 hover:text-green-600'
          }`}
        >
          Live
        </a>
      </motion.div>


    </motion.div>
  );
};

export default ExperienceCard;
