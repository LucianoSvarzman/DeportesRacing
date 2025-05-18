// Función para redirigir al informe de Looker
function redirigirALooker() {
  window.location.href = "https://lookerstudio.google.com/reporting/f895e659-47bf-44b9-a32d-39ba53883398/page/9z1ZE";
}

// Función para redirigir a la hoja de Google Sheets
function redirigirAHonorarios() {
  window.location.href = "https://docs.google.com/spreadsheets/d/16YZsiNZ9mjSyfD_mrJP6zqHLxmsc_FD-ZoX4kZqshGw/edit?gid=1257030802#gid=1257030802";
}

// Función para redirigir a la cuenta de Twitter (X) de @deportesracing
function redirigirATwitter() {
  window.location.href = "https://twitter.com/deportesracing";
}

// Función para redirigir a la cuenta de Instagram de @deportesracing
function redirigirAInstagram() {
  window.location.href = "https://www.instagram.com/deportesracing";
}
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch((error) => {
          console.log('Error al registrar el Service Worker:', error);
        });
    });
  }
</script>
