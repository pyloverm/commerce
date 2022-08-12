import React from 'react';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";
import { urlFor } from '../lib/client';
import { useRouter } from 'next/router'


const HeroBanner = ({ heroBanner }) => {
  let { t } = useTranslation();
  var lang = useRouter().locale;
  if (lang === 'en-US'){
    lang = 'en';
  }
  
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.largeText1[lang]}</p>
        <h3>{heroBanner.midText[lang]}</h3>
        <h1>{heroBanner.smallText[lang]}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner.product[lang]}`}>
            <button type="button">{heroBanner.buttonText[lang]}</button>
          </Link>
          <div className="desc">
            <h5>{t("common:Description")}</h5>
            <p>{heroBanner.desc[lang]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner