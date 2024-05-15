document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const closeBtn = document.querySelector(".close-btn");
    const faqItems = document.querySelectorAll(".faq-item");
    const answerBox = document.querySelector(".answer-box");
    const answerText = document.querySelector(".answer");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            answerText.textContent = item.getAttribute("data-answer");
            answerBox.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
    chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
});
