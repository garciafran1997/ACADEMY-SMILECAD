import './style.css';

console.log('Digital Smile CAD Clone Loaded');

// Mobile Menu Toggle
const setupMobileMenu = () => {
  const header = document.querySelector('.header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      // Toggle class on nav list
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'rgba(0, 0, 0, 0.95)'; // Dark background
        nav.style.padding = '30px';
        nav.style.borderBottomLeftRadius = '24px';
        nav.style.borderBottomRightRadius = '24px';
        nav.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
        nav.style.border = '1px solid rgba(255,255,255,0.1)';
        nav.style.gap = '20px'; // Space between links

        // Style links specifically for mobile
        navLinks.forEach(link => {
          link.style.color = 'white';
          link.style.fontSize = '1.2rem';
          link.style.textAlign = 'center';
          link.style.padding = '10px';
          link.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        });

        toggleBtn.innerHTML = '<i class="fas fa-times" style="color:white;"></i>'; // Ensure X is visible if header is dark
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) { // Only on mobile/tablet
          nav.style.display = 'none';
          toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });
    });
  }
};

// Generate Testimonials
const generateTestimonials = () => {
  const grid = document.getElementById('testimonials-grid');
  const loadMoreBtn = document.getElementById('load-more-reviews');
  if (!grid || !loadMoreBtn) return;

  // Explicitly Exocad focused comments
  const reviews = [
    { name: "Carlos Rodríguez", role: "Protesico Dental", text: "El curso de Exocad de cero a experto es brutal. He mejorado mis tiempos de diseño un 50%." },
    { name: "Ana García", role: "Odontóloga", text: "Nunca pensé que diseñar carillas en Exocad fuera tan intuitivo con vuestro método." },
    { name: "Miguel López", role: "Lab Manager", text: "La formación en módulos de implantología de Exocad es la más completa que he visto." },
    { name: "Lucía Fernández", role: "Técnica CAD/CAM", text: "Gracias al curso ahora domino el módulo de barras y férulas en Exocad perfectamente." },
    { name: "David Martinez", role: "Dueño de Laboratorio", text: "Inversión recuperada en una semana. Vuestros trucos de Exocad son oro puro." },
    { name: "Elena Sánchez", role: "Estudiante", text: "Explican Exocad paso a paso, ideal si estás empezando y te da miedo el software." },
    { name: "Javier Pérez", role: "Protesico Senior", text: "Llevo años usando Exocad y aún así aprendí flujos de trabajo nuevos más eficientes." },
    { name: "Laura Torres", role: "Ortodoncista", text: "El módulo de diseño de sonrisas digitales en Exocad me ayuda a vender más tratamientos." },
    { name: "Pablo Ruiz", role: "CAD Desginer", text: "Soporte técnico de 10. Cualquier duda sobre Exocad me la resuelven al momento." },
    { name: "Carmen Diaz", role: "Clínica Dental", text: "Ahora enviamos nuestros diseños de Exocad directos a fresar sin errores." },
    { name: "Alejandro Gomez", role: "Técnico Dental", text: "La librería de dientes que regaláis con el curso de Exocad es fantástica." },
    { name: "Sofia Vargas", role: "Odontóloga Digital", text: "He pasado de no saber abrir Exocad a diseñar coronas monolíticas en 5 minutos." },
    { name: "Manuel Castro", role: "Lab Director", text: "Recomiendo este curso a todo mi equipo para estandarizar el uso de Exocad." },
    { name: "Isabel Romero", role: "Protesica", text: "La calidad de los renders que saco ahora con Exocad ha mejorado mi marketing." },
    { name: "Daniel Navarro", role: "Freelance", text: "Ser experto certificado en Exocad me ha abierto muchas puertas laborales." },
    { name: "Marta Gil", role: "Especialista 3D", text: "El manejo de mallas y escaneados en Exocad se vuelve sencillo con vuestras clases." },
    { name: "Jorge Serrano", role: "Doctor", text: "Integración perfecta de Exocad con mi escáner intraoral gracias al tutorial." },
    { name: "Paula Molina", role: "Técnica", text: "Los casos reales de Exocad que se resuelven en el curso son muy útiles." },
    { name: "Roberto Blanco", role: "Protesico", text: "Dominar los atajos de teclado de Exocad ha sido un antes y un después." },
    { name: "Marina Rubio", role: "Lab Owner", text: "El mejor curso de Exocad en español, sin duda." }
  ];

  let visibleCount = 4; // Show 4 initially (first row)

  const render = () => {
    let html = '';
    // Render up to visibleCount or total length
    const limit = Math.min(visibleCount, reviews.length);

    for (let i = 0; i < limit; i++) {
      const r = reviews[i];
      const initial = r.name.charAt(0);

      html += `
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        <div class="avatar">${initial}</div>
                        <div class="user-info">
                            <h4>${r.name}</h4>
                        </div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="testimonial-text">"${r.text}"</p>
                </div>
            `;
    }
    grid.innerHTML = html;

    // Hide button if all showed
    if (visibleCount >= reviews.length) {
      loadMoreBtn.style.display = 'none';
    }
  };

  // Initial render
  render();

  // Button Click
  loadMoreBtn.addEventListener('click', () => {
    visibleCount = reviews.length; // Show all
    render();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  generateTestimonials();

  // Modal Logic (Generic function for reusability)
  const setupModal = (modalId, openBtnId) => {
    const modal = document.getElementById(modalId);
    const openBtn = document.getElementById(openBtnId);
    const closeBtns = modal ? modal.querySelectorAll('.modal-close') : [];

    if (modal && openBtn) {
      const open = (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
      };

      const close = () => {
        modal.classList.remove('active');
        setTimeout(() => {
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }, 300);
      };

      openBtn.addEventListener('click', open);
      closeBtns.forEach(btn => btn.addEventListener('click', close));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) close();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) close();
      });
    }
  };

  setupModal('course-modal', 'open-course-modal');
  setupModal('b4d-modal', 'open-b4d-modal');

  // Registration Modal Logic
  const regModal = document.getElementById('registration-modal');
  const regOpenBtns = document.querySelectorAll('.open-registration-trigger');
  const regCloseBtns = regModal ? regModal.querySelectorAll('.modal-close, .modal-close-btn') : [];

  const regForm = document.getElementById('inscription-form');
  const formView = document.getElementById('registration-form-view');
  const paymentView = document.getElementById('payment-view');

  // To store data between steps
  let lastFormData = {};

  // Move these to shared scope
  const courseSelect = document.getElementById('course-select');
  const courseDisplay = document.getElementById('selected-course-display');

  if (regModal && regOpenBtns.length > 0 && regForm && formView && paymentView) {
    const openRegModal = (e) => {
      e.preventDefault();
      console.log('Opening Registration Modal');

      // Reset form FIRST
      if (regForm) regForm.reset();

      // Close other modals if open
      document.querySelectorAll('.modal-overlay.active').forEach(m => {
        if (m !== regModal) {
          m.classList.remove('active');
          setTimeout(() => m.style.display = 'none', 300);
        }
      });

      // Pre-select course if data-course is present
      const courseAttr = e.currentTarget.getAttribute('data-course');
      console.log('Selected course attribute:', courseAttr);

      if (courseAttr && courseSelect) {
        courseSelect.value = courseAttr;
        console.log('Course selector value set to:', courseSelect.value);
        // Also update the display text in the header
        if (courseDisplay) {
          const selectedOption = courseSelect.options[courseSelect.selectedIndex];
          courseDisplay.textContent = selectedOption ? selectedOption.text : courseAttr;
        }
      }

      // Reset views state
      formView.style.display = 'block';
      formView.style.opacity = '1';
      paymentView.style.display = 'none';
      paymentView.style.opacity = '0';

      regModal.style.display = 'flex';
      // Small delay to allow display flex to apply
      requestAnimationFrame(() => {
        regModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    };

    const closeRegModal = () => {
      regModal.classList.remove('active');
      setTimeout(() => {
        regModal.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    };

    regOpenBtns.forEach(btn => {
      btn.addEventListener('click', openRegModal);
    });

    regCloseBtns.forEach(btn => {
      btn.addEventListener('click', closeRegModal);
    });

    regModal.addEventListener('click', (e) => {
      if (e.target === regModal) {
        closeRegModal();
      }
    });

    // Handle Form Submission
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Form submission attempted');

      // Ensure form is valid and show validation UI if not
      if (!regForm.checkValidity()) {
        console.warn('Form validation failed');
        regForm.reportValidity();
        return;
      }

      console.log('Form is valid, showing Bizum view');

      // Capture form data
      lastFormData = {
        Nombre: regForm.name.value,
        Email: regForm.email.value,
        Telefono: regForm.phone.value,
        Curso: courseSelect.options[courseSelect.selectedIndex].text,
        Mes: document.getElementById('month').value
      };

      // Update Bizum concept dynamically before showing the view
      const bizumConcept = document.getElementById('bizum-concept');
      if (bizumConcept && courseSelect) {
        const selectedCourse = courseSelect.options[courseSelect.selectedIndex].text;
        bizumConcept.textContent = `Reserva ${selectedCourse}`;
      }

      // Simple switch without complex transitions to ensure visibility
      formView.style.display = 'none';
      paymentView.style.display = 'block';
      setTimeout(() => {
        paymentView.style.opacity = '1';
      }, 50);
    });

    // Copy Bizum Number Logic
    const copyBtn = document.getElementById('copy-bizum');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const number = "607703199";
        navigator.clipboard.writeText(number).then(() => {
          const icon = copyBtn.querySelector('i');
          icon.classList.remove('fa-copy');
          icon.classList.add('fa-check');
          copyBtn.style.color = "#00aae4";

          setTimeout(() => {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-copy');
            copyBtn.style.color = "";
          }, 2000);
        });
      });
    }

    // Confirm Bizum Button
    const confirmBtn = document.getElementById('confirm-bizum-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', async () => {
        const originalText = confirmBtn.textContent;
        confirmBtn.textContent = "Notificando reserva...";
        confirmBtn.disabled = true;

        try {
          // Send to FormSubmit.co
          const response = await fetch("https://formsubmit.co/ajax/academysmilecad@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              subject: `NUEVA RESERVA: ${lastFormData.Curso}`,
              ...lastFormData,
              _honey: "", // Honeypot to prevent spam
              _template: "table"
            })
          });

          if (response.ok) {
            alert("¡Reserva confirmada! Hemos enviado los detalles a academysmilecad@gmail.com. En breve nos pondremos en contacto contigo.");
            closeRegModal();
          } else {
            throw new Error("Error en el envío");
          }
        } catch (error) {
          console.error("Email Error:", error);
          alert("Hubo un problema al enviar la notificación, pero tu intención de reserva ha sido registrada. Por favor, contacta por WhatsApp si no recibes noticias.");
          closeRegModal();
        } finally {
          confirmBtn.textContent = originalText;
          confirmBtn.disabled = false;
        }
      });
    }
  }
});
