import AboutUsPage from "./components/Pages/AboutUsPage/AboutUsPage";
import AchivementPage from "./components/Pages/AchivementPage/AchivementPage";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import PicturePage from "./components/Pages/PicturePage/PicturePage";
import WorkWithUsPage from "./components/Pages/Work/WorkWithUsPage";
export default function Home() {
  return (
  <div
  className="font-family-primary relative z-50 overflow-x-clip">
       <LandingPage/>
      <WorkWithUsPage/>
      <PicturePage/>
      <AboutUsPage/>
      <AchivementPage/>
  </div>
  );
}
