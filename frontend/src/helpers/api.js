import axios from "axios";
import {errorToast, successToast} from './alert';

let BASEURL = "http://localhost:5000/api/v1"

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
            return successToast("Account created successfully")
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
};