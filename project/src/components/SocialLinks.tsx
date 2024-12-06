import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com' },
    { Icon: Linkedin, href: 'https://linkedin.com' },
    { Icon: Code2, href: 'https://leetcode.com' },
    { Icon: Twitter, href: 'https://twitter.com' },
    { Icon: Mail, href: 'mailto:hello@example.com' },
  ];

  return (
    <>
      <motion.div
        className="fixed left-10 bottom-0 hidden lg:flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {socialLinks.map(({ Icon, href }, index) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
          >
            <Icon size={20} />
          </motion.a>
        ))}
        <div className="w-px h-24 bg-[#8892b0]"></div>
      </motion.div>

      <motion.div
        className="fixed right-10 bottom-0 hidden lg:flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="mailto:hello@example.com"
          className="vertical-text text-[#8892b0] hover:text-[#64ffda] tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          hello@example.com
        </motion.a>
        <div className="w-px h-24 bg-[#8892b0]"></div>
      </motion.div>
    </>
  );
}