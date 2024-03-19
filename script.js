var headeractive = true; // Define headeractive outside the function to maintain its state

function headerFunction() {
  let headerScreen = document.getElementById('headerScreen');
  let menucheck = document.getElementById('menucheck');

  // Update the checked attribute of menucheck based on headeractive

  if (headeractive) {
    headerScreen.style.top = '0%';
    menucheck.checked = headeractive;
  } else {
    headerScreen.style.top = '-100%';
    menucheck.checked = headeractive;
  }

  headeractive = !headeractive; // Toggle headeractive
  headerScreen.style.transition = 'top 0.3s ease-in-out'; // Add transition effect
}
