'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MaterialsPremium = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const materials = [
    {
      id: 'soy',
      name: 'Cire de Soja Française',
      shortDesc: 'L\'excellence naturelle au cœur de nos bougies',
      icon: '🌱',
      color: 'from-green-50 to-green-100',
      features: [
        {
          title: 'Origine',
          content: 'Cultivée avec soin dans nos terres françaises'
        },
        {
          title: 'Qualité',
          content: '100% naturelle et biodégradable'
        },
        {
          title: 'Performance',
          content: 'Diffusion optimale des parfums'
        },
        {
          title: 'Durabilité',
          content: 'Culture responsable et traçable'
        }
      ],
      benefits: [
        'Sans OGM',
        'Combustion propre',
        'Respect de l\'environnement',
        'Production locale'
      ]
    },
    {
      id: 'perfume',
      name: 'Parfums de Grasse',
      shortDesc: 'L\'art du parfum dans sa plus pure tradition',
      icon: '💧',
      color: 'from-purple-50 to-purple-100',
      features: [
        {
          title: 'Origine',
          content: 'Créés à Grasse, capitale mondiale du parfum'
        },
        {
          title: 'Composition',
          content: 'Fragrances naturelles sans CMR'
        },
        {
          title: 'Expertise',
          content: 'Savoir-faire artisanal français'
        },
        {
          title: 'Qualité',
          content: 'Sélection rigoureuse des essences'
        }
      ],
      benefits: [
        'Sans substances nocives',
        'Parfums durables',
        'Senteurs authentiques',
        'Création artisanale'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const expandedVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="text-center mb-16"
        variants={cardVariants}
      >
        <h2 className="text-4xl font-bold mb-6">Nos Matières Premières d&apos;Exception</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          La qualité de nos bougies commence par le choix minutieux de nos matières premières,
          sélectionnées pour leur excellence et leur origine française.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {materials.map((material) => (
          <motion.div
            key={material.id}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <motion.div
              className={`rounded-xl overflow-hidden bg-gradient-to-br ${material.color} shadow-lg`}
              layoutId={`card-container-${material.id}`}
            >
              <div className="p-8">
                <motion.div 
                  className="flex items-center justify-between mb-6"
                  layoutId={`card-header-${material.id}`}
                >
                  <motion.div
                    className="text-4xl p-4 bg-white rounded-full shadow-md"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {material.icon}
                  </motion.div>
                  {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                  <button
                    onClick={() => setSelectedId(selectedId === material.id ? null : material.id)}
                    className="text-3xl hover:scale-110 transition-transform"
                  >
                    {selectedId === material.id ? '✕' : 'ℹ️'}
                  </button>
                </motion.div>

                <motion.h3 
                  className="text-2xl font-bold mb-3"
                  layoutId={`card-title-${material.id}`}
                >
                  {material.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-700 mb-4"
                  layoutId={`card-desc-${material.id}`}
                >
                  {material.shortDesc}
                </motion.p>

                <AnimatePresence>
                  {selectedId === material.id && (
                    <motion.div
                      variants={expandedVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <div className="grid grid-cols-2 gap-6 mt-8 border-t border-gray-200 pt-6">
                        {material.features.map((feature, index) => (
                          <motion.div
                            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            key={index}
                            variants={itemVariants}
                            className="space-y-2"
                          >
                            <h4 className="font-semibold text-gray-800">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {feature.content}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        variants={itemVariants}
                        className="mt-6 pt-6 border-t border-gray-200"
                      >
                        <h4 className="font-semibold text-gray-800 mb-4">
                          Avantages
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {material.benefits.map((benefit, index) => (
                            <motion.div
                              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                              key={index}
                              variants={itemVariants}
                              className="flex items-center text-gray-600 text-sm"
                            >
                              <span className="mr-2 text-green-500">✓</span>
                              {benefit}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MaterialsPremium;