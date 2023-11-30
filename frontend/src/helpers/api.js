import axios from "axios";
import {errorToast, successToast} from './alert';

const BASEURL = "http://127.0.0.1:5000/api/v1"

export default async function CatagoriesListReq(){
    try {
        let result=await axios.get(BASEURL + '/get-category')
        let data=result.data['data']
        console.log(data)
        return data
    } catch (error) {
        return []
    }
}

export const getAllGigs = async (page, limit) => {
    try {
        let result = await axios.get(`${BASEURL}/get-gig/${page}/${limit}`)
        if(result.data['status'] == 0){
            errorToast(result.data['data'])
            return
        }
        else{
            return result.data['data']
        }
        
    } catch (error) {
        errorToast("something went wrong")
    }
}

// get gig by id
export const gigByID = async (id) => {
    try {
        let result = await axios.get(`${BASEURL}/get-gig/${id}`)
        if (result.data['status'] == 0) {
            errorToast(result.data['data'])
            return
        }
        else {
            return result.data['data']
        }
    } catch (error) {
        errorToast("something went wrong")
    }
}

// get seller by id
export const sellerById = async (id) => {
    try {
        let result = await axios.get(`${BASEURL}/seller/${id}`)
        if (result.data['status'] == 0) {
            errorToast(result.data['data'])
            return
        }
        else {
            return result.data['data']
        }
    } catch (error) {
        errorToast("something went wrong")
    }
}

//http://localhost:8080/api/v1/seller-register

export const sellerRegistraion = async (data) => {
    try {
        let result = await axios.post(`${BASEURL}/seller-register`,data);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return;
        } else {
            return result.data
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
};

// buyer login
export const buyerLogin = async (data) => {
    try {
        let result = await axios.post(`${BASEURL}/user-login`, data);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return;
        } else {
            localStorage.setItem('buyer', JSON.stringify(result.data['data']))
            return result.data
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// get buyer detail
export const getBuyerById = async (id) => {
    try {
        let result = await axios.get(`${BASEURL}/user/${id}`);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return;
        } else {
            localStorage.setItem('buyer', JSON.stringify(result.data['data']))
            return result.data['data']
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}