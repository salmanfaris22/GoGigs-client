// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AnimatedComponent = ({ children, animationType = "fade", className }) => {
  // Define different animations
  const animations = {
    fade: { 
      hidden: { opacity: 0 }, 
      visible: { opacity: 1, transition: { duration: 0.5 } } 
    },
    slideUp: { 
      hidden: { opacity: 0, y: 30 }, 
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } 
    },
    scale: { 
      hidden: { opacity: 0, scale: 0.8 }, 
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } 
    },
    rotate: { 
      hidden: { opacity: 0, rotate: -90 }, 
      visible: { opacity: 1, rotate: 0, transition: { duration: 0.5 } } 
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={animations[animationType]}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
