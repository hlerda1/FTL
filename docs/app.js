window.onload = function() {
    // Input
    var textNombre = document.getElementById('subNombre');
    var textApellido = document.getElementById('subApellido');
    var textEmail = document.getElementById('subEmail');

    // Error message
    var nomError = document.getElementById('nombreError');
    var apeError = document.getElementById('apeError');
    var emError = document.getElementById('emailError');

    // Add event listeners
    textNombre.addEventListener('blur', validateText);
    textNombre.addEventListener('focus', clearNomError);

    textApellido.addEventListener('blur', validateApe);
    textApellido.addEventListener('focus', clearApeError);

    textEmail.addEventListener('blur', validateEmail);
    textEmail.addEventListener('focus', clearEmailError);

    // Clear error function
    function clearNomError(e) {
        nomError.classList.add('hiddenError');
    }

    function clearApeError(e) {
        apeError.classList.add('hiddenError');
    }

    function clearEmailError(e) {
        emailError.classList.add('hiddenError');
    }

    // Validation function
    function validateText(e) {
        var x = textNombre.value;
        if(x.length < 3) {
        nomError.classList.remove('hiddenError');
        }
    }

    function validateApe(e) {
    var x = textApellido.value;
    if(x.length < 3) {
        apeError.classList.remove('hiddenError');
        }
    }

    function validateEmail(e) {
        var x = textEmail.value;
        var mailFormat = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        // console.log(x)
        if(mailFormat.test(x) == false){        
            emError.classList.remove('hiddenError');
        }
    }


}