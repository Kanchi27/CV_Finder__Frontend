import {useMutation, useQuery} from 'react-query'
import {ICreateResume, IResumeDetails} from "../interfaces/resume";


/**
 * This custom hook will make use of react-query useQuery hook with key passed and dependency argument query  as to when the query cb function should execute to fetch data
 * @param key - unique key that will be used internally for refetching, caching, and sharing  queries throughout application.
 * @param query - only when query input is receive it will run the callback function
 * @param cb - function that will fetch data from the server and returns a promise
 */
export const useGetCandidate = (key: string, query:string | number, cb: (query:string|number) => any) => {
  return useQuery<IResumeDetails, Error>([key, query], () => cb(query), { enabled: !!query })
}

/**
 * This custom hook will make use of react-query useMutation hook with key passed, mutation function and success callback when the post request is made
 * @param key - unique key that will be used internally for refetching, caching, and sharing  queries throughout application.
 * @param mutationFn - Function that will be responsible for posting data to server
 * @param onSuccess - callback that needs to be executed on success
 */
export const useCreateResume = (key:string, mutationFn : (details : IResumeDetails) => any, onSuccess : (data:ICreateResume) => void) => {
  return useMutation<ICreateResume, Error, IResumeDetails>
  (key, mutationFn, {
    onSuccess
  })

}
