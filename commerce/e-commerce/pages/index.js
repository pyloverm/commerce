import React from 'react';
import Head from 'next/head';
import useTranslation from "next-translate/useTranslation";
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import {useRouter} from 'next/router';

export default function Home ({ products, bannerData}) {
  let { t } = useTranslation();
  return(
    
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>{t("common:Best Seller Products")}</h2>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
  );
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData}
  }
}

