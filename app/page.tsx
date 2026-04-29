
import AboutUsPage from "./components/Pages/AboutUsPage/AboutUsPage";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import PicturePage from "./components/Pages/PicturePage/PicturePage";
import WorkWithUsPage from "./components/Pages/Work/WorkWithUsPage";
export default function Home() {
  return (
  <div
  className="font-family-primary relative z-50">
      <LandingPage/>
      <WorkWithUsPage/>
      <PicturePage/>
      <AboutUsPage/>
  </div>
  );
}
