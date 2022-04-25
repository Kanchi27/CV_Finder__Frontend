export interface IResumeDetails {
    firstName: string;
    lastName: string;
    jobTitle: string;
    jobDescription: string;
    currentCompany: string;
    id?: string;
}
export interface ISearchErrorResponse {
    ['message']: string
}

export interface ICandidateResumes {
    resumes: IResumeDetails[]
}
export interface IModal {
    onClose: () => void;
}
export interface IFormElement {
    name: string;
    placeholder: string;
    value: string;
    onChange: (value: string, name: string) => void;
}
export interface IBtnProps {
    label: string;
    styles: string;
    onClick: () => void;
}
export interface ICreateResume {
    data: { resumeId: number }
}