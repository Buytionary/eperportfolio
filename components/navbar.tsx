import { usePath } from "@/hooks/customHooks";
import Link from "next/link";
import React from "react";

export enum Links {
  Blog,
}
const NavItem = (Props: { href: string; title: string; text: string }) => (
  <Link href={Props.href}>
    <a className="inline-block py-4 px-2" title={Props.title}>
      {Props.text === "Eper Gaboni" ? (
        <div
          className="bg-clip-text text-transparent font-semibold tracking-wide"
          style={{
            backgroundImage: "linear-gradient(90deg,#ff4d4d,#f9cb28)",
          }}
        >
          {Props.text}
        </div>
      ) : (
        <div>{Props.text}</div>
      )}
    </a>
  </Link>
);
export function Navbar(Props: { link?: Links }): JSX.Element {
  const page = usePath();
  // page !== "/blog"
  return (
    <nav className="text-xl mb-12 flex border-b-2 justify-end">
      <div className="mr-auto">
        <NavItem href="/" title="Home" text="Eper Gaboni" />
      </div>
      {Props.link === Links.Blog && (
        <div>
          <NavItem href="/blog" title="Blog" text="Blog" />
        </div>
      )}
    </nav>
  );
}
