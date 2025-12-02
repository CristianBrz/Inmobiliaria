import { Search, MapPin, Home, DollarSign } from 'lucide-react';

export default function PropertySearch() {
  return (
    <div className="container mx-auto px-4 lg:px-8 -mt-12 relative z-10">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-2">Tipo de propiedad</label>
            <div className="relative">
              <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                <option>Todas</option>
                <option>Casa</option>
                <option>Departamento</option>
                <option>Terreno</option>
                <option>Local comercial</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-600 mb-2">Operación</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                <option>Venta / Alquiler</option>
                <option>Venta</option>
                <option>Alquiler</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-600 mb-2">Ubicación</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Barrio o zona"
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-end">
            <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
