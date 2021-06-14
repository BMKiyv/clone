const _dev = false; //false;

const pathname = window.location.pathname;

window.localStorage.setItem('lg', pathname.indexOf('/ru') !== -1 ? 'ru' : 'uk');
//export const URL = _dev ? 'https://185.69.152.107' : 'https://tellme.com.ua';
//export const URL = process.env.BACKEND_URL;
export const URL = 'http://localhost:8080';
export const URLAPI = `${URL}/api`;
export const LANG = (() => window.localStorage.getItem('lg'))();
export const URL_LANG = LANG === 'uk' ? '' : '/ru';

export const carouselPropSpecialists = () => ({
    showArrows:           true,
    showStatus:           false,
    showIndicators:       true,
    infiniteLoop:         true,
    showThumbs:           false,
    useKeyboardArrows:    true,
    autoPlay:             true,
    stopOnHover:          true,
    swipeable:            true,
    dynamicHeight:        false,
    emulateTouch:         false,
    //thumbWidth:           number('thumbWidth', 100, {}, valuesGroupId),
    //selectedItem:         number('selectedItem', 0, {}, valuesGroupId),
    interval:             13000,
    transitionTime:       350,
    swipeScrollTolerance: 5,
});
