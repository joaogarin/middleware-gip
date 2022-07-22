/**
 * @file index.tsx
 *
 * @fileoverview Renders a About.
 */
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

interface AboutProps {
  silenceWarning: boolean;
}

const AboutPage: NextPage<AboutProps> = ({}) => {
  return (
    <div>
      Hello about page
      <br />
      <Link href="/">back to home</Link>
    </div>
  );
};

AboutPage.getInitialProps = async (ctx) => {
  console.log(
    "Where am I running : ",
    typeof window === "undefined" ? "server" : "client"
  );
  return {
    silenceWarning: true,
  };
};

export default AboutPage;
