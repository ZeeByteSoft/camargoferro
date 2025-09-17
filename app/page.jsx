import HeaderPreview from "@/components/headers/HeaderPreview";
import Topbar from "@/components/headers/Topbar";


import Hero from "@/components/homes/index-travel-agency/Hero";
import Portfolio from "@/components/homes/index-digital-agency/Portfolio";
import Services from "@/components/common/Services";
import About from "@/components/homes/index-consulting/About";
import Footer1 from "@/components/footers/Footer2";



export const metadata = {
  title:
    "Preview || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function Home() {
  return (
    <>
      <div className="splash-wrapper scrollSpyLinks">
        <Topbar />
        <HeaderPreview />

        <div>
          <div className="rainbow-gradient-circle" />
          <div className="rainbow-gradient-circle theme-pink" />
        </div>
        <div className="sp-banner-bg"></div>
        
        <Hero />
        <Services />
             <About />
        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
          </div>
        </div>
        <Portfolio />

       <Footer1 /> 
        <div className="rbt-copyright-area copyright-default"></div>
      </div>
    </>
  );
}
