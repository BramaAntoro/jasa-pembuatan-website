function sendWhatsAppMessage(event) {
    event.preventDefault();

    var name = document.getElementById('nameInput').value;
    var website = document.getElementById('websiteSelect').value;
    var message = document.getElementById('textareaInput').value;

    var whatsappNumber = "+6282120164306";

    var whatsappMessage = "Nama: " + name + "%0AWebsite: " + website + "%0APesan: " + message;

    window.open('https://api.whatsapp.com/send?phone=' + whatsappNumber + '&text=' + whatsappMessage, '_blank');
}