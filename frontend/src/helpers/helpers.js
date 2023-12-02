
//convert search parameter to object
export const convertParams = (searchParams) => {
  let params = {}
  
  for (let entry of searchParams.entries()) {
    let [key, value] = entry
    params[key] = value
  }

  return params
}