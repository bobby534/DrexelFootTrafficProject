document.addEventListener("DOMContentLoaded", function () {
    const mapPoints = document.querySelectorAll(".map-point");
    const tooltip = document.getElementById("tooltip");

    mapPoints.forEach(point => {
        point.addEventListener("mouseover", function () {
            const pointId = this.getAttribute("data-id");
            const pointInfo = this.getAttribute("data-info");

            tooltip.innerHTML = `<strong>${pointInfo}</strong>`;
            tooltip.style.left = `${event.pageX}px`;
            tooltip.style.top = `${event.pageY}px`;
            tooltip.style.display = "block";
        });

        point.addEventListener("mouseout", function () {
            tooltip.style.display = "none";
        });
    });
});
