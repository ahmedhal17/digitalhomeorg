/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { motion } from 'framer-motion';

import { useRouter } from 'next/router';
import styles from '../styles';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';
import { en, fr, ar } from '../translation';

const WhatsNew = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : locale === 'fr' ? fr : ar;
  return (
    <section className={`${styles.paddings} relative z-10 overflow-hidden`} id="whatsnew">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title={t.whatsnew} />
          <TitleText title={<>{t.whatsnewindh}</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            <NewFeatures
              imgUrl="/vrpano.svg"
              title={t.title1}
              subtitle={t.subtitle1}
            />
            <NewFeatures
              imgUrl="/head.svg"
              title={t.title2}
              subtitle={t.subtitle2}
            />
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/whats-new.png"
            alt="WhatsNew"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
