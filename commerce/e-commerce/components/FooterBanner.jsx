import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  const lang = useRouter().locale;
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h3>{largeText2[lang]}</h3>
          <h3>{discount}</h3>
          <p>{saleTime[lang]}</p>
        </div>
        <div className="right">
          <p>{largeText1[lang]}</p>
          <h3>{midText[lang]}</h3>
          <p>{desc[lang]}</p>
          <Link href={`/product/${product[lang]}`}>
            <button type="button">{buttonText[lang]}</button>
          </Link>
        </div>

        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner