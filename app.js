
//test console.log for when I had issues with page connection.
console.log("Test")


let validateForm = (event) => {
  event.preventDefault(); //prevent default behaviour
  clearErrors();

  //trim removing whitespace from both ends of the entries

  let name = document.getElementById('name').value.trim(); 
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();



  //check if name is empty.
  if (name === '') {
    document.getElementById('nameError').innerText = 'Name is required';
    return false;
  }

  //regex to check name has no numbers - only letters and spaces
  let nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    document.getElementById("nameError").innerText = 'Name should contain only letters'
    return false;
  }

  //email regex to check email submission has text > @ >. then text
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').innerText = 'Invalid email format';
    return false;
  }


  //check if message is empty
  if (message === '') {
    document.getElementById('messageError').innerText = 'Message is required';
    return false;
  }

  return true;
  
}


//clear error messages associated with the 'nameError', 'emailError', 'messageError' fields
function clearErrors() {
  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('messageError').innerText = '';
}
//clear entries associated with the 'name', 'email', 'message' fields
function clearEntries(){
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('message').value = "";
}


//check valid for submission  ↓

function handleFormSubmission(event) {
  if (!validateForm(event)) {
    event.preventDefault();
  } else {
    alert("form has been submitted!! :)")
    clearEntries()
  }
}

// made this function for my buttons instead of typing it out one by one - previous code is in refactored section.
let goUrl = (id, url) => {
  document.getElementById(id).addEventListener("click", () => {
    window.location.href = url;
  })
}

goUrl("webpageRebuild", "https://clever-wescoff-fe42d4.netlify.app/")
goUrl("Github", "https://github.com/Cayden-B")
goUrl("bandPage", "https://cayden-b.github.io/Band-Page/")
goUrl("Linkedin", "https://www.linkedin.com/in/cayden-byrne-297107227/")
goUrl("land-page", "https://cayden-b.github.io/business-landing-page/")





//Refactored code    ↓  ↓  ↓  ↓  ↓  ↓

// document.getElementById("webpageRebuild").addEventListener("click", goProject1);
// document.getElementById("bandPage").addEventListener("click", goBand);
// document.getElementById("Linkedin").addEventListener("click", goLinkd);
// document.getElementById("Github").addEventListener("click", goGithub);
// function goLinkd() {
//   window.open("https://www.linkedin.com/in/cayden-byrne-297107227/")
// }
// function goGithub() {
//   window.open("https://github.com/Cayden-B")
// }

// function goProject1() {
//   window.open("https://clever-wescoff-fe42d4.netlify.app/")
// }

// let goBand = () => {
//   window.open("https://cayden-b.github.io/Band-Page/")
// }