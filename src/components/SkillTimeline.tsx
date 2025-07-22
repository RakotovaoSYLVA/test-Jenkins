import React from 'react';
import { motion } from 'framer-motion';
import { skills, Skill } from '../data/content';

interface SkillTimelineProps {
  darkMode: boolean;
}

const SkillTimeline: React.FC<SkillTimelineProps> = ({ darkMode }) => {
  return (
    <div className="relative">
      {/* Central Timeline Line */}
      <div className={`absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 ${
        darkMode ? 'bg-gray-700' : 'bg-gray-300'
      }`}>
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="w-full bg-gradient-to-b via-pink-400 from-yellow-400"
        />
      </div>

      {/* Skills */}
      <div className="space-y-16">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`relative p-6 rounded-xl shadow-lg backdrop-blur-sm border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-pink-300/50' 
                    : 'bg-gray-300/50 border-gray-200 hover:border-yellow-200'
                }`}
                style={{
                  background: darkMode 
                    ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%)'
                    : 'linear-gradient(135deg, rgba(200, 200, 200, 0.8) 0%, rgba(248, 250, 252, 0.6) 100%)'
                }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">{skill.icon}</div>
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {skill.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2 mb-4">
                  {skill.skills.map((skillName, skillIndex) => (
                    <motion.div
                      key={skillName}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className={`px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2 ${
                        darkMode 
                          ? 'bg-yellow-200 text-purple-700 border border-pink-200' 
                          : 'bg-purple-100 text-pink-400 border border-yellow-300'
                      }`}
                    >
                      {skillName}
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Proficiency
                    </span>
                    <span className={`font-semibold ${
                      darkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      {skill.progress}%
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full rounded-full bg-gradient-to-r via-pink-400 from-yellow-400"
                    />
                  </div>
                </div>

                {/* Floating Decoration */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r via-pink-400 from-yellow-400 ${
                  index % 2 === 0 ? 'animate-pulse' : 'animate-bounce'
                }`} />
              </motion.div>
            </div>

            {/* Central Node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 w-6 h-6 rounded-full bg-gradient-to-r via-pink-400 from-yellow-400 shadow-lg"
            >
              <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-r via-pink-400 from-yellow-400" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillTimeline;