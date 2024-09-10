// Get form elements
const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
const resetButton = document.querySelector("button[type='reset']") as HTMLButtonElement;

function generateResume(event: Event): void {
    event.preventDefault(); // Prevent form from reloading the page
  
    // Get form input values
    const fullName = (document.getElementById("name") as HTMLInputElement).value;
    const profession = (document.getElementById("whoAreYou") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const github = (document.getElementById("github") as HTMLInputElement).value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLTextAreaElement).value;
    const educationSite = (document.getElementById("educationSite") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const graduationYear = (document.getElementById("graduationYear") as HTMLInputElement).value;
    const companyName = (document.getElementById("companyName") as HTMLInputElement).value;
    const designation = (document.getElementById("designation") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(/[\s,]+/).map(skill => `<span class="tag">${skill}</span>`).join('');
    const gender = (document.getElementById("gender") as HTMLSelectElement).value;
    const maritalStatus = (document.getElementById("maritalStatus") as HTMLSelectElement).value;
    const hobies = (document.getElementById("hobies") as HTMLInputElement).value.split(/[\s,]+/).map(hobby => `<span class="tag">${hobby}</span>`).join('');
    const languages = (document.getElementById("languages") as HTMLInputElement).value.split(/[\s,]+/).map(language => `<span class="tag">${language}</span>`).join('');
  
    // Generate the resume
    resumeOutput.innerHTML = `
      <h2>Editable Resume</h2>
      <p><strong>Name:</strong> <span contenteditable="true">${fullName}</span></p>
      <p><strong>Profession:</strong> <span contenteditable="true">${profession}</span></p>
      <p><strong>Summary:</strong> <span contenteditable="true">${summary}</span></p>
      <h3>Contact Information</h3>
      <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
      <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
      <p><strong>GitHub:</strong> <span contenteditable="true">${github}</span></p>
      <p><strong>LinkedIn:</strong> <span contenteditable="true">${linkedin}</span></p>
      <p><strong>Address:</strong> <span contenteditable="true">${address}</span></p>
      <h3>Education</h3>
      <p><strong>Institution:</strong> <span contenteditable="true">${educationSite}</span></p>
      <p><strong>Degree:</strong> <span contenteditable="true">${degree}</span></p>
      <p><strong>Graduation Year:</strong> <span contenteditable="true">${graduationYear}</span></p>
      <h3>Work Experience</h3>
      <p><strong>Company:</strong> <span contenteditable="true">${companyName}</span></p>
      <p><strong>Designation:</strong> <span contenteditable="true">${designation}</span></p>
      <h3>Skills</h3>
      <div class="tag-container">${skills}</div>
      <h3>Additional Information</h3>
      <p><strong>Gender:</strong> <span contenteditable="true">${gender}</span></p>
      <p><strong>Marital Status:</strong> <span contenteditable="true">${maritalStatus}</span></p>
      <p><strong>Hobbies:</strong> <div class="tag-container">${hobies}</div></p>
      <p><strong>Languages:</strong> <div class="tag-container">${languages}</div></p>
    `;
  
  // Make resume visible
  resumeOutput.style.display = "block";
}
// Function to reset form and hide resume
function resetForm(): void {
  resumeForm.reset();
  resumeOutput.style.display = "none";
}

// Event listeners for form submission and reset
resumeForm.addEventListener("submit", generateResume);
resetButton.addEventListener("click", resetForm);
