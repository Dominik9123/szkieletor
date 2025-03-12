const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
        
        closeAllSubMenus()
    })
}

function toggleSubMenu(button) {

    if(!button.nextElementSibling.classList.contains('show')) {
            closeAllSubMenus()

    }

    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
})
}

window.onscroll = function () {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll('.photos img').forEach(img => {
    img.addEventListener('click', function () {
      // Tworzenie lightboxa
      let lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
      document.body.appendChild(lightbox);
  
      // Tworzenie obrazka w lightboxie
      let lightboxImg = document.createElement('img');
      lightboxImg.src = this.src;
      lightbox.appendChild(lightboxImg);
  
      // Zamknięcie po kliknięciu poza obrazkiem
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
          lightbox.remove();
        }
      });
  
      // Zamknięcie po Escape
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          lightbox.remove();
        }
      }, { once: true }); // Event listener działa tylko raz
    });
  });
  