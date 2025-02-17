document.addEventListener("DOMContentLoaded", function () {
    const flipButtons = document.querySelectorAll(".flip-btn");
    const backButtons = document.querySelectorAll(".flip-back-btn");

    flipButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            this.closest(".flip-card-inner").style.transform = "rotateY(180deg)";
        });
    });

    backButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            this.closest(".flip-card-inner").style.transform = "rotateY(0deg)";
        });
    });
});
