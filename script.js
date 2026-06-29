// Adiyogi Manish Bhagat Website

document.addEventListener("DOMContentLoaded", function () {

  console.log("Website Loaded Successfully");

  const bookBtn = document.querySelector(".btn");

  if (bookBtn) {
    bookBtn.addEventListener("click", function () {
      alert("Thank you for choosing Adiyogi Manish Bhagat.\nYou will now be redirected to WhatsApp for booking.");
    });
  }

});
