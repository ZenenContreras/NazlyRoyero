import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, CheckCircle, UserPlus, LogIn } from 'lucide-react';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá la lógica de registro
    console.log('Register attempt:', formData);
  };

  const passwordsMatch = formData.password === formData.confirmPassword;
  const isFormValid = formData.firstName && formData.lastName && formData.email && 
                     formData.password && passwordsMatch && formData.acceptTerms;

  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* Hero Section - Título Principal */}
      <section className="pt-6 lg:pt-12 bg-white animate-in fade-in duration-500">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-in slide-in-from-bottom-4 duration-700">
            <span className="bg-gradient-to-r from-[#6C7A52] via-[#4F8F8B] to-[#D9A689] bg-clip-text text-transparent">
              COMIENZA AQUÍ
            </span>
          </h1>
          <h2 className="text-base sm:text-lg mb-4 sm:mb-6 max-w-sm mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="text-[#6C7A52] font-semibold"> Crea tu cuenta</span>{" "}
            <span className="text-gray-700">y activa tu</span>{" "}
            <span className="text-[#4F8F8B] font-bold italic">transformación</span>
          </h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pb-8 pt-2 bg-white">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          
          {/* Register Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg p-4 sm:p-6 animate-in slide-in-from-bottom-6 duration-700 delay-300">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-bottom-2 delay-400">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4F8F8B] focus:border-transparent transition-all duration-200 text-sm"
                    placeholder="Nombre"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4F8F8B] focus:border-transparent transition-all duration-200 text-sm"
                    placeholder="Apellido"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="animate-in fade-in slide-in-from-bottom-2 delay-500">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4F8F8B] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Password Field */}
              <div className="animate-in fade-in slide-in-from-bottom-2 delay-600">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  <Lock className="inline w-4 h-4 mr-2" />
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4F8F8B] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Mínimo 8 caracteres"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="animate-in fade-in slide-in-from-bottom-2 delay-700">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  <Lock className="inline w-4 h-4 mr-2" />
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 pr-10 border rounded-xl focus:ring-2 transition-all duration-200 text-sm sm:text-base ${
                      formData.confirmPassword && passwordsMatch
                        ? 'border-green-300 focus:ring-green-500 focus:border-transparent'
                        : formData.confirmPassword && !passwordsMatch
                        ? 'border-red-300 focus:ring-red-500 focus:border-transparent'
                        : 'border-gray-300 focus:ring-[#4F8F8B] focus:border-transparent'
                    }`}
                    placeholder="Confirma tu contraseña"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {formData.confirmPassword && !passwordsMatch && (
                  <p className="mt-2 text-sm text-red-600">Las contraseñas no coinciden</p>
                )}
                {formData.confirmPassword && passwordsMatch && (
                  <p className="mt-2 text-sm text-green-600 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Las contraseñas coinciden
                  </p>
                )}
              </div>

              {/* Terms Acceptance */}
              <div className="flex items-start animate-in fade-in slide-in-from-bottom-2 delay-800">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  required
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#4F8F8B] focus:ring-[#4F8F8B] border-gray-300 rounded mt-1"
                />
                <label htmlFor="acceptTerms" className="ml-3 block text-sm text-gray-700">
                  Acepto los{' '}
                  <Link to="/terminos" className="text-[#4F8F8B] hover:underline">
                    Términos de Servicio
                  </Link>{' '}
                  y la{' '}
                  <Link to="/privacidad" className="text-[#4F8F8B] hover:underline">
                    Política de Privacidad
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <div className="animate-in fade-in slide-in-from-bottom-2 delay-900">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full flex items-center justify-center px-4 py-2.5 sm:py-3 font-medium rounded-xl transition-all duration-300 text-sm sm:text-base shadow-lg group ${
                    isFormValid
                      ? 'bg-gradient-to-r from-[#6C7A52] to-[#4F8F8B] text-white hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <UserPlus className="mr-2" size={16} />
                  Crear cuenta
                  <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                    isFormValid ? 'group-hover:translate-x-1' : ''
                  }`} />
                </button>
              </div>

              {/* Google Register Button */}
              <div className="animate-in fade-in slide-in-from-bottom-2 delay-950">
                <button
                  type="button"
                  className="w-full bg-white border-2 border-gray-200 text-gray-700 px-4 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-sm sm:text-base transform hover:scale-105 flex items-center justify-center group"
                >
                  <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Registrarse con Google
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-6 pt-4 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-2 delay-1000">
              <p className="text-center text-sm text-gray-600 mb-4">
                ¿Ya tienes una cuenta?
              </p>
              
              {/* Login Button */}
              <Link
                to="/login"
                className="w-full bg-[#6C7A52]/10 border border-[#6C7A52] text-[#6C7A52] px-4 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300 text-sm sm:text-base transform hover:scale-105 flex items-center justify-center group"
              >
                <LogIn className="mr-2" size={16} />
                Iniciar sesión
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center animate-in fade-in slide-in-from-bottom-2 delay-1100">
            <p className="text-xs text-gray-500 leading-relaxed">
              Tu información está protegida y será utilizada únicamente para brindarte la mejor experiencia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
