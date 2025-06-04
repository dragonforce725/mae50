// script.js

let arquivoSelecionado = null;

const fotoInput = document.getElementById("fotoInput");
const videoInput = document.getElementById("videoInput");

fotoInput.addEventListener("change", (e) => {
  if (e.target.files.length > 0) {
    arquivoSelecionado = e.target.files[0];
  }
});

videoInput.addEventListener("change", (e) => {
  if (e.target.files.length > 0) {
    arquivoSelecionado = e.target.files[0];
  }
});

function enviarMidia() {
  if (!arquivoSelecionado) {
    alert("Selecione uma foto ou vídeo antes de enviar.");
    return;
  }

  const formData = new FormData();
  formData.append("file", arquivoSelecionado);

  fetch("https://script.google.com/macros/s/AKfycbx-hLzhknfWywkolph_nWGN_RkmJJRAz6ocXiE0NAIrWNEyZN_Kv2HrKHlhONi7AclW/exec", {
    method: "POST",
    body: formData
  })
    .then((response) => response.text())
    .then((result) => {
      alert("Arquivo enviado com sucesso!");
      arquivoSelecionado = null;
      fotoInput.value = "";
      videoInput.value = "";
    })
    .catch((error) => {
      console.error("Erro ao enviar:", error);
      alert("Falha no envio.");
    });
}
