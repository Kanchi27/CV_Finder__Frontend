import { HERO_TEXT, RESUME_FINDER } from "../constants";
import Navbar from "./Navbar";
import SearchResume from "./SearchResume";

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="p-10 mb-80 bg-gray-50">
                <div className="text-5xl text-center font-black  p-10 bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-purple-500">
                    <div className="py-10">{RESUME_FINDER}</div>
                    <div>{HERO_TEXT}</div>
                </div>
                <SearchResume />
            </div>
        </div>
    )


}

export default HomePage