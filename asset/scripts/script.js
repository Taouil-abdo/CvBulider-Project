////////////// multiStepForm
let currentStep = 1;
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let inputdynamicForm = document.getElementById("inputdynamicForm");
let steps = document.getElementsByClassName("step");
let form = document.getElementById('multi-step-form');
let submitBtn = document.getElementById('submitBtn');
let progressBar = document.getElementById('progress-bar');
let hardS = document.querySelectorAll("hardS").value;

console.log(hardS);


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
  nextBtn.classList.toggle('hidden', step === 8);
  submitBtn.classList.toggle('hidden', step !== 8);
}

nextBtn.addEventListener('click', () => {
  currentStep++;
  showStep(currentStep);
});

prevBtn.addEventListener('click', () => {
  currentStep--;
  showStep(currentStep);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
  console.log(hardS);

});

showStep(currentStep);


//////////// ajouter nouveau input dynamic form
document.querySelectorAll('.fa-circle-plus').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('hardS','bg-gray-50', 'border', 'border-gray-300', 'text-gray-900', 'text-sm', 'rounded-lg', 'focus:ring-green-500', 'focus:border-green-500', 'block', 'w-full', 'p-2.5');
    this.parentElement.parentElement.appendChild(input);
  });
});