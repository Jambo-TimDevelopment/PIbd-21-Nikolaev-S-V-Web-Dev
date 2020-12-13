function validate(pass, pass2, mail){
    let sub = "@";
    if (pass!=pass2){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Несоответствующие пароли!',
          });
        return false;
    }
    if (!mail.includes(sub)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Недействительная почта',
          });
        return false;
    }
    else{
        return true;
    }
}
$(document).ready(()=>{
    $('form').submit((event)=>{
        let pass = $('.input__pass1').val();
        let pass2 = $('.input__pass2').val();
        let mail = $('#input__mail').val();
        event.preventDefault();
        if(validate(pass, pass2, mail)){
            Swal.fire({
                icon: 'success',
                title: 'done',
                text: 'Данные отправлены',
              });
        };
        console.log( pass,"\n",pass2,"\n",mail);
    });
});
