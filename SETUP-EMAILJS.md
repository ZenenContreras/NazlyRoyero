# 📧 Configuración de EmailJS - Guía Completa

## 🚀 ¿Por qué EmailJS?

EmailJS es la solución **más simple y rápida** para formularios de contacto:

- ✅ **100% Frontend** - No necesitas backend ni PHP
- ✅ **Súper rápido** - Se configura en 10 minutos
- ✅ **Gratis** - 200 emails/mes gratuitos
- ✅ **Directo** - Los emails van directo desde tu Gmail/Outlook
- ✅ **Sin servidores** - Funciona en cualquier hosting estático

## 📋 Configuración paso a paso

### 1. Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"**
3. Registrate con tu email (recomiendo usar el mismo que quieres para recibir mensajes)
4. Confirma tu email

### 2. Configurar servicio de email

1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"** (más fácil) o tu proveedor preferido
4. Haz clic en **"Connect Account"**
5. Autoriza EmailJS para enviar emails desde tu cuenta
6. **Copia el Service ID** (algo como `service_xxxxxxx`)

### 3. Crear template de email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura el template así:

**To Email:** `{{to_email}}`  
**From Name:** `{{from_name}}`  
**From Email:** `{{from_email}}`  
**Subject:** `Nuevo mensaje desde tu sitio web: {{service}}`

**Content (HTML):**
```html
<h2>Nuevo mensaje desde nazlyroyero.com</h2>

<p><strong>De:</strong> {{from_name}} ({{from_email}})</p>
<p><strong>Servicio de interés:</strong> {{service}}</p>
<p><strong>Fecha:</strong> {{current_date}}</p>

<h3>Mensaje:</h3>
<p>{{message}}</p>

<hr>
<p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
```

4. Haz clic en **"Save"**
5. **Copia el Template ID** (algo como `template_xxxxxxx`)

### 4. Obtener Public Key

1. Ve a **"Account"** → **"General"**
2. Busca **"Public Key"** 
3. **Copia la Public Key** (algo como `xxxxxxxxxxxxxxx`)

### 5. Configurar en tu código

Edita el archivo `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  // 🔑 Tu Public Key de EmailJS
  PUBLIC_KEY: 'tu_public_key_aqui',
  
  // 📧 Tu Service ID 
  SERVICE_ID: 'service_xxxxxxx',
  
  // 📝 Tu Template ID
  TEMPLATE_ID: 'template_xxxxxxx',
  
  // 📬 Tu email donde quieres recibir los mensajes
  TO_EMAIL: 'tuemail@gmail.com'
};
```

## 🧪 Probar la configuración

1. Ejecuta `npm run dev`
2. Ve a `/contacto` en tu sitio
3. Llena el formulario
4. Envía un mensaje de prueba
5. Revisa tu email - ¡debería llegar en segundos!

## 📊 Dashboard de EmailJS

En tu dashboard puedes ver:
- 📈 Emails enviados este mes
- ✅ Emails exitosos
- ❌ Emails fallidos
- 📋 Historial completo

## 💰 Planes de EmailJS

- **Free**: 200 emails/mes - ¡Perfecto para empezar!
- **Personal**: $15/mes - 10,000 emails/mes
- **Business**: $70/mes - 100,000 emails/mes

## 🔧 Personalizar emails

Para cambiar el formato del email que recibes:
1. Ve a EmailJS → Email Templates
2. Edita tu template 
3. Modifica el HTML a tu gusto
4. ¡Los cambios son inmediatos!

## 🚨 Solución de problemas

### ❌ "Template not found"
- Verifica que el TEMPLATE_ID sea correcto
- Asegúrate que el template esté guardado

### ❌ "Service not found" 
- Verifica que el SERVICE_ID sea correcto
- Confirma que tu servicio de Gmail esté conectado

### ❌ "Invalid public key"
- Revisa que la PUBLIC_KEY sea correcta
- No debe tener espacios extra

### ❌ Los emails no llegan
- Revisa spam/promociones en Gmail
- Verifica que el TO_EMAIL esté bien escrito
- Checa el dashboard de EmailJS para errores

## 📱 Funciona en todos lados

EmailJS funciona perfecto en:
- ✅ Hostinger
- ✅ Netlify  
- ✅ Vercel
- ✅ GitHub Pages
- ✅ Cualquier hosting estático

## 🎯 Ventajas vs otras soluciones

| Característica | EmailJS | PHP mail() | Resend API |
|---|---|---|---|
| **Configuración** | 10 minutos | Complejo | Medio |
| **Backend necesario** | ❌ No | ✅ Sí | ✅ Sí |
| **Confiabilidad** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Costo** | Gratis | Gratis | Gratis limitado |
| **Facilidad** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |

## ✅ Checklist final

- [ ] Cuenta EmailJS creada
- [ ] Servicio Gmail conectado
- [ ] Template configurado
- [ ] IDs copiados al código
- [ ] Formulario probado
- [ ] Emails llegando correctamente

¡EmailJS configurado correctamente! 🎉