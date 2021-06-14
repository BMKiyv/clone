import { LANG } from '@/utils/constants';
import { diagnosisI, whatYouGetI, firstPsyhologI, howWeWorkI, firstHomeI,
    reviewFormI, partnersI} from '@/interfaces';
import {specialistsI, faqI} from '@/interfaces/home';
import diagnos from './diagnosis.json';
import faQ from './faq.json';
import firstHom from './firstHome.json';
import firstPsyhologist from './firstPsyholog.json';
import hoWeWork from './howWeWork.json';
import partner from './partners.json';
import reviewsForm from './reviewForm.json';
import specialist from './specialists.json';
import whathYouGet from './whatYouGet.json';
import diagnosRu from './ru/diagnosis.json';
import faQRu from './ru/faq.json';
import firstHomRu from './ru/firstHome.json';
import firstPsyhologistRu from './ru/firstPsyholog.json';
import hoWeWorkRu from './ru/howWeWork.json';
import partnerRu from './ru/partners.json';
import reviewsFormRu from './ru/reviewForm.json';
import specialistRu from './ru/specialists.json';
import whathYouGetRu from './ru/whatYouGet.json';


let diagnosis:diagnosisI[];
let faq:faqI[];
let firstHome: firstHomeI;
let firstPsyholog:firstPsyhologI;
let howWeWork:howWeWorkI;
let partners:partnersI[];
let reviewForm:reviewFormI;
let specialists: specialistsI[];
let whatYouGet:whatYouGetI;

switch (LANG) {
    case 'ru':
        diagnosis = diagnosRu;
        faq = faQRu;
        firstHome = firstHomRu;
        firstPsyholog = firstPsyhologistRu;
        howWeWork = hoWeWorkRu;
        partners = partnerRu;
        reviewForm = reviewsFormRu;
        specialists = specialistRu;
        whatYouGet = whathYouGetRu;

        break;
    default:
        diagnosis = diagnos;
        faq = faQ;
        firstHome = firstHom;
        firstPsyholog = firstPsyhologist;
        howWeWork = hoWeWork;
        partners = partner;
        reviewForm = reviewsForm;
        specialists = specialist;
        whatYouGet = whathYouGet;
        break;
}

export { diagnosis, faq, firstHome, firstPsyholog, howWeWork, partners, reviewForm, specialists, whatYouGet };
