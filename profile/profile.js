// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







function validateForm() {
  const newPassword = document.getElementById('newPassword').value;
    const fullName = document.getElementById('fullName').value;
    const currentPassword = document.getElementById('currentPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordPattern.test(newPassword)) {
        errorMessage.textContent = 'New password must contain at least 8 and no more 12 characters.';
        return;
    }

    if (newPassword !== confirmPassword) {
        errorMessage.textContent = 'New password and confirm password do not match.';
        return;
    }

    errorMessage.textContent = '';
    alert('Password changed successfully!');
    document.getElementById('changePasswordForm').reset();
}
