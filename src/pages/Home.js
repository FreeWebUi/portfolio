import AboutBanner from "../components/about/AboutBanner";
import PeopleTalkAbout from "../components/about/PeopleTalkAbout";
import WorkExperience from "../components/about/WorkExperince";

export default function Home() {
    return <div className="homePage">
        <AboutBanner />
        <PeopleTalkAbout />
        <WorkExperience />
    </div>
}