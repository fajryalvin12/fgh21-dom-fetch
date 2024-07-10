const form = document.getElementById("form-login");

const authLogin = "https://st2lww-8888.csb.app/fajry/data";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  const formData = new URLSearchParams();
  formData.append("email", email);
  formData.append("password", password);

  const login = await fetch(authLogin, {
    method: "post",
    body: formData,
  });
  const processLogin = await login.json();
  if (processLogin.success) {
    window.alert(processLogin.message);
    window.location = "index.html";
  } else {
    window.alert("Silakan input data yang sesuai");
  }
});
