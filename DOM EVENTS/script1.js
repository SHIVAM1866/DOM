// const firstButton=document.querySelector("#one")
// firstButton.addEventListener("click",function(){
//     console.log("you clicked me")
// })
const allButton=document.querySelectorAll("button")
// for(let button of allButton){
//     //console.log(button)
//     console.log(button)
//     button.addEventListener("click",function(){
//         console.log(this)
//     })
// }
// for(let i=0;i<allButton.length;i++){
//     //console.log(allButton[i])
//     allButton[i].addEventListener("click",function(){
//         console.log(this)
//     })
// }
allButton.forEach(function(button){
    console.log(button)
})