import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { services } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
    <div className="max-w-[260px] w-full xs:w-[260px] ">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[300px] flex-col items-center justify-evenly rounded-[20px] px-1 py-5">
          <div className="h-48 w-52 flex items-center">
            <img src={icon} alt={title} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Header with motion */}
      <Header useMotion={true} {...config.sections.about} />

      {/* Render each paragraph separately with staggered animation */}
      <div className="mt-4 max-w-3xl">
        {config.sections.about.content.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={fadeIn('', '', 0.1 * (index + 1), 1)}
            initial="hidden"
            animate="show"
            className="text-secondary mb-4 text-[17px] leading-[30px]"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      {/* Services cards */}
      <div className="mt-20 flex flex-wrap gap-6 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
