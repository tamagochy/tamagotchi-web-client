import axios from 'axios';
import apiConfig from '../../../config';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export const api = {
    auth: axios.create({
        baseURL: apiConfig.authUrl,
        headers
    }),
    base: axios.create({
        baseURL: apiConfig.basicMechanicsUrl,
        headers
    })
};

export const credentials = (other) => {
    return {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        ...other
    }
};
