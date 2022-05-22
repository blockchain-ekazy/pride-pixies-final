import "./App.css";
import MainHeader from "./headers/MainHeader";
import MobileHeader from "./headers/MobileHeader";
import HomeBanner from "./sections/HomeBanner";
import AboutProject from "./sections/AboutProject";
import WhatIsThisProjectAvatar from "./sections/WhatIsThisProjectAvatar";
import ProjectBenefits from "./sections/ProjectBenifits";
import SpecialItems from "./sections/SpecialItems";
import RoadMap from "./sections/RoadMap";
import JoinCommunity from "./sections/JoinCommunity";
import FAQ from "./sections/FAQ";
import Footer from "./footers/Footer";
import MeetTeam from "./sections/MeetTeam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Term from "../src/sections/Term";
import Blog from "./sections/Blog";

function App() {
  return (
    <>
      <MainHeader />
      <MobileHeader />

      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <HomeBanner />,
                <AboutProject />,
                <JoinCommunity />,
                <WhatIsThisProjectAvatar />,
                <ProjectBenefits />,
                <MeetTeam />,
                <SpecialItems />,
                <RoadMap />
                <FAQ />
              </>
            }
          />

          <Route exact path="/Term" element={<Term />} />
          <Route exact path="/Blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
