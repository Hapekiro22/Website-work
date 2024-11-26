document.addEventListener('DOMContentLoaded', function() {
    const gameCards = document.querySelectorAll('.game-card');
    const gameDetail = document.getElementById('game-detail');
    const gameDetailText = document.getElementById('game-detail-text');
    let hideTimeout;

    gameCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            const info = this.getAttribute('data-info');
            gameDetailText.textContent = info;
            gameDetail.classList.add('show');
            gameDetail.classList.remove('hide');
            document.body.style.backgroundImage = `url(${bgImage})`;
            clearTimeout(hideTimeout);
        });
    });

    document.addEventListener('mousemove', function(event) {
        const isOverCard = Array.from(gameCards).some(card => card.contains(event.target));
        if (!isOverCard) {
            hideTimeout = setTimeout(() => {
                gameDetail.classList.add('hide');
                gameDetail.classList.remove('show');
                document.body.style.backgroundImage = '';
            }, 90000);
        } else {
            clearTimeout(hideTimeout);
        }
    });
});