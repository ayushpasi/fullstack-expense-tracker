const resetPasswordBtn = document.getElementById("resetPasswordBtn");

async function updatePassword() {
  try {
    console.log("UPDATE PASSWORD");
    const newPassword = document.getElementById("newPassword").value;
    const res = await axios.post("/password/reset-password", {
      password: newPassword,
    });
    alert(res.data.message);
    window.location.href = "/";
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
    window.location.reload();
  }
}

resetPasswordBtn.addEventListener("click", updatePassword);
