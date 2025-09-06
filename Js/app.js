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