import { string } from "prop-types";
import {AriaAttributes, DOMAttributes} from "react";

export interface dataLinksI {
    name: string,
    link: string,
}

export interface valAndTitle {
    val: string,
    title: string,
}

export interface dataListYouGetI {
    urlSvg: string,
    name: string,
}

export interface diagnosisI {
    val: string,
    title: string
}

export interface whatYouGetI {
    title: string,
    list: dataListYouGetI[]
}

export interface howWeWorkI {
    title: string,
    list: dataListYouGetI[]
}


export interface firstPsyhologI {
    bgImgClass: string,
    title: string,
    description: string,
    mainLink: dataLinksI,
    secondLink: dataLinksI
}

export interface firstHomeI extends firstPsyhologI {
    descriptionDesktop?: string,
}

export interface buttonMoreI {
    title: string,
    onPress: () => void,
}

export interface buttonI {
    url?: string | false,
    theme: string,
    title: string,
    onPress?: () => void,
    width?: string,
    nofollow?: boolean,
    full?: boolean,
    img?: string,
}

export interface InformPanelI {
    title: string,
    mobileMode?: boolean,
    showCTRL?: boolean,
    showIcon?: boolean,
}


export interface reviewFormI {
    consultation_review: valAndTitle[],
    consultation_count: valAndTitle[],
    expert_point: valAndTitle[],
}

export interface resultFormI {
    success: number,
    objResult: { title: string, description: string },
    devMode?: { text: string },
}

export interface partnersI {
    title: string,
    url: string,
    link: string,
    description: string,
}

export interface yourHelpI {
    title: string,
    src: string,
    btnTitle: string,
    description: string,
    bg: string,
    img: string,
    url?: string,
    onPress?: string,
}

export interface getHelpI {
    name:                        string,
    surname:                     string,
    gender:                      string,
    isAdult?:                    boolean,
    phone:                       string,
    diagnosis:                   string,
    diagnosisDescription:        string,
    inChildhood:                 string,
    inPresent:                   string,
    abuser:                      string,
    abuseDescription:            string,
    expertGender:                string,
    feedbackType?:                string,
    feedbackContact?:             string,
    feedbackWeekDay?:             string,
    feedbackTime?:                string,
    agree?:                       boolean,
    nameInvalid:                 string | null,
    surnameInvalid:              string | null,
    genderInvalid:               string | null,
    phoneInvalid:                string | null,
    diagnosisInvalid:            string | null,
    diagnosisDescriptionInvalid: string | null,
    expertGenderInvalid:         string | null,
    feedbackTypeInvalid?:         string | null,
    feedbackContactInvalid?:      string | boolean | null,
    feedbackWeekDayInvalid?:      string | null,
    feedbackTimeInvalid?:         string | null,
    isAdultInvalid?:             string | null,
    agreeInvalid?:                string | null,
    inChildhoodInvalid:          string | null,
    inPresentInvalid:            string | null,
    abuserInvalid:               string | null,
    abuseDescriptionInvalid:     string | null,
}

export interface giveHelpI {
    email:                 string,
    password:              string,
    passwordRecover:       string,
    personalDataAgreement: boolean,
    name:    string,
    surname: string,
    gender:  string,
    phone:           string,
    education:       string,
    specializations: string,
    multFiles:                    string | string[],
    resume:                       string | string[],
    //==================
    emailInvalid:                 string | null,
    passwordInvalid:              string | null,
    passwordRecoverInvalid:       string | null,
    personalDataAgreementInvalid: string | null,

    nameInvalid:    string | null,
    surnameInvalid: string | null,
    genderInvalid:  string | null,
    phoneInvalid:           string | null,
    educationInvalid:       string | null,
    specializationsInvalid: string | null,
    multFilesInvalid: string | null,
    resumeInvalid: string | null,
}