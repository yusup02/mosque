const shareButton = document.getElementById('share');

shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Помощь в строительстве мечети',
            text: 'Присоединяйтесь к нам в строительстве мечети! Поделитесь этой информацией с друзьями.',
            url: 'https://mosque.shookru.com/?utm_campaign=landing'
        })
        .then(() => console.log('Успешно поделились!'))
        .catch(error => console.error('Ошибка при попытке поделиться:', error));
    } else {
        alert('К сожалению, ваш браузер не поддерживает функцию "Поделиться".');
    }
})