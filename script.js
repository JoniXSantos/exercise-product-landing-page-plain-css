document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.otherimage').forEach(img => {
        img.addEventListener('click', () => {
            document.getElementById('currentimage').src = img.src;
        });
    });
});