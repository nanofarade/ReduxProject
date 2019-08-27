import { LOADING_DATA_PENDING, LOADING_DATA_SUCCESS, LOADING_DATA_FAILURE } from "../types/types";
import axios from 'axios'


export const RequestData = () => {

    return (dispatch, getState) => { // retourne une fonction //Redux gère les fontions fi west les fonctions

        // The request starts
        dispatch(requestPending()) //dispatch une action pour changer l'état du state //voir action déclarée en bas en tant que fonction 
        const x = getState().todosRed.x
        axios.get('https://randomuser.me/api/?results=5').then((response) => {
            //success
           // console.log('res', response.data.results)
            dispatch(requestSuccess(response.data.results)) //la fonction est déclarée en bas
        }).catch((error) => {
            //failure 
            dispatch(requestFailure())
            //console.log('error', error.response)

        })

    }

}




/** action creators  */

const requestPending = () => ({
    type: LOADING_DATA_PENDING
})
const requestSuccess = (data) => ({
    type: LOADING_DATA_SUCCESS,
    payload: data
})
const requestFailure = () => ({
    type: LOADING_DATA_FAILURE
})