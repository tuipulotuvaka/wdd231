const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(isOpen));

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuButton.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 700) {
                navigation.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
                menuButton.textContent = "☰";
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 700) {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
            menuButton.textContent = "☰";
        }
    });
}