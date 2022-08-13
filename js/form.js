function captureDataForm(){
    const form_contact = document.getElementById("form-contact");
    const name = document.getElementById("name-form");
    const email = document.getElementById("email-form");
    const txtArea = document.getElementById("txtArea");

    console.log("Starting...");
    setTimeout(() => console.log("Capturing form data...."), 3000);
    setTimeout(() => console.log("Showing data.."), 3200);
    setTimeout(() => console.log("Full Name: "), 3500);
    setTimeout(() => console.log(name.value), 3550);
    setTimeout(() => console.log("E-mail: "), 3600);
    setTimeout(() => console.log(email.value), 3650);
    setTimeout(() => console.log("Comments: "), 3700);
    setTimeout(() => console.log(txtArea.value), 3750);
    setTimeout(() => console.log("Ending..."), 3900);
    setTimeout(() => form_contact.reset(), 4500);
    setTimeout(() => console.log("Process finished! Goodbye! :D"), 5000);

    
}