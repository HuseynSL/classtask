import baseurl from '../api/requests/baseUrl.js'
import { GetDatas,GetPostDatas } from "../api/requests/requests.js";

let LoginForm=document.querySelector(".login-form")
let email=document.querySelector("#email")
let password=document.querySelector("#password")

LoginForm.addEventListener('submit',(e)=>{
    e.preventDefault(),
    GetDatas(`${baseurl}/users`)
    .then((res)=>{
        let users=res.datas
        let findedUser=users.find(user=> user.email==email.value && user.password==password.value)
        if (findedUser) {
            localStorage.setItem("userInfo" ,JSON.stringify(findedUser.id))
            window.location.href="main.html"
        }else{
            alert("Invalid username or password")
         }
    })
})