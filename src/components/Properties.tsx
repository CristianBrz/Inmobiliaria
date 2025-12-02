import { useState } from 'react';
import { motion } from 'motion/react';
import { PropertyCard } from './PropertyCard';
import { PropertyFilters } from './PropertyFilters';
import { PropertyModal } from './PropertyModal';

export interface Property {
  id: number;
  title: string;
  type: 'casa' | 'departamento' | 'terreno' | 'local';
  operation: 'venta' | 'alquiler';
  price: number;
  currency: 'USD' | 'ARS';
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  image: string;
  featured: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Casa moderna en zona residencial',
    type: 'casa',
    operation: 'venta',
    price: 320000,
    currency: 'USD',
    location: 'Centro',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    image: 'https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzA0NzEwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: 2,
    title: 'Departamento céntrico con vista panorámica',
    type: 'departamento',
    operation: 'alquiler',
    price: 180000,
    currency: 'ARS',
    location: 'Microcentro',
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    image: 'https://images.unsplash.com/photo-1604275493257-cd5dde8c142b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NjI5NjA1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: 3,
    title: 'Penthouse de lujo con amenities',
    type: 'departamento',
    operation: 'venta',
    price: 450000,
    currency: 'USD',
    location: 'Zona Norte',
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    image: 'https://images.unsplash.com/photo-1760611656071-a8bef0578874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwZW50aG91c2UlMjB2aWV3fGVufDF8fHx8MTc2MjkyNTQzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: 4,
    title: 'Casa con piscina y amplio jardín',
    type: 'casa',
    operation: 'venta',
    price: 280000,
    currency: 'USD',
    location: 'Country',
    bedrooms: 3,
    bathrooms: 2,
    area: 220,
    image: 'https://images.unsplash.com/photo-1753194931716-1add84f0b6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMHBvb2x8ZW58MXx8fHwxNzYyOTUxNjYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: 5,
    title: 'Local comercial en esquina',
    type: 'local',
    operation: 'alquiler',
    price: 120000,
    currency: 'ARS',
    location: 'Centro Comercial',
    area: 120,
    image: 'https://images.unsplash.com/photo-1758721212403-39750ed4d3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcHJvcGVydHklMjBzdG9yZWZyb250fGVufDF8fHx8MTc2MzA0NzEwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: 6,
    title: 'Terreno en zona en desarrollo',
    type: 'terreno',
    operation: 'venta',
    price: 85000,
    currency: 'USD',
    location: 'Zona Oeste',
    area: 600,
    image: 'https://images.unsplash.com/photo-1671769194944-47293018a9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwcGxvdCUyMHByb3BlcnR5fGVufDF8fHx8MTc2MzAzMjQ1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: 7,
    title: 'Departamento amoblado 1 ambiente',
    type: 'departamento',
    operation: 'alquiler',
    price: 95000,
    currency: 'ARS',
    location: 'Zona Universitaria',
    bedrooms: 1,
    bathrooms: 1,
    area: 42,
    image: 'https://images.unsplash.com/photo-1592401526914-7e5d94a8d6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNjMwMDY5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: 8,
    title: 'Casa de 3 dormitorios en barrio cerrado',
    type: 'casa',
    operation: 'alquiler',
    price: 250000,
    currency: 'ARS',
    location: 'Barrio Privado',
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    image: 'https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzA0NzEwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  }
];

export function Properties() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-blue-900 mb-4">Nuestras Propiedades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubrí la propiedad perfecta para vos. Contamos con una amplia selección de inmuebles
            en las mejores zonas.
          </p>
        </motion.div>

        <PropertyFilters
          allProperties={properties}
          onFilterChange={setFilteredProperties}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              index={index}
              onClick={() => handlePropertyClick(property)}
            />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No se encontraron propiedades con los filtros seleccionados.
            </p>
          </div>
        )}
      </div>

      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}