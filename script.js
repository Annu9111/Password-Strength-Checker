const password = document.getElementById("password");
const strength = document.getElementById("strength");
const message = document.getElementById("message");

password.addEventListener("input",()=>{
  const value=password.value;
  let score = 0;

  if (value.length >= 6) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;

  if (score<=1){
    strength.style.width = "25%";
    strength.style.background = "red";
    message.innerText = "Weak Pasword";
    message.style.color = "red";
  }
  else if (score==2 || score==3){
    strength.style.width = "60%";
    strength.style.background = "orange";
    message.innerText = "Medium Pasword";
    message.style.color = "orange";}

  else{
    strength.style.width = "100%";
    strength.style.background = "green";
    message.innerText = "Strong Password";
    message.style.color = "green";
  }  
})