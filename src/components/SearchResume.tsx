import { UseQueryResult } from 'react-query';
import { IResumeDetails, ISearchErrorResponse } from "../interfaces/resume";
import { useState } from "react";
import { useGetCandidate } from "../hooks/useGetCandidate";
import { LOADING_TEXT, SEARCH_BY_CANDIDATE_NAME, SEARCH_BY_ID } from "../constants";
import { SearchInput } from "../atoms/SearchInput";
import { fetchResume } from "../utils/resume.helper";
import ResumeDetails from "./ResumeDetails";
import ErrorMessage from "../atoms/ErrorMessage";

const SearchResume: React.FC = () => {
    const [query, setQuery] = useState<any>(null);
    const { isLoading, data }: UseQueryResult<IResumeDetails | Array<IResumeDetails>, Error> = useGetCandidate('candidate',query, fetchResume);


    /**
     * On submit handler for query input
     * @param input - query input received from user, resume id or candidate full name
     */
    const onSubmit = (input: string | number) : void => {
        input!==null && setQuery(input)
    }

    /**
     * This method returns loader element while data is being fetched
     */
    const getLoadingElem = (): JSX.Element => (
        <div className="flex justify-center items-center">
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
                <span>{LOADING_TEXT}</span>
            </div>
        </div>
    )

    /**
     * This method returns error message element when an error is encountered
     */
    const getErrorElem = (): JSX.Element => {
        const error: ISearchErrorResponse = { ...data } as ISearchErrorResponse;
        return <ErrorMessage error={error.message}/>
    }

    return (
        <>
            <div className="flex justify-center max-w-3xl m-auto flex-wrap">
                <SearchInput placeholder={SEARCH_BY_ID} type="number" onSubmit={onSubmit} />
                <SearchInput placeholder={SEARCH_BY_CANDIDATE_NAME} type="text" onSubmit={onSubmit} />
            </div>
            {isLoading && getLoadingElem()}
            {(data ?.hasOwnProperty('message')) ? getErrorElem() : data ? <ResumeDetails resumes={Array.isArray(data) ? data : [data]} /> : <></>}
        </>
    );
};

export default SearchResume;

