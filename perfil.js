// Aqui você pode adicionar interações, como curtir, comentar e compartilhar os posts.
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

document.querySelector('.edit-btn').addEventListener('click', () => {
    alert('Editando o perfil...');
});
