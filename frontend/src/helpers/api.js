import axios from "axios";
import {errorToast, successToast} from './alert';

const BASEURL = "http://localhost:5000/api/v1"

const headers = {
    headers: {
        withCredentials: true
    }
}

export default async function CatagoriesListReq(){
    try {
        let result = await axios.get(BASEURL + '/get-category', headers.headers)
        let data=result.data['data']
        return data
    } catch (error) {
        return []
    }
}

// get all gigs
export const getAllGigs = async (page, limit) => {
    try {
        let result = await axios.get(`${BASEURL}/get-gig/${page}/${limit}`, headers.headers)
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

// get gig buy category
export const getGigsByCategory = async (category, page, limit) => {
    try {
        let result = await axios.get(`${BASEURL}/get-gig-category/${category}/${page}/${limit}`, headers.headers)
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

// get gig buy seller
export const getGigsBySeller = async (seller, page, limit) => {
    try {
        let result = await axios.get(`${BASEURL}/get-gig-seller/${seller}/${page}/${limit}`, headers.headers)
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
        let result = await axios.get(`${BASEURL}/get-gig/${id}`, headers.headers)
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
        let result = await axios.get(`${BASEURL}/seller/${id}`, headers.headers)
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

// seller registration
export const sellerRegistraion = async (data) => {
    try {
        let result = await axios.post(`${BASEURL}/seller-register`, data, headers.headers);
        if (result.data['status'] === 0) {
            successToast(result.data['data']);
            return;
        } else {
            return result.data
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
};

// user registration
export const userRegistraion = async (data) => {
    try {
        let result = await axios.post(`${BASEURL}/user-register`, data, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return;
        } else {
            successToast(result.data['data']);
            return 1
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
};

// buyer login
export const buyerLogin = async (data) => {
    try {
        let result = await axios.post(`${BASEURL}/user-login`, data, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return;
        } else {
            sessionStorage.setItem('user', JSON.stringify(result.data['data']))
            successToast("login successfull")
            return result.data
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// seller login
export const sellerLogin = async (data) => {
    try {
        let result = await axios.post(`${BASEURL}/seller-login`, data, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return;
        } else {
            sessionStorage.setItem('user', JSON.stringify(result.data['data']))
            successToast("login successfull")
            return result.data
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// logout
export const logout = async () => {
    try {
        let result = await axios.get(`${BASEURL}/logout`, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            setTimeout(() => {
                window.location.replace('/')
            }, 500)
            return 0;
        } else {
            successToast(result.data['data'])
            return 1
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// get buyer detail
export const getBuyerById = async (id) => {
    try {
        let result = await axios.get(`${BASEURL}/user/${id}`, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return;
        } else {
            return result.data['data']
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// get reviews of a gig
export const getReviews = async (gigId) => {
    try {
        let result = await axios.get(`${BASEURL}/review/${gigId}`, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return;
        } else {
            return result.data['data']
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// get categories
export const getCategories = async () => {
    try {
        let result = await axios.get(`${BASEURL}/get-category`, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return;
        } else {
            return result.data['data']
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// buyer profile
export const userProfile = async () => {
    try {
        let result = await axios.get(`${BASEURL}/user-profile`, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return;
        } else {
            return result.data['data']
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// buyer profile update
export const updateBuyerProfile = async (data) => {
    try {
        let result = await axios.post(`${BASEURL}/user-update`, data, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return 0;
        } else {
            successToast(result.data['data'])
            return 1
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// create review
export const createReview = async (data) => {
    try {
        let result = await axios.post(`${BASEURL}/create-review`, data, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return 0;
        } else {
            successToast(result.data['data'])
            return 1
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// get chat messages
export const getChat = async () => {
    try {
        let result = await axios.get(`${BASEURL}/chats`, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return
        } else {
            return result.data['data']
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// get chat messages
export const getMsg = async (id) => {
    try {
        let result = await axios.get(`${BASEURL}/get-msgs/${id}`, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return
        } else {
            return result.data['data']
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// get seller profile
export const fetchSellerProfile = async () => {
    try {
        let result = await axios.get(`${BASEURL}/seller-profile`, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return
        } else {
            return result.data['data']
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}

// update seller profile
export const updateSellerProfile = async (data) => {
    try {
        let result = await axios.post(`${BASEURL}/seller-update`, data, headers.headers);
        if (result.data['status'] === 0) {
            errorToast(result.data['data']);
            return 0;
        } else {
            successToast(result.data['data'])
            return 1
        }
    } catch (error) {
        errorToast("Something went wrong");
    }
}