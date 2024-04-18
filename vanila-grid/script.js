// let scrollContainer = document.querySelector('.slider');
// scrollContainer.addEventListener('wheel', (evt) => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
//   scrollContainer.scrollTop += evt.deltaX;
//   scrollContainer.style.scrollBehavior = 'auto';
// });


let scrollContainer = document.querySelector('.slider');
scrollContainer.addEventListener('wheel', (evt) => {
  // Only adjust scroll behavior if needed
  // evt.preventDefault();

  // Adjust scroll behavior based on the direction of scrolling
  if (evt.deltaY !== 0) {
    scrollContainer.scrollLeft += evt.deltaY;
  }
  if (evt.deltaX !== 0) {
    scrollContainer.scrollTop += evt.deltaX;
  }

  // Consider setting scroll behavior outside of the event listener if needed
  // scrollContainer.style.scrollBehavior = 'auto';
});
