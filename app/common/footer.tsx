import { NAME } from "./consts";

// Footer component
const getYear = () => {
    return new Date().getFullYear();
}

export const Footer = () => {
    return (<>
        <footer className="bg-linear-to-bl from-gray-900 to-gray-950 text-white py-4 px-4 ring-1 ring-gray-700 text-center">
            <span className="font-semibold pr-0.5">&copy; {getYear()} {NAME} </span>
            My website is a work in progress! Check back later.
        </footer>
    </>)
}