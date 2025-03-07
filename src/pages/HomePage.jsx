// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ServiceCards from "../components/ServiceCards";
import StatisticsSection from "../components/StatisticsSection";
import PopularProjects from "../components/PopularProjects";
import Testimonials from "../components/Testimonials";
import GuaranteeSection from "../components/GuaranteeSection";

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <ServiceCards />
        <StatisticsSection />
        <PopularProjects />
        <Testimonials />
        <GuaranteeSection />
    </div>
  )
}

export default HomePage
