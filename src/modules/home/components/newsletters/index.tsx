'use client';
// biome-ignore lint/style/useImportType: <explanation>
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null); // null, 'success', 'error'
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      // Simuler l'envoi
      setStatus('loading');
      setTimeout(() => {
        setStatus('success');
        setEmail('');
        // Reset après 3 secondes
        setTimeout(() => setStatus(null), 3000);
      }, 1000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const sparkleVariants = {
    initial: { scale: 0, rotate: 0 },
    animate: { 
      scale: 1,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const benefits = [
    "Découvrez nos nouvelles créations en avant-première",
    "Accédez à des offres exclusives",
    "Suivez nos ateliers et événements",
    "Recevez nos conseils d'entretien"
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto p-8"
    >
      <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -mr-16 -mt-16 opacity-20" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-100 rounded-full -ml-12 -mb-12 opacity-20" />
        
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col items-center text-center mb-8">
            <motion.div
              variants={sparkleVariants}
              initial="initial"
              animate="animate"
              className="mb-6"
            >
              <span className="text-4xl">✨</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rejoignez l&apos;Aventure Artisanale
            </h2>
            <p className="text-gray-600 md:text-lg max-w-xl">
              Plongez dans l&apos;univers de nos bougies artisanales et suivez notre histoire créative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="text-amber-500">●</span>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    className="w-full px-6 py-4 rounded-lg border-2 border-amber-200 focus:border-amber-400 
                             outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-400 text-white py-4 rounded-lg
                           font-semibold shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <AnimatePresence>
                    {status === 'loading' ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <span className="animate-spin mr-2">⭐</span>
                        Inscription...
                      </motion.div>
                    ) : status === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        ✨ Bienvenue dans l&apos;aventure !
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <span>Je m&apos;inscris</span>
                        {isHovered && (
                          <motion.span
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                          >
                            ✨
                          </motion.span>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                className="text-sm text-center mt-4 text-gray-500"
              >
                Rejoignez notre communauté de passionnés de bougies artisanales
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;