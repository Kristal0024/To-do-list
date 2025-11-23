const input=document.querySelector(".input")
const Addbtn=document.querySelector(".Addbtn")
const listitems=document.querySelector(".list-items")
Addbtn.addEventListener("click",()=>{
if(input.value.trim()===""){
    return;
}else{
    const li=document.createElement("li")
    li.addEventListener("click",()=>{
        li.remove();
    })
li.textContent=`${input.value}`
listitems.append(li);
input.value=""
}
})
input.addEventListener("keydown",(e)=>{
if(e.key==="Enter"){
    Addbtn.click();
}
})
