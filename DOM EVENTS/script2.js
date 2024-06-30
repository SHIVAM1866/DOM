//event object
// const firstButton=document.querySelector("#one")
// firstButton.addEventListener("click",function(hello){
//     console.log(this)
//     console.log(hello)
// })
//jab bhi mai kisi bhi  element pe event listener add hoga 
//js engine --line by line execute karta hai
//browser--- js engine +extra features
//browser-- js engine + web api

//jab browser ko pata chalata ki user ne event perform kia
//jo hum listen kar raha hai
//browser ---(2)
//1.) callback function hai vo js engine ko degi...
//2.) callback function ke sath browser jo event hua hai uski information bhi dega
//ye info hamein ek object ke  form mai milega

//instead of this we can do arrow function
const firstButton=document.querySelector("#one")
firstButton.addEventListener("click",(e)=>{
    console.log("first button",e.target)
})