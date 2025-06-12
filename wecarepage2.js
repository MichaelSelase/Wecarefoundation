 <script>
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e){
        if (this.hash !== '') {
          e.preventDefault();
          document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
          
          // Highlight active link
          document.querySelectorAll('nav a').forEach(nav => nav.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
    function handleContactSubmit(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if(name && email && message) {
        alert(Thank you, ${name}! Your message has been received. We will contact you at ${email}.);
        event.target.reset();
      } else {
        alert('Please fill in all fields.');
      }
    }
</script>