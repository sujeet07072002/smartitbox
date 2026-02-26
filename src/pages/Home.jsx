import React from "react";
import Hero from "../components/Hero/Hero";
import ProcessSection from "../components/ProcessSection/ProcessSection";
import BusinessSection from "../components/BusinessSection/BusinessSection";
import ServicesGolden from "../components/ServicesGolden/ServicesGolden";
import WorkingProcess from "../components/WorkingProcess/WorkingProcess";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import BlogSection from "../components/BlogSection/BlogSection";
import AboutPage from "./companyPages/About";
import OurTeamHero from "./companyPages/OurTeamHero";
import CareersHero from "./companyPages/CareersHero";
import ContactHero from "./companyPages/ContactHero";
import PrivacyHero from "./companyPages/PrivacyHero";

const Home = () => {
  return (
    <>
      <Hero />
      <ProcessSection />
      <BusinessSection />
      <ServicesGolden />
      <WorkingProcess />
      <TestimonialsSection />
      <CaseStudies />
      <BlogSection />
      <AboutPage/>
      <OurTeamHero/>
      <CaseStudies/>
      <CareersHero/>
      <ContactHero/>
      <PrivacyHero/>
    </>
  );
};

export default Home;