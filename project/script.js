window.onload = function() {
    alert("Welcome to my page!");
};

// Add interactivity to buttons
document.addEventListener("DOMContentLoaded", function () {
    const bioBtn = document.querySelector(".btn:nth-child(1)");
    const resumeBtn = document.querySelector(".btn:nth-child(2)");

    bioBtn.addEventListener("click", function () {
        console.log("Bio Data button clicked.");
    });

    resumeBtn.addEventListener("click", function () {
        console.log("Resume button clicked.");
    });
});