let profileName = document.getElementById("name");
let image = document.getElementById("profile");
let title = document.getElementById("jobTitle");

function main() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((res) => {
      //console.log(res);
      profileName.innerHTML = res.firstName;
      image.src = res.image;
      title.innerHTML = res.jobTitle;

      skills(res.skills);
      tools(res.tools);
      awards(res.awardsAndCertifications);
      volunteers(res.volunteerWork);
      languages(res.languages);
      experiences(res.workExperience);
      educations(res.education);
    });
}

// functions for leftSide of the CV template

const skills = (skillsData) => {
  let skill = "";
  skillsData.forEach((data) => {
    let level =
      data.level === "Proficient"
        ? "+++"
        : data.level === "Intermediate"
        ? "++"
        : "+";
    skill += `<p>${data.name}(${level})</p>`;
  });
  document.getElementById("skills").innerHTML = skill; //skillsData.map((data)=>`<p>${data.name}(${data.level})</p>`);
};

const tools = (toolsData) => {
  let tool = "";
  toolsData.forEach((data) => {
    tool += `<p>${data}</p>`;
  });
  document.getElementById("tools").innerHTML = tool;
};

const awards = (awardsData) => {
  let award = "";
  awardsData.forEach((data) => {
    award += `<p>${data.certification}</p>`;
    award += `<p class="mb-3 italic">${data.startDate} - ${data.endDate}</p>`;
  });
  document.getElementById("awards").innerHTML = award;
};
const volunteers = (volunteerData) => {
  let Volunteer = "";
  volunteerData.forEach((data) => {
    Volunteer += `<p class="font-bold">${data.role}</p>`;
    Volunteer += `<p class="mb-3">${data.work}</p>`;
  });
  document.getElementById("Volunteer").innerHTML = Volunteer;
};
const languages = (languagesData) => {
  let language = "";
  languagesData.forEach((data) => {
    let level =
      data.level === "Native" ? "+++" : data.level === "Fluent" ? "++" : "+";
    language += `<p>${data.name}(${level})</p>`;
  });
  document.getElementById("languages").innerHTML = language;
};

// functions for rightSide of the CV template
const experiences = (experiencesData) => {
  let experience = "";
  experiencesData.forEach((data) => {
    experience += `<div class="mb-3">
        <div class"font-bold">${data.jobTitle}</div>
        <div>${data.jobLocation}</div>
        <span class="text-slate-500 italic">${data.startDate} - ${data.endDate}</span>
        <ul class="list-disc pl-10 text-slate-500">
        ${ data.jobDescription.map((list) => `<li>${list}</li>`).join('')}
            
        </ul>
     </div>`;
  });
  document.getElementById("workExperience").innerHTML = experience;

};

const educations = (educationData) => {
  let education = "";
  educationData.forEach((data) => {
    education += `<div class="mb-3">
        <div class"font-bold">${data.Programme}</div>
        <div>${data}</div>
        <span class="text-slate-500 italic">${data} - ${data}</span>
        <ul class="list-disc pl-10 text-slate-500">
        ${ data.map((list) => `<li>${list}</li>`).join('')}
            
        </ul>
     </div>`;
  });
  document.getElementById("education").innerHTML = education;
};

main();
