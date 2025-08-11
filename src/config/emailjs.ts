// ============================================
// 📧 CONFIGURACIÓN EMAILJS - NAZLY ROYERO
// ============================================
// 
// Instrucciones para configurar EmailJS:
// 1. Ve a https://www.emailjs.com/
// 2. Crea una cuenta gratuita
// 3. Configura tu servicio de email (Gmail recomendado)
// 4. Crea un template
// 5. Obtén tus IDs y reemplaza los valores aquí

export const EMAILJS_CONFIG = {
  // 🔑 Public Key de EmailJS (se obtiene en Account → General)
  PUBLIC_KEY: 'hLKuJnxuqfvau5rJo',
  
  // 📧 Service ID (se obtiene en Email Services)
  SERVICE_ID: 'service_mq7ojya',
  
  // 📝 Template ID (se obtiene en Email Templates)
  TEMPLATE_ID: 'template_i8y49bm',
  
  // 📬 Tu email donde quieres recibir los mensajes
  TO_EMAIL: 'zenencontreras57@gmail.com'
};

// Template variables que EmailJS espera recibir:
// {{from_name}} - Nombre del usuario
// {{from_email}} - Email del usuario  
// {{service}} - Servicio seleccionado
// {{message}} - Mensaje del usuario
// {{to_email}} - Tu email de destino