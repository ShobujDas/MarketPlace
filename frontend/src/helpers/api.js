import axios from "axios";
import { errorToast } from './alert';

let BASEURL="http://localhost:8080/api/v1"

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