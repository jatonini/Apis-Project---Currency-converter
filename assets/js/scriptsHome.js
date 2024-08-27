function redirectToPage(page) {
    window.location.href = page;
}

// Adiciona eventos de clique aos quadrados
document.addEventListener('DOMContentLoaded', () => {
    const lockers = document.querySelectorAll('.locker');

    lockers.forEach(locker => {
        locker.addEventListener('click', () => {
            const page = locker.getAttribute('data-page');
            redirectToPage(page);
        });
    });
})