// Get form elements
var resumeForm = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resumeOutput");
var resetButton = document.querySelector("button[type='reset']");
function generateResume(event) {
    event.preventDefault(); // Prevent form from reloading the page
    // Get form input values
    var fullName = document.getElementById("name").value;
    var profession = document.getElementById("whoAreYou").value;
    var summary = document.getElementById("summary").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var github = document.getElementById("github").value;
    var linkedin = document.getElementById("linkedin").value;
    var address = document.getElementById("address").value;
    var educationSite = document.getElementById("educationSite").value;
    var degree = document.getElementById("degree").value;
    var graduationYear = document.getElementById("graduationYear").value;
    var companyName = document.getElementById("companyName").value;
    var designation = document.getElementById("designation").value;
    var skills = document.getElementById("skills").value.split(/[\s,]+/).map(function (skill) { return "<span class=\"tag\">".concat(skill, "</span>"); }).join('');
    var gender = document.getElementById("gender").value;
    var maritalStatus = document.getElementById("maritalStatus").value;
    var hobies = document.getElementById("hobies").value.split(/[\s,]+/).map(function (hobby) { return "<span class=\"tag\">".concat(hobby, "</span>"); }).join('');
    var languages = document.getElementById("languages").value.split(/[\s,]+/).map(function (language) { return "<span class=\"tag\">".concat(language, "</span>"); }).join('');
    // Generate the resume
    resumeOutput.innerHTML = "\n      <h2>Editable Resume</h2>\n      <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(fullName, "</span></p>\n      <p><strong>Profession:</strong> <span contenteditable=\"true\">").concat(profession, "</span></p>\n      <p><strong>Summary:</strong> <span contenteditable=\"true\">").concat(summary, "</span></p>\n      <h3>Contact Information</h3>\n      <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n      <p><strong>GitHub:</strong> <span contenteditable=\"true\">").concat(github, "</span></p>\n      <p><strong>LinkedIn:</strong> <span contenteditable=\"true\">").concat(linkedin, "</span></p>\n      <p><strong>Address:</strong> <span contenteditable=\"true\">").concat(address, "</span></p>\n      <h3>Education</h3>\n      <p><strong>Institution:</strong> <span contenteditable=\"true\">").concat(educationSite, "</span></p>\n      <p><strong>Degree:</strong> <span contenteditable=\"true\">").concat(degree, "</span></p>\n      <p><strong>Graduation Year:</strong> <span contenteditable=\"true\">").concat(graduationYear, "</span></p>\n      <h3>Work Experience</h3>\n      <p><strong>Company:</strong> <span contenteditable=\"true\">").concat(companyName, "</span></p>\n      <p><strong>Designation:</strong> <span contenteditable=\"true\">").concat(designation, "</span></p>\n      <h3>Skills</h3>\n      <div class=\"tag-container\">").concat(skills, "</div>\n      <h3>Additional Information</h3>\n      <p><strong>Gender:</strong> <span contenteditable=\"true\">").concat(gender, "</span></p>\n      <p><strong>Marital Status:</strong> <span contenteditable=\"true\">").concat(maritalStatus, "</span></p>\n      <p><strong>Hobbies:</strong> <div class=\"tag-container\">").concat(hobies, "</div></p>\n      <p><strong>Languages:</strong> <div class=\"tag-container\">").concat(languages, "</div></p>\n    ");
    // Make resume visible
    resumeOutput.style.display = "block";
}
// Function to reset form and hide resume
function resetForm() {
    resumeForm.reset();
    resumeOutput.style.display = "none";
}
// Event listeners for form submission and reset
resumeForm.addEventListener("submit", generateResume);
resetButton.addEventListener("click", resetForm);
