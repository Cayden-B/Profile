
function goLinkd() {
  window.open("https://www.linkedin.com/in/cayden-byrne-297107227/")
}
function goGithub() {
  window.open("https://github.com/Cayden-B")
}

function goProject1() {
  window.open("https://clever-wescoff-fe42d4.netlify.app/")
}

let goBand = () => {
  window.open("https://cayden-b.github.io/Band-Page/")
}





function validateForm(event) {
  event.preventDefault();

  clearErrors();

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  if (name === '') {
    document.getElementById('nameError').innerText = 'Name is required';
    return;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').innerText = 'Invalid email format';
    return;
  }

  if (message === '') {
    document.getElementById('messageError').innerText = 'Message is required';
    return;
  }

  alert('Form submitted successfully!');
}

function clearErrors() {
  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('messageError').innerText = '';
}


document.getElementById("webpageRebuild").addEventListener("click", goProject1);
document.getElementById("bandPage").addEventListener("click", goBand);
document.getElementById("Linkedin").addEventListener("click", goLinkd);
document.getElementById("Github").addEventListener("click", goGithub);













