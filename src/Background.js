import Footer from "./Footer";
import Intro from "./Intro";
import Profile from "./Profile";
import Summary from "./Summary";

export default function Background() {

    return (
        <div className="bg-cover bg-center shadow-md bg-[url('https://e1.pxfuel.com/desktop-wallpaper/34/923/desktop-wallpaper-%E2%9C%93-4-white-minimalist-iphone-iphone-minimalist.jpg')]">
            <Profile />
            <Intro />
            <Summary />
            <Footer />
        </div>
    )
}