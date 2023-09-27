// Sample data for CV (you can replace this with dynamic data from a database)
const cvData = {
    name: "John Doe",
    email: "johndoe@example.com",
    education: "Bachelor's in Computer Science",
    experience: "Software Engineer at XYZ Inc.",
    skills: "JavaScript, HTML, CSS, React, Node.js",
    // Add more fields as needed
};

// Function to display CV data
function displayCV() {
    const cvDisplay = document.getElementById("cv-display");

    const cvHTML = `
        <h2>${cvData.name}</h2>
        <p>Email: ${cvData.email}</p>
        <h3>Education</h3>
        <p>${cvData.education}</p>
        <h3>Experience</h3>
        <p>${cvData.experience}</p>
        <h3>Skills</h3>
        <p>${cvData.skills}</p>
    `;

    cvDisplay.innerHTML = cvHTML;
}

// Initial display of CV
displayCV();
