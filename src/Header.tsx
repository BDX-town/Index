import React from "react";

import { IconBrandMastodon, IconArticle, IconMail } from "@tabler/icons-react";
import { Line, Button } from "@bdxtown/canaille";

export const Header = () => {
  return (
    <>
      <header className="mb-3 flex justify-center sm:justify-between items-center sm:flex-row flex-wrap-reverse gap-3">
        <div className="flex gap-4 items-center">
          <a
            href="https://bdx.town"
            className="flex items-center flex-wrap gap-2 justify-center"
          >
            <Button variant="primary" size={50}>
              <IconBrandMastodon aria-hidden />
            </Button>
            Fediverse
          </a>
          <a
            href="https://noircir.bdx.town"
            className="flex items-center flex-wrap gap-2 justify-center"
          >
            <Button variant="primary" size={50}>
              <IconArticle aria-hidden />
            </Button>
            Blogging
          </a>
          <a
            href="#email"
            className="flex items-center flex-wrap gap-2 justify-center"
          >
            <Button variant="primary" size={50}>
              <IconMail aria-hidden />
            </Button>
            Mailing
          </a>
        </div>
        <img
          alt="bdx.town logo"
          aria-hidden="true"
          className="w-[50px] h-[50px]"
          src="logo.svg"
        />
      </header>
      <Line />
    </>
  );
};
