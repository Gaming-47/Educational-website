document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const registerNumber = document.getElementById('registerNumber').value;
    const dobDay = document.getElementById('dob-day').value;
    const dobMonth = document.getElementById('dob-month').value;
    const dobYear = document.getElementById('dob-year').value;

    // Example validation (you can set your own conditions)
    if (registerNumber === "12345" && dobDay === "01" && dobMonth === "01" && dobYear === "2004") {
        window.location.href = "res.html"; // Redirect to the result page
    } else {
        alert('Invalid Registration Number or Date of Birth. Please try again.');
    }
});