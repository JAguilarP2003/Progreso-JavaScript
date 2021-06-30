document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Execute the function to play the video...');
    } else {
        console.log('Pause the video');
    }
})