import Swal from 'sweetalert2';

export class updateAlert {
  constructor(title, text, html, type, showCancelButton, confirmButtonText) {
    this.disAlert(title, text, html, type, showCancelButton, confirmButtonText);
  }
  disAlert(title, text, html, type, showCancelButton, confirmButtonText) {
    Swal.fire({
      title: title,
      text: text,
      html: html,
      type: type,
      showCancelButton: showCancelButton,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButtonText
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'updated!',
          'Your file has been updated.',
          'success'
        )
      }
    })
  }
}