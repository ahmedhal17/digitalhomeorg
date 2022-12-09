'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { en, fr, ar } from '../translation';

const GetStarted = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : locale === 'fr' ? fr : ar;
  return (
    <section className={`${styles.paddings} relative z-10`} id="getstarted">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={t.howitworks} />
          <TitleText title={t.getstartedinfew} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            <div className={`${styles.flexCenter} flex-row`}><div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}><p className="font-bold text-[20px] text-white">1</p></div>
              <p className="flex-1 ml-[30px] font-normal text-[18px] text-black-900 leading-[32.4px]">
                {t.firststep}
              </p>
            </div>
            <div className={`${styles.flexCenter} flex-row`}><div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}><p className="font-bold text-[20px] text-white">2</p></div>
              <p className="flex-1 ml-[30px] font-normal text-[18px] text-black-900 leading-[32.4px]">
                {t.secondstep}
              </p>
            </div>
            <div className={`${styles.flexCenter} flex-row`}><div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}><p className="font-bold text-[20px] text-white">3</p></div>
              <p className="flex-1 ml-[30px] font-normal text-[18px] text-black-900 leading-[32.4px]">
                {t.thirdstep}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
