document.addEventListener("DOMContentLoaded", function() {
    const loginSection = document.getElementById('login-section');
    const studentDataSection = document.getElementById('student-data-section');
    const studentDataDiv = document.getElementById('student-data');
    const logoutButton = document.getElementById('logout-button');

    // Check if student data exists in localStorage
    const studentData = JSON.parse(localStorage.getItem('studentData'));

    if (studentData) {
        // Hide login form and display student data
        loginSection.style.display = 'none';
        studentDataSection.style.display = 'block';
        populateStudentData(studentData);
    }

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const studentId = document.getElementById('student-id').value;
        const password = document.getElementById('password').value;

        // Dummy validation for demonstration purposes
        if (studentId === "12345" && password === "password") {
            const studentData = {
                studentId: "12345",
                name: "xyz",
                course: "Computer Science",
                Fathername:"zxy",
                year: "2024",
            };

            // Save student data to localStorage
            localStorage.setItem('studentData', JSON.stringify(studentData));

            // Redirect to the home page after login
            window.location.href = "/index.html";
        } else {
            alert("Invalid Student ID or Password.");
        }
    });

    // Handle logout button click
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Clear student data from localStorage
            localStorage.removeItem('studentData');

            // Redirect to login section
            loginSection.style.display = 'block';
            studentDataSection.style.display = 'none';
        });
    }

    // Populate student data in a single row format
    function populateStudentData(studentData) {
        const studentDataHtml = `
            <div><strong>Student ID:</strong> ${studentData.studentId}</div>
            <div><strong>Name:</strong> ${studentData.name}</div>
            <div><strong>Course:</strong> ${studentData.course}</div>
            <div><strong>Year:</strong> ${studentData.year}</div>
        `;

        studentDataDiv.innerHTML = studentDataHtml;
    }
});