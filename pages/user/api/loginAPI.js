
import axios from 'axios';
const SERVER = `http://localhost:8080`

export const userSignin = SigninRequest => axios.post(`${SERVER}/user/sign-in`, sgininRequest)
export const userSignup = SignupRequest => axios.post(`${SERVER}/user/sign-up`, sginupRequest)
