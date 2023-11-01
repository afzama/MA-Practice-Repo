// alert("i am linked!")
fetch("/api/pets").then(res=>res.json()).then(data=>{
    // console.log(data)
    data.forEach(pet=>{
        //1. create element
        const petLi = document.createElement("li");
        //2. add content/styles
        petLi.textContent=`${pet.name} is a good ${pet.color} ${pet.species}!`;
        //3. appends
        document.querySelector("#pets").append(petLi)
    })
}).catch(err=>{
    console.log("womp womp")
    console.log(err);
})

const newPetForm = document.querySelector("#newPetForm");

newPetForm.addEventListener("submit",e=>{
    e.preventDefault();
    const petObj = {
        name:document.querySelector("#newPetName").value,
        breed:document.querySelector("#newPetBreed").value,
        species:document.querySelector("#newPetSpecies").value,
        color:document.querySelector("#newPetColor").value,
    }
   fetch("/api/pets",{
       method:"POST",
       body:JSON.stringify(petObj),
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

