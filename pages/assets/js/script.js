document.addEventListener('DOMContentLoaded', function() {
    const likeBtn = document.getElementById('like-btn');
    const heartIcon = document.getElementById('heart-icon');

    if (likeBtn && heartIcon) {
        
        likeBtn.addEventListener('click', function() {
            console.log("Heart clicked!"); 

            if (heartIcon.classList.contains('fa-regular')) {
                heartIcon.classList.remove('fa-regular');
                heartIcon.classList.add('fa-solid');
                heartIcon.classList.add('liked-heart'); 
            } else {
                heartIcon.classList.remove('fa-solid');
                heartIcon.classList.remove('liked-heart');
                heartIcon.classList.add('fa-regular');
            }
        });
    } else {
        console.error("Could not find the heart button! Check your HTML IDs.");
    }
});