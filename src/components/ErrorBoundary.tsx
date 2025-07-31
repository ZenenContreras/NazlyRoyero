import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            
            {/* Icono de Error */}
            <div className="mb-8">
              <div className="flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mx-auto mb-6">
                <AlertTriangle className="text-red-500" size={48} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                ¡Ups! Algo no salió como esperábamos
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Ha ocurrido un error inesperado, pero no te preocupes, 
                podemos solucionarlo juntos.
              </p>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              
              {/* Recargar Página */}
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center bg-[#6C7A52] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#5a6644] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <RefreshCw className="mr-2" size={20} />
                Recargar Página
              </button>

              {/* Ir al Inicio */}
              <Link
                to="/"
                className="inline-flex items-center bg-white text-[#6C7A52] border-2 border-[#6C7A52] px-6 py-3 rounded-full text-base font-medium hover:bg-[#6C7A52] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Home className="mr-2" size={20} />
                Ir al Inicio
              </Link>

            </div>

            {/* Información del Error (solo en desarrollo) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
                <h3 className="font-semibold text-gray-800 mb-2">Información del Error:</h3>
                <pre className="text-sm text-gray-600 overflow-auto">
                  {this.state.error.message}
                </pre>
              </div>
            )}

            {/* Mensaje Motivacional */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#6C7A52]/5 to-[#D9A689]/5 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700 italic">
                "Los obstáculos son oportunidades para crecer. 
                Cada error nos acerca más a la solución perfecta."
              </p>
            </div>

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
