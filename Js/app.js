function showContent(section) {
    // Hide all content
    document.querySelectorAll('.content').forEach(div => {
      div.classList.remove('active');
    });
    // Show selected content
    document.getElementById(section).classList.add('active');
  }

  // Show skills by default when page loads
  window.onload = function() {
    showContent('skills');
  };

  //  Projectes jeson file 
  const projects = [
  {
    number: "01",
    title: "E-Commerch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tech: "Html 5, css 3, javascript",
    img: "https://ibb.co.com/ZzF2KH11"
  },
  {
    number: "02",
    title: "Backend Project",
    description: "Server-side project with API integration.",
    tech: "Node.js, Express, MongoDB",
    img: "project2.png"
  },
  {
    number: "03",
    title: "Fullstack Project",
    description: "Combined frontend and backend project.",
    tech: "React, Node.js, MySQL",
    img: "project3.png"
  }
];

let currentIndex = 0;

function updateProject() {
  document.getElementById("project-number").innerText = projects[currentIndex].number;
  document.getElementById("project-title").innerText = projects[currentIndex].title;
  document.getElementById("project-description").innerText = projects[currentIndex].description;
  document.getElementById("project-tech").innerHTML = "<b>" + projects[currentIndex].tech + "</b>";
  document.getElementById("project-img").src = projects[currentIndex].img;
}

function nextProject() {
  currentIndex = (currentIndex + 1) % projects.length;
  updateProject();
}

function prevProject() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  updateProject();
}