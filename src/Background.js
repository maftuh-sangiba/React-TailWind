import Footer from "./Footer";
import Intro from "./Intro";
import Profile from "./Profile";
import Summary from "./Summary";
import Tools from "./Tools";

export default function Background() {
    let arrayImage = [
        'logo/php.svg',
        'logo/js.png',
        'logo/sql.png',
        'logo/vsc.png',
        'logo/git.png',
        'logo/bootstrap.webp',
        'logo/laravel.png',
        'logo/postman.webp',
        'logo/ci.svg',
        'logo/flutter.png',
        'logo/laragon.png',
        'logo/tailwind.png'
    ]

    return (
        <div className="bg-fixed bg-gradient-to-b from-gray-900 to-gray-300]">
            <Profile />
            <Intro />
            <Tools toolsImg={arrayImage} />
            <Summary />
            <Footer />
        </div>
    )
}