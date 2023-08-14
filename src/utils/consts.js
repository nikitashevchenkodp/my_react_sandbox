import AnimateReorderList from '../components/AnimateReorderList/AnimateReorderList';
import Calculator from '../components/calculator/Calculator';
import Counter from '../components/Counter/Counter';
import Dnd from '../components/Dnd/Dnd';
import FlexGrovGalery from '../components/flex-grow-galery/FlexGrovGalery';
import Form from '../components/Form/Form';
import Popup from '../components/popup/Popup';
import Svg from '../components/Svg/Svg';
import MakeNewNumber from '../components/testHooks/MakeNewNumber';
import FormPage from '../pages/FormPage';
import TransitionTestPage from '../pages/TransitionTestPage';

export const PUBLICK_ROUTES = [
  {
    path: '/',
    Component: FlexGrovGalery,
  },
  {
    path: '/calculator',
    Component: Calculator,
  },
  {
    path: '/popup',
    Component: Popup,
  },
  {
    path: '/form',
    Component: FormPage,
  },
  {
    path: '/testhooks',
    Component: MakeNewNumber,
  },
  {
    path: '/transition',
    Component: TransitionTestPage,
  },
  {
    path: '/counter',
    Component: Counter,
  },
  {
    path: '/dnd',
    Component: Dnd,
  },
  {
    path: '/reorder',
    Component: AnimateReorderList,
  },
  {
    path: '/svg',
    Component: Svg,
  },
];
