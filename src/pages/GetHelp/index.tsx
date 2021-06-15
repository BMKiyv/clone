//Core
import React, { useEffect, useState } from 'react';
import './style.scss';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ua from 'react-phone-number-input/locale/ua.json';
import ru from 'react-phone-number-input/locale/ru.json';
import I18n from "@/I18n";

//Components
import Btn from "@/components/Btn";
import SlideDots from "@/components/SlideDots";
import FieldText from "@/components/fields/FieldText";
import FieldRadios from "@/components/fields/FieldRadios";
import FieldSelect from "@/components/fields/FieldSelect";
import FieldTextarea from "@/components/fields/FieldTextarea";
import FieldCheckbox from "@/components/fields/FieldCheckbox";
import FieldPhone from "@/components/fields/FieldPhone";
import ResultFotm from "@/components/ResultFotm";
import { diagnosis, abuser } from '@/jsons';
import Modal from '../../components/Modal';
import GeneralModal from '../../components/modals/GeneralModal';
//import OverLoad from '../../components/modals/templatesModal/OverLoad';
import PhonePopUp from '../../components/modals/templatesModal/PhonePopUp';
import ModalGetHelp from '../../components/modals/templatesModal/ModalGetHelp';

import { sendRequisitionI } from '@/interfaces/apiI';
import { getHelpI } from '@/interfaces';

//Utils
import isInvalid, { returnIsInvalid } from "@/utils/isInvalid";
import { useRemoveKeydown } from "@/utils/customHooks/useRemoveKeydown";
import { LANG } from "@/utils/constants";
import { sendValidPhone, sendRequisition } from "@/API";

const GetHelp:React.FC = () => {
    useRemoveKeydown();
    const [activeSlide, setActiveSlide] = useState(1);
    const [loader, setLoader] = useState(false);
    const [openModal, setOpenModal] = useState(true);
    const [resultSend, setResultSend] = useState<number | null>(null);
    const [hideBtnNext, setHideBtnNext] = useState(false);
    const [hideModalPhone, setHideModalPhone] = useState(true);
    //const [overLoad, setOverLoad] = useState(true);
    const [data, setData] = useState<getHelpI>({

        name:                        '',
        surname:                     '',
        gender:                      "male",
        //isAdult:                     false,
        phone:                       "+380 ",
        diagnosis:                   "",
        diagnosisDescription:        "",
        inChildhood:                 "yes",
        inPresent:                   "present",
        abuser:                      "",
        abuseDescription:            "",
        expertGender:                "no_matter",
        //feedbackType:                "phone",
        //feedbackContact:             "",
        //feedbackWeekDay:             "mon",
        //feedbackTime:                "8:00",
        //agree:                       false,
        nameInvalid:                 null,
        surnameInvalid:              null,
        genderInvalid:               null,
        phoneInvalid:                null,
        diagnosisInvalid:            null,
        diagnosisDescriptionInvalid: null,
        abuseDescriptionInvalid:     null,
        expertGenderInvalid:         null,
        //feedbackTypeInvalid:         null,
        //feedbackContactInvalid:      null,
        //feedbackWeekDayInvalid:      null,
        //feedbackTimeInvalid:         null,
        //isAdultInvalid:              null,
        agreeInvalid:                null,
        inChildhoodInvalid:          null,
        inPresentInvalid:            null,
        abuserInvalid:               null,
    });
    const [dataForSending, setDataForSending] = useState({} as sendRequisitionI);

    const handleChange = (
        event: React.ChangeEvent<HTMLTextAreaElement> |
            React.ChangeEvent<HTMLInputElement> |
            React.ChangeEvent<HTMLSelectElement>
    ) => {
        const target = event.target;
        const newData = { ...data } as any; //:TODO any
        const targetName = target.name as keyof getHelpI;

        let value: string | boolean = target.value;

        if (target instanceof HTMLInputElement) {
            if (target.type === 'checkbox') {
                value = target.checked;
            }
        }

        if (target.name === "feedbackType" && value === "phone") {
            newData.feedbackContact = "";
        }

        newData[targetName] = value;

        newData[`${targetName}Invalid`] = null;
        setData(newData);
    };

    const onChangePhone = (tel:string) => {
        //console.log('tel', tel);

        const copyData = { ...data, phone: tel, phoneInvalid: null };

        setData(copyData);
    };

    useEffect(() => {
        window.scrollTo({
            top:      0,
            behavior: "smooth",
        });

    }, [activeSlide]);

    const onSendData = () => {
        setOpenModal(false);
        setLoader(true);

        setTimeout(() => {
            sendRequisition(dataForSending)
                .then((response) => {
                    // console.log(response, dataForSending);

                })
                .catch((error) => {
                    setResultSend(2);
                    console.log(error);
                }).finally(() => {
                    setLoader(false);
                });
        }, 600);
    };

    // const onCloseOverLoad = () => {
    //     setOverLoad(false);
    // };

    const handleExistingPhone = () => {
        setHideBtnNext(true);
        const phone = { phone: data.phone };

        sendValidPhone(phone)
            .then(() => {
                setActiveSlide((prev) => prev + 1);
            })
            .catch((error) => {
                console.log(error.response.status);
                setHideModalPhone(false);
            })
            .finally(() => {
                setHideBtnNext(false);
            });

    };

    const onPress = () => {
        const newData = { ...data };

        let name:returnIsInvalid;
        let surname:returnIsInvalid;
        let phone:returnIsInvalid;
        // let isAdult:returnIsInvalid;
        let diagnosis:returnIsInvalid;
        let diagnosisDescription:returnIsInvalid;
        // let feedbackType:returnIsInvalid;
        // let feedbackContact:returnIsInvalid | boolean;
        // let agree:returnIsInvalid;
        let inChildhood:returnIsInvalid;
        let inPresent:returnIsInvalid;
        let abuser:returnIsInvalid;
        let abuseDescription:returnIsInvalid;

        switch (activeSlide) {
            case 1:
                name = isInvalid("name", data.name);
                surname = isInvalid("surname", data.surname);
                phone = isInvalid("phone", data.phone, undefined, () => !isValidPhoneNumber(data.phone));
               // isAdult = isInvalid("isChecked", `${data.isAdult}`);

                newData.phoneInvalid = phone;
                newData.nameInvalid = name;
                newData.surnameInvalid = surname;
                //newData.isAdultInvalid = isAdult;

                if (!name && !surname && !phone) {
                    handleExistingPhone();
                } else {
                    setData(newData);
                }

                break;
            case 2:

                diagnosis = isInvalid("diagnosis", data.diagnosis);
                diagnosisDescription = isInvalid("diagnosisDescription", data.diagnosisDescription);
                inChildhood = isInvalid("isChecked", `${data.inChildhood}`);

                setHideModalPhone(true);

                newData.diagnosisInvalid = diagnosis;
                newData.diagnosisDescriptionInvalid = diagnosisDescription;
                newData.inChildhoodInvalid = inChildhood;

                if (!diagnosis && !diagnosisDescription) {
                    setActiveSlide((prev) => prev + 1);
                } else {
                    setData(newData);
                }
                break;
            default:

                //feedbackType = isInvalid("name", data.feedbackType);
                //feedbackContact = data.feedbackType === 'phone' ? false : isInvalid("surname", data.feedbackContact);
                //agree = isInvalid("isChecked", `${data.agree}`);

                //newData.feedbackTypeInvalid = feedbackType;
                //newData.feedbackContactInvalid = feedbackContact;
                //newData.agreeInvalid = agree;
                inPresent = isInvalid("isChecked", `${data.inPresent}`);
                abuser = isInvalid("abuser", data.abuser);
                abuseDescription = isInvalid("abuseDescription", data.abuseDescription);

                newData.inPresentInvalid = inPresent;
                newData.abuserInvalid = abuser;
                newData.abuseDescriptionInvalid = abuseDescription; 

                if (!inPresent && !abuser && !abuseDescription ) {
                    const dataForSend = {
                        name:                 `${data.name} ${data.surname}`,
                        gender:               data.gender,
                        inPresent:            data.inPresent,
                        phone:                data.phone,
                        diagnosis:            data.diagnosis,
                        abuser:               data.abuser,
                        expertGender:         data.expertGender,
                        //feedbackType:         data.feedbackType,
                        //feedbackContact:      data.feedbackContact,
                        //feedbackTime:         data.feedbackTime,
                        //feedbackWeekDay:      data.feedbackWeekDay,
                        //isAdult:              data.isAdult,
                        //phone:                data.phone.replace(/\D/g, ''),
                        diagnosisDescription: data.diagnosisDescription,
                        abuseDescription:     data.abuseDescription,
                    };

                    setDataForSending(dataForSend);
                    setResultSend(1);
                } else {
                    setData(newData);
                }

                break;
        }
    };

    const renderModalPhone = () => {
        if (!hideModalPhone) {
            return (
                <div className = 'get-help__result'>
                    <Modal isModal = { openModal }>
                        <GeneralModal
                            link = { '/' }
                            title = { I18n.t('popUpTitlePhone') }>
                            <PhonePopUp />
                        </GeneralModal>
                    </Modal>
                </div>
            );
        }

        return null;
    };

    if (resultSend !== null) {
        return (
            <div className = 'get-help__result'>
                <Modal isModal = { (resultSend===1 && openModal) }>
                    <GeneralModal
                        title = { I18n.t('modalGetTitle') }
                        onButtonPress = { onSendData }>
                        <ModalGetHelp />
                    </GeneralModal>
                </Modal>
                <ResultFotm

                    /*devMode = {
                    { text: "Зараз сайт працює в тестовому режимі, тому час консультації може змінитися. Про всі зміни часу консультації ви можете домовитися з психологом." }
                }*/
                    objResult = { {
                        title:       I18n.t('resultTitle'),
                        description: I18n.t('resultDescript'),
                    } }
                    success = { resultSend }
                />
            </div>
        );
    }

    return (
        <section className = 'get-help'>
            <div className = 'get-help__title-wrap'>
                <h1 className = 'second-title get-help__title'>{I18n.t('getHelpTitle')}</h1>
            </div>
            <div className = 'content-page'>
                { loader && <div className = 'loader'><span>{I18n.t('getHelpLoad')}</span></div> }
                <form className = 'form'>

                    <div className = { `form__section ${activeSlide === 1 ? "form__section--active" : ""}` }>
                        <div className = 'form__field-wrap'>
                            <FieldText
                                code = 'name'
                                invalid = { data.nameInvalid }
                                label = { I18n.t('getHelpNameLabel') }
                                //placeholder = { I18n.t('getHelpNamePholder') }
                                onChange = { handleChange }
                            />
                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldText
                                code = 'surname'
                                invalid = { data.surnameInvalid }
                                label = { I18n.t('getHelpSnameLabel') }
                                //placeholder = { I18n.t('getHelpSnamePholder') }
                                onChange = { handleChange }
                            />
                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldPhone
                                code = 'phone'
                                invalid = { data.phoneInvalid }
                                label = { I18n.t('getHelpTel') }
                                locale = { LANG === 'uk' ? ua : ru }
                                placeholder = { I18n.t('placeholderPhone') }
                                value = { data.phone }
                                onChange = { onChangePhone }
                            />
                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldRadios
                                code = 'gender'
                                label = { I18n.t('getHelpRadioGender') }
                                list = { [{ val: 'male', title: I18n.t('getHelpMale') }, { val: 'female', title: I18n.t('getHelpFemale') }] }

                                onChange = { handleChange }
                            />

                        </div>
                        {/* <div>
                            <FieldCheckbox
                                code = 'isAdult'
                                invalid = { data.isAdultInvalid }
                                text = { I18n.t('getHelpAdult') }
                                onChange = { handleChange }
                            />
                        </div> */}
                    </div>

                    <div className = { `form__section ${activeSlide === 2 ? "form__section--active" : ""}` }>
                        <div className = 'form__field-wrap'>
                            <FieldSelect
                                code = 'diagnosis'
                                invalid = { data.diagnosisInvalid }
                                label = { I18n.t('getHelpLabel') }
                                listOption = { diagnosis }
                                onChange = { handleChange }
                            />

                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldTextarea
                                code = 'diagnosisDescription'
                                invalid = { data.diagnosisDescriptionInvalid }
                                label = { I18n.t('areaGetHelpLabel') }
                                placeholder = { I18n.t('areaGetHelpPholder') }
                                onChange = { handleChange }
                            />
                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldRadios
                                code = 'inChildhood'
                                label = { I18n.t('getHelpRadiochild') }
                                list = { [{ val: 'yes', title: I18n.t('getHelpChildYes') }, { val: 'no', title: I18n.t('getHelpChildNo') }] }

                                onChange = { handleChange }
                            />

                        </div>
                    </div>

                    <div className = { `form__section ${activeSlide === 3 ? "form__section--active" : ""}` }>
                        {/* <div className = 'form__field-wrap'>
                            <FieldSelect
                                code = 'feedbackType'
                                defaultValue = 'phone'
                                invalid = { data.diagnosisInvalid }
                                label = { I18n.t('getHelpFeedBackLabel') }
                                listOption = { [
                                    { val: 'phone', title: I18n.t('getHelpTelList') },
                                    { val: 'telegram', title: 'Telegram' },
                                    { val: 'skype', title: 'Skype' },
                                    { val: 'zoom', title: 'Zoom' },
                                    { val: 'viber', title: 'Viber' }
                                ] }
                                // subText = 'Если Вы гражданин Беларуси, пожалуйста, выберите, любой вариант, кроме номера телефона*'
                                onChange = { handleChange }
                            />
                        </div> */}
                        {/* { data.feedbackType !== "phone" &&
                        <div className = 'form__field-wrap'>
                            <FieldText
                                code = 'feedbackContact'
                                invalid = { `${data.feedbackContactInvalid}` }
                                label = { `Ведіть як ви підписані в ${data.feedbackType}` }
                                placeholder = '@user'
                                onChange = { handleChange }
                            />
                        </div>
                        } */}
                        {/* <div className = 'form__field-wrap'>
                            <FieldCheckbox
                                code = 'agree'
                                invalid = { data.agreeInvalid }
                                link = '/privacy-policy'
                                linkText = { I18n.t('getHelpAgreeLink') }
                                text = { I18n.t('getHelpAgreeText') }
                                onChange = { handleChange }
                            />
                        </div> */}
                        <div className = 'form__field-wrap'>
                            <FieldRadios
                                code = 'inPresent'
                                label = { I18n.t('getHelpinPresent') }
                                list = { [{ val: 'past', title: I18n.t('getHelpPast') }, { val: 'present', title: I18n.t('getHelpPresent') }] }

                                onChange = { handleChange }
                            />

                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldSelect
                                code = 'abuser'
                                invalid = { data.abuserInvalid }
                                label = { I18n.t('getHelpAbuser') }
                                listOption = { abuser }
                                onChange = { handleChange }
                            />

                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldTextarea
                                code = 'abuseDescription'
                                invalid = { data.abuseDescriptionInvalid }
                                label = { I18n.t('areaGetHelpLabel') }
                                placeholder = { I18n.t('areaGetHelpPholder') }
                                onChange = { handleChange }
                            />
                        </div>
                    </div>

                </form>
                <div>
                    <div className = 'get-help__pagination'>
                        <SlideDots activeSlides = { activeSlide } slides = { 3 } />
                    </div>

                    <div className = 'get-help__btn-wrap'>
                        { hideBtnNext
                            ? <div className = 'load'><span>{I18n.t('getHelpLoad')}</span></div>
                            :
                            <Btn
                                full
                                theme = 'main'
                                title = { activeSlide === 3 ? I18n.t('buttonSubmit') : I18n.t('buttonContinue') }
                                onPress = { onPress }
                            />
                        }
                    </div>
                </div>
            </div>
            { renderModalPhone() }
            {/* { renderOverLoad() } */}
        </section>
    );
};

export default GetHelp;
