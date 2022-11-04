import Link from 'next/link';
import React from 'react'
import style from './share.module.css'

interface SocialShare{
  /* url: string; */
  id: number;
}

export default function Share({ id }:SocialShare) {


  const url = `https://peit-react2-solar-system-app.vercel.app/description/${id}`


  return (
    <div className={style.share_options}>
      <p className={style.title}>compartir</p>
      <div className={style.social_media}>
        <button className={style.social_btn}><Link href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//peit-react2-solar-system-app.vercel.app/description/${id}`}>Face</Link></button>
        <button className={style.social_btn}><Link href={`https://twitter.com/intent/tweet?text=https%3A//peit-react2-solar-system-app.vercel.app/description/${id}`}>Twitter</Link></button>
        <button className={style.social_btn}>WApp</button>
        <button className={style.social_btn}><Link href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A//peit-react2-solar-system-app.vercel.app/description/${id}`}>LnkdIn</Link></button>
      </div>
      <div className={style.link_container}>
         <div className={style.link} >{url}</div>
         <button className={style.copy}>Copy</button>         
      </div>

    </div>
  )
}
