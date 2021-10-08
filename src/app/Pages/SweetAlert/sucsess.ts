import Swal from 'sweetalert2';

export class SweetAlert{
    constructor(position,showConfirm,html){
        this.displayAlert(position,showConfirm,html);
    }
    displayAlert(position,showConfirm,html){
        Swal.fire({
            position: position,
            html: html, 
            showConfirmButton: showConfirm,
          });
    }

}