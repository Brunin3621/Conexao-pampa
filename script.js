// Aqui você pode adicionar interações mais avançadas, por exemplo, curtidas, comentários e compartilhamentos.
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Post curtido!');
    });
});

document.querySelectorAll('.comment-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Comentando no post...');
    });
});

document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Post compartilhado!');
    });
});
