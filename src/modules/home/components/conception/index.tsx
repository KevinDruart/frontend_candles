'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CandleMakingStory = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Réception des Matières Premières",
      icon: "📦",
      description: "Tout commence par la réception de nos matières premières d'exception : cire de soja française et parfums de Grasse sans CMR."
    },
    {
      id: 2,
      title: "Fabrication Artisanale des Pots",
      icon: "🏺",
      description: "Nous façonnons chaque pot à la main, leur donnant une forme unique qui deviendra le futur écrin de nos bougies."
    },
    {
      id: 3,
      title: "Le Bichonnage",
      icon: "✨",
      description: "Chaque pot reçoit une attention particulière : séchage, ébavurage, ponçage, lavage, et application d'un protecteur pour une finition parfaite."
    },
    {
      id: 4,
      title: "La Magie de la Bougie",
      icon: "🕯️",
      description: "Vient ensuite le moment magique où nous associons la cire et les fragrances pour créer nos bougies."
    },
    {
      id: 5,
      title: "Temps de Repos",
      icon: "⏳",
      description: "Chaque bougie prend son temps pour se reposer et développer ses arômes à la perfection."
    },
    {
      id: 6,
      title: "Emballage Créatif",
      icon: "🎨",
      description: "L'emballage est un moment créatif où notre petite artistes de 7 ans s'exprime, créant des décorations uniques et personnalisées."
    },
    {
      id: 7,
      title: "Recyclage et Protection",
      icon: "♻️",
      description: "Nos chutes de carton trouvent une seconde vie en protégeant vos bougies pendant leur voyage."
    },
    {
      id: 8,
      title: "Expédition avec Amour",
      icon: "💝",
      description: "Dernière étape : l'expédition de nos créations, accompagnées de notre gratitude pour votre confiance."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">L'Histoire de Nos Bougies</h2>
        <p className="text-gray-600">Un voyage artisanal, de la conception à la création</p>
      </motion.div>

      <div className="relative">
        {/* Timeline ligne verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"/>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              whileHover={{ scale: 1.02 }}
              className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <motion.div
                  className={`p-6 rounded-lg ${
                    activeStep === index ? 'bg-amber-50 shadow-lg' : 'bg-white'
                  } cursor-pointer transition-colors duration-300`}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </div>

              <motion.div
                className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-amber-100 border-4 border-white shadow-lg
                  ${activeStep === index ? 'bg-amber-400' : ''}`}
                whileHover={{ scale: 1.2 }}
                initial={false}
                animate={activeStep === index ? { scale: 1.2 } : { scale: 1 }}
              >
                <span className="flex items-center justify-center h-full text-xl">
                  {step.icon}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CandleMakingStory;