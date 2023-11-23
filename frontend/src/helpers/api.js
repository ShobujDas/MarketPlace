import axios from 'axios';
import { errorToast } from './alert';
const baseUrl = "http://localhost:5000/api/v1"

// get all gigs
export const getAllGigs = async (page, limit) => {
  try {
    let result = await axios.get(`${baseUrl}/get-gig/${page}/${limit}`)
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