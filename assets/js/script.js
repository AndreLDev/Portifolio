document.addEventListener('DOMContentLoaded', function () {
    // Get all trigger buttons
    var acordeonBox = document.querySelectorAll('.acordeon');
  
    acordeonBox.forEach(function (acordeon) {
        acordeon.addEventListener('click', function () {
            acordeon.classList.toggle('open');
      });
    });
  });