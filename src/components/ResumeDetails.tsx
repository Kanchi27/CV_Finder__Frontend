import {FC, useState} from "react";
import { ICandidateResumes, IResumeDetails } from "../interfaces/resume";
import {ArrowDown, ArrowUp} from "../icons";
import { CANDIDATE_NAME, CURRENT_COMPANY, JOB_DESCRIPTION, JOB_TITLE } from "../constants";

const ResumeDetails: FC<ICandidateResumes> = ({ resumes }: ICandidateResumes) => {
    const [tabIndex, setTabIndex] = useState<number>(0)
    return (
        <div className="accordion">
            {resumes.map((resume: IResumeDetails,index:number) => {
                return (
                    <div className="accordion-item bg-white border border-gray-200" key={resume ?.id}>
                        <h2>
                            <button type="button"
                                 onClick={() => setTabIndex(index)}
                                className="flex justify-between font-black text-xl items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                                {`Resume Details for ${resume.firstName} ${resume.lastName} with Resume Id : ${resume.id}`}
                                {tabIndex=== index ? <ArrowDown /> : <ArrowUp/>}
                            </button>
                        </h2>
                        {tabIndex=== index && <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <div className="accordion-body py-4 px-5">
                                <p><span className="label">{CANDIDATE_NAME}</span>{resume.firstName} {resume.lastName}</p>
                                <p><span className="label">{JOB_TITLE}</span>{resume.jobTitle}</p>
                                <p><span className="label">{CURRENT_COMPANY}</span>{resume.currentCompany}</p>
                                <p><span className="label">{JOB_DESCRIPTION}</span> {resume.jobDescription}</p>
                            </div>
                        </div>}
                    </div>

                )
            })
            }
        </div>
    )
}
export default ResumeDetails;
