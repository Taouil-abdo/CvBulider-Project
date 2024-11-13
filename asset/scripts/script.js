//         liba.innerHTML = `
    
//      <main class="font-jost hyphens-manual p-10">
//       <!-- Page -------------------------------------------------------------------------------------------------------->
//       <section
//         class="p-3 my-auto mx-auto max-w-3xl bg-gray-100 rounded-2xl border-4 border-gray-700 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter"
//       >
//         <!-- Name ---------------------------------------------------------------------------------------------------->
//         <header
//           class="inline-flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300"
//         >
//           <section class="block">
//             <h1 class="mb-0 text-5xl font-bold text-gray-700">
//               ${dt.fullName}
//             </h1>
//             <!--Job Title--------------------------------------------------------------------------------------------------------->
//             <h2
//               class="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish"
//             >
//               ${dt.title}
//             </h2>
//             <!--Location --------------------------------------------------------------------------------------------------------->

//             <h3 class="m-0 mt-2 ml-2 text-xl font-semibold text-gray-500 leading-snugish">
//               ${dt.address}
//             </h3>
//             <h3 class="m-0 mt-2 ml-2 text-xl font-semibold text-gray-500 leading-snugish">
//               ${dt.email}
//             </h3>
//             <h3 class="m-0 mt-2 ml-2 text-xl font-semibold text-gray-500 leading-snugish">
//               ${dt.phone}
//             </h3>
//           </section>
//           <!--   Initials Block   -->
//         </header>

//         <!-- Column -------------------------------------------------------------------------------------------------->
//         <section
//           class="col-gap-8 print:col-count-2 print:h-letter-col-full col-fill-balance md:col-count-2 md:h-letter-col-full"
//         ><section class="flex-col">
//           <!-- Contact Information ------------------------------------------------------------------------------------->
//           <section class="pb-2 mt-4 mb-0 first:mt-0">
//             <!-- To keep in the same column -------------------------------------------------------------------------->
//             <section class="break-inside-avoid">
//               <section class="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
//                 <ul class="pr-7 list-inside">
//                   <li class="mt-1 leading-normal text-black text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:">
//                     <a href="${dt.portfolio}" class="group">
//                       <span class="mr-2 text-lg font-semibold text-gray-700 leading-snugish">
//                         Portfolio:
//                       </span> https://veilmail.io/irish-geoff
//                     </a>
//                   </li>
//                   <li class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
//                     <a href="https://github.com/Thomashighbaugh" class="group">
//                       <span class="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
//                         Github:
//                       </span>
//                       Thomashighbaugh
//                       <span class="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:">
//                         ↗
//                       </span>
//                     </a>
//                   </li>

//                   <li
//                     class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md"
//                   >
//                     <a href="https://veilmail.io/irish-geoff" class="group">
//                       <span class="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
//                         Email:
//                       </span>https://veilmail.io/irish-geoff
//                     </a>
//                   </li>
//                   <li class="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md">
//                     <a href="tel:+15109070654">
//                       <span class="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
//                         Phone:
//                       </span>
//                       +1(510)907-0654
//                     </a>
//                   </li>
//                 </ul>
//               </section>
//             </section>
//           </section>
//           <!--Summary ---------------------------------------------------------------------------------------------------------->
//           <section class="pb-2 pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
//             <!-- To keep in the same column -->
//             <section class="break-inside-avoid">
//               <h2 class="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal">
//                 SUMMARY
//               </h2>

//               <section class="mb-2 break-inside-avoid">
//                 <p class="mt-2 leading-normal text-gray-700 text-md">
//                   ${dt.textarea}
//               //  Experienced full-stack web developer with a strong track record of independently addressing complex business requirements and overcoming challenges to deliver polished and user-friendly web solutions.
//                 </p>
//               </section>
//             </section>
//           </section>
// <!--Education -------------------------------------------------------------------------------------------------------->
// <section class="pb-0 mt-2 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
//     <!-- To keep in the same column -->
//     <section class="break-inside-avoid">
//         <h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//             EDUCATION
//         </h2>
//         <!-- school --------------------------------------------------------------------------->
//         <section class="mt-2 border-b-2 break-inside-avoid">
//             <header>
//                 <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
//                     California State University East Bay
//                 </h3>
//                 <p class="leading-normal text-gray-500 text-md">
//                     2009 &ndash; 2014 | Bachelor of Arts
//                 </p>
//             </header>
//             <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
//                 <li>
//                     <span class="font-semibold text-md">
//                         Major:
//                     </span>
//                     Political Science
//                 </li>
//                 <li>
//                     <span class="font-semibold text-md">
//                         Minor:
//                     </span>
//                     Economics
//                 </li>
//                 <li>
//                     <span class="font-semibold text-md">
//                         GPA:
//                     </span>
//                     3.9
//                 </li>
//                 <li>
//                     <span class="font-semibold text-md">
                      
//                     </span>
                    
//                 </li>
//             </ul>
//         </section>
//         <!--school 2--------------------------------------------------------------------------------------------->
//         <section class="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
//             <header>
//                 <h3 class="flex-grow text-lg font-semibold text-gray-700 leading-snugish">
//                     Las Positas Community College
//                 </h3>
//                 <p class="leading-normal text-gray-500 text-md">
//                     2018 &ndash; Present | Associate of Science/Continuing
//                     Education
//                 </p>
//             </header>
//             <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
//                 <li>
//                     <span
//                         class="font-semibold text-md"
//                     >
//                         Major:
//                     </span>
//                     Computer Science
//                 </li>
//                 <li>
//                     <span
//                         class="font-semibold text-md"
//                     >
//                         GPA:
//                     </span>
//                     4.0
//                 </li>
//                 <li>
//                     <span class="font-semibold text-md">
//                         HardSkills:${dt.stepThreeInfo}
//                     </span>
//                 </li>
//                 <li>
//                     <span class="font-semibold text-md">
//                         SoftSkills:${dt.stepThreeSoftSkills}
//                     </span>
//                 </li>
//             </ul>
//         </section>

//         <!--school 3 --------------------------------------------------------------------------------->
//         <section class="pb-4 mt-4 mb-4 break-inside-avoid">
//             <header>
//                 <h3
//                     class="flex-grow text-lg font-semibold text-gray-700 leading-snugish"
//                 >
//                     Codify Academy
//                 </h3>
//                 <p class="leading-normal text-gray-500 text-md">
//                     2018 | Certificate
//                 </p>
//             </header>
//             <ul class="mt-2 list-disc list-inside text-gray-800 text-md">
//                 <li>
//                     <span
//                         class="font-semibold text-md"
//                     >
//                         Subject:
//                     </span>
//                     Front End Development
//                 </li>
//                 <li>
//                     <span
//                         class="font-semibold text-md"
//                     >
//                         Skills:
//                     </span>
//                     HTML, CSS, JavaScript, Web Development
//                 </li>
//             </ul>
//         </section>
//     </section>
// </section>

//             <!--Begin Skills ----------------------------------------------------------------------------------------------------->
//             <section class="pb-6 mt-0 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
//               <!-- To keep in the same column -->
//               <section class="break-inside-avoid">
//                 <h2
//                   class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
//                 >
//                   SKILLS
//                 </h2>
//                 <section class="mb-0 break-inside-avoid">
//                   <section class="mt-1 last:pb-1">
// 										 <ul class="flex flex-wrap -mb-1 font-bold leading-relaxed text-md -mr-1.6">
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             HTML5
//         </li>
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             CSS3
//         </li>
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             JavaScript
//         </li>
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             TypeScript
//         </li>
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             Node.js
//         </li>
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             React.js
//         </li>
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             Python
//         </li>
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             NoSQL
//         </li>
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             Postgresql
//         </li>
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             MongoDB
//         </li>
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             Linux
//         </li>
//         <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
//             AWS
//         </li>
// 											<li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
// LLM/AI Prompting
// 												</li>
// <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
// 											Web Design
// 											</li>
// <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">UI/UX</li> <li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset"> CI/CD </li>
// 											<li class="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset"> Lua </li>
//     </ul>
//                   </section>
//                 </section>
//                 </section>
//               </section>

// <!--Experience ------------------------------------------------------------------------------------------------------>
// <section class="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
//     <!-- To keep in the same column ------------------------------------------------------------------------->
//     <section class="break-inside-avoid">
//         <h2 class="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal">
//             EXPERIENCE
//         </h2>
//         <!--Job 1-->
//         <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
//             <header>
//                 <h3 class="font-semibold text-gray-800 text-md leading-snugish">
//                     Full Stack Web Developer
//                 </h3>
//                 <p class="text-sm leading-normal text-gray-500">
//                     Jun 2018 &ndash; Present | Freelance
//                 </p>
//             </header>
//             <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
//                 <li>
//                     <span class="text-gray-500 transform -translate-y-px select-none">
//                         &rsaquo;
//                     </span>
//                     Created high-quality, customized web applications from scratch, employing a diverse set of programming languages, including HTML, CSS, JavaScript, PHP, and Python, to fulfill unique client requirements.
//                 </li>
//                 <li>
//                     <span class="text-gray-500 transform -translate-y-px select-none">
//                         &rsaquo;
//                     </span>
//                     Leveraged a range of bleeding edge front-end frameworks like React.js, Nullstack and Vue.js, as well as back-end frameworks such as Node.js and Express, to deliver robust and scalable web solutions.
//                 </li>
//                 <li>
//                     <span class="text-gray-500 transform -translate-y-px select-none">
//                         &rsaquo;
//                     </span>
//                     Designed and implemented databases using SQL and NoSQL technologies like MySQL, PostgreSQL, MongoDB, and Firebase, optimizing data storage and management.
//                 </li>
//             </ul>
//         </section>
//         <!-- job 2  -->
//         <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
//             <header>
//                 <h3 class="font-semibold text-gray-800 text-md leading-snugish">
//                     Computer Repair Technician
//                 </h3>
//                 <p class="text-sm text-gray-500 leading-snugish">
//                     Mar 2018 &ndash; Present | Freelance
//                 </p>
//             </header>
//             <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
//                 <li>
//                     <span class="text-gray-500 transform -translate-y-px select-none">
//                         &rsaquo;
//                     </span>
//                     Provided expert computer repair services to individuals and businesses, diagnosing and resolving hardware and software issues effectively.
//                 </li>
//                 <li>
//                     <span class="text-gray-500 transform -translate-y-px select-none">
//                         &rsaquo;
//                     </span>
//                     Demonstrated proficiency across diverse operating systems (Windows, macOS, Linux) and hardware components, offering tailored solutions, including hardware upgrades, software installations, and malware removal.
//                 </li>
//             </ul>
//         </section>
//         <!-- job 3 -->
//         <section class="mb-2 border-b-2 border-gray-300 break-inside-avoid">
//             <header>
//                 <h3 class="font-semibold text-gray-800 text-md leading-snugish">
//                     Assistant Manager
//                 </h3>
//                 <p class="text-sm text-gray-500 leading-snugish">
//                     May 2012 &ndash; Apr 2018 | Pet Food Express
//                 </p>
//             </header>
//             <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
//                 <li>
//                     <span class="text-gray-500 transform -translate-y-px select-none">
//                         &rsaquo;
//                     </span>
//                     Trained and supervised staff in product knowledge, customer engagement, and sales techniques, ensuring a top-notch shopping experience for customers.
//                 </li>
//                 <li>
//                     <span class="text-gray-500 transform -translate-y-px select-none">
//                         &rsaquo;
//                     </span>
//                     Maintained a pristine and organized store environment, fostering maximum customer satisfaction.
//                 </li>
//                 <li>
//                     <span class="text-gray-500 transform -translate-y-px select-none">
//                         &rsaquo;
//                     </span>
//                     Demonstrated deep expertise in the pet food industry, including trends, products, and competitors, providing customers with informed recommendations and advice.
//                 </li>
//             </ul>
//         </section>
//         <!-- job 4 -->
//         <section class="mb-2 border-b-0 border-gray-300 break-inside-avoid">
//             <header>
//                 <h3 class="font-semibold text-gray-800 text-md leading-snugish">
//                     Executive Assistant
//                 </h3>
//                 <p class="text-sm text-gray-500 leading-snugish">
//                     Jun 2009 &ndash; Dec 2011 | 360 Custom Closets and Cabinets
//                 </p>
//             </header>
//             <ul class="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish">
//                 <li>
//                     <span class="text-gray-500 transform -translate-y-px select-none">
//                         &rsaquo;
//                     </span>
//                     Provided high-level administrative support to the small business executive, managing schedules, travel arrangements, and coordinating meetings and events.
//                 </li>
//                 <li>
//                     <span class="text-gray-500 transform -translate-y-px select-none">
//                         &rsaquo;
//                     </span>
//                     Managed communication on behalf of the executive, including answering phone calls and emails, ensuring timely and professional responses to inquiries and requests.
//                 </li>
//                 <li>
//                     <span class="text-gray-500 transform -translate-y-px select-none">
//                         &rsaquo;
//                     </span>
//                     Maintained relationships with vendors, clients, and external stakeholders, ensuring professionalism and alignment with the business's values.
//                 </li>
//             </ul>
//         </section>
//     </section>
// </section>
//         <!-- end Column -->
//       </section>
//       <!-- end Page -->
//     </main>
//     `;
//       })