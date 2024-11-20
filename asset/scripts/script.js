
// <!-- Step 1: Personal Information -->
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let LinkedIn = document.getElementById("LinkedIn");
let GitHub = document.getElementById("GitHub");
let portfolio = document.getElementById("portfolio");
// <!-- Step 2: info Details -->
let titre = document.getElementById("titre");
let textarea = document.getElementById("textarea");
// <!-- Step 3: Compétences techniques et soft skills-->
let hardSkills = document.getElementById("hardSkills");
let softSkills = document.getElementById("softSkills");
// <!--Step 4: Langues & Loisirs -->
let langues = document.querySelector("#langues");
let proficiency = document.querySelector("#proficiency");
let loisirs = document.getElementById("loisirs");
// <!--Step 5: Formation -->
let university = document.getElementById("university");
let startYear = document.getElementById("startYear");
let endYear = document.getElementById("endYear");
let major = document.getElementById("major");
// <!-- Step 7: Expériences professionnelles -->
let company = document.getElementById("company");
let position = document.getElementById("position");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");
let locations = document.getElementById("location");
let description = document.getElementById("description");
// <!-- Step 8: Certifications -->
let Certifications = document.getElementById("Certifications");
///// multi-stepper-form-
let currentStep = 1;
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let inputdynamicForm = document.getElementById("inputdynamicForm");
let steps = document.getElementsByClassName("step");
let form = document.getElementById('multi-step-form');
let submitBtn = document.getElementById('submitBtn');
let progressBar = document.getElementById('progress-bar');
let btndwlond = document.getElementById("btndwlond");

let valid;

function ValidatePerssenal(){
      valid = true;
    if (fullName.value === "") {
        valid = false;
        document.getElementById("nameError").classList.remove("hidden");
        document.getElementById("nameError").style.color = "red"
    } else {
        document.getElementById("nameError").classList.add("hidden");
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        valid = false;
        document.getElementById("emailError").classList.remove("hidden");
        document.getElementById("emailError").style.color = "red"

    } else {
        document.getElementById("emailError").classList.add("hidden");
    }

    const phoneRegex = /^\+212[5-7][0-9]{8}$/;
    if (!phoneRegex.test(phone.value)) {
        valid = false;
        document.getElementById("phoneError").classList.remove("hidden");
        document.getElementById("phoneError").style.color = "red"

    } else {
        document.getElementById("phoneError").classList.add("hidden");
    }

    if (address.value === "") {
        valid = false;
        document.getElementById("addressError").classList.remove("hidden");
        document.getElementById("addressError").style.color = "red"

    } else {
        document.getElementById("addressError").classList.add("hidden");
    }

    const linkedInRegex = /^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/.*$/;
    const gitHubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9-]{1,39}$/;
    const portfolioRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

    if (LinkedIn.value === "" || !linkedInRegex.test(LinkedIn.value)) {
        valid = false;
        document.getElementById("LinkedInError").classList.remove("hidden");
        document.getElementById("LinkedInError").style.color = "red"

    } else {
        document.getElementById("LinkedInError").classList.add("hidden");
    }

    if (GitHub.value === "" || !gitHubRegex.test(GitHub.value)) {
        valid = false;
        document.getElementById("GitHubError").classList.remove("hidden");
        document.getElementById("GitHubError").style.color = "red"

    } else {
        document.getElementById("GitHubError").classList.add("hidden");
    }
    if (portfolio.value === "" || !portfolioRegex.test(portfolio.value)) {
        valid = false;
        document.getElementById("portfolioError").classList.remove("hidden");
        document.getElementById("portfolioError").style.color = "red"

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
    document.getElementById("titreError").classList.remove("hidden");
    document.getElementById("titreError").style.color = "red"

  } else {
    document.getElementById("titreError").classList.add("hidden");
  }
  if (textarea.value === "" && textarea.value.length < 100) {
    valid = false;
    document.getElementById("textareaError").classList.remove("hidden");
    document.getElementById("textareaError").style.color = "red"

  } else {
    document.getElementById("textareaError").classList.add("hidden");
  }
  return valid;
}
////////////// validation for the step3
function validationStep3(){

  valid = true;
  if (hardSkills.value === "" ) {
    valid = false;
    document.getElementById("hardSkillsError").classList.remove("hidden");
    document.getElementById("hardSkillsError").style.color = "red"

  } else {
    document.getElementById("hardSkillsError").classList.add("hidden");
  }
  if (softSkills.value === "") {
    valid = false;
    document.getElementById("softSkillsError").classList.remove("hidden");
    document.getElementById("softSkillsError").style.color = "red"

  } else {
    document.getElementById("softSkillsError").classList.add("hidden");
  }
  
  return valid;

}

////////////// validation for the step4
function validationStep4(){

  valid = true;
  if (langues.value === "" ) {
    valid = false;
    document.getElementById("languesError").classList.remove("hidden");
    document.getElementById("languesError").style.color = "red"

  } else {
    document.getElementById("languesError").classList.add("hidden");
  }
  if (proficiency.value === "") {
    valid = false;
    document.getElementById("levelError").classList.remove("hidden");
    document.getElementById("levelError").style.color = "red"

  } else {
    document.getElementById("levelError").classList.add("hidden");
  }
  if (loisirs.value === "") {
    valid = false;
    document.getElementById("loisirsError").classList.remove("hidden");
    document.getElementById("loisirsError").style.color = "red"

  } else {
    document.getElementById("loisirsError").classList.add("hidden");
  }
  return valid;

}
////////////// validation for the step5
function validationStep5(){
  valid = true;
  if (university.value === "" ) {
    valid = false;
    document.getElementById("universityError").classList.remove("hidden");
    document.getElementById("universityError").style.color = "red"

  } else {
    document.getElementById("universityError").classList.add("hidden");
  }
  if (startYear.value === "") {
    valid = false;
    document.getElementById("startYearError").classList.remove("hidden");
    document.getElementById("startYearError").style.color = "red"

  } else {
    document.getElementById("startYearError").classList.add("hidden");
  }
  if (endYear.value === "" || endYear.value < startYear.value) {
    valid = false;
    document.getElementById("endYearError").classList.remove("hidden");
    document.getElementById("endYearError").style.color = "red"

  } else {
    document.getElementById("endYearError").classList.add("hidden");
  }
  if (major.value === "") {
    valid = false;
    document.getElementById("majorError").classList.remove("hidden");
    document.getElementById("majorError").style.color = "red"

  } else {
    document.getElementById("majorError").classList.add("hidden");
  }
  return valid;
}
////////////// validation for the step6
function validationStep6(){
  if (company.value === "" ) {
    valid = false;
    document.getElementById("companyError").classList.remove("hidden");
    document.getElementById("companyError").style.color = "red"

  } else {
    document.getElementById("companyError").classList.add("hidden");
  }
  if (position.value === "") {
    valid = false;
    document.getElementById("positionError").classList.remove("hidden");
    document.getElementById("positionError").style.color = "red"

  } else {
    document.getElementById("positionError").classList.add("hidden");
  }
  if (startDate.value === "") {
    valid = false;
    document.getElementById("startDateError").classList.remove("hidden");
    document.getElementById("startDateError").style.color = "red"

  } else {
    document.getElementById("startDateError").classList.add("hidden");
  }
  if (endDate.value === "" || endDate.value < startDate.value) {
    valid = false;
    document.getElementById("endDateError").classList.remove("hidden");
    document.getElementById("endDateError").style.color = "red"

  } else {
    document.getElementById("endDateError").classList.add("hidden");
  }
  if (description.value === "") {
    valid = false;
    document.getElementById("JobdescriptionError").classList.remove("hidden");
    document.getElementById("JobdescriptionError").style.color = "red"

  } else {
    document.getElementById("JobdescriptionError").classList.add("hidden");
  }
  if (locations.value === "") {
    valid = false;
    document.getElementById("locationError").classList.remove("hidden");
    document.getElementById("locationError").style.color = "red"

  } else {
    document.getElementById("locationError").classList.add("hidden");
  }
    return valid;
}
////////////// validation for the step7

function validationStep7(){
  if (Certifications.value === "" ) {
    valid = false;
    document.getElementById("CertificationsError").classList.remove("hidden");
    document.getElementById("CertificationsError").style.color = "red"

  } else {
    document.getElementById("CertificationsError").classList.add("hidden");
  }
  return valid;
}

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
    btndwlond.classList.toggle('hidden', step !== 7);

}

nextBtn.addEventListener('click', () => {

  if(currentStep === 1){
    ValidatePerssenal();
    if(valid == true ){
      currentStep++;
      showStep(currentStep);
    }
  }else if(currentStep === 2){
    validationStep2();
    if(valid == true ){
      currentStep++;
      showStep(currentStep);
    }
  }else if(currentStep === 3){
    validationStep3();
    if(valid == true ){
      currentStep++;
      showStep(currentStep);
    }
  }else if(currentStep === 4){
    validationStep4();
    if(valid == true ){
      currentStep++;
      showStep(currentStep);
    }
  }else if(currentStep === 5){
    validationStep5();
    if(valid == true ){
      currentStep++;
      showStep(currentStep);
    }
  }else if(currentStep === 6){
    validationStep6();
    if(valid == true ){
      currentStep++;
      showStep(currentStep);
    }
  }else if(currentStep === 7){
    validationStep7();
    if(valid == true ){
      currentStep++;
      showStep(currentStep);
    }
  }
  
});

prevBtn.addEventListener('click', () => {
    currentStep--;
    showStep(currentStep);
});