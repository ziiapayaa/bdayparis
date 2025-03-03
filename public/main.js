// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            let audio = document.querySelector('.song');
  
            // Menunggu interaksi pertama pengguna
            document.body.addEventListener("click", function () {
                audio.play().catch(error => console.log("Autoplay blocked:", error));
            }, { once: true });
  
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
  });