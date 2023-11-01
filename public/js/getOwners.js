fetch("/api/owners").then(res=>res.json()).then(data=>{
    data.forEach(owner=>{
        //1. create element
        const ownerLi = document.createElement("li");
        //2. add content/styles
        ownerLi.textContent=`${owner.name} is from ${owner.city}!`;
        //3. appends
        document.querySelector("#owners").append(ownerLi)
    })
}).catch(err=>{
    console.log("womp womp")
    console.log(err);
})

const newOwnerForm = document.querySelector("#newOwnerForm");

newOwnerForm.addEventListener("submit",e=>{
    e.preventDefault();
    const ownerObj = {
        name:document.querySelector("#newOwnerName").value,
        city:document.querySelector("#newOwnerCity").value,
    }
   fetch("/api/owners",{
       method:"POST",
       body:JSON.stringify(ownerObj),
       headers:{
           "Content-Type":"application/json"
       }
   }).then(res=>{
    if(res.ok){
        location.reload()
    }else{
        console.log("oh no an error!")
    }
   })
})

