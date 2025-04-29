
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        // First, fade out text
        document.getElementById("splash-text").style.opacity = "0";


        setTimeout(() => {
            // Then, fade out the entire splash screen
            document.getElementById("splash").style.opacity = "0";

            setTimeout(() => {
                // Finally, hide splash and show main content
                document.getElementById("splash").style.display = "none";
            }, 1000); // Matches CSS transition

        }, 1800); // Delay before hiding splash
    }, 1000); // Delay before fading text
});