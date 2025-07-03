// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function () {

    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const form = this;
            const submitBtn = form.querySelector('.submit-btn');
            const successMessage = document.getElementById('successMessage');

            // Basic input validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('project').value.trim();

            if (name.length < 2 || message.length < 10) {
                alert('Please provide a valid name and detailed message.');
                return;
            }

            // Test mode: check if Shift key is held while submitting (for testing animations)
            const isTestMode = e.shiftKey;

            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Function to show success animation
            const showSuccessAnimation = () => {
                // Cool animation: form disappears, success message appears
                form.style.transition = 'all 0.5s ease';
                form.style.opacity = '0';
                form.style.transform = 'translateY(-20px)';

                setTimeout(() => {
                    form.style.display = 'none';
                    successMessage.style.display = 'block';
                    successMessage.style.opacity = '0';
                    successMessage.style.transform = 'translateY(20px)';
                    successMessage.style.transition = 'all 0.5s ease';

                    // Fade in success message
                    setTimeout(() => {
                        successMessage.style.opacity = '1';
                        successMessage.style.transform = 'translateY(0)';
                    }, 50);

                    // Success message stays until page refresh (no auto-reset)
                }, 500);
            };

            if (isTestMode) {
                // Test mode: just show animation without sending email
                console.log('Test mode: Animation only (Hold Shift + Submit for testing)');
                setTimeout(showSuccessAnimation, 1000);
            } else {
                // Real submission to Formspree
                fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        showSuccessAnimation();
                    } else {
                        throw new Error('Network response was not ok');
                    }
                }).catch(error => {
                    alert('There was an error sending your message. Please try again.');
                    submitBtn.textContent = 'Send Message';
                    submitBtn.disabled = false;
                });
            }
        });
    }

    // Add interactive hover effects for form fields
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
        field.addEventListener('focus', function () {
            this.parentElement.style.transform = 'translateY(-2px)';
        });

        field.addEventListener('blur', function () {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });

    // Capacity Overlay Functionality
    function initCapacityOverlay() {
        const capacityOverlay = document.getElementById('capacityOverlay');
        const overlayDismiss = document.getElementById('overlayDismiss');
        const contactForm = document.getElementById('contactForm');

        if (!capacityOverlay || !overlayDismiss || !contactForm) {
            console.error('Overlay elements not found!');
            return;
        }

        // Show overlay when form is interacted with
        window.showCapacityOverlay = function () {
            console.log('Showing overlay'); // Debug
            capacityOverlay.classList.add('active');
        };

        // Hide overlay when dismissed
        function hideCapacityOverlay() {
            console.log('Hiding overlay'); // Debug
            capacityOverlay.classList.remove('active');
            // Store in localStorage so it doesn't show again this session
            localStorage.setItem('capacityOverlayDismissed', 'true');
        }

        // Check if overlay was already dismissed
        if (localStorage.getItem('capacityOverlayDismissed') !== 'true') {
            // Show overlay on first form hover (desktop)
            contactForm.addEventListener('mouseenter', function (e) {
                console.log('Form hovered'); // Debug
                window.showCapacityOverlay();
                // Remove the event listener after first show
                contactForm.removeEventListener('mouseenter', arguments.callee);
            });

            // Show overlay on first form touch (mobile)
            contactForm.addEventListener('touchstart', function (e) {
                console.log('Form touched'); // Debug
                window.showCapacityOverlay();
                // Remove the event listener after first show
                contactForm.removeEventListener('touchstart', arguments.callee);
            }, { once: true });
        }

        // Dismiss button functionality
        overlayDismiss.addEventListener('click', hideCapacityOverlay);

        // Also allow clicking outside overlay to dismiss
        capacityOverlay.addEventListener('click', function (e) {
            if (e.target === capacityOverlay) {
                hideCapacityOverlay();
            }
        });

        console.log('Capacity overlay initialized!');
    }

    // Initialize capacity overlay
    initCapacityOverlay();
}); 