const WHATSAPP_NUMBER ='2347054437714'

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').Value.trim();
  const product = document.getElementById('product').Value.trim();
  const quantity = document.getElementById('quantity').Value.trim();
  const message = document.getElementById('message').Value.trim();
  const extra = document.getElementById('extra').Value.trim();

  let whatsappMessage = `*New Contact Form Submission*\n\n`;
  whatsappMessage += `*Name:* ${name}\n`;
  whatsappMessage += `*Product:* ${product}\n`;

  if (quantity) {
    whatsappMessage += `*quantity:* ${quantity}\n`;
  }

  whatsappMessage += `*message:* ${message}\n`;
  whatsappMessage += `*extra:* ${extra}\n`;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");

  this.reset();

});


/*const form = document.getElementById("whatsappForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "2348089351360"; // replace with yours

  const fullMessage =
`Hello 👋
My name is ${name}.

I would like to order:
Product: ${product}
Quantity: ${quantity}

Details:
${message}`;
  const encodedMessage = encodeURIComponent(fullMessage);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  console.log(whatsappURL);

  window.open(whatsappURL, "_blank");
  
});*/

