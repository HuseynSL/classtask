import baseurl from '../api/requests/baseUrl.js'
import { GetDatas,GetPostDatas } from "../api/requests/requests.js";

let registerForm=document.querySelector(".register-form")
let name=document.querySelector("#name")
let surname=document.querySelector("#surname")
let email=document.querySelector("#email")
let password=document.querySelector("#password")

console.log(document.querySelector(".register-form"));

registerForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newUser={
        name:name.value,
        surname:surname.value,
        email:email.value,
        password:password.value,
        isAdmin:false,
        favorites:[]
    }

    GetDatas(`${baseurl}/users`)
    .then(res=>{
        let users=res.datas
        let findeduser=users.find(user=>user.email==email.value)
        if (findeduser) {
            alert("eMAIL HAS ALREADY EXISTS")
        }else{
            GetPostDatas(`${baseurl}/users`,newUser)
            .then(res=>{
                window.location ="./login.html"
            })
        }
    })
})