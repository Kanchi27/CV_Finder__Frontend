import { FC, useState } from "react";
import logo from '../images/resume.jpg';
import { UPLOAD_RESUME } from "../constants";
import AddResume from "./AddResume";

const Navbar: FC = () => {
    const [isModal, openModal] = useState<boolean>(false);
    return (
        <>
            <nav
                className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                <div className="px-6 w-full flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <img src={logo} alt={'logo'} className="max-w-none w-24" loading="lazy" />
                    </div>
                    <div className="flex items-center lg:ml-auto">
                        <button type="button"
                            onClick={() => openModal(!isModal)}
                            className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">{UPLOAD_RESUME}
                        </button>
                    </div>
                </div>
            </nav>
            {isModal && <AddResume onClose={() => openModal(!isModal)} />}
        </>

    )
}
export default Navbar