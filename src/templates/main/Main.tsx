import { Nunito_Sans } from "next/font/google";
import type { ReactNode } from "react";

import Header from "@/templates/main/Header";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

const Main = (props: IMainProps) => (
  <div className={`w-fullantialiased ${nunitoSans.className}`}>
    {props.meta}

    <Header />

    <div className="mx-auto max-w-screen-2xl px-6 md:px-2">
      <main className="content py-5 text-xl">{props.children}</main>
    </div>
  </div>
);

export default Main;
