const textInput = document.getElementById('text');
const generateButton = document.getElementById('generate');
const qrCodeImg = document.getElementById('qr-code');

generateButton.addEventListener('click', () => {
  const text = textInput.value.trim();

  if (text) {
    // Send the text to Flask route for QR code generation
    fetch(`/generate-qr?text=${text}`)
      .then(response => response.json())
      .then(data => {
        qrCodeImg.src = data.qr_code_url;
      })
      .catch(error => {
        console.error(error);
        alert('Error generating QR code!');
      });
  } else {
    alert('Please enter some text!');
  }
});