const resetPasswordBtn = document.getElementById("resetPasswordBtn");

async function updatePassword() {
  try {
    console.log("UPDATE PASSWORD");
    const newPassword = document.getElementById("newPassword").value;
    const res = await axios.post("/password/reset-password", {
      password: newPassword,
    });

    const configResponse = await axios.get("/config");

    if (configResponse.data && configResponse.data.API_URL) {
      const apiUrl = configResponse.data.API_URL;
      alert(apiUrl);
      window.location.href = apiUrl;
    } else {
      throw new Error("API_URL not found in configuration response.");
    }
  } catch (error) {
    console.error(error);
    alert(error);
    window.location.reload();
  }
}

resetPasswordBtn.addEventListener("click", updatePassword);
