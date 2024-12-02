document.addEventListener('DOMContentLoaded', function() {
    const gameCards = document.querySelectorAll('.game-card');
    const gameDetail = document.getElementById('game-detail');
    const gameDetailText = document.getElementById('game-detail-text');
    let hideTimeout;
    let typingTimeout;
    let currentText = '';
    let charIndex = 0;

    function typeText(text) {
        if (charIndex < text.length) {
            currentText += text.charAt(charIndex);
            gameDetailText.textContent = currentText;
            charIndex++;
            typingTimeout = setTimeout(() => typeText(text), 50); // 每50ms打出一个字符
        } else {
            clearTimeout(typingTimeout);
        }
    }

    gameCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            const info = this.getAttribute('data-info');
            currentText = '';
            charIndex = 0;
            gameDetailText.textContent = '';
            gameDetail.classList.add('show');
            gameDetail.classList.remove('hide');
            clearTimeout(hideTimeout);
            clearTimeout(typingTimeout);
            typeText(info);
        });
    });

    document.addEventListener('mousemove', function(event) {
        const isOverCard = Array.from(gameCards).some(card => card.contains(event.target));
        if (!isOverCard) {
            hideTimeout = setTimeout(() => {
                gameDetail.classList.add('hide');
                gameDetail.classList.remove('show');
                clearTimeout(typingTimeout);
            }, 90000); // 500ms后隐藏详细介绍框
        } else {
            clearTimeout(hideTimeout);
        }
    });
});