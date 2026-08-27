document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".page-link");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const dept = this.getAttribute("data-dept");
            const topic = this.getAttribute("data-topic");

            const mode = localStorage.getItem("mode");

            if (mode === "study") {
                // Inga dhaan 'topic' missing-ah irundhuchi, ippo add panniyachi
                window.location.href = `study-content.html?dept=${dept}&topic=${topic}`;
            } else {
                window.location.href = `Questions.html?dept=${dept}&topic=${topic}`;
            }
        });
    });
});