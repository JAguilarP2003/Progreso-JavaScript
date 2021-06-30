window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);


function updateStatus() {
    if (navigator.onLine) {
        console.log('You are connected');
    } else {
        console.log('You have no conection');
    }
}