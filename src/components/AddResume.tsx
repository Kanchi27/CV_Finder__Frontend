import { FC, useState } from "react";
import {
    ADD_RESUME,
    CANCEL_TEXT,
    ERROR_MESSAGE,
    REQUIRED_VALIDATION,
    SUBMIT_TEXT,
    UPLOAD_SUCCESS_MSG
} from "../constants";
import { ICreateResume, IModal, IResumeDetails } from "../interfaces/resume";
import InputText from "../atoms/InputText";
import ButtonElem from "../atoms/ButtonElem";
import { UseMutationResult } from "react-query";
import { addCandidateResume } from "../utils/resume.helper";
import {useCreateResume} from "../hooks/useGetCandidate";
import ErrorMessage from "../atoms/ErrorMessage";

const AddResume: FC<IModal> = ({ onClose }: IModal) => {
    const [candidateDetails, setCandidateDetails] = useState<IResumeDetails>({
        firstName: '',
        lastName: '',
        jobTitle: '',
        jobDescription: '',
        currentCompany: ''
    });
    const [error, setError] = useState<string>('');
    const [resumeId, setResumeId] = useState<number>(0);
    const { firstName, lastName, jobTitle, jobDescription, currentCompany } = candidateDetails;

    /**
     * This callback function will setResume id received from successful post requeset
     * @param data - data received from server
     */
    const onSuccess = (data: ICreateResume) => {
        setResumeId(data ?.data ?.resumeId);
        setTimeout(onClose, 2500);
                }

    const mutation : UseMutationResult<ICreateResume, Error, IResumeDetails> = useCreateResume('addCandidateResume',(candidateDetails: IResumeDetails) => addCandidateResume(candidateDetails),onSuccess)

    /**
     * On submit handler for calling mutation when candidate details are received
     */
    const onSubmit = () => {
        if (firstName && lastName && jobTitle && jobDescription && currentCompany) {
            mutation.mutate(candidateDetails)
        } else {
            setError(REQUIRED_VALIDATION)
        }
    }

    /**
     * On Input change handler to set form inputs
     * @param value - value added by user
     * @param name - input element for which value has been entered
     */
    const onChange = (value: string, name: string) => {
        setCandidateDetails({
            ...candidateDetails,
            [name]: value,
        });
    }
    return (
        <div
            className="modal fade fixed w-full flex items-center justify-center z-10 top-32">
            <div className="modal-dialog relative w-auto bg-gray-300">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header p-8 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-2xl font-black text-gray-600" id="exampleModalLabel">{ADD_RESUME}</h5>
                    </div>
                    <div className="modal-body relative p-4">
                        <form>
                            <div className="form-group mb-6">
                                <InputText name={'firstName'} placeholder={'*Enter First Name'} value={firstName} onChange={onChange} />
                                <InputText name={'lastName'} placeholder={'*Enter Last Name'} value={lastName} onChange={onChange} />
                                <InputText name={'jobTitle'} placeholder={'*Enter Current Designation '} value={jobTitle} onChange={onChange} />
                                <InputText name={'currentCompany'} placeholder={'*Enter Current Company Name '} value={currentCompany} onChange={onChange} />
                                <InputText name={'jobDescription'} placeholder={'*Enter Job description '} value={jobDescription} onChange={onChange} />
                            </div>
                        </form>
                        {error && <ErrorMessage error={error}/>}
                        {resumeId=== -1 ? <ErrorMessage error={ERROR_MESSAGE}/> : resumeId !== 0 && <div className="text-green-600 flex justify-center font-bold">{UPLOAD_SUCCESS_MSG} {resumeId}</div>}
                    </div>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <ButtonElem label={CANCEL_TEXT} onClick={onClose} styles={"bg-purple-600 hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"} />
                        <ButtonElem label={SUBMIT_TEXT} onClick={onSubmit} styles={"bg-blue-600 ml-1 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddResume