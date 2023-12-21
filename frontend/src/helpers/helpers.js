import { errorToast } from './alert';

//convert search parameter to object
export const convertParams = (searchParams) => {
  let params = {}
  
  for (let entry of searchParams.entries()) {
    let [key, value] = entry
    params[key] = value
  }

  return params
}

// email validator
const validateEmail = (email) => {
  let validate = email.toLowerCase().match(/^ [a - z0 - 9](\.?[a - z0 - 9]){ 5, }@g(oogle) ? mail\.com$/);
  return validate
}

// buyer registration form vaidate
export const buyerRegValidate = (data) => {

  if (data.firstName.trim().length <= 3 || data.lastName.trim().length <= 3){
    errorToast("Names can't be less than 3 characters")
    return false
  }
  else if (validateEmail(data.email)){
    errorToast("give valid email")
    return false
  }
  else if (data.password.length <= 7){
    errorToast("pass can't be less than 8 characters")
    return false
  }
  else if (data.img.trim().length <= 10 ){
    errorToast("type the link properly")
    return false
  }
  else if (data.phone.length < 11){
    errorToast("[phone] can't be less that 11 characters")
    return false
  }
  else if (data.country.trim().length <= 3 || data.city.trim().length <= 3 || data.road.trim().length < 1 || data.houseNo.trim().length < 1){
    errorToast("address can't be empty")
    return false
  }
  else{
    return true
  }
}


// seller registration validate
export const sellerRegistrationValidate = (data) => {
  if (data.serviceName.trim().length <= 8 || data.serviceName.trim().length >= 20) {
    errorToast("provider name length 8 - 20")
    return false
  }
  else if (validateEmail(data.email)) {
    errorToast("give valid email")
    return false
  }
  else if (data.password.length <= 7) {
    errorToast("pass can't be less than 8 characters")
    return false
  }
  else if (data.img.trim().length <= 10) {
    errorToast("type the link properly")
    return false
  }
  else if (data.phone.length < 11) {
    errorToast("phone can't be less than 13 characters")
    return false
  }
  else if (data.country.trim().length <= 3 || data.city.trim().length <= 3 || data.road.trim().length < 1 || data.houseNo.trim().length < 1) {
    errorToast("address can't be empty")
    return false
  }
  else if (data.short_des == "" || data.short_des.trim().length <= 10){
    errorToast("too small short description")
    return false
  }
  else {
    return true
  }
}


// react quill toolbar modules
export const quillModule = () => {
  return {
    toolbar:  [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
]
  }
  
}