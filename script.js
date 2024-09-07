function changeBackgroundColor(card) {
    const randomColor = getRandomColor();
    card.parentElement.style.backgroundColor = randomColor;
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()   
   * 16)];
    }
    return color;
  }
  
  function   
   handleCardClick(card) {
    console.log('Card clicked:', card);
    changeBackgroundColor(card);

    console.log('Card clicked:', card.textContent);
  }



const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;   

  const   
 emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});