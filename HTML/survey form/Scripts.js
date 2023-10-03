function submitForm() {
	const popupContent = `
    	First Name: ${document.getElementById('firstName').value}\n
    	Last Name: ${document.getElementById('lastName').value}\n
    	Date of Birth: ${document.getElementById('dob').value}\n
    	Country: ${document.getElementById('country').value}\n
    	Gender: ${document.querySelector('input[name="gender"]:checked')?.value || 'Not specified'}\n
    	Profession: ${document.getElementById('profession').value}\n
    	Email: ${document.getElementById('email').value}\n
    	Mobile Number: ${document.getElementById('mobile').value}
	`;

	alert(popupContent);

	// Reset the form
	resetForm();
}

function resetForm() {
	document.getElementById('surveyForm').reset();
}

