function validateForm() {
    const fullName = $("#fullName").val().trim();
    if (!/^[a-záéíóúñ]+\s+[a-záéíóúñ]+$/i.test(fullName)) {
        alert("Please enter at least two words for the name and last name, using only letters.");
        return false;
    }

    const email = $("#email").val().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    const phoneNumber = $("#phoneNumber").val().trim();
    if (!/^\d+$/.test(phoneNumber)) {
        alert("Please enter a valid phone number (only numbers, no spaces).");
        return false;
    }

    const password = $("#password").val();
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
        alert("The password must have at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter and 1 number.");
        return false;
    }

    return true;
}