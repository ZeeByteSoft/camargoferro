import Blogs from "@/components/common/Blogs";
import Testimonials from "@/components/common/Testimonials2";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";

import Hero from "@/components/homes/index-digital-agency/Hero";
import Portfolio from "@/components/homes/index-digital-agency/Portfolio";
import Progress from "@/components/homes/index-digital-agency/Progress";
import Service from "@/components/homes/index-digital-agency/Service";

import React from "react";

export const metadata = {
  title:
    "Home Digital Agency || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header2
        btnClass="btn-default btn-small "
        parentClass="rainbow-header header-default header-left-align header-transparent header-sticky"
      />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Hero />
      <Service />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Portfolio />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Progress />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Testimonials />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Blogs />
      <Footer2 />
    </>
  );
}
