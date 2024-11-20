
  /////////// add image to the local storage /////////

  document.addEventListener('DOMContentLoaded', (event) => {
    const profileImageInput = document.getElementById("profileImage");
    let profileImageData = "";
    profileImageInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        profileImageData = reader.result; // Store image data as a Base64 string
        localStorage.setItem("profileImage", profileImageData); // Save it to local storage
      };
      if (file) {
        reader.readAsDataURL(file); // Read the file
      }
    });

    /////////// add image to the local storage /////////

    ///// downloadPdf
    let btndwlond = document.getElementById("btndwlond");
    let cvVersion1 = document.getElementById("cvVersion1");
    btndwlond.addEventListener("click", async function () {
      const filename = "my-cv.pdf";
      const options = {
        margin: 0,
        filename: filename,
        html2canvas: { scale: 3 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        
      };
      try {
        await html2pdf().set(options).from(cvVersion1).save();
      } catch (error) {
        console.error("false:", error.message);
      }
    });


    ///// form a
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let stepThreeInfo = [];
      let stepThreeSoftSkills = [];

      let fullName = document.getElementById("fullName").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      let address = document.getElementById("address").value;
      let LinkedIn = document.getElementById("LinkedIn").value;
      let GitHub = document.getElementById("GitHub").value;
      let portfolio = document.getElementById("portfolio").value;
      let title = document.getElementById("titre").value;
      let textarea = document.getElementById("textarea").value;
      let Certifcation = document.getElementById("Certifications").value;

      /// step : HardSkills,SoftSkills3
      const hardSkillsDiv = document.getElementById("hardSkillsDiv").getElementsByTagName('input');
      Array.from(hardSkillsDiv).forEach((item) => stepThreeInfo.push(item.value));

      const SoftSkillsDiv = document.getElementById("SoftSkillsDiv").getElementsByTagName('input');
      Array.from(SoftSkillsDiv).forEach((item) => stepThreeSoftSkills.push(item.value));
      /// end step 3

      /// step : formations
      let formations = [];
      let educationDiv = document.getElementsByClassName("education");
      educationDiv.forEach(formation => {
        let inputFormation = formation.getElementsByTagName("input");

        let inputsFormations = {
          schoole: inputFormation[0].value,
          Staryear1: inputFormation[1].value,
          Endyear2: inputFormation[2].value,
          major: inputFormation[3].value
        };
        formations.push(inputsFormations);
      });

      ///Experiences
      let Experiences = [];
      let getExperiences = document.getElementsByClassName("parentExperiences");
      Array.from(getExperiences).forEach(experience => {
        let inputExperiences = experience.getElementsByClassName("childinputExperiences");

        let objetExperience = {
          nomEntreprise: inputExperiences[0].value,
          Poste: inputExperiences[1].value,
          StarDate: inputExperiences[2].value,
          EndDate: inputExperiences[3].value,
          location: inputExperiences[4].value,
          description: inputExperiences[5].value,
        };
        Experiences.push(objetExperience);
      });

      /////////// languges
      let languages = [];
      let parentlanguage = document.getElementsByClassName("parentlanguage");
      parentlanguage.forEach(lng => {
        let selectLangues = lng.getElementsByTagName("select");
        let LanguesObj = {
          langue: selectLangues[0].value,
          level: selectLangues[1].value
        }
        languages.push(LanguesObj);
      });

      /////////// loisir
      let Loisirs = [];
      let parentLoisir = document.getElementsByClassName("parentLoisir");
      Array.from(parentLoisir).forEach(hobby => {
        let loisir = hobby.getElementsByTagName("input");
        let loisirObj = {
          intreste: loisir[0].value
        }
        Loisirs.push(loisirObj);
      });

      ///////// objet cv Builder
      const cvBuilderinfo = {
        profileImage: profileImageData,
        fullName,
        email,
        phone,
        address,
        LinkedIn,
        GitHub,
        portfolio,
        title,
        textarea,
        stepThreeInfo,
        stepThreeSoftSkills,
        languages,
        Loisirs,
        formations,
        Experiences,
        Certifcation
      };
      const data = [];
      data.push(cvBuilderinfo);
      localStorage.setItem("data", JSON.stringify(data));
      Swal.fire({
        title: 'Form submitted successfully!!',
        icon: 'success',
        confirmButtonText: 'Nice!'
      });
      displayCv();
    });

    showStep(currentStep);
    //////////// ajouter nouveau input dynamic form
    document.querySelectorAll('.fa-circle-plus').forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        let clonedivlanguage = this.nextElementSibling.cloneNode(true);
        const inputs = clonedivlanguage.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
        let removebtn = document.createElement("button");
        removebtn.textContent = "- Remove";
        removebtn.className = 'removebtn px-4 py-2 bg-red-600 text-black text-sm font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 mt-2';
        clonedivlanguage.appendChild(removebtn);
        this.parentElement.appendChild(clonedivlanguage);
        removebtn.addEventListener("click", function () {
          clonedivlanguage.remove(); 
        });
        clonedivlanguage.style.display = 'block';
      });
    });
    window.onload = displayCv();

    function displayCv() {
      const data = JSON.parse(localStorage.getItem("data")) || [];
      let cvVersion1 = document.getElementById("cvVersion1");

    //   if (cvVersion1) {
        data.forEach(dt => {
          let formationsHTML = "";
          let ExperiencesHTML = "";
          let languageHTML = "";
          let loisirHTML = "";

/// get the all languages in the inputs
          dt.languages.forEach(lang => {
            languageHTML += `
                            <li>
                              <span class="font-semibold">${lang.langue} : </span>  ${lang.level}
                            </li>
                      `;
          })
/// get the all formations in the inputs

          dt.formations.forEach(frm => {
            formationsHTML += `
                          <section class="mt-4 break-inside-avoid pb-4">
                              <header class="mb-4">
                                  <h3 class="text-md font-semibold text-gray-700 leading-snug">${frm.schoole}</h3>
                                  <p class="text-gray-600 text-sm">
                                      Start: <span class="font-semibold">${frm.Staryear1}</span> –
                                      End : <span class="font-semibold">${frm.Endyear2}</span>
                                  </p>
                                  <ul class="list-disc list-inside text-gray-800 text-sm pl-6">
                                      <li>
                                          <span class="font-semibold">Major:</span> ${frm.major}
                                      </li>
                                  </ul>
                              </header>
                          </section>
                      `;
          });
/// get the all Experiences in the inputs

          dt.Experiences.forEach(expo => {
            ExperiencesHTML += `
                          <header>
                              <h3 class="font-semibold text-gray-800 text-md leading-snugish">
                                  ${expo.nomEntreprise}-${expo.location}
                              </h3>
                              <p class="text-sm leading-normal text-gray-500">
                                  ${expo.StarDate} &ndash; ${expo.EndDate} | Freelance ${expo.Poste}
                              </p>
                          </header>
                          <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
                              <li>
                                  <span class="text-gray-500 transform -translate-y-px select-none">
                                      &rsaquo;
                                  </span>
                                  ${expo.description}Created high-quality, customized web applications from scratch, employing a diverse set of programming languages, including HTML, CSS, JavaScript, PHP, and Python, to fulfill unique client requirements.
                              </li>
                          </ul>
                      `;
          });
/// get the all Loisirs in the inputs

          dt.Loisirs.forEach(loisir => {
            loisirHTML += `
                            <li>
                              <span class="font-semibold">${loisir.intreste} </span>
                            </li>
                      `;
          })

          cvVersion1.innerHTML = `
                      <main id="cvDesigner" class="font-jost hyphens-manual" style="padding-left:2rem;">
                          <!-- Page -------------------------------------------------------------------------------------------------------->
                          <section class="p-3 my-auto mx-auto max-w-3xl bg-white rounded-2xl border-2 border-gray-700 sm:p-9 md:p-8 lg:mt-6 print:border-0 page ">
                              <!-- Name ---------------------------------------------------------------------------------------------------->
                              <header class="inline-flex justify-between items-center mb-6 w-full align-top border-b-4 border-gray-300" style="margin-bottom:2rem">
                                  <section class="block">
                                      <img src="${dt.profileImage}" alt="Profile Picture" style="width: 130px; heigth: 130px; border-radius: 50%;">
                                  </section>
                                  <section class="block">
                                      <h1 class="mb-0 text-3xl font-bold text-gray-700">
                                          ${dt.fullName}
                                      </h1>
                                      <!--Job Title--------------------------------------------------------------------------------------------------------->
                                      <h2 class="m-0 text-2xl font-semibold text-gray-700 leading-snugish">
                                          ${dt.title}
                                      </h2>
                                      <h4 class="m-0  font-semibold text-gray-700 leading-snugish">
                                          ${dt.email}
                                      </h4>
                                      <h4 class="m-0 font-semibold text-gray-700 leading-snugish">
                                          ${dt.phone}
                                      </h4>
                                  </section>
                                  <!--   Initials Block   -->
                              </header>

                              <!-- Column -------------------------------------------------------------------------------------------------->
                              <section class="col-gap-8 print:col-count-2 print:h-letter-col-full col-fill-balance md:col-count-2 md:h-letter-col-full">
                                  <section class="flex-col">
                                      <!-- Contact Information ------------------------------------------------------------------------------------->
                                      <section class="pb-2 mt-4 mb-0 first:mt-0">
                                          <!-- To keep in the same column -------------------------------------------------------------------------->
                                          <section class="break-inside-avoid">
                                              <section class="pb-4 mb-2 border-gray-300 break-inside-avoid">
                                                  <ul class="pr-7 list-inside">
                                                      
                                                      <li class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                                                          <a href="">
                                                              <span class="mr-5 text-md font-semibold text-gray-700 leading-snugish">
                                                                  Address:${dt.address}
                                                              </span>
                                                          </a>
                                                      </li>
                                                      <li class="mt-1 leading-normal text-black text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:">
                                                          <a href="${dt.portfolio}" class="group">
                                                              <span class="mr-2 text-md font-semibold text-gray-700 leading-snugish">
                                                                  Portfolio : ${dt.portfolio}
                                                              </span>
                                                          </a>
                                                      </li>
                                                      <li class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
                                                          <a href="${dt.GitHub}" class="group">
                                                              <span class="mr-5 text-md font-semibold text-gray-700 leading-snugish">
                                                                  Github: ${dt.GitHub}
                                                              </span>
                                                          </a>
                                                      </li>
                                                  </ul>
                                              </section>
                                          </section>
                                      </section>

                                      <!--Summary ---------------------------------------------------------------------------------------------------------->
                                      <section class="pb-4 mt-0 first:mt-0">
                                          <!-- To keep in the same column -->
                                          <section class="break-inside-avoid">
                                             <h2 class="mb-2 text-xl border-b-4 font-semibold text-gray-900 tracking-widest print:font-normal">
                                                  SUMMARY
                                              </h2>
                                              <section class="mb-2 break-inside-avoid">
                                                  <p class="mt-2 leading-normal text-gray-700 text-sm">
                                                      ${dt.textarea}
                                                      Experienced full-stack web developer with a strong track record of independently addressing complex business requirements and overcoming challenges to deliver polished and user-friendly web solutions.
                                                  </p>
                                              </section>
                                          </section>
                                      </section>

                                      <!--Education -------------------------------------------------------------------------------------------------------->
                                      <section class="pb-0 mt-2 first:mt-0 break-inside-avoid">
                                          <section class="break-inside-avoid">
                                              <h2 class="mb-2 text-xl border-b-4 font-semibold text-gray-900 tracking-widest print:font-normal">
                                                  EDUCATION
                                              </h2>
                                              <section class="mt-2 break-inside-avoid">
                                                  <header>
                                                      <section class="pb-0 mt-2 border-gray-300 first:mt-0 break-inside-avoid">
                                                          ${formationsHTML}
                                                      </section>
                                                  </header>
                                              </section>
                                          </section>

                                          <!--Begin HardSkills ----------------------------------------------------------------------------------------------------->
                                          <section class="pb-6 mt-0 mb-4 border-gray-300 first:mt-0 break-inside-avoid">
                                              <section class="break-inside-avoid">
                                                  <h2 class="mb-2 text-xl border-b-4 font-semibold text-gray-900 tracking-widest print:font-normal">
                                                      HardSkills
                                                  </h2>
                                                  <section class="mb-0 break-inside-avoid">
                                                      <section class="mt-1 last:pb-1">
                                                          <ul class="flex flex-wrap -mb-1 font-bold leading-relaxed text-sm -mr-1.6">
                                                              ${dt.stepThreeInfo.map(item => `<li>${item}</li>`).join(",")}
                                                          </ul>
                                                      </section>
                                                  </section>
                                              </section>
                                          </section>

                                          <!--Begin SoftSkills ----------------------------------------------------------------------------------------------------->
                                          <section class="pb-6 mt-0 mb-4 border-gray-300 first:mt-0 break-inside-avoid">
                                              <section class="break-inside-avoid">
                                                  <h2 class="mb-2 text-xl border-b-4 font-semibold text-gray-900 tracking-widest print:font-normal">
                                                      SoftSkills
                                                  </h2>
                                                  <ul>
                                                      ${dt.stepThreeSoftSkills.map(item => `<li>${item}</li>`).join(",")}
                                                  </ul>
                                              </section>
                                          </section>

                                          <!--Experiences -------------------------------------------------------------------------------------------------------->
                                          <section class="pb-0 mt-2 first:mt-0 break-inside-avoid">
                                              <section class="break-inside-avoid">
                                                  <h2 class="mb-2 text-xl border-b-4 font-semibold text-gray-900 tracking-widest print:font-normal">
                                                      Experiences
                                                  </h2>
                                                  <section class="mt-5 break-inside-avoid">
                                                      <header>
                                                          <section class="pb-0 mt-2 border-gray-300 first:mt-0 break-inside-avoid">
                                                              ${ExperiencesHTML}
                                                          </section>
                                                      </header>
                                                  </section>
                                              </section>
                                              <!--Certifcation -------------------------------------------------------------------------------------------------------->
                                              <section class="pb-0 mt-4 first:mt-0 break-inside-avoid">
                                                  <section class="break-inside-avoid">
                                                      <h2 class="mb-2 text-xl border-b-4 font-semibold text-gray-900 tracking-widest print:font-normal">
                                                          Certifcation
                                                      </h2>
                                                      <section class="mt-2 break-inside-avoid">
                                                          <header>
                                                              <section class="pb-0 mt-2 border-gray-300 first:mt-0 break-inside-avoid">
                                                                 <a href="${dt.Certifcation}" class="group">
                                                              <span class="mr-2 text-sm font-semibold text-gray-700 leading-snugish">
                                                                  Portfolio : ${dt.Certifcation}
                                                              </span>
                                                          </a>
                                                              </section>
                                                          </header>
                                                      </section>
                                                  </section>
                                              </section>

                                              <!--language -------------------------------------------------------------------------------------------------------->
                                                <section class="mt-4 break-inside-avoid pb-4">
                                                   <header class="mb-4">
                                                     <h3 class="text-xl border-b-4 font-semibold text-gray-900 leading-snug print:font-normal">Languages</h3>
                                                     <ul class="list-disc list-inside text-gray-800 text-sm pl-6">
                                                      ${languageHTML}
                                                     </ul>
                                                   </header>
                                                </section>
                                              <!--loisire -------------------------------------------------------------------------------------------------------->
                                                <section class="mt-4 break-inside-avoid pb-4">
                                                   <header class="mb-4">
                                                     <h3 class="text-2xl border-b-4 font-semibold text-gray-900 leading-snug print:font-normal">Loisires</h3>
                                                     <ul class="list-disc list-inside text-gray-800 text-sm pl-6">
                                                      ${loisirHTML}
                                                     </ul>
                                                   </header>
                                                </section>
                                          </section>
                                      </section>
                                  </section>
                              </section>
                          </section>
                      </main>
                  `;
        });
      }
    // }
  });
