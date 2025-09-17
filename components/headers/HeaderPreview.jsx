"use client";
import { openMenu } from "@/utlis/toggleMenu";
import Link from "next/link";
import React, { useEffect } from "react";
import ModeSwitcher from "../common/ModeSwitcher";

export default function HeaderPreview() {
  useEffect(() => {
    const links = document.querySelectorAll('.scrollSpyLinks a[href^="#"]');

    links.forEach((anchor) => {
      const href = anchor.getAttribute("href");
      if (href?.includes("#") && href?.split("#")[1]) {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetSection = document.querySelector(href);
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      }
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      links.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);
  return (
    <header className="rainbow-header header-default header-not-transparent header-sticky">
      <div className="container position-relative">
        <div className="row align-items-center row--0">
          <div className="col-lg-3 col-md-6 col-4 header-logo">
            <div className="logo">
              <Link href="/">
                <img
                  className="logo-light"
                  src="/assets/images/logo/logo.png"
                  alt="Corporate Logo"
                />
                <img
                  className="logo-dark"
                  src="/assets/images/logo/logo-dark.png"
                  alt="Corporate Logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 col-md-6 col-8 position-static header-rest">
            <div className="header-right">
              <nav className="mainmenu-nav d-none d-lg-block">
                <ul className="mainmenu">
                </ul>
              </nav>
              {/* Start Header Btn  */}
              <div className="header-btn">
                <a
                  className="btn-default btn-small round"
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  Solicitar Orçamento
                </a>
              </div>
              {/* End Header Btn  */}
              {/* Start Mobile-Menu-Bar 
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button className="hamberger-button" onClick={openMenu}>
                    <i className="feather-menu" />
                  </button>
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
              {/* <ModeSwitcher />
              */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
