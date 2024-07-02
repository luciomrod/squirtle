document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    let isSquirtle = true;

    setInterval(() => {
        message.textContent = isSquirtle ? 'Squirtle' : '';
        isSquirtle = !isSquirtle;
    }, 1000);
});
