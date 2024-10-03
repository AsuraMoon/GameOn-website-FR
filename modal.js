function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
//
const validationbg = document.querySelector(".bgroundvalidation");

// Button Elements
const modalBtn = document.querySelectorAll(".modal-btn");
//
const closeModalBtn = document.querySelectorAll(".close-modal-btn");
//
const closeValidationBtn = document.querySelectorAll(".close-validation-btn");

// Form
const form = document.querySelector("#formData");
//
const formData = document.querySelectorAll(".formData");

form.addEventListener("submit", function(e){
  e.preventDefault();

  let totalValidation = true;
  
  let first = document.getElementById("first");
  let firstValue = first.value;
  
  let last = document.getElementById("last");
  let lastValue = last.value;
  
  let email = document.getElementById("email");
  let emailValue = email.value;
  
  let birthdate = document.getElementById("birthdate");
  let birthdateValue = birthdate.value;
  
  let quantity = document.getElementById("quantity");
  let quantityValue = quantity.value;
  
  let checkboxs = document.querySelectorAll('.checkbox-input');
  let checkedbox;
  
  let conditionsbox = document.querySelector('#checkbox1');
  
  //faire les vérifs par js et pas par htlm 
  
  
  //console.log(firstValueVerif);

 const verifWordFirst = /[a-z]{3,}/gi;
 const firstValueVerif = verifWordFirst.test(firstValue);
 const verifWordLast = /[a-z]{3,}/gi;
 const lastValueVerif = verifWordLast.test(lastValue);

 const verifMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
 const emailValueVerif = verifMail.test(emailValue);

 const verifDate = /[\d-]/;
 const birthdateValueVerif = verifDate.test(birthdateValue);

 const verifNumber = /[\d]/;
 const quantityValueVerif = verifNumber.test(quantityValue);

  
  /* Verification que le champ prénom ne soit pas vide */
  if (!firstValueVerif){
    first.parentNode.setAttribute("data-error-visible", true);
    first.parentNode.setAttribute("data-error", "Veuillez remplir le champ avec un prénom valide s'il vous plaît");
    totalValidation=false;
  }
  else {
    first.parentNode.setAttribute("data-error-visible", false);
  }
  
  /* Verification que le champ nom ne soit pas vide */
  if (!lastValueVerif){
    last.parentNode.setAttribute("data-error-visible",true);
    last.parentNode.setAttribute("data-error","Veuillez remplir le champ avec un nom valide");
    totalValidation=false;
  }
  else {
    last.parentNode.setAttribute("data-error-visible",false);
  }
  
  /* Verification que le champ email ne soit pas vide */
  if (!emailValueVerif){
    email.parentNode.setAttribute("data-error-visible",true);
    email.parentNode.setAttribute("data-error","Veuillez remplir le champ avec un email valide");
    totalValidation=false;
  }
  else {
    email.parentNode.setAttribute("data-error-visible",false);
  }
  
  /* Verification que le champ email ne soit pas vide */
  if (!birthdateValueVerif){
    birthdate.parentNode.setAttribute("data-error-visible",true);
    birthdate.parentNode.setAttribute("data-error","Veuillez remplir le champ avec une date de naissance valide");
    totalValidation=false;
  }
  else {
    birthdate.parentNode.setAttribute("data-error-visible",false);
  }
  
  /* Verification que le champ quantity ne soit pas vide */
  if (!quantityValueVerif){
    quantity.parentNode.setAttribute("data-error-visible",true);
    quantity.parentNode.setAttribute("data-error","Veuillez remplir le champ avec un nombre valide");
    totalValidation=false;
  }
  else {
    quantity.parentNode.setAttribute("data-error-visible",false);
  }
  
  /* Récupération du lieu du tournoi */
  for (const checkbox of checkboxs){
    if (checkbox.checked){
      checkedbox = checkbox.value;
      break;
    }
  };

  if(!conditionsbox.checked){
    conditionsbox.parentNode.setAttribute("data-error-visible",true);   
    conditionsbox.parentNode.setAttribute("data-error","Veuillez accepter les conditions d'utilisation");
    totalValidation=false;
  }
  else {
    quantity.parentNode.setAttribute("data-error-visible",false);
  }

  //isValid = totalValidation? true : false;
  if (totalValidation){
    console.log("Prénom = ", firstValue," Nom = ", lastValue," Mail = ", emailValue," Birthdate = ", birthdateValue,"NbrTournoi = ",quantityValue);
    closeModal();
    form.reset();
    launchValidation();
  };

  /*console.log(formData);
  console.log(firstValue);
  console.log(lastValue);
  console.log(emailValue);
  console.log(birthdateValue);
  console.log(quantityValue);
  console.log(checkedbox);
  console.log(conditionsbox.checked);
  console.log(evenementsbox.checked);
  console.log(isValid);
  console.log(totalValidation);*/

});



/*let formDataValue= [formData.value];
console.log(formDataValue);*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

// close modal event
closeModalBtn.forEach((span) => span.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
};

// launch validation form
function launchValidation(){
  validationbg.style.display="block";
}

// close validation event
closeValidationBtn.forEach((span) => span.addEventListener("click", closeValidation));

// close validation form
function closeValidation(){
  validationbg.style.display="none";
  //location.reload();
}


//fermuture de modal 

/*function validate(){
  if (firstValue == ""){
    alert("Veuillez remplir ce champ avec votre prénom");
    return false;
  }
  if (last.value == ""){
    alert("Veuillez remplir ce champ avec votre nom");
    return false;
  }
}*/