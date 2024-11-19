import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedButton.css'; // Thêm file CSS cho button

function AnimatedButton() {
  return (
    <motion.button
      className="order-button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Đặt hàng
    </motion.button>
  );
}

export default AnimatedButton;