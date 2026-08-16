// Find the Wheezer image
const image = document.querySelector('.wheezer');

// Find the container around the image
const container = document.querySelector('.container');

// Move Wheezer to a random position
function moveToRandomPlace() {
  // Get the container's dimensions
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  // Calculate the maximum safe position
  // This keeps Wheezer inside the container
  const maxLeft = containerWidth - image.clientWidth;
  const maxTop = containerHeight - image.clientHeight;

  // Generate random positions
  const randomLeft = Math.floor(Math.random() * maxLeft);
  const randomTop = Math.floor(Math.random() * maxTop);

  // Move the image to the new position
  image.style.left = `${randomLeft}px`;
  image.style.top = `${randomTop}px`;
}

// Move Wheezer immediately when the page loads
moveToRandomPlace();

// Move Wheezer every 2 seconds
setInterval(moveToRandomPlace, 2000);

// Move Wheezer when the mouse touches it
image.addEventListener('mouseenter', moveToRandomPlace);