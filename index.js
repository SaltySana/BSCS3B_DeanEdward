// console.log(fetch('https://www.datocms-assets.com/55615/1723735418-f24_mingyu_pr_nologo_5.jpg?auto=format%2Ccompress&cs=srgb')
// .then(response => {
//     console.log(response)
//     return response.blob()
// })
// .then(blob =>{
//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob)
// })
// .catch(error =>{
//     console.log(error)
// }))

const content=document.querySelector("#content")

window.addEventListener("load", ()=>{
    getUsers();
})

function getUsers(){
    
    let html=""

    // fetch("https://bscs2b-api-crud-d1j4.onrender.com/api/members", {mode: "cors"})//cross orgin
    fetch("https://bscs2b-api-crud-d1j4.onrender.com/api/members", {mode: "cors"})//cross orgin
    .then((response)=>{
        console.log(response)
        return response.json();
    })
    .then((data)=>{
        data.foreEach((element)=>{
            html += `<li> ${element.first_name} ${element.last_name}
            </li>`
        })
        content.innerHTML = html
    })
    .catch((error)=>{
        console.log(error)
    })

}
