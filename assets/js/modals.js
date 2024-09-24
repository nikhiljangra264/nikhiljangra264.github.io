// achievementsModal.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to generate modal dynamically
    function createModal(certId, title, imgSrc) {
      return `
        <div class="modal fade" id="certificateModal${certId}" tabindex="-1" aria-labelledby="certificateModal${certId}Label" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="certificateModal${certId}Label">Certificate of Achievement - ${title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img src="${imgSrc}" alt="${title} Certificate" class="img-fluid">
              </div>
            </div>
          </div>
        </div>
      `;
    }
  
    // Function to add modals to the DOM
    function addModalsToDOM() {
        const body = document.querySelector('body');
        
        // Find all certificate links
        const certificateLinks = document.querySelectorAll('.certificate-link');
        
        // Loop through each certificate link and generate the modal
        certificateLinks.forEach(link => {
          const certId = link.getAttribute('data-cert-id');
          const title = link.getAttribute('data-title');
          const imgSrc = link.getAttribute('data-img');
          
          // Add modal HTML to the body
          body.insertAdjacentHTML('beforeend', createModal(certId, title, imgSrc));
    
          // Attach event listener to the certificate link to trigger the modal
          link.addEventListener('click', function(event) {
            event.preventDefault();
            const modalId = `#certificateModal${certId}`;
            const modalElement = new bootstrap.Modal(document.querySelector(modalId));
            modalElement.show();
          });
        });
      }
    
      // Initialize modals on DOM load
      addModalsToDOM();
    });
      