// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const inputkey = document.querySelector(".input-login-key");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") 
  {
    alert("vui lòng không để trống");
  } 
  else 
  {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (user.username === inputUsername.value && user.password === inputPassword.value
        && user.key === inputkey.value)
    {
      alert("Đăng Nhập Thành Công");
      window.location.href = "index.html";
    } 
    else
    {
      alert("Đăng Nhập Thất Bại");
    }
  }
});