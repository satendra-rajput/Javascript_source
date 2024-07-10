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
  
    const currentPassword = document.getElementById('oldpass').value;
    const newPassword = document.getElementById('newpass').value;
    const confirmPassword = document.getElementById('confirm').value;
    const oldpassError = document.getElementById('oldpassError');
    const newpassError = document.getElementById('newpassError');
    const confirmError = document.getElementById('confirmError');

    // Regular expression to check for both letters and numbers
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    if (!passwordPattern.test(newPassword)) {
      newpassError.textContent = 'Password must bw 8-12 characters long and contain only letters and number';
        return;
    }

    if (newPassword !== confirmPassword) {
      confirmError.textContent = 'New password and confirm password do not match.';
        return;
    }
    
    if (newPassword !== currentPassword) {
      oldpassError.textContent = 'Current password mismatch .';
        return;
    }

    newpassError.textContent = '';
    confirmError.textContent = '';
    oldpassError.textContent = '';
    alert('Password changed successfully!');
    document.getElementById('changePasswordForm').reset();
    
}
