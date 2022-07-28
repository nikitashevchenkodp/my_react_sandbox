import Calculator from "../components/calculator/Calculator";
import FlexGrovGalery from "../components/flex-grow-galery/FlexGrovGalery";
import Popup from "../components/popup/Popup";

export const PUBLICK_ROUTES = [
    {
        path: '/',
        Component: FlexGrovGalery
    },
    {
        path: '/calculator',
        Component: Calculator
    },
    {
        path: '/popup',
        Component: Popup
    },

];
