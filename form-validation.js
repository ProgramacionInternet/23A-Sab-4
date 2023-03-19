const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const titulo = document.querySelector('#titulo');
const mensaje = document.querySelector('#mensaje');
const captcha = document.querySelector('#captcha');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  if (nombre.value.trim() === '') {
    alert('Por favor, ingrese su nombre.');
    nombre.focus();
    return;
  }

  if (correo.value.trim() === '') {
    alert('Por favor, ingrese su correo.');
    correo.focus();
    return;
  }

  if (titulo.value.trim() === '') {
    alert('Por favor, ingrese un título.');
    titulo.focus();
    return;
  }

  if (mensaje.value.trim() === '') {
    alert('Por favor, ingrese un mensaje.');
    mensaje.focus();
    return;
  }

  if (captcha.value.trim() !== '4') {
    alert('Por favor, ingrese el valor correcto para el captcha.');
    captcha.focus();
    return;
  }

  formulario.submit();
});