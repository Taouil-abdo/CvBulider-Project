let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let LinkedIn = document.getElementById("LinkedIn");
let GitHub = document.getElementById("GitHub");
let portfolio = document.getElementById("portfolio");
let titre = document.getElementById("titre");
let textarea = document.getElementById("textarea");
let hardSkills = document.getElementById("hardSkills");
let softSkills = document.getElementById("softSkills");
let langues = document.getElementById("langues");
let proficiency = document.getElementById("proficiency");
let startYear = document.getElementById("startYear");
let endYear = document.getElementById("endYear");
let major = document.getElementById("major");
let company = document.getElementById("company");
let position = document.getElementById("position");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");
let description = document.getElementById("description");
let Certifications = document.getElementById("Certifications");
// // let location = document.getElementById("location");description
// // let location = document.getElementById("location");description
// // let location = document.getElementById("location");description
// // let location = document.getElementById("location");description


let valid;

    function ValidatePerssenal(){
      valid = true;
    if (fullName.value === "") {
        valid = false;
        document.getElementById("nameError").classList.remove("hidden");
    } else {
        document.getElementById("nameError").classList.add("hidden");
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        valid = false;
        document.getElementById("emailError").classList.remove("hidden");
    } else {
        document.getElementById("emailError").classList.add("hidden");
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value)) {
        valid = false;
        document.getElementById("phoneError").classList.remove("hidden");
    } else {
        document.getElementById("phoneError").classList.add("hidden");
    }

    if (address.value === "") {
        valid = false;
        document.getElementById("addressError").classList.remove("hidden");
    } else {
        document.getElementById("addressError").classList.add("hidden");
    }

    if (LinkedIn.value === "") {
        valid = false;
        document.getElementById("LinkedInError").classList.remove("hidden");
    } else {
        document.getElementById("LinkedInError").classList.add("hidden");
    }

    if (GitHub.value === "") {
        valid = false;
        document.getElementById("GitHubError").classList.remove("hidden");
    } else {
        document.getElementById("GitHubError").classList.add("hidden");
    }
    if (portfolio.value === "") {
        valid = false;
        document.getElementById("portfolioError").classList.remove("hidden");
    } else {
        document.getElementById("portfolioError").classList.add("hidden");
    }

    return valid;
}

////////////// validation for the step2

function validationStep2(){

  valid =true;


  if (titre.value === "") {
    valid = false;
    document.getElementById("nameError").classList.remove("hidden");
  } else {
    document.getElementById("nameError").classList.add("hidden");
  }
  if (textarea.value === "") {
    valid = false;
    document.getElementById("nameError").classList.remove("hidden");
  } else {
    document.getElementById("nameError").classList.add("hidden");
  }
  
}
////////////// validation for the step3
////////////// validation for the step4
////////////// validation for the step5
////////////// validation for the step6
////////////// validation for the step7




let currentStep = 1;
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let inputdynamicForm = document.getElementById("inputdynamicForm");
let steps = document.getElementsByClassName("step");
let form = document.getElementById('multi-step-form');
let submitBtn = document.getElementById('submitBtn');
let progressBar = document.getElementById('progress-bar');

////// multistepper
function showStep(step) {
    document.querySelectorAll('.step').forEach(s => s.classList.add('hidden'));
    document.getElementById(`step-${step}`).classList.remove('hidden');

    progressBar.style.width = `${(step / 8) * 100}%`;
    for (let i = 1; i <= steps.length; i++) {
        const stepIndicator = document.getElementById(`step${i}`);
        if (i <= step) {
            stepIndicator.classList.remove('opacity-50');
        } else {
            stepIndicator.classList.add('opacity-50');
        }
    }

    prevBtn.classList.toggle('hidden', step === 1);
    nextBtn.classList.toggle('hidden', step === 7);
    submitBtn.classList.toggle('hidden', step !== 7);
}

nextBtn.addEventListener('click', () => {
  ValidatePerssenal();
  if(valid == true ){
    currentStep++;
    showStep(currentStep);
  }else{
    alert("fuck");
  }
    
});

prevBtn.addEventListener('click', () => {
    currentStep--;
    showStep(currentStep);
});