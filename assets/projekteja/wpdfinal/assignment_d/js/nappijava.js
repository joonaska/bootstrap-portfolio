document.getElementById("nappi1").addEventListener( 'click' , changeClass);

function changeClass() {
  var content = document.getElementById("lisamatskua");
  var btn = document.getElementById("nappi1");
  content.classList.toggle('show');

  if (content.classList.contains("show")) {
      btn.innerHTML = "Näytä vähemmän";
  } else {
      btn.innerHTML = "Näytä enemmän";
  }
}

