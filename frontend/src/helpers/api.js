import axios from "axios";

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