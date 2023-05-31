// Counter variable for patient registration
let patientCount = 0;

// Function to update the patient count on the page
function updatePatientCount() {
  const countElement = document.getElementById("patientCount");
  countElement.innerText = patientCount;
}

// Function to handle patient registration
function registerPatient() {
  // Perform the necessary registration logic here
  // ...
  
  // Increment the patient count
  patientCount++;
  
  // Update the patient count on the home page
  updatePatientCount();
}

// Event listener for the registration form submission
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Perform form validation and registration logic here
  // ...
  
  // Call the registerPatient function to update the patient count on the home page
  registerPatient();
  
  // Reset the form fields (optional)
  registrationForm.reset();
});
