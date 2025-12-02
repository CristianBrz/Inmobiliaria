import { X, MapPin, Bed, Bath, Maximize, Calendar, Share2, Star } from 'lucide-react';
import type { Property } from './Properties';

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  if (!property || !isOpen) return null;

  const formatPrice = (price: number, currency: string) => {
    if (currency === 'USD') {
      return `USD ${price.toLocaleString('es-AR')}`;
    }
    return `$ ${price.toLocaleString('es-AR')}`;
  };

  const getOperationLabel = (operation: string) => {
    return operation === 'venta' ? 'Venta' : 'Alquiler';
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      casa: 'Casa',
      departamento: 'Departamento',
      terreno: 'Terreno',
      local: 'Local comercial'
    };
    return labels[type] || type;
  };

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('contacto');
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }, 300);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '5491112345678';
    const message = `Hola! Me interesa la propiedad: ${property.title}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-96 bg-gray-100">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {property.featured && (
                  <div className="px-3 py-1 bg-amber-400 text-blue-900 rounded-full flex items-center gap-1 text-sm">
                    <Star className="w-3 h-3 fill-blue-900" />
                    Destacada
                  </div>
                )}
                <div className="px-3 py-1 bg-blue-900 text-white rounded-full text-sm capitalize">
                  {getOperationLabel(property.operation)}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <span className="text-sm text-gray-500 capitalize">{getTypeLabel(property.type)}</span>
                <h2 className="text-blue-900 mt-1">{property.title}</h2>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>{property.location}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 p-6 bg-blue-50 rounded-xl">
                <div className="text-sm text-gray-600 mb-1">Precio</div>
                <div className="text-3xl text-blue-900">
                  {formatPrice(property.price, property.currency)}
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {property.bedrooms && (
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-blue-900" />
                    <div className="text-sm text-gray-600">Dormitorios</div>
                    <div className="text-blue-900">{property.bedrooms}</div>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-blue-900" />
                    <div className="text-sm text-gray-600">Baños</div>
                    <div className="text-blue-900">{property.bathrooms}</div>
                  </div>
                )}
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Maximize className="w-6 h-6 mx-auto mb-2 text-blue-900" />
                  <div className="text-sm text-gray-600">Superficie</div>
                  <div className="text-blue-900">{property.area}m²</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-900" />
                  <div className="text-sm text-gray-600">Publicado</div>
                  <div className="text-blue-900">Hoy</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-blue-900 mb-3">Descripción</h3>
                <p className="text-gray-600">
                  Excelente propiedad ubicada en {property.location}, ideal para quienes buscan 
                  {property.type === 'casa' && ' una casa espaciosa con todas las comodidades'}
                  {property.type === 'departamento' && ' un departamento moderno y funcional'}
                  {property.type === 'terreno' && ' un terreno para construir el hogar de sus sueños'}
                  {property.type === 'local' && ' un local comercial en zona estratégica'}
                  . La propiedad cuenta con {property.area}m² 
                  {property.bedrooms && ` distribuidos en ${property.bedrooms} dormitorios`}
                  {property.bathrooms && ` y ${property.bathrooms} baños`}.
                </p>
                <p className="text-gray-600 mt-3">
                  Zona con excelente conectividad, cerca de comercios, transporte público y servicios. 
                  No pierdas la oportunidad de conocer esta propiedad.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  Consultar por WhatsApp
                </button>
                <button
                  onClick={scrollToContact}
                  className="flex-1 bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Solicitar información
                </button>
                <button className="px-6 py-4 border-2 border-gray-200 text-gray-700 rounded-lg hover:border-blue-900 hover:text-blue-900 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
