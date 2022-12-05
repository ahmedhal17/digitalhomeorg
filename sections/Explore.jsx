'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { ExploreCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';
import { exploreProducts } from '../constants';
import { useRouter } from 'next/router';
import { en, fr, ar } from '../translation';

function Explore() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : locale === 'fr' ? fr : ar;
  const [active, setActive] = useState('product-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={t.catalogue} textStyles="text-center" />
        <TitleText
          title={
            <>
              {t.onestop} <br className="md:block hidden" /> {t.onesupplier}
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          <ExploreCard
            imgUrl="/planet-01.png"
            id="product-1"
            title={t.egift}
            active={active}
            handleClick={setActive}
          />
          <ExploreCard
            imgUrl="/planet-02.png"
            id="product-2"
            title={t.subscription}
            active={active}
            handleClick={setActive}
          />
          <ExploreCard
            imgUrl="/planet-03.png"
            id="product-3"
            title={t.recharge}
            active={active}
            handleClick={setActive}
          />
          <ExploreCard
            imgUrl="/planet-04.png"
            id="product-4"
            title={t.gaming}
            active={active}
            handleClick={setActive}
          />
          <ExploreCard
            imgUrl="/planet-05.png"
            id="product-5"
            title={t.software}
            active={active}
            handleClick={setActive}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Explore;
