document.getElementById('edit-button').addEventListener('click', function() {
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('user-form').style.display = 'block';
    
    // Fill form with current values
    document.getElementById('fullname').value = document.getElementById('display-fullname').textContent;
    document.getElementById('username').value = document.getElementById('display-username').textContent;
    document.getElementById('mobile').value = document.getElementById('display-mobile').textContent;
    document.getElementById('email').value = document.getElementById('display-email').textContent;
    document.getElementById('dob').value = document.getElementById('display-dob').textContent;
    document.getElementById('gender').value = document.getElementById('display-gender').textContent;
    document.getElementById('timezone').value = document.getElementById('display-timezone').textContent;
});

document.getElementById('cancel-button').addEventListener('click', function() {
    document.getElementById('user-form').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
});

document.getElementById('update-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const timezone = document.getElementById('timezone').value;

    // Update display values
    document.getElementById('display-fullname').textContent = fullname;
    document.getElementById('display-username').textContent = username;
    document.getElementById('display-mobile').textContent = mobile;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-dob').textContent = dob;
    document.getElementById('display-gender').textContent = gender;
    document.getElementById('display-timezone').textContent = timezone;

    // Switch back to display view
    document.getElementById('user-form').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
});
