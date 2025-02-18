// Lógica básica para interagir com os botões
document.querySelector('.edit-photo-btn').addEventListener('click', function() {
    alert('Aqui você pode escolher uma nova foto de perfil!');
});

document.querySelector('.edit-cover-btn').addEventListener('click', function() {
    alert('Aqui você pode escolher uma nova foto de capa!');
});

// Exemplo de como salvar configurações
document.querySelector('.save-btn').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Configurações salvas com sucesso!');
});
