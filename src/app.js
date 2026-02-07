import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// 📝 Constantes en UPPER_SNAKE_CASE para datos que no cambian
// Esto es una convención en JavaScript para identificar valores constantes
const PRONOUNS = ['the', 'our'];
const ADJECTIVES = ['great', 'big'];
const NOUNS = ['jogger', 'racoon'];
const EXTENSIONS = ['.com', '.es', '.net'];

/**
 * 📝 Genera todas las combinaciones posibles de dominios
 * Usa loops anidados (nested loops) para crear todas las combinaciones
 * @returns {Array<string>} Array con todos los dominios generados
 */
function generateDomains() {
    const domains = [];
    
    // 📝 for...of es más moderno y legible que el for tradicional
    // No necesitas manejar índices manualmente
    for (let pronoun of PRONOUNS) {
        for (let adjective of ADJECTIVES) {
            for (let noun of NOUNS) {
                for (let extension of EXTENSIONS) {
                    // 📝 Template literals (`) son mejores que concatenación con +
                    // Más legible y fácil de mantener
                    const domain = `${pronoun}${adjective}${noun}${extension}`;
                    domains.push(domain);
                }
            }
        }
    }
    
    return domains;
}

/**
 * 📝 Muestra los dominios en el DOM usando HTML dinámico
 * Separa la lógica de generación de la presentación (separation of concerns)
 */
function displayDomains() {
    const domains = generateDomains();
    
    // 📝 Array.map() transforma cada elemento y retorna un nuevo array
    // Aquí convertimos cada dominio en un elemento HTML
    const domainsHTML = domains.map(domain => 
        `<div class="domain-item">${domain}</div>`
    ).join(''); // 📝 join('') convierte el array en un string sin separadores
    
    // 📝 Agregar contador para mostrar cuántos dominios se generaron
    const header = `
        <h2>🌐 Domain Name Generator</h2>
        <p class="count">Generados <strong>${domains.length}</strong> dominios</p>
        <div class="domain-list">
            ${domainsHTML}
        </div>
    `;
    
    // 📝 Insertar en el DOM - esto reemplaza el contenido
    document.querySelector('.container-fluid').innerHTML = header;
}

// 📝 Ejecutar cuando la página carga completamente
window.onload = function() {
    displayDomains();
    console.log("Domain generator loaded!");
};
