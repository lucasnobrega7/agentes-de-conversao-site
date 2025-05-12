import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Example text for the typing animation
  const typingExamples = [
    "Crie um chatbot para atendimento ao cliente",
    "Integre IA em seu processo de vendas",
    "Automatize respostas para perguntas frequentes",
    "Desenvolva uma assistente virtual personalizada",
    "Integre com WhatsApp para comunicação instantânea"
  ];
  
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  // Typing animation effect
  useEffect(() => {
    const currentText = typingExamples[typingIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setTypingText(currentText.substring(0, typingText.length + 1));
        
        // If completed typing current text
        if (typingText.length === currentText.length) {
          // Pause before deleting
          setTypingSpeed(1500);
          setIsDeleting(true);
        } else {
          // Regular typing speed
          setTypingSpeed(80 - Math.random() * 40);
        }
      } else {
        // Deleting
        setTypingText(currentText.substring(0, typingText.length - 1));
        
        // If completed deleting current text
        if (typingText.length === 0) {
          setIsDeleting(false);
          // Move to next example
          setTypingIndex((typingIndex + 1) % typingExamples.length);
          // Pause before typing next text
          setTypingSpeed(500);
        } else {
          // Regular deleting speed (faster than typing)
          setTypingSpeed(40 - Math.random() * 20);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [typingText, typingIndex, isDeleting, typingSpeed, typingExamples]);
  
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-accent-blue opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-60 -right-10 w-72 h-72 bg-accent-purple opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-accent-pink opacity-10 rounded-full filter blur-3xl"></div>
        
        {/* Grid background pattern */}
        <div className="absolute inset-0 grid-bg opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main headline */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Inteligência artificial para <span className="gradient-text">todos</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.h2 
            className="text-xl md:text-2xl text-foreground-secondary mb-8"
            variants={itemVariants}
          >
            Plataforma de IA conversacional para empresas que desejam automatizar o atendimento ao cliente
          </motion.h2>
          
          {/* Typing animation */}
          <motion.div 
            className="h-24 mb-8 flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="bg-surface p-4 rounded-lg max-w-xl mx-auto">
              <p className="text-md md:text-lg text-foreground-secondary">
                <span className="text-white font-mono">&gt; </span>
                <span>{typingText}</span>
                <span className="inline-block w-2 h-5 bg-accent-blue ml-1 animate-pulse"></span>
              </p>
            </div>
          </motion.div>
          
          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Link 
              href="/start" 
              className="btn btn-primary px-8 py-3 text-base md:text-lg font-medium"
            >
              Começar gratuitamente
            </Link>
            <Link 
              href="/demo" 
              className="btn btn-secondary px-8 py-3 text-base md:text-lg font-medium"
            >
              Ver demonstração
            </Link>
          </motion.div>
          
          {/* Trust badge */}
          <motion.div 
            className="mt-12 text-foreground-secondary text-sm"
            variants={itemVariants}
          >
            <p>Utilizado por mais de 10.000 empresas em todo o Brasil</p>
            <div className="flex justify-center items-center mt-6 space-x-8 opacity-70">
              {/* These would be actual logo images in a real site */}
              <div className="h-6">Empresa 1</div>
              <div className="h-6">Empresa 2</div>
              <div className="h-6">Empresa 3</div>
              <div className="h-6">Empresa 4</div>
              <div className="h-6">Empresa 5</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;