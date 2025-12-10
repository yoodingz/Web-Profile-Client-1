// Apoteker Portfolio - Main JavaScript
(function(){

  // Initialize Typed.js
  function initTyped(){
    if(window.Typed){
      new Typed('#typed',{
        strings:["Apoteker Klinis","Konsultan Obat","Pendidik Kesehatan"],
        typeSpeed:60,
        backSpeed:40,
        backDelay:1800,
        loop:true
      });
    }
  }

  // Smooth scroll for anchor links
  function initSmoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
      anchor.addEventListener('click', function(e){
        var target = document.querySelector(this.getAttribute('href'));
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });
  }

  // Appointment form handling
  function initAppointmentForm(){
    var submitBtn = document.getElementById('submitApptBtn');
    if(!submitBtn) return;
    
    submitBtn.addEventListener('click', function(e){
      e.preventDefault();
      var name = document.getElementById('apptName').value.trim();
      var email = document.getElementById('apptEmail').value.trim();
      var phone = document.getElementById('apptPhone').value.trim();
      var date = document.getElementById('apptDate').value.trim();
      
      if(!name || !email || !phone || !date){
        alert('Silakan lengkapi semua field yang diperlukan.');
        return;
      }
      
      // Simulate successful submission
      alert('Terima kasih! Janji Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.');
      
      // Reset form
      document.getElementById('appointmentForm').reset();
      
      // Close modal
      var modal = bootstrap.Modal.getInstance(document.getElementById('appointmentModal'));
      if(modal) modal.hide();
    });
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function(){
    initTyped();
    initSmoothScroll();
    initAppointmentForm();
  });

})();
