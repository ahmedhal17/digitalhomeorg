'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { en, fr, ar } from '../translation';

const Navbar = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : locale === 'fr' ? fr : ar;

  const [toggleMenu, setToggleMenu] = useState(false);
  const [togglelangMenu, setTogglelangMenu] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 z-0" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}
      >
        <div className="lang z-[999]">
          {togglelangMenu ? (
            <img
              src="/arrow_lang.svg"
              alt="languages"
              className="w-[32px] h-[32px] object-contain cursor-pointer"
              onClick={() => setTogglelangMenu(false)}
            />
          ) : (
            <img
              src="/globe.svg"
              alt="languages"
              className="w-[32px] h-[32px] object-contain cursor-pointer"
              onClick={() => setTogglelangMenu(true)}
            />
          )}
          {togglelangMenu && (
            <div className="relative">
              <div className="bg-white px-10 py-5 z-50 rounded-md absolute top-5 text-left left-1 uppercase font-semibold text-slate-700 h-[200px] gap-4 flex flex-col items-stretch justify-around ">
                <p className="Whitespace-nowrap">
                  <a href="/en" onClick={() => setTogglelangMenu(false)}>
                    English
                  </a>
                </p>
                <p className="Whitespace-nowrap">
                  <a href="/fr" onClick={() => setTogglelangMenu(false)}>
                    Français
                  </a>
                </p>
                <p className="Whitespace-nowrap">
                  <a href="/ar" onClick={() => setTogglelangMenu(false)}>
                    العربية
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        Digital Home
      </h2> */}
        <img
          src="/logocnw.svg"
          alt="Digital Home"
          className="w-[200px] h-auto cursor-pointer"
        />
        <div className="menu">
          {toggleMenu ? (
            <img
              src="/close.svg"
              alt="menu"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <img
              src="/menu.svg"
              alt="menu"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="relative">
              <div className="bg-white px-10 py-5 z-50 rounded-md absolute top-5 text-right right-1 uppercase font-semibold text-slate-700 h-[250px] gap-4 flex flex-col items-stretch justify-around ">
                <p className="whitespace-nowrap">
                  <a href="#home" onClick={() => setToggleMenu(false)}>
                    {t.home}
                  </a>
                </p>
                <p className="whitespace-nowrap">
                  <a href="#about" onClick={() => setToggleMenu(false)}>
                    {t.about}
                  </a>
                </p>
                <p className="whitespace-nowrap">
                  <a href="#explore" onClick={() => setToggleMenu(false)}>
                    {t.products}
                  </a>
                </p>
                <p className="whitespace-nowrap">
                  <a href="#getstarted" onClick={() => setToggleMenu(false)}>
                    {t.getstarted}
                  </a>
                </p>
                <p className="whitespace-nowrap">
                  <a href="#whatsnew" onClick={() => setToggleMenu(false)}>
                    {t.whatsnew}
                  </a>
                </p>
                <p className="whitespace-nowrap">
                  <a href="#footer" onClick={() => setToggleMenu(false)}>
                    {t.account}
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
