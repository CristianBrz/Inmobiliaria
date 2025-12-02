import { MapPin, Bed, Bath, Maximize, ArrowRight, Star } from 'lucide-react';
import type { Property } from './Properties';

interface PropertyCardProps {
  property: Property;
  index: number;
  onClick: () => void;
}

export default function PropertyCard({ property, index, onClick }: PropertyCardProps) {
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

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={onClick}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {property.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-amber-400 text-blue-900 rounded-full flex items-center gap-1 text-sm">
            <Star className="w-3 h-3 fill-blue-900" />
            Destacada
          </div>
        )}

        <div className="absolute top-4 right-4 px-3 py-1 bg-blue-900 text-white rounded-full text-sm capitalize">
          {getOperationLabel(property.operation)}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <span className="text-sm text-gray-500 capitalize">{getTypeLabel(property.type)}</span>
          <h3 className="text-blue-900 mt-1 group-hover:text-amber-600 transition-colors">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4 text-amber-600" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-gray-600 text-sm">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              {property.bedrooms}
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              {property.bathrooms}
            </div>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            {property.area}m²
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="text-blue-900">
              {formatPrice(property.price, property.currency)}
            </div>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="group/btn flex items-center gap-2 text-blue-900 hover:text-amber-600 transition-colors"
          >
            Ver más
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
