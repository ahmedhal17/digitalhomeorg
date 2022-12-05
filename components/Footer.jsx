'use client';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { en, fr, ar } from '../translation';

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : locale === 'fr' ? fr : ar;
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
      id="footer"
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-slate-600">
            {t.startselling}
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <img
              src="/head.svg"
              alt="head"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              {t.account}
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-slate-900 opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <img
              src="/logohoriz.svg"
              alt="Digital Home"
              className="w-[200px] h-auto"
            />
            <p className="font-semibold text-[14px] text-black opacity-50">
              Copyright © 2022 Digital Home. {t.rights}.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
