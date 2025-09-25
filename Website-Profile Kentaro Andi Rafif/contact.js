document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let status = document.getElementById("status");


  status.textContent = "";
  status.style.color = "white";


  if(name === "" || email === "" || message === ""){
    status.textContent = "⚠️ Please fill in all fields.";
    status.style.color = "orange";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.match(emailPattern)){
    status.textContent = "❌ Invalid email format.";
    status.style.color = "red";
    return;
  }

  status.textContent = "✅ Message sent successfully!";
  status.style.color = "#00ff99";

  document.getElementById("contactForm").reset();
});
