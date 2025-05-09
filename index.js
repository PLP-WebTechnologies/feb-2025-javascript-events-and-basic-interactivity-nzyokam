const clickBtn = document.getElementById('clickBtn');
    const secretBtn = document.getElementById('secretBtn');
    const secretMessage = document.getElementById('secretMessage');
    const keypressOutput = document.getElementById('keypressOutput');

    clickBtn.addEventListener('click', () => {
      clickBtn.textContent = 'Clicked!';
      clickBtn.style.backgroundColor = 'green';
    });

    secretBtn.addEventListener('dblclick', () => {
      secretMessage.classList.remove('hidden');
    });

    document.addEventListener('keydown', (e) => {
      keypressOutput.textContent = `You pressed: ${e.key}`;
    });

    // Gallery
    const images = [
      './images/2.jpg',
      './images/3.jpg',
      './images/4.jpg'
    ];
    let currentImg = 0;
    const galleryImg = document.getElementById('galleryImg');

    function nextImg() {
      currentImg = (currentImg + 1) % images.length;
      galleryImg.src = images[currentImg];
    }

    function prevImg() {
      currentImg = (currentImg - 1 + images.length) % images.length;
      galleryImg.src = images[currentImg];
    }

    // Tabs
    function openTab(id) {
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
    }

    // Form Validation
    const form = document.getElementById('form');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      if (!name || !email || !password) {
        feedback.textContent = 'Please fill all fields.';
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        feedback.textContent = 'Please enter a valid email.';
        return;
      }

      if (password.length < 8) {
        feedback.textContent = 'Password must be at least 8 characters.';
        return;
      }

      feedback.textContent = '✅ Form submitted successfully!';
      feedback.style.color = 'green';
    });

    document.getElementById('password').addEventListener('input', () => {
      const pw = document.getElementById('password').value;
      feedback.textContent = pw.length < 8 ? 'Password too short' : '';
    });