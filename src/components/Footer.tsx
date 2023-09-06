import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        DAPHNE PIZZAS
      </Link>
      <p>© ALL RIGHTS RESERVED.</p>
      <p>
        coded by{" "}
        <a
          href="https://www.daphnebonilla.com"
          target="_blank"
          rel="noreferrer"
        >
          Daphne Bonilla 👩🏽‍💻
        </a>
      </p>
    </div>
  );
};

export default Footer;
