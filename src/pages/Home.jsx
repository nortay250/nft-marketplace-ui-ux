import React from "react";
import { Container } from "reactstrap";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/LiveAuction/LiveAuction";
import TopBuyer from "../components/ui/TopBuyer/TopBuyer";
import Trending from "../components/ui/Trending/Trending";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LiveAuction />
      <TopBuyer />
      <Trending />
    </div>
  );
};

export default Home;
