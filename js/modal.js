// Get the modal
const modal = window.document.getElementById("emailSubscribeModal");

// Get the button that opens the modal
const btn = window.document.getElementById("emailSubscribeButton");

// Get the <span> element that closes the modal
const span = window.document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};