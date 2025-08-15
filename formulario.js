const regexes = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    telefono: /^(\+54\s?)?(11|15)?\s?\d{4}[-\s]?\d{4}$|^(\+54\s?)?(\(?\d{2,4}\)?[\s\-]?)?\d{3,4}[\s\-]?\d{4}$/,
    cuit: /^(20|23|24|27|30|33|34)[-]?\d{8}[-]?[0-9kK]$/,
    importe: /^\d+(\.\d{1,2})?$/,
    fecha: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/
};

// Configuración de máscaras de entrada
document.addEventListener('DOMContentLoaded', function() {
    setupInputMasks();
    setupRealTimeValidation();
    setupFormSubmission();
});

// Configurar máscaras de entrada
function setupInputMasks() {
    // Máscara para teléfono
    const telefonoInput = document.getElementById('telefono');
    telefonoInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 10) {
            if (value.length >= 6) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '$1 $2-$3');
            } else if (value.length >= 2