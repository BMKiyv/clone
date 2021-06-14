//Core
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import I18n from "@/I18n";
import { sendReviewI } from "@/interfaces/apiI";
import './style.scss';

//Components
import Btn from '@/components/Btn';
import FieldRadios from '@/components/fields/FieldRadios';
import FieldTextarea from '@/components/fields/FieldTextarea';
import ResultFotm from '@/components/ResultFotm';
import { reviewForm } from '@/jsons';

//Utils
import { sendReview } from '@/API';

const GetHelp:React.FC = () => {

    const location = useLocation();

    const [countOnPress, setCountOnPress] = useState(0);
    const [loader, setLoader] = useState(false);
    const [resultSend, setResultSend] = useState<null | number>(null);
    const [conRevText, setConRevText] = useState('');
    const [data, setData] = useState<sendReviewI>({
        consultation_review: '',
        consultation_count:  null,
        expert_point:        null,
        expert_review:       '',
        platform_review:     '',
        token:               '',
    });

    useEffect(() => {
        const newData:sendReviewI = { ...data };

        if (
            newData.consultation_review !== reviewForm.consultation_review[0].val && //:TODO добавил .val, надо проверить правильно ли я сделал.
            newData.consultation_review !== reviewForm.consultation_review[1].val
        ) {
            newData.consultation_review = conRevText;
            setData(newData);
        }
    }, [conRevText]);

    useEffect(() => {
        if (location.search) {
            const arrQuery = location.search.split('=');
            //console.log("==============",arrQuery[0].substr(1))

            if (arrQuery[0].substr(1) === 'token' && arrQuery[1]) {
                const copyData = { ...data };

                copyData.token = arrQuery[1];
                setData(copyData);
            }
        }
    }, []);

    const changeConRevText = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = event.target;

        setConRevText(target.value);
    };

    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const newData = { ...data } as sendReviewI;

        let value:string | number = target.value;
        const targetName = target.name as keyof sendReviewI;

        if (targetName === 'consultation_review' && value === 'other') {
            value = conRevText;
        }

        if (
            targetName === 'consultation_count' ||
            targetName === 'expert_point'
        ) {
            newData[targetName] = Number(target.value);
        } else {
            newData[targetName] = value;
        }


        //newData[ target.name + 'Invalid' ] = null;
        setData(newData);
    };

    const renderInvalidText = () => {
        return (
            <div className = 'form__invalid-block'>
                <span className = 'form__invalid-text'>
                    {I18n.t('reviewRequired')}
                </span>
                <img
                    alt = 'warning'
                    className = 'form__invalid-icon'
                    src = '/img/warning.svg'
                />
            </div>
        );
    };

    const onPress = () => {
        //console.log( "DATA-----", data );

        if (
            data.consultation_review &&
            data.consultation_count &&
            data.expert_point &&
            data.expert_review &&
            data.platform_review &&
            data.token
        ) {

            setTimeout(() => {
                sendReview(data)
                    //axios.put( 'https://185.69.152.107/api/v1/review', data )
                    .then(() => {
                        //console.log( response );
                        setResultSend(1);
                    })
                    .catch((error:unknown) => {
                        setResultSend(2);
                        console.log("error=>>>>", error);
                    })
                    .finally(() => {
                        setLoader(false);
                    });
            }, 600);
        }
        setCountOnPress(1);

    };

    if (resultSend !== null) {
        return (
            <div className = 'review__result'>
                <ResultFotm
                    objResult = { {
                        title:       I18n.t('reviewResTitle'),
                        description: I18n.t('reviewResDesc'),
                    } }
                    success = { resultSend }
                />
            </div>
        );
    }

    if (!data.token) {
        return (
            <div className = 'review__empty'>
                <span>
                    {I18n.t('reviewErr1')} <br /> {I18n.t('reviewErr2')}
                </span>
            </div>
        );
    }

    return (
        <section className = 'review'>
            <div className = 'review__group'>
                <h1 className = 'second-title review__title'>
                    {I18n.t('reviewFormTitle')}
                </h1>
                <p className = 'review__description'>
                    {I18n.t('reviewFormDescr')}.
                </p>
                <span className = 'review__description-warn'>{I18n.t('reviewReq')}</span>
            </div>

            <div className = 'content-page'>
                {loader && (
                    <div className = 'loader'>
                        <span>{I18n.t('giveHelpLoader')}</span>
                    </div>
                )}
                <form className = 'form'>
                    <div className = { `form__section form__section--active` }>
                        <div
                            className = { `review__group ${
                                data.consultation_review === '' &&
                                countOnPress > 0
                                    ? 'review__group-invalid'
                                    : null
                            }` }>
                            <h3 className = 'form__group-title'>
                                {I18n.t('reviewQuestion1')}{' '}
                                <span className = 'review__require'>*</span>
                            </h3>
                            <div className = 'form__field-wrap'>
                                <FieldRadios
                                    noDefCheck
                                    code = 'consultation_review'
                                    direction = 'column'
                                    list = { reviewForm.consultation_review }
                                    onChange = { handleChange }
                                />
                            </div>
                            <div className = 'review__other'>
                                <FieldTextarea
                                    bgField = 'light-blue'
                                    code = 'changeConRevText'
                                    placeholder = { I18n.t('reviewAnswerPhold') }
                                    onChange = { changeConRevText }
                                />
                            </div>
                            {data.consultation_review === '' && countOnPress > 0
                                ? renderInvalidText()
                                : null}
                        </div>

                        <div
                            className = { `review__group ${
                                data.consultation_count === null &&
                                countOnPress > 0
                                    ? 'review__group-invalid'
                                    : null
                            }` }>
                            <h3 className = 'form__group-title'>
                                {I18n.t('reviewQuestion2')}{' '}
                                <span className = 'review__require'>*</span>
                            </h3>
                            <div className = 'form__field-wrap'>
                                <FieldRadios
                                    noDefCheck
                                    code = 'consultation_count'
                                    direction = 'column'
                                    list = { reviewForm.consultation_count }
                                    onChange = { handleChange }
                                />
                            </div>
                            {data.consultation_count === null && countOnPress > 0
                                ? renderInvalidText()
                                : null}
                        </div>

                        <div
                            className = { `review__group ${
                                data.expert_point === null && countOnPress > 0
                                    ? 'review__group-invalid'
                                    : null
                            }` }>
                            <h3 className = 'form__group-title'>
                                {I18n.t('reviewQuestion3')}{' '}
                                <span className = 'review__require'>*</span>
                            </h3>
                            <div className = 'form__field-wrap'>
                                <FieldRadios
                                    noDefCheck
                                    code = 'expert_point'
                                    direction = 'column'
                                    list = { reviewForm.expert_point }
                                    onChange = { handleChange }
                                />
                            </div>
                            {data.expert_point === null && countOnPress > 0
                                ? renderInvalidText()
                                : null}
                        </div>

                        <div
                            className = { `review__group ${
                                data.expert_review === '' && countOnPress > 0
                                    ? 'review__group-invalid'
                                    : null
                            }` }>
                            <h3 className = 'form__group-title'>
                                {I18n.t('reviewQuestion4')}{' '}
                                <span className = 'review__require'>*</span>
                            </h3>
                            <div className = 'form__field-wrap'>
                                <FieldTextarea
                                    bgField = 'light-blue'
                                    code = 'expert_review'
                                    placeholder = { I18n.t('reviewAnswerPhold') }
                                    onChange = { handleChange }
                                />
                            </div>
                            {data.expert_review === '' && countOnPress > 0
                                ? renderInvalidText()
                                : null}
                        </div>

                        <div
                            className = { `review__group ${
                                data.platform_review === '' && countOnPress > 0
                                    ? 'review__group-invalid'
                                    : null
                            }` }>
                            <h3 className = 'form__group-title'>
                                {I18n.t('reviewQuestion5')}:{' '}
                                <span className = 'review__require'>*</span>
                            </h3>
                            <div className = 'form__field-wrap'>
                                <FieldTextarea
                                    bgField = 'light-blue'
                                    code = 'platform_review'
                                    placeholder = { I18n.t('reviewAnswerPhold') }
                                    onChange = { handleChange }
                                />
                            </div>
                            {data.platform_review === '' && countOnPress > 0
                                ? renderInvalidText()
                                : null}
                        </div>
                    </div>
                </form>
                <div>
                    <div className = 'review__btn-wrap'>
                        <Btn
                            full
                            theme = 'main'
                            title = { I18n.t('buttonSubmit') }
                            onPress = { onPress }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetHelp;
