import React from "react";
import PropTypes from "prop-types";

export interface globalModal {
    isModal?: boolean,
    children: React.ReactNode,
}

export interface generalTemplate {
    title:       string,

    children: React.ReactNode,
    link?:         string,
    onClose?:      ()=>void,
    onButtonPress?: ()=>void,
    toBot?:         ()=>void,
}
