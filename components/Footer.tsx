import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer links organized by categories
  const footerLinks = {
    plataforma: [
      { name: 'Visão Geral', href: '/overview' },
      { name: 'Recursos', href: '/features' },
      { name: 'Exemplos', href: '/examples' },
      { name: 'Preços', href: '/pricing' },
    ],
    desenvolvedores: [
      { name: 'Documentação', href: '/docs' },
      { name: 'API', href: '/api' },
      { name: 'Status', href: '/status' },
      { name: 'GitHub', href: 'https://github.com/agentesdeconversao' },
    ],
    empresa: [
      { name: 'Sobre', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Carreiras', href: '/careers' },
      { name: 'Contato', href: '/contact' },
    ],
    legal: [
      { name: 'Termos', href: '/terms' },
      { name: 'Privacidade', href: '/privacy' },
      { name: 'Responsabilidade', href: '/responsible-use' },
    ],
  };

  return (
    <footer className="bg-background py-16 border-t border-surface">
      <div className="container mx-auto px-4">
        {/* Footer Top Section with Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-xl font-semibold text-white">Agentes de Conversão</span>
            </Link>
            <p className="text-foreground-secondary max-w-sm mb-6">
              Desenvolvendo o futuro da interação entre humanos e IA, com soluções inteligentes de conversação.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://twitter.com/agentesconversao" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg className="w-5 h-5 text-foreground-secondary hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/agentesdeconversao" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg className="w-5 h-5 text-foreground-secondary hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/agentesdeconversao" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-foreground-secondary hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/agentesdeconversao" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg className="w-5 h-5 text-foreground-secondary hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links Columns */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Plataforma</h3>
            <ul className="space-y-3">
              {footerLinks.plataforma.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground-secondary hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Desenvolvedores</h3>
            <ul className="space-y-3">
              {footerLinks.desenvolvedores.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground-secondary hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground-secondary hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mt-6 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground-secondary hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom with Copyright */}
        <div className="pt-8 border-t border-surface flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-secondary text-sm mb-4 md:mb-0">
            &copy; {currentYear} Agentes de Conversão. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-foreground-secondary hover:text-white transition-colors text-sm">
              Termos
            </Link>
            <Link href="/privacy" className="text-foreground-secondary hover:text-white transition-colors text-sm">
              Privacidade
            </Link>
            <Link href="/cookies" className="text-foreground-secondary hover:text-white transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;