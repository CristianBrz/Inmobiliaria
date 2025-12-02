import { motion } from 'motion/react';
import { Home, TrendingUp, FileText, Key, Scale, HeadphonesIcon } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Compra y Venta',
      description: 'Asesoramiento integral en la compra o venta de tu propiedad. Te acompañamos en cada paso del proceso, desde la valuación hasta la escritura.',
      features: [
        'Valuación profesional',
        'Marketing de la propiedad',
        'Negociación y cierre',
        'Asesoramiento legal'
      ]
    },
    {
      icon: Key,
      title: 'Administración de Alquileres',
      description: 'Gestionamos tu propiedad en alquiler de forma integral, ocupándonos de todo para que vos no tengas que preocuparte.',
      features: [
        'Búsqueda de inquilinos',
        'Cobro de alquileres',
        'Mantenimiento',
        'Gestión de reclamos'
      ]
    },
    {
      icon: Scale,
      title: 'Tasaciones',
      description: 'Tasaciones profesionales realizadas por expertos matriculados, con informes detallados para cualquier finalidad.',
      features: [
        'Tasaciones comerciales',
        'Tasaciones judiciales',
        'Tasaciones para seguros',
        'Informes técnicos'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Inversiones',
      description: 'Asesoramiento especializado para inversores que buscan rentabilidad en el mercado inmobiliario.',
      features: [
        'Análisis de mercado',
        'Proyección de rentabilidad',
        'Búsqueda de oportunidades',
        'Gestión de cartera'
      ]
    },
    {
      icon: FileText,
      title: 'Asesoramiento Legal',
      description: 'Contamos con un equipo de abogados especializados en derecho inmobiliario para garantizar operaciones seguras.',
      features: [
        'Estudio de títulos',
        'Revisión de contratos',
        'Tramitación de escrituras',
        'Asesoramiento fiscal'
      ]
    },
    {
      icon: HeadphonesIcon,
      title: 'Atención Personalizada',
      description: 'Un agente dedicado te acompañará durante todo el proceso, disponible para resolver tus dudas en cualquier momento.',
      features: [
        'Atención 24/7',
        'Visitas programadas',
        'Seguimiento constante',
        'Post-venta'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios inmobiliarios diseñados para satisfacer 
            todas tus necesidades, ya seas propietario, inversor o estés buscando tu próximo hogar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-amber-400" />
              </div>

              <h3 className="text-blue-900 mb-3 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-12 text-center"
        >
          <h3 className="text-white mb-4">¿Necesitás asesoramiento personalizado?</h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte. Contactanos hoy mismo y 
            descubrí cómo podemos ayudarte a alcanzar tus objetivos inmobiliarios.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-amber-400 text-blue-900 rounded-lg hover:bg-amber-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Contactar ahora
          </button>
        </motion.div>
      </div>
    </div>
  );
}
