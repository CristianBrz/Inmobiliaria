import { motion } from 'motion/react';
import { Award, Users, Heart, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compromiso',
      description: 'Nos comprometemos con cada cliente para encontrar su propiedad ideal'
    },
    {
      icon: Award,
      title: 'Profesionalismo',
      description: 'Equipo altamente capacitado y con amplia experiencia en el mercado'
    },
    {
      icon: Users,
      title: 'Atención personalizada',
      description: 'Cada cliente es único y merece un servicio a medida de sus necesidades'
    },
    {
      icon: TrendingUp,
      title: 'Transparencia',
      description: 'Operaciones claras y honestas, sin sorpresas ni costos ocultos'
    }
  ];

  const team = [
    {
      name: 'María González',
      role: 'Directora General',
      image: 'https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbXxlbnwxfHx8fDE3NjMwNDcxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Tasaciones y Valuaciones',
      image: 'https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbXxlbnwxfHx8fDE3NjMwNDcxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Ana Martínez',
      role: 'Administración de Alquileres',
      image: 'https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbXxlbnwxfHx8fDE3NjMwNDcxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-900 mb-4">Nosotros</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Con más de 20 años de trayectoria en el mercado inmobiliario argentino, nos hemos 
            consolidado como una de las inmobiliarias más confiables y profesionales de la región.
          </p>
        </motion.div>

        {/* Historia y Misión */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-blue-900 mb-4">Nuestra Historia</h3>
            <p className="text-gray-600 mb-4">
              Fundada en 2003, nuestra inmobiliaria nació con el objetivo de brindar un servicio 
              personalizado y profesional en el sector inmobiliario. Lo que comenzó como una 
              pequeña oficina familiar, hoy es una empresa consolidada que ha ayudado a más de 
              1,200 familias a encontrar su hogar ideal.
            </p>
            <p className="text-gray-600">
              Nuestro crecimiento se basa en la confianza que nuestros clientes depositan en 
              nosotros, y en el compromiso constante de superar sus expectativas en cada operación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-blue-900 mb-4">Nuestra Misión</h3>
            <p className="text-gray-600 mb-4">
              Facilitar el camino hacia el hogar soñado de cada cliente, ofreciendo asesoramiento 
              experto, transparencia en cada operación y un servicio que va más allá de lo esperado.
            </p>
            <p className="text-gray-600">
              Buscamos ser el puente entre las personas y sus proyectos de vida, ya sea la compra 
              de su primera vivienda, una inversión estratégica o el alquiler perfecto para cada 
              etapa de la vida.
            </p>
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-blue-900 text-center mb-12">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h4 className="text-blue-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Equipo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-blue-900 text-center mb-12">Nuestro Equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-blue-900 mb-1">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
