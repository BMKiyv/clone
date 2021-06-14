//Core
import React, { useState, useRef, useEffect, RefObject, DetailedHTMLProps, InputHTMLAttributes, MutableRefObject } from 'react';
import './style.scss';
import I18n from "@/I18n";

//Components
import Btn from "@/components/Btn";
import SlideDots from "@/components/SlideDots";
import FieldText from "@/components/fields/FieldText";
import FieldRadios from "@/components/fields/FieldRadios";
import FieldSelect from "@/components/fields/FieldSelect";
import FieldCheckbox from "@/components/fields/FieldCheckbox";
import ResultFotm from "@/components/ResultFotm";
import { diagnosis } from '@/jsons';
import InformPanel from '@/components/InformPanel';

//Utils
import { validPhoneExpert, validEmailExpert, sendExpertDoc, sendExpertData } from "@/API";
import isInvalid, { returnIsInvalid } from "@/utils/isInvalid";
import { useRemoveKeydown } from "@/utils/customHooks/useRemoveKeydown";

import { giveHelpI } from "@/interfaces";

const GiveHelp:React.FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = () => {
    useRemoveKeydown();
    const [activeSlide, setActiveSlide] = useState(1);
    const [loader, setLoader] = useState(false);
    const [resultSend, setResultSend] = useState<number | null>(null);
    const [idUser, setIdUser] = useState<number | null>(null);
    const [queryDoc, setQueryDoc] = useState<boolean | null>(null);

    const [data, setData] = useState<giveHelpI>({

        email:                 "",
        password:              "",
        passwordRecover:       "",
        personalDataAgreement: false,

        name:    '',
        surname: '',
        gender:  "male",

        phone:           "",
        education:       "",
        specializations: "",

        multFiles:                    "",
        resume:                       "",
        //==================
        emailInvalid:                 "",
        passwordInvalid:              "",
        passwordRecoverInvalid:       "",
        personalDataAgreementInvalid: "",

        nameInvalid:    "",
        surnameInvalid: "",
        genderInvalid:  "",

        phoneInvalid:           "",
        educationInvalid:       "",
        specializationsInvalid: "",

        multFilesInvalid: "",

        resumeInvalid: "",
    });

    const resumeInput = useRef< HTMLFormElement>({} as HTMLFormElement);
    const fileInput = useRef< HTMLFormElement>({} as HTMLFormElement);

    useEffect(() => {
        window.scrollTo({
            top:      0,
            behavior: "smooth",
        });

    }, [activeSlide]);

    /*    if (fileInput.current) {
        console.log("fileInput.current.files", fileInput.current.files);
    }*/

    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement> |
    React.ChangeEvent<HTMLInputElement> |
    React.ChangeEvent<HTMLSelectElement>) => {
        const target = event.target;
        const newData = { ...data } as any; //:TODO Any
        const targetName = target.name as keyof giveHelpI;

        let value: string | boolean | string[] = target.value;

        if (target instanceof HTMLInputElement) {
            if (target.type === 'checkbox') {
                value = target.checked;
            }
        }

        if (targetName === "specializations") {
            if (target instanceof HTMLSelectElement) {
                const selectOption = target.selectedOptions;

                const list = [...selectOption].map((o) => o.value);

                value = list;
                if (list[0] === "") {
                    value = list.slice(1);
                }
            }
        }

        if (targetName === "resume") {
            const keys_resume = Object.keys(resumeInput?.current?.files);

            value = keys_resume.length !== 0 ? keys_resume : "";
            //console.log(newData);
            //console.log("resumeInput.current.files", resumeInput.current.files[0]);
        }

        if (targetName === "multFiles") {
            let keys = [] as string[];

            if (fileInput?.current?.files) {
                keys = Object.keys(fileInput.current.files);
            }

            //alert("тип - "+fileInput.current.files[0].type);

            value = keys.length !== 0 ? keys : "";
        }

        //console.log( "value-----", value );

        newData[targetName] = value;
        //newData[targetName] = value;
        //newData[`${targetName}Invalid`] = null;
        setData(newData);

    };

    const onceAxios = (currName: string, currFile: string | Blob, _id:number) => {
        //currName - это ключ(свойсво)
        //currFile - это его значение.
        const form_data = new FormData();

        setLoader(true);

        form_data.append(currName, currFile);

        return sendExpertDoc(form_data, _id)
            .then((response) => {
                setQueryDoc(true);

                return true;
            })
            .catch((error) => {
                if (currFile instanceof HTMLFormElement) {
                    alert(`Файл ${currFile.name} не було завантажено. Спробуйте ще раз. `);
                }
                setQueryDoc(false);
                setLoader(false);

                return false;
            });

    };

    const multipleAxios = (ind: number, _id:number, lengthFiles: number) => {
        if (!lengthFiles) {
            return null;
        }

        setLoader(true);
        const formData = new FormData();

        formData.append("image", fileInput.current.files[ind]);

        sendExpertDoc(formData, _id)
            .then((response) => {
                if (ind === lengthFiles-1) {
                    //console.log('TRUE', ind);
                    setResultSend(1);
                } else {
                    //console.log('index', ind);
                    multipleAxios(ind+1, _id, lengthFiles);
                }

            })
            .catch((error) => {
                //setResultSend( 2 );
                alert(`Файл - ${fileInput.current.files[ind].name} не був завантажені. Всі інші файли були завантажені.`);
                if (ind < lengthFiles) {
                    multipleAxios(ind+1, _id, lengthFiles);
                }
            }).finally(() => {
                setLoader(false);
            });

    };

    const onPress = () => {
        const newData = { ...data };

        let email:returnIsInvalid;
        let password:returnIsInvalid;
        let passwordRecover:returnIsInvalid;
        let personalDataAgreement:returnIsInvalid;
        let name:returnIsInvalid;
        let surname:returnIsInvalid;
        let gender:returnIsInvalid;
        let phone:returnIsInvalid;
        let education:returnIsInvalid;
        let specializations:returnIsInvalid;
        let resume:returnIsInvalid;
        let multFiles:returnIsInvalid;

        switch (activeSlide) {
            case 1:
                email = isInvalid("email", data.email);
                password = isInvalid("password", data.password);
                passwordRecover = isInvalid("passwordRecover", data.passwordRecover, data.password);
                personalDataAgreement = isInvalid("isChecked", `${data.personalDataAgreement}`);

                if (!email && !password && !passwordRecover && !personalDataAgreement) {
                    const dataSend = { email: data.email };

                    setLoader(true);
                    setTimeout(() => {
                        validEmailExpert(dataSend)
                            .then((response) => {
                                setActiveSlide((prev) => prev + 1);
                            })
                            .catch((error) => {
                                const email = isInvalid("email", data.email, data.email);

                                newData.emailInvalid = email;
                                setData(newData);
                            }).finally(() => {
                                setLoader(false);
                            });
                    }, 500);

                } else {
                    newData.emailInvalid = email;
                    newData.passwordInvalid = password;
                    newData.passwordRecoverInvalid = passwordRecover;
                    newData.personalDataAgreementInvalid = personalDataAgreement;

                    setData(newData);
                }
                break;
            case 2:
                name = isInvalid("name", data.name);
                surname = isInvalid("surname", data.surname);
                gender = isInvalid("gender", data.gender);

                if (!name && !surname && !gender) {
                    setActiveSlide((prev) => prev + 1);
                } else {
                    newData.nameInvalid = name;
                    newData.surnameInvalid = surname;
                    newData.genderInvalid = gender;
                    setData(newData);
                }
                break;
            case 3:
                phone = isInvalid("phone", data.phone);
                education = isInvalid("education", data.education);
                specializations = isInvalid("specializations", data.specializations);

                if (!phone && !education && !specializations) {
                    const dataSend = { phone: data.phone.replace(/\D/g, '') };

                    setLoader(true);
                    setTimeout(() => {
                        validPhoneExpert(dataSend)
                            .then((response) => {
                                setActiveSlide((prev) => prev + 1);
                            })
                            .catch((error) => {
                                const phone = isInvalid("phone", data.phone, data.phone);

                                newData.phoneInvalid = phone;
                                setData(newData);
                            }).finally(() => {
                                setLoader(false);
                            });
                    }, 500);

                } else {
                    newData.phoneInvalid = phone;
                    newData.educationInvalid = education;
                    newData.specializationsInvalid = specializations;
                    setData(newData);
                }
                break;

            default:

                multFiles = isInvalid("multFiles", fileInput.current);
                resume = isInvalid("resume", resumeInput.current);

                if (!multFiles && !resume) {
                    const dataForSend = {
                        name:            `${data.name} ${data.surname}`,
                        gender:          data.gender,
                        phone:           data.phone.replace(/\D/g, ''),
                        email:           data.email,
                        password:        data.password,
                        education:       data.education,
                        specializations: data.specializations,
                    };
                    const lengthFiles = fileInput.current.files.length;
                    const resumeCurrent = resumeInput.current.files[0];

                    setLoader(true);

                    if (idUser) {
                        setTimeout(() => {
                            if (!queryDoc) {
                                onceAxios("image", resumeCurrent, idUser)
                                    .then((myres) => {
                                        if (myres) {
                                            multipleAxios(0, idUser, lengthFiles);
                                        }
                                    });

                            } else {
                                multipleAxios(0, idUser, lengthFiles);
                            }

                        }, 600);
                    } else {

                        setTimeout(() => {
                            sendExpertData(dataForSend)
                                .then((res) => {
                                    if (!res.data || !res.data.id) {
                                        throw new Error("не получил ответ======");
                                    }
                                    const _id = res.data.id;

                                    setIdUser(_id);
                                    onceAxios("image", resumeCurrent, _id)
                                        .then((myres) => {
                                            if (myres) {
                                                multipleAxios(0, _id, lengthFiles);
                                            }
                                        });
                                })

                                .catch((error) => {
                                    setResultSend(2);
                                    //alert("form -"+error.message)
                                    console.log(error);
                                });
                        }, 600);
                    }

                } else {
                    if (resume) {
                        newData.resumeInvalid = resume;
                    }
                    if (multFiles) {
                        newData.multFilesInvalid = multFiles;
                    }
                    setData(newData);
                }

                break;
        }
    };

    if (resultSend !== null) {
        return (<div className = 'give-help__result'>
            <ResultFotm
                objResult = { {
                    title:       I18n.t('giveHelpResTitle'),
                    description: I18n.t('giveHelpResDesc'),
                } }
                success = { resultSend }
            />
        </div>);
    }

    return (
        <section className = 'give-help'>
            <h1 className = 'second-title give-help__title'>{I18n.t('giveHelpTitle')}</h1>
            <div className = 'content-page'>
                { loader && <div className = 'loader'><span>{I18n.t('giveHelpLoader')}</span></div> }
                <form className = 'form' encType = 'multipart/form-data' >

                    <div className = { `form__section ${activeSlide === 1 ? "form__section--active" : ""}` }>
                        <div className = 'form__field-wrap'>
                            <FieldText
                                code = 'email'
                                invalid = { data.emailInvalid }
                                label = 'Email'
                                placeholder = { I18n.t('giveHelpEmail') }
                                type = 'email'
                                onChange = { handleChange }
                            />
                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldText
                                code = 'password'
                                invalid = { data.passwordInvalid }
                                label = 'Придумайте пароль'
                                placeholder = 'Пароль'
                                type = 'password'
                                onChange = { handleChange }
                            />
                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldText
                                code = 'passwordRecover'
                                invalid = { data.passwordRecoverInvalid }
                                label = { I18n.t('giveHelpPassword') }
                                placeholder = 'Пароль'
                                type = 'password'
                                onChange = { handleChange }
                            />
                        </div>
                        <div>
                            <FieldCheckbox
                                code = 'personalDataAgreement'
                                invalid = { data.personalDataAgreementInvalid }
                                link = '/specialist-policy'
                                linkText = { I18n.t('giveHelpAgree') }
                                text = { I18n.t('giveHelpAgreeText') }
                                onChange = { handleChange }
                            />
                        </div>
                    </div>

                    <div className = { `form__section ${activeSlide === 2 ? "form__section--active" : ""}` }>
                        <div className = 'form__field-wrap'>
                            <FieldText
                                code = 'name'
                                invalid = { data.nameInvalid }
                                label = { I18n.t('getHelpNameLabel') }
                                placeholder = { I18n.t('getHelpNamePholder') }
                                onChange = { handleChange }
                            />
                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldText
                                code = 'surname'
                                invalid = { data.surnameInvalid }
                                label = { I18n.t('getHelpSnameLabel') }
                                placeholder = { I18n.t('getHelpSnamePholder') }
                                onChange = { handleChange }
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
                    </div>

                    <div className = { `form__section ${activeSlide === 3 ? "form__section--active" : ""}` }>
                        <div className = 'form__field-wrap'>
                            <FieldText
                                code = 'phone'
                                invalid = { data.phoneInvalid }
                                label = { I18n.t('getHelpTel') }
                                placeholder = '(___) ___ __ __'
                                type = 'tel'
                                onChange = { handleChange }
                            />
                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldText
                                code = 'education'
                                invalid = { data.educationInvalid }
                                label = { I18n.t('giveHelpEducation') }
                                placeholder = { I18n.t('giveHelpEducPehold') }
                                onChange = { handleChange }
                            />
                        </div>
                        <div className = 'form__field-wrap'>
                            <FieldSelect
                                multiple
                                code = 'specializations'
                                invalid = { data.specializationsInvalid }
                                label = { I18n.t('giveHelpSpec') }
                                listOption = { diagnosis }
                                onChange = { handleChange }>
                                <InformPanel
                                    mobileMode
                                    showCTRL
                                    showIcon
                                    title = { I18n.t("informPanel") }
                                /></FieldSelect>

                        </div>
                    </div>

                    <div className = { `form__section ${activeSlide === 4? "form__section--active" : ""}` }>

                        <div className = 'field-file'>
                            <label htmlFor = 'addFile'>
                                <input
                                    hidden multiple accept = '.png, .jpg, .jpeg, .pdf' id = 'addFile'
                                    name = 'multFiles'
                                    ref = { fileInput as any }
                                    type = 'file' onChange = { handleChange }
                                />
                                <div className = 'field-file__square'>
                                    <div
                                        className = { `field-file__icon-wrap ${data.multFilesInvalid ? "field-file__icon-wrap--invalid" : ""}` }>
                                        <span
                                            className = { `field-file__icon ${data.multFilesInvalid ? "field-file__icon--invalid" : ""}` }>+</span>
                                        <div
                                            className = { `field-file__icon-text ${data.multFilesInvalid ? "field-file__icon--invalid" : ""}` }>
                                            <span>{I18n.t('giveHelpDownload')}</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            { data.multFilesInvalid &&
                            <span className = 'error__text'>{ data.multFilesInvalid }</span>}
                            <div>{
                                Array.isArray(data.multFiles) && data.multFiles.map((item:string) => (<div
                                    key = { fileInput.current.files[item].name }>
                                    <span>{ fileInput.current.files[item].name }</span></div>))
                            }</div>
                            <span className = 'field-file__text'>
                                {I18n.t('giveHelpDownEd')}
                            </span>

                        </div>

                        <div className = 'field-file resume'>
                            <label htmlFor = 'addResume'>
                                <input
                                    hidden
                                    accept = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword, application/pdf'
                                    id = 'addResume'
                                    name = 'resume'
                                    ref = { resumeInput as any }
                                    type = 'file' onChange = { handleChange }
                                />
                                <div className = 'field-file__square__resume'>
                                    <div
                                        className = { `field-file__icon-wrap ${data.resumeInvalid ? "field-file__icon-wrap--invalid" : ""}` }>
                                        <div
                                            className = { `field-file__icon-text ${data.resumeInvalid ? "field-file__icon--invalid" : ""}` }>
                                            <span>{I18n.t('giveHelpResume')}</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            { data.resumeInvalid &&
                            <span className = 'error__text'>{ data.resumeInvalid }</span>}
                            <div>{
                                Array.isArray(data.resume) && data.resume.map((item:string) => (<div
                                    key = { resumeInput.current.files[item].name }>
                                    <span>{ resumeInput.current.files[item].name }</span></div>))
                            }</div>
                            <span className = 'field-file__text'>
                                {I18n.t('giveHelpDownResume')}
                            </span>
                        </div>
                    </div>

                </form>
                <div>
                    <div className = 'give-help__pagination'>
                        <SlideDots activeSlides = { activeSlide } slides = { 4 } />
                    </div>

                    <div className = 'give-help__btn-wrap'>
                        <Btn
                            full
                            theme = 'main'
                            title = { activeSlide === 4 ? I18n.t('buttonSubmit') : I18n.t('buttonContinue') }
                            onPress = { onPress }
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default GiveHelp;
