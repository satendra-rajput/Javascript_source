document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupPointer = document.getElementById("popupPointer");
    const closePopup = document.getElementById("closePopup");

    document.querySelectorAll(".clickable").forEach(element => {
        element.addEventListener("click", (event) => {
            const rect = element.getBoundingClientRect();
            const popupWidth = 200; // Example width of the popup
            const popupHeight = 100; // Example height of the popup

            popup.style.left = `${rect.right + rect.width / 1 - popupWidth / 2}px`;
            popup.style.top = `${rect.bottom - popupHeight - 0}px`;
            popup.style.display = "block";
        });
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});