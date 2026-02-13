// WhatsApp Order Form Integration
console.log('WhatsApp script started loading...');

// Wait for DOM to be ready
window.addEventListener('load', function() {
    console.log('Window loaded, searching for form...');
    
    const form = document.getElementById('whatsappForm');
    console.log('Form element:', form); // This will show if form is found
    
    if (!form) {
        console.error('❌ WhatsApp form not found! Make sure the form has id="whatsappForm"');
        return;
    }
    
    console.log('✅ Form found! Adding event listener...');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('🚀 Form submitted!');
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const product = document.getElementById('product').value.trim();
        const quantity = document.getElementById('quantity').value.trim();
        const message = document.getElementById('message').value.trim();
        
        console.log('📝 Form data:', { name, product, quantity, message });
        
        // Validate required fields
        if (!name || !product || !quantity) {
            console.log('❌ Validation failed - missing required fields');
            alert('Please fill in all required fields (Name, Product, Quantity)');
            return;
        }
        
        console.log('✅ Validation passed');
        
        // ⚠️ IMPORTANT: REPLACE WITH YOUR ACTUAL WHATSAPP NUMBER
        // Format: country code + number (no + symbol, no spaces, no dashes)
        // Example for Nigeria: +234 803 123 4567 becomes 2348031234567
        // Example for USA: +1 555 123 4567 becomes 15551234567
        const whatsappNumber = '2348089351360'; // ⚠️ CHANGE THIS TO YOUR NUMBER!
        
        console.log('📞 WhatsApp number:', whatsappNumber);
        
        // Format the message
        let whatsappMessage = `*New Order from NTW Website*\n\n`;
        whatsappMessage += `👤 *Name:* ${name}\n`;
        whatsappMessage += `✉️ *email:* ${email}\n`;
        whatsappMessage += `👕 *Product:* ${product}\n`;
        whatsappMessage += `📦 *Quantity:* ${quantity}\n`;
        
        if (message) {
            whatsappMessage += `📝 *Additional Details:* ${message}\n`;
        }
        
        whatsappMessage += `\n_Sent via NTW Website_`;
        
        console.log('💬 WhatsApp message:', whatsappMessage);
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        console.log('🔗 Encoded message:', encodedMessage);
        
        // Create WhatsApp URL
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappURL = isMobile 
            ? `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`
            : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
        
        console.log('🌐 Device type:', isMobile ? 'Mobile' : 'Desktop');
        console.log('🔗 Full WhatsApp URL:', whatsappURL);
        
        // Open WhatsApp
        console.log('🚀 Attempting to open WhatsApp...');
        window.open(whatsappURL, '_blank');
        console.log('✅ WhatsApp window opened!');
        
        // Optional: Clear the form after submission
        // form.reset();
    });
    
    console.log('✅ WhatsApp form script loaded successfully!');
});