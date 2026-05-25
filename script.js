function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document
    .getElementById(typeof id === "number" ? "page" + id : id)
    .classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show the "See what's next" button on page 2 after 5 seconds
setTimeout(() => {
  const btn = document.getElementById("page2Btn");
  if (btn) btn.style.display = "inline-block";
}, 5000);