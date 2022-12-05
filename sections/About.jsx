'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useRouter } from 'next/router';
import { en, fr, ar } from '../translation';

function About() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : locale === 'fr' ? fr : ar;
  return (
    <section className={`${styles.paddings} relative z-10`} id="about">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText
          title={t.about}
          textStyles="text-center"
          className="text-slate-600"
        />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-slate-800"
        >
          {t.aboutsection}
        </motion.p>
        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        ></motion.img>
      </motion.div>
    </section>
  );
}

export default About;
