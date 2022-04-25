import { request } from "./axios";
import {ICreateResume, IResumeDetails} from "../interfaces/resume";
import {ERROR_MESSAGE} from "../constants";

/**
 * This method will fetch resume from server for given candidate name or resume id
 * @param query - candidate name or resume id
 */
export const fetchResume = async (query: string | number) : Promise<any> => {
    let response : any;
        if (typeof query === "string") {
            const name: string = query.replace(/ /g, "+");
            response = await request({ url: `/getByName/${name}` })
        } else {
            response = await request({ url: `/getById/` + query });
        }
        return response instanceof Error ? {message : ERROR_MESSAGE} : response?.data;
}

/**
 * This method will post resume details to server
 * @param candidate - candidate details to be saved
 */
export const addCandidateResume = async (candidate: IResumeDetails) : Promise<ICreateResume> => {
    const response : any = await request({ url: '/upload', method: 'post', data: candidate });
    return response instanceof Error ? {data : {resumeId : -1}} : response;
}