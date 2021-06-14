import I18n from '@/I18n';

type filesT = { type: string, size: number }

export type returnIsInvalid = string | null;

interface forThisFunction {
    (
        key: string,
        val: string | HTMLFormElement,
        compareVal?: string,
        callback?: () => void
    ): returnIsInvalid
}

const isInvalid:forThisFunction = (key, val, compareVal, callback) => {
    //console.log( "-----", key, val );
    if (!val) {
        return I18n.t('invalidEmpty');
    }
    let countUpper = 0;
    let countLower = 0;
    let isNotSymbol= true;

    switch (key) {
        case "email":
            if (typeof val === 'string' && !val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                return I18n.t('invalidWrongFormatEmail');
            }
            if (val === compareVal) {
                return I18n.t('invalidEmailAlreadyTaken');
            }

            return null;
        case "password":
            if (typeof val === 'string') {
                countUpper = 0;
                countLower = 0;
                isNotSymbol = true;

                for (let i = 0; i < val.length; i++) {

                    if (isNaN(Number(val[i])) && val[i] === val[i].toUpperCase()) {
                        countUpper++;
                    }
                    if (isNaN(Number(val[i])) && val[i] === val[i].toLowerCase()) {
                        countLower++;
                    }
                    if (isNaN(Number(val[i])) && val[i] === val[i].toLowerCase() && val[i] === val[i].toUpperCase()) {

                        isNotSymbol = false;
                    }
                }
                //console.log("-------",val.length > 6,val.match( /\d+/g ),countUpper,countLower,isNotSymbol);
                if (val.length > 6 && val.match(/\d+/g) !== null && countUpper !== 0 && countLower !== 0 && isNotSymbol) {
                    return null;
                }
            }

            return I18n.t('invalidPassFormat');
        case "passwordRecover":
            if (typeof val === 'string') {
                countUpper = 0;
                countLower = 0;
                isNotSymbol = true;

                for (let i = 0; i < val.length; i++) {
                    if (isNaN(Number(val[i])) && val[i] === val[i].toUpperCase()) {
                        countUpper++;
                    }
                    if (isNaN(Number(val[i])) && val[i] === val[i].toLowerCase()) {
                        countLower++;
                    }
                    if (isNaN(Number(val[i])) && val[i] === val[i].toLowerCase() && val[i] === val[i].toUpperCase()) {
                        isNotSymbol = false;
                    }
                }

                if (val.length > 6 && val.match(/\d+/g) !== null && countUpper !== 0 && countLower !== 0 && isNotSymbol) {
                    if (val !== compareVal) {
                        return I18n.t('invalidPassNoSame');
                    }

                    return null;

                }
            }
            //return "Пароль повинен містити хоча б одну цифру і велику літеру";

            return I18n.t('invalidPassFormat');
        case "phone":

            /*const onlyNum = val.replace(/\D/g, '');

            if (onlyNum.length !== 10) {
                return `${I18n.t('invalidPhoneFormat')}: (ххх) ххх хх хх`;
            }*/
            if (callback && callback()) {
                return I18n.t('invalidPhoneFormat');
            }

            if (val === compareVal) {
                return I18n.t('invalidPhoneAlreadyTaken');
            }

            return null;
        case "isChecked":
            if (val==='false') { 
                return "must be checked";
            }

            return null;
        case "resume":
            if (typeof val === 'object') {
                if (val.files.length === 0) {
                    return I18n.t('invalidDocFormat');
                }
                for (let i = 0; i < val.files.length; i++) {
                    if (val.files[i].size > 8000000) {
                        return I18n.t('invalidMaxLength');
                    }
                    if (
                        !(val.files[i].type.toLowerCase() === 'application/msword' ||
                            val.files[i].type.toLowerCase() === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
                            val.files[i].type.toLowerCase() === 'application/pdf'
                        )
                    ) {
                        return I18n.t('invalidAllowedFormatDoc');
                    }
                }
            }

            return null;

        case "multFiles":
            if (typeof val === 'object') {
                if (val.files.length === 0) {
                    return I18n.t('invalidFileFormat');
                }

                if (val.files.length > 5) {
                    return I18n.t('invalidMax5Files');
                }

                for (let i = 0; i < val.files.length; i++) {
                    if (val.files[i].size > 8000000) {
                        return I18n.t('invalidMaxLength');
                    } //8000000 - байт = 8мб
                    if (
                        !(val.files[i].type.toLowerCase() === 'image/png' ||
                            val.files[i].type.toLowerCase() === 'image/jpg' ||
                            val.files[i].type.toLowerCase() === 'image/jpeg' ||
                            val.files[i].type.toLowerCase() === 'application/pdf')

                    ) {
                        return I18n.t('invalidAllowedFormatFile');
                    } //8000000 - байт = 8мб
                }
            }

            return null;
        default:
            return null;
    }

};

/*const isInvalid = ( key, val ) => {
    //console.log( "-----", key, val );
    if ( !val ) return true;

    switch ( key ) {
        case "mail":
            return ( !val.match( /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i ) );
        case "password":
            let countUpper = 0;
            for(let i=0; i < val.length; i++){
                if(isNaN(+val[i]) && val[i] === val[i].toUpperCase()){
                    countUpper++;
                    break;
                }
            }
console.log("countUpper",countUpper);
            if(val.length > 6 && val.match(/\d+/g) !== null && countUpper !== 0)return null;

            return true;
        case "phone":
            const onlyNum = val.replace( /\D/g, '' );
            return onlyNum.length !== 10;
        default:
            return null
    }

};*/

export default isInvalid;
