function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
    async function checkTailscale() {
      try {
        let response = await fetch("https://go.int.devboer.com", {mode: "no-cors"});
        // If no error, we’re on Tailscale
        document.getElementById("ts-link").style.display = "inline";
      } catch (e) {
        // Not connected, keep hidden
        console.log("Not on Tailscale:", e);
      }
    }
    checkTailscale();
