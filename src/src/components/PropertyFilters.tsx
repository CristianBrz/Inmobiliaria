import { useState, useEffect } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import type { Property } from './Properties';

interface PropertyFiltersProps {
  allProperties: Property[];
  onFilterChange: (filtered: Property[]) => void;
}

export default function PropertyFilters({ allProperties, onFilterChange }: PropertyFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: 'todas',
    operation: 'todas',
    minPrice: '',
    maxPrice: '',
    location: ''
  });

  useEffect(() => {
    let filtered = [...allProperties];

    if (filters.type !== 'todas') {
      filtered = filtered.filter(p => p.type === filters.type);
    }

    if (filters.operation !== 'todas') {
      filtered = filtered.filter(p => p.operation === filters.operation);
    }

    if (filters.location) {
      filtered = filtered.filter(p =>
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= Number(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= Number(filters.maxPrice));
    }

    onFilterChange(filtered);
  }, [filters, allProperties, onFilterChange]);

  const clearFilters = () => {
    setFilters({
      type: 'todas',
      operation: 'todas',
      minPrice: '',
      maxPrice: '',
      location: ''
    });
  };

  const hasActiveFilters = filters.type !== 'todas' || 
                          filters.operation !== 'todas' || 
                          filters.location !== '' || 
                          filters.minPrice !== '' || 
                          filters.maxPrice !== '';

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
        >
          <SlidersHorizontal className="w-5 h-5" />
          Filtros avanzados
          {hasActiveFilters && (
            <span className="ml-1 px-2 py-0.5 bg-amber-400 text-blue-900 rounded-full text-xs">
              {Object.values(filters).filter(v => v && v !== 'todas').length}
            </span>
          )}
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-900 transition-colors"
          >
            <X className="w-4 h-4" />
            Limpiar filtros
          </button>
        )}
      </div>

      {showFilters && (
        <div className="overflow-hidden animate-slide-down">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Tipo</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="todas">Todas</option>
                  <option value="casa">Casa</option>
                  <option value="departamento">Departamento</option>
                  <option value="terreno">Terreno</option>
                  <option value="local">Local comercial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Operación</label>
                <select
                  value={filters.operation}
                  onChange={(e) => setFilters({ ...filters, operation: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="todas">Todas</option>
                  <option value="venta">Venta</option>
                  <option value="alquiler">Alquiler</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Precio mínimo</label>
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                  placeholder="0"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Precio máximo</label>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  placeholder="999999"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Ubicación</label>
                <input
                  type="text"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  placeholder="Buscar zona..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
