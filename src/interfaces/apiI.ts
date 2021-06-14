export interface sendValidPhoneI {
    phone: string
}

export interface validPhoneExpertI {
    phone: string
}

export interface validEmailExpertI {
    email: string
}

export interface sendReviewI {
    consultation_review: string,
    consultation_count: number | null,
    expert_point: number | null,
    expert_review: string,
    platform_review: string,
    token: string,
}

export interface sendExpertDataI {
    name: string,
    gender: string,
    phone: string,
    email: string,
    password: string,
    education: string,
    specializations: string,
}

export interface sendRequisitionI {
    name: string,
    gender: string,
    phone: string,
    diagnosis: string,
    diagnosisDescription: string,
    expertGender: string,
    feedbackType: string,
    feedbackContact: string,
    isAdult?: boolean,
}