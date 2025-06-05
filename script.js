const scriptURL = 'https://script.google.com/macros/s/AKfycbwXxIaFokBtT6WQpElmCr6iWZDYQfHWRojyu8aHDFZ187azLk1nyF1l-8QxxwN11vup/exec';

document.getElementById('photoInput').addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    fetch(scriptURL, {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => alert('Erro: ' + error.message));
  }
});

document.getElementById('videoInput').addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    fetch(scriptURL, {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => alert('Erro: ' + error.message));
  }
});
