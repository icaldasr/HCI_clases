import axios from 'axios';
import { SERVER_URL } from '../../utils/config';

export const setBooks = () => (dispatch) => {
    //Hacer la petición al servidor
    //Una vez que llega la petición a react, se lanza el dispatch con la información que llegue
    axios.post(SERVER_URL + '/users').then(Response => {

        dispatch({
            type: 'SET_TITLE',
            payload: { }
        });
    });

}