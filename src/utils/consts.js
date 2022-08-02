import Calculator from "../components/calculator/Calculator";
import FlexGrovGalery from "../components/flex-grow-galery/FlexGrovGalery";
import Form from "../components/Form/Form";
import Popup from "../components/popup/Popup";
import MakeNewNumber from "../components/testHooks/MakeNewNumber";
import FormPage from "../pages/FormPage";

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
    {
        path: '/form',
        Component: FormPage
    },
    {
        path: '/testhooks',
        Component: MakeNewNumber
    },

];
