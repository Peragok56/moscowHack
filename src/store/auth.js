import axios from "../axios/axios";

export function auth(e, login, password) {
    e.preventDefault()
     axios.post('/account/login', {email: login, password: password})
     .then((res) => {
         console.log(res);
         localStorage.setItem('token', res.data.token);
         localStorage.setItem('exp', res.data.expiresIn);
         console.log(res.data.token);
         axios.get('/account/getInfo', {headers: {Authorization: localStorage.getItem('token')}})
         .then((res2) => {
             console.log(res2);
             console.log(res2.data);
             localStorage.setItem('accountId', res2.data.account._id)
             localStorage.setItem('role', res2.data.account.role.name)
             localStorage.setItem('firstName', res2.data.account.firstName)
             localStorage.setItem('lastName', res2.data.account.lastName)
             window.location.pathname = '/Profile'
         })
         .catch((err3) => {
             console.log(err3);
         })
     })
     .catch((err) => {
         console.log(err);
     })
}