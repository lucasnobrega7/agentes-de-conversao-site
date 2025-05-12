import Link from 'next/link';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple opacity-10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para transformar sua comunicação?
              </h2>
              <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
                Comece a usar a plataforma Agentes de Conversão hoje mesmo e veja como a IA pode revolucionar o relacionamento com seus clientes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/start" 
                className="btn btn-primary px-8 py-3 text-base font-medium w-full sm:w-auto text-center"
              >
                Começar gratuitamente
              </Link>
              <Link 
                href="/demo" 
                className="btn btn-secondary px-8 py-3 text-base font-medium w-full sm:w-auto text-center"
              >
                Agendar demonstração
              </Link>
            </div>
            
            <div className="mt-8 text-center text-foreground-secondary text-sm">
              <p>Não é necessário cartão de crédito. Teste grátis por 14 dias.</p>
            </div>
          </motion.div>
          
          {/* Customer testimonials */}
          <div className="mt-24">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-center mb-12"
            >
              O que nossos clientes dizem
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-2xl">
                      👩
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Ana Silva</p>
                    <p className="text-foreground-secondary text-sm">Diretora de Marketing, TechCorp</p>
                  </div>
                </div>
                <p className="text-foreground-secondary">
                  "Implementamos os Agentes de Conversão em nosso site e o resultado foi impressionante. Aumentamos nossas conversões em 35% e reduzimos o tempo de resposta para os clientes em 90%."
                </p>
              </motion.div>
              
              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-2xl">
                      👨
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Carlos Oliveira</p>
                    <p className="text-foreground-secondary text-sm">CEO, Retail Solutions</p>
                  </div>
                </div>
                <p className="text-foreground-secondary">
                  "A integração com WhatsApp revolucionou nosso atendimento ao cliente. Agora conseguimos responder às dúvidas em tempo real e automatizar grande parte das interações, liberando nossa equipe para tarefas mais estratégicas."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;