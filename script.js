const input = document.getElementById("online-id");
const input1 = document.getElementById("password");
const login = document.querySelector(".login-btn");
const image_section = document.querySelector(".image-section")
const login_section = document.querySelector(".login-section")
const center_logo = document.querySelector(".center-logo")
document.getElementById('enrollBtn').addEventListener('mouseover', function(e) {
    // console.log(e.target)
    document.querySelector(".tooltip").style.visibility = 'visible';
});

document.getElementById('enrollBtn').addEventListener('mouseout', function() {
    document.querySelector(".tooltip").style.visibility = 'hidden';
});

function checkInputs() {
    if (input.value.trim() !== "" && input1.value.trim() !== "") {
        login.style.backgroundColor = "#006400";
    } else {
        login.style.backgroundColor = "gray"; 
    }
}


input.addEventListener('input', checkInputs);
input1.addEventListener('input', checkInputs);

const loader = document.getElementById('loader');
const loginText = document.getElementById('login-text');

login.addEventListener('click', (e) => {
  e.preventDefault(); 
  if (input.value.trim() !== "" && input1.value.trim() !== "") {
      login.classList.add('loading');
  
      setTimeout(() => {
        login.classList.remove('loading')
      }, 2000);
  } else {
    alert("Please fill in both the Online ID and Password.");
  }
});

window.onload = function () {
    login_section.style.display = "none"
    image_section.style.width = 100+"vw"
    setTimeout(()=>{
        login_section.style.display = "flex"
    },2000)
    
};