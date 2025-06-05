const scriptURL = 'https://script.google.com/macros/s/AKfycbxz0AXDP9MyJDYEdD6LxfdeicWTDgHW_YMHssy3YIOEpPWdymHbu5TXmGuRs2C06dY1/exec';

function enviarArquivo(file) {
  const formData = new FormData();
  formData.append("file", file, file.name);

  fetch(scriptURL, {
    method: 'POST',
    body: formData,
  })
  .then(response => response.text())
  .then(result => alert(result))
  .catch(error => alert('Erro: ' + error.message));
}

document.getElementById('photoInput').addEventListener('change', function () {
  const file = this.files[0];
  if (file) enviarArquivo(file);
});

document.getElementById('videoInput').addEventListener('change', function () {
  const file = this.files[0];
  if (file) enviarArquivo(file);
});
