const notifyBtn = document.querySelector('#notificar');

notifyBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then ( result => {
            console.log('The result is', result);
        });
});

const seeNotification = document.querySelector('#verNotificacion');
seeNotification.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notification = new Notification('amogus ඞ', {
            icon: 'img/ccj.png',
            body: 'Código con Juan',
        });

        notification.onclick = function () {
            window.open('index.html');
        }
    }
});