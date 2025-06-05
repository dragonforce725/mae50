const scriptURL = 'https://script.google.com/macros/s/AKfycby03z_I8fGyRBUkn8jX0rxZWt9I48fAn69hwuw-lKSRaHDI8_s23cYOxWmGR7Y2HanV/exec'; // Cole a URL nova da Web App aqui

function enviarArquivo(file) {
  const reader = new FileReader();
  reader.onload = function () {
    const base64 = reader.result.split(',')[1];
    fetch(scriptURL, {
      method: 'POST',
      body: base64
    })
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => alert('Erro: ' + error.message));
  };
  reader.readAsDataURL(file);
}

document.getElementById('photoInput').addEventListener('change', function () {
  const file = this.files[0];
  if (file) enviarArquivo(file);
});

document.getElementById('videoInput').addEventListener('change', function () {
  const file = this.files[0];
  if (file) enviarArquivo(file);
});
