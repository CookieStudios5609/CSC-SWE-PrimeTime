function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const formData = new FormData();
    formData.append('username', username); 
    formData.append('password', password);

    fetch('http://127.0.0.1:8000/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
    })
        .then(response => {
            if (response.ok) {
                // Login successful - redirect or show message
                window.location.href = '/dashboard';
            } else {
                // Login failed - show error 
                alert('Invalid email or password');
            }
        })
        .catch(error => {
            console.error('Error logging in', error);
        });
}
