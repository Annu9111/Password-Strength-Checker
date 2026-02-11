const password = document.getElementById("password");
const strength = document.getElementById("strenght");
const message = document.getElementById("message");

password.addEventListener("input",()=>{
  const value=password.value;
  let score = 0;

  if (value.length >= 6) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;
})