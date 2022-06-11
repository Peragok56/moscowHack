import axios from "../axios/axios";

export function auth(e, login, password) {
    e.preventDefault()
    console.log(password)
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
             switch(res2.data.account.role.name){
                case 'user':
                  window.location.pathname = '/main'
                  break
                case 'root':
                  return(
                    window.location.pathname = '/adminPanel'
                  )
                  default: 
                  break
              }
         })
         .catch((err3) => {
             console.log(err3);
         })
     })
     .catch((err) => {
         console.log(err);
     })
}