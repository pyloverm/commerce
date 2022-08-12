import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  let { t } = useTranslation();

  return (
    <div className="footer-container">
      <p>{t("common:2022 Victor Headphones All rights reserverd")}</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer