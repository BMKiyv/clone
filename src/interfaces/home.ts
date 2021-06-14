import { firstHomeI } from './index';

export interface faqI {
    question: string,
    answer: string,
    links?: string[]
}

export interface firstBlockI{
    data: firstHomeI
}

export interface firstReviewsI{
    gender: string,
    rating: number,
    description: string,
}

export interface specialistsI{
    name: string,
    shortDescription: string,
    code: string,
    description: string,
}

