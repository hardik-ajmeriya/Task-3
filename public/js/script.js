window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 10){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});

// Close navbar on link click (for mobile view)
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});
