
function clearForm() {        // we are going to call all the data from the form
    document.getElementById('from_name').value = '';
    document.getElementById('from_namep').value = '';
    document.getElementById('email_id').value = '';
    document.getElementById('attendees-number').value = '';
    document.getElementById('from_num').value = '';
    document.getElementById('inputAddress').value = '';
    document.getElementById('inputState').value = '';
}


document.getElementById('contact-btn').addEventListener('click', function() {     // we put the ear to the click
    const name = document.getElementById('from_name').value;
    const namep = document.getElementById('from_namep').value;
    const email = document.getElementById('email_id').value;
    const num = document.getElementById('from_num').value;
    const address = document.getElementById('inputAddress').value;
    const tipo = document.getElementById('inputState').value;

    
    if (!name || !namep || !email || !num || !address || !tipo) {  // request that all fields be validated
        alert('Por favor ingrese todos los datos pedidos en el formulario');
        return;
    }

    // Create the message with the form information
    const message = `Hola, estoy interesado en tu servicio. Aquí está la información de mi negocio:\nnombre de mi negocio: ${name}\nMi nombre: ${namep}\nCorreo: ${email}\nNúmero de telefono:${num}\nDireccion: ${address}\nTipo De Negocio: ${tipo}`;

    // Create the WhatsApp link with the pre-filled message
    const whatsappLink = `https://wa.me/573013263954?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');   
    clearForm();
});

