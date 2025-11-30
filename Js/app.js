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
  title: "E-Commerce",
  description: "A feature-rich e-commerce platform offering product listings, category filtering, shopping cart, and secure checkout. Built with clean UI and responsive design to deliver a seamless shopping experience across all devices, ensuring customer satisfaction and business growth.",
  img: "https://ibb.co.com/ZzF2KH11"
},
{
  number: "02",
  title: "Email Signature",
  description: "A professional, responsive HTML email signature designed to enhance digital identity. Includes logo, contact details, clickable social media links, and compatibility across major email clients, ensuring brand consistency and a polished look in every email communication.",
  img: "https://i.ibb.co.com/BKGM4cnf/email.jpg"
  
},
{
  number: "03",
  title: "Fullstack Project",
  description: "A dynamic fullstack application integrating frontend and backend. Features authentication, CRUD operations, database management, and API connectivity. Built for scalability, responsive design, and efficient performance, ensuring smooth user interaction and secure data handling for modern web needs.",
  img: "https://i.ibb.co.com/7tD2NF1m/News-Paper.webp"
},
{
  number: "04",
  title: "Online Education",
  description: "An interactive online learning platform featuring course listings, video tutorials, quizzes, and progress tracking. Designed for students and educators, with responsive design and user-friendly navigation, making digital education more accessible, engaging, and effective across devices worldwide.",
  img: "https://i.ibb.co.com/gbCXRT3h/education.webp"
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