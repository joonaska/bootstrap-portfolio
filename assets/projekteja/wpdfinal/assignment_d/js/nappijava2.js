document.getElementById("nappi2").addEventListener( 'click' , changeClass);

function changeClass() {
  var content = document.getElementById("lisamatskua2");
  var btn = document.getElementById("nappi2");
  content.classList.toggle('show');

  if (content.classList.contains("show")) {
      btn.innerHTML = "Näytä vähemmän";
  } else {
      btn.innerHTML = "Näytä enemmän";
  }
}