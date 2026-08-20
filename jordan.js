/* =========================================
   RUNAWAY BUTTON
   ========================================= */

// Find the button using its ID.
const button = document.getElementById("runawayButton");


// Check that the button exists before adding events to it.
if (button) {

    // Detect when the mouse moves anywhere on the page.
    document.addEventListener("mousemove", (event) => {

        // Get the button's position and size on the screen.
        const rect = button.getBoundingClientRect();


        // Calculate the centre position of the button.
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;


        // Calculate the distance between the mouse
        // and the centre of the button.
        const distance = Math.sqrt(
            Math.pow(event.clientX - buttonX, 2) +
            Math.pow(event.clientY - buttonY, 2)
        );


        // If the mouse gets within 100 pixels of the button,
        // move the button to a random position.
        if (distance < 100) {

            // Calculate the maximum horizontal position
            // where the button can move without leaving the screen.
            const maxX = Math.max(
                0,
                window.innerWidth - button.offsetWidth
            );


            // Calculate the maximum vertical position
            // where the button can move without leaving the screen.
            const maxY = Math.max(
                0,
                window.innerHeight - button.offsetHeight
            );


            // Generate a random horizontal position.
            const randomX = Math.random() * maxX;

            // Generate a random vertical position.
            const randomY = Math.random() * maxY;


            // Move the button to the random horizontal position.
            button.style.left = randomX + "px";

            // Move the button to the random vertical position.
            button.style.top = randomY + "px";
        }
    });


    // Detect when the user clicks the button.
    button.addEventListener("click", () => {

        // Show a message when the button is successfully clicked.
        alert("YOU CAUGHT ME! 🎉");

    });

}


/* =========================================
   LAMBORGHINIE MOVEMENT
   ========================================= */

// Find the LamborghiniE image using its class name.
const image = document.querySelector(".lamborghiniE");


// Find the container that LamborghiniE moves around inside.
const container = document.querySelector(".container");


/* =========================================
   LOCKED NAVIGATION
   ========================================= */

const navigation = document.querySelector(".site-nav");

if (navigation) {
    const isUnlocked = sessionStorage.getItem("navUnlocked") === "true";
    const navigationLinks = navigation.querySelectorAll("a");
    const status = navigation.querySelector(".nav-status");

    navigation.classList.toggle("is-locked", !isUnlocked);
    navigation.classList.toggle("is-unlocked", isUnlocked);

    if (status) {
        status.textContent = isUnlocked ? "Unlocked" : "Locked";
    }

    navigationLinks.forEach((link) => {
        link.setAttribute("aria-disabled", String(!isUnlocked));

        if (!isUnlocked) {
            link.addEventListener("click", (event) => {
                event.preventDefault();
            });
        }
    });
}


// Only run the LamborghiniE code if both the image
// and its container were found.
if (image && container) {


    /* =========================================
       RANDOM LAMBORGHINIE MOVEMENT
       ========================================= */

    // Create a function that moves LamborghiniE
    // to a random position inside the container.
    function moveToRandomPlace() {

        // Get the width of the container.
        const containerWidth = container.clientWidth;

        // Get the height of the container.
        const containerHeight = container.clientHeight;


        // Calculate the maximum horizontal position
        // where LamborghiniE can move while staying inside
        // the container.
        const maxLeft = Math.max(
            0,
            containerWidth - image.clientWidth
        );


        // Calculate the maximum vertical position
        // where LamborghiniE can move while staying inside
        // the container.
        const maxTop = Math.max(
            0,
            containerHeight - image.clientHeight
        );


        // Generate a random horizontal position.
        // Math.floor() rounds the number down to a whole number.
        const randomLeft = Math.floor(
            Math.random() * (maxLeft + 1)
        );


        // Generate a random vertical position.
        const randomTop = Math.floor(
            Math.random() * (maxTop + 1)
        );


        // Move LamborghiniE to the random horizontal position.
        image.style.left = randomLeft + "px";

        // Move LamborghiniE to the random vertical position.
        image.style.top = randomTop + "px";
    }


    // Wait until the LamborghiniE image has loaded.
    image.addEventListener("load", () => {

        // Move LamborghiniE to a random position immediately.
        moveToRandomPlace();


        // Move LamborghiniE to a new random position every 2 seconds.
        setInterval(moveToRandomPlace, 2000);

    });


    // Detect when the mouse pointer enters LamborghiniE.
    image.addEventListener("mouseenter", () => {

        // Immediately move LamborghiniE to a new random position.
        moveToRandomPlace();

    });

}