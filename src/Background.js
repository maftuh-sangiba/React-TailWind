import Footer from "./Footer";
import Intro from "./Intro";
import Profile from "./Profile";
import Summary from "./Summary";

export default function Background() {

    return (
        <div className="bg-fixed bg-contain bg-center shadow-md bg-[url('https://img.freepik.com/free-photo/moon-sky-night-background-asset-game-2d-futuristic-generative-ai_191095-2049.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=sph')]">
            <Profile />
            <Intro />
            <Summary />
            <Footer />
        </div>
    )
}