import Copyright from "./components/footer/copyright";
import FLinks from "./components/footer/links";

export default function Footer(){
    return (
        <footer className="flex flex-col bg-green-1 md:px-10 py-10 w-full bottom-0">
            <FLinks />
            <hr className="border-gray-400 my-20" />
            <Copyright />
        </footer>
    )
}