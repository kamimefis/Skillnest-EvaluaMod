$(document).ready(function() {

    //Amenazas.html:
    const threats = [
        {
          title: 'Phishing',
          description: 'Técnica que engaña al usuario para que proporcione información confidencial.', 
        },
        {
          title: 'Ransomware',
          description: 'Secuestra datos y exige un rescate para liberarlos.',
        },
        {
          title: 'Malware',
          description: 'Software malicioso diseñado para dañar sistemas o robar información.',
        },
        {
          title: 'Ataques DDoS',
          description: 'Colapsan servidores mediante múltiples solicitudes simultáneas.',
        }
    ];

    threats.forEach((threat, i) => {
        $('#threat-cards').append(`
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card h-100 shadow bg-dark text-info">
              <div class="card-body">
                <h5 class="card-title">${threat.title}</h5>
                <p class="card-text">${threat.description}</p>
              </div>
            </div>
          </div>
        `);
    });

    const cases = [
        {
          title: 'Caso Twitter 2020',
          text: 'Ataque de phishing dirigido a empleados permitió tomar el control de cuentas de alto perfil.',
          icon: '<i class="bi bi-twitter-x"></i>'
        },
        {
          title: 'WannaCry 2017',
          text: 'Ransomware que afectó a hospitales, empresas y gobiernos en más de 150 países.',
          icon: '<i class="bi bi-emoji-kiss-fill"></i>'
        },
        {
          title: 'GitHub DDoS 2018',
          text: 'Ataque DDoS más grande registrado en ese momento, con 1.35 Tbps de tráfico.',
          icon: '<i class="bi bi-github"></i>'
        }
    ];

    cases.forEach((item, i) => {
        $('#carousel-items').append(`
          <div class="carousel-item ${i === 0 ? 'active' : ''} bg-dark">
            <div class="d-flex flex-column align-items-center justify-content-center p-4 text-light" style="min-height: 200px;">
              <h5>${item.icon} ${item.title}</h5>
              <p class="text-center w-75">${item.text}</p>
            </div>
          </div>
        `);
    });


    //Consejos.html:
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();

        if (!name || !email || !message) {
        alert('Por favor completa todos los campos.');
        } else {
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        this.reset();
        }
    });

    $('#submitTest').on('click', function () {
    const selected = $('input[name="test"]:checked').val();
    const feedback = $('#test-feedback');

    if (!selected) {
      feedback.text('Por favor selecciona una respuesta.').removeClass().addClass('text-danger fw-bold');
    } else if (selected === '2') {
      feedback.text('Correcto! Esa es la acción recomendada.').removeClass().addClass('text-success fw-bold');
    } else {
      feedback.text('Incorrecto. Nunca hagas click en enlaces sospechosos.').removeClass().addClass('text-danger fw-bold');
    }
  });

});