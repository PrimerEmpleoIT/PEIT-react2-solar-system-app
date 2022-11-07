import Link from "next/link";
import React from "react";
import style from "./share.module.css";

export default function Share() {
  const url = window.location.href;

  return (
    <div className={style.share_options}>
      <p className={style.title}>compartir</p>
      <div className={style.social_media}>
        <button className={style.social_btn}>
          <Link href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
            Facebook
          </Link>
        </button>
        <button className={style.social_btn}>
          <Link href={`https://twitter.com/intent/tweet?text=${url}`}>
            Twitter
          </Link>
        </button>
        <button className={style.social_btn}>
          <Link href={`whatsapp://send?text=${url}`}>WhatsApp</Link>
        </button>
        <button className={style.social_btn}>
          <Link
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
          >
            LinkedIn
          </Link>
        </button>
      </div>
      <div className={style.link_container}>
        <div className={style.link}>{url}</div>
        <button
          className={style.copy}
          onClick={() => navigator.clipboard.writeText(url)}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
