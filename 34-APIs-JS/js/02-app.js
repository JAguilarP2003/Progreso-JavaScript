document.addEventListener('DOMContentLoaded', () => {
    
    const observer = new IntersectionObserver( entries => {
        if(entries[0].isIntersecting) {
            console.log('Is already Visible');
        };
    });

    observer.observe(document.querySelector('.premium'));


})