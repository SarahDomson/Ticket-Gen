const fileUpload = document.getElementById('file-upload');
const uploadContainer = document.querySelector('.border-dashed');
const avatarError = document.getElementById('avatar-error');

fileUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const maxSize = 500 * 1024; // 500KB
    const validTypes = ['image/jpeg', 'image/png'];

    if (file) {
        if (file.size > maxSize) {
            avatarError.classList.remove('hidden');
            return;
        }

        if (!validTypes.includes(file.type)) {
            avatarError.textContent = 'Please upload a JPG or PNG file.';
            avatarError.classList.remove('hidden');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            // Remove existing preview if any
            const existingPreview = uploadContainer.querySelector('.preview-image');
            if (existingPreview) {
                existingPreview.remove();
            }

            // Create and add new preview
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('preview-image', 'mt-2', 'rounded-lg', 'w-20', 'h-20', 'object-cover');
            uploadContainer.appendChild(img);
            avatarError.classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
});




document.getElementById('ticketForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('fullNameError').classList.add('hidden');
    document.getElementById('emailError').classList.add('hidden');
    document.getElementById('githubError').classList.add('hidden');

    // Form fields
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const github = document.getElementById('github').value.trim();

    // Error tracking
    let isValid = true;

    // Validate Full Name
    if (!fullName) {
      document.getElementById('fullNameError').classList.remove('hidden');
      isValid = false;
    }

    // Validate Email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('emailError').classList.remove('hidden');
      isValid = false;
    }

    // Validate GitHub Username
    if (!github) {
      document.getElementById('githubError').classList.remove('hidden');
      isValid = false;
    }

    // If the form is valid, proceed with form submission logic
    if (isValid) {
      alert('Form submitted successfully!');
      // You can add your form submission logic here (e.g., send to a server)
    }
  });