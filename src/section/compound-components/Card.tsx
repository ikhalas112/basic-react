import React, { ReactNode } from "react";

function Card({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function Header({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function Footer({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

Card.Header = Header;
Card.Footer = Footer;
export default Card;
