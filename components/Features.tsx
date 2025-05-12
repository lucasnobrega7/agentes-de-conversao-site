import { motion } from 'framer-motion';
import Image from 'next/image';

const Features = () => {
  // Features data with icons
  const features = [
    {
      title: 'Chatbots Inteligentes',
      description:
        'Crie assistentes virtuais avançados que compreendem linguagem natural e fornecem respostas contextuais para seus clientes.',
      icon: '💬',
    },
    {
      title: 'Integração Multi-canal',
      description:
        'Conecte-se com seus clientes onde eles estiverem: WhatsApp, Facebook, Instagram, site e muito mais.',
      icon: '🔄',
    },
    {
      title: 'Análise Avançada',
      description:
        'Compreenda o comportamento dos seus clientes com análises detalhadas e insights acionáveis.',
      icon: '📊',
    },
    {
      title: 'Personalização Completa',
      description:
        'Adapte completamente a experiência do usuário para refletir a identidade e os valores da sua marca.',
      icon: '✨',
    },
    {
      title: 'Automação de Processos',
      description:
        'Automatize tarefas repetitivas e libere sua equipe para se concentrar no que realmente importa.',
      icon: '⚙️',
    },
    {
      title: 'Segurança Empresarial',
      description:
        'Proteja seus dados e comunicações com recursos de segurança de nível empresarial.',
      icon: '🔒',
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-10 w-72 h-72 bg-accent-blue opacity-5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 -left-10 w-72 h-72 bg-accent-purple opacity-5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Recursos <span className="gradient-text">poderosos</span> para sua empresa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground-secondary text-lg"
          >
            Transforme a comunicação com seus clientes usando tecnologia de ponta em IA conversacional
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Platform visualization - Placeholder for actual image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 p-1 rounded-xl bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink"
        >
          <div className="bg-surface rounded-lg p-6 flex items-center justify-center">
            {/* This would be replaced with an actual image */}
            <div className="bg-surface-secondary h-96 w-full rounded-md flex items-center justify-center">
              <p className="text-foreground-secondary">
                [Imagem da plataforma em ação]
              </p>
            </div>
          </div>
        </motion.div>

        {/* Integration logos */}
        <div className="mt-24 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-8"
          >
            Integre com suas ferramentas favoritas
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 opacity-70"
          >
            {/* Replace with actual integration logos */}
            <div className="h-8 w-24 bg-surface-secondary rounded flex items-center justify-center">WhatsApp</div>
            <div className="h-8 w-24 bg-surface-secondary rounded flex items-center justify-center">Telegram</div>
            <div className="h-8 w-24 bg-surface-secondary rounded flex items-center justify-center">Slack</div>
            <div className="h-8 w-24 bg-surface-secondary rounded flex items-center justify-center">Instagram</div>
            <div className="h-8 w-24 bg-surface-secondary rounded flex items-center justify-center">Facebook</div>
            <div className="h-8 w-24 bg-surface-secondary rounded flex items-center justify-center">Shopify</div>
            <div className="h-8 w-24 bg-surface-secondary rounded flex items-center justify-center">WordPress</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;