import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-[#0a192f]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-[#64ffda] mb-4">04. What's Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
        <p className="text-[#8892b0] mb-12">
          Although I'm not currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my best to
          get back to you!
        </p>
        <motion.a
          href="mailto:hello@example.com"
          className="inline-block px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  );
}