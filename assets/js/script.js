document.addEventListener('DOMContentLoaded', function () {
    // Get all trigger buttons
    var acordeonButtons = document.querySelectorAll('.acordeon');
  
    acordeonButtons.forEach(function (acordeon) {
        acordeon.addEventListener('click', function () {
            acordeon.classList.toggle('open');
      });
    });
  });