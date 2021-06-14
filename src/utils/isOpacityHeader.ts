import { useLocation } from "react-router-dom";

const isOpacityHeader =() => {
    const pathName = useLocation().pathname;

    return (
        pathName === "/" ||
        pathName === "/for-psychologists" ||
        pathName === "/ru" ||
        pathName === "/ru/" ||
        pathName === "/ru/for-psychologists"
    );
};

export default isOpacityHeader;
