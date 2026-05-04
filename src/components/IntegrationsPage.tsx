import { motion } from 'motion/react';
import { ArrowRight, Cloud, CreditCard, Calculator, FileJson, Zap, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';
import { IntegrationsIllustration } from './IntegrationsIllustration';

export default function IntegrationsPage() {
  const integrations = [
    {
      illustrationType: "distributors" as const,
      type: "CLOUD DISTRIBUTORS",
      title: "Connect & Sell From Popular Cloud Distributors & Service Providers",
      description: "With multi disti-connect APIs, you can sell the cloud services from multiple distributors of your choice from your own marketplace. Xtributor API allows you to connect with most of the popular cloud distributors, customize product pricing & information, fetch products to the marketplace, and enable automated provisioning & billing.",
      partners: ["Crayon", "Ingram Micro", "SoftwareOne"],
      badge: "GET THINGS DONE WITHIN A FEW CLICKS",
      icon: Cloud,
      color: "indigo"
    },
    {
      illustrationType: "tax" as const,
      type: "TAX COMPLIANCE",
      title: "Tax Compliance Software Integration",
      description: "To help you reduce compliance risk, calculate tax rates, and focus on revenue-generating tasks, Xtributor comes integrated with Avalara software. It has everything that you need for seamless tax management, including sales tax registration, rate calculation, as well as returns filing and remittance.",
      partners: ["Avalara"],
      badge: "ENABLE CENTRALIZED TAX MANAGEMENT & REPORTING",
      icon: Calculator,
      color: "emerald"
    },
    {
      illustrationType: "payments" as const,
      type: "PAYMENT GATEWAYS",
      title: "Payment Gateway Integrations",
      description: "Accept global payments from your customers while enabling faster checkouts, chargeback prevention, recurring billing, and multiple payment options. Xtributor supports both PayPal and Stripe, with more trending gateway integrations to be supported soon.",
      partners: ["PayPal", "Stripe"],
      badge: "FASTER PAYMENT PROCESSING",
      icon: CreditCard,
      color: "blue"
    },
    {
      illustrationType: "accounting" as const,
      type: "ACCOUNTING TOOLS",
      title: "Integration with Top Accounting Tools",
      description: "No need to do the mundane tasks of managing the financial side of your business manually. Utilize accounting tools like Tally and Quickbooks right within Xtributor. No messed up records or bookkeeping. We understand that accounting is your least favorite task.",
      partners: ["Quickbooks", "Tally"],
      badge: "ENHANCED & CONVENIENT ACCOUNTING",
      icon: FileJson,
      color: "purple"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
        <BackgroundAnimation />
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-indigo-100 dark:border-indigo-800/50"
            >
              PLUG & PLAY INTEGRATIONS
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[32px] md:text-[42px] font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
            >
              Achieve More with <br />
              <span className="text-indigo-600 dark:text-indigo-400">Plug & Play Integrations</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
            >
              With Xtributor, you are never stuck. It supports all the essential integrations that you will ever need in running your business, from popular payment gateways and taxation tools, to accounting software. Power your cloud business with Xtributor today!
            </motion.p>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-40 mb-40">
            {integrations.map((section, idx) => (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-slate-100 dark:border-slate-800">
                    {section.type}
                  </div>
                  <div className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">{section.badge}</div>
                  <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                    {section.title}
                  </h2>
                  <p className="text-base text-slate-500 dark:text-slate-400 font-bold leading-relaxed mb-10">
                    {section.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {section.partners.map((partner, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm text-sm font-black text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        {partner}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: idx % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className={`absolute -top-10 ${idx % 2 === 0 ? '-right-10' : '-left-10'} w-40 h-40 opacity-10 pointer-events-none`} 
                    style={{ backgroundImage: 'radial-gradient(#6366f1 2px, transparent 2px)', backgroundSize: '16px 16px' }} 
                  />
                  <div className={`bg-white dark:bg-slate-900 p-4 lg:p-6 rounded-[3.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden`}>
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group bg-slate-50 dark:bg-slate-950">
                      <IntegrationsIllustration type={section.illustrationType} />
                      <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-transparent transition-all duration-500 pointer-events-none" />
                      <div className="absolute top-6 left-6 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl">
                        <section.icon className="h-8 w-8 text-indigo-600" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-12 bg-indigo-600 rounded-[3rem] text-white shadow-2xl shadow-indigo-200 dark:shadow-none transition-all group overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-indigo-200">Scale Up Today</div>
                <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight">Xtributor for Cloud Resellers</h3>
                <p className="text-indigo-100 font-medium mb-8 leading-relaxed opacity-80">
                  Scale up your cloud business using the industry's first subscription and billing management platform for cloud resellers.
                </p>
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-white text-indigo-600 px-6 py-3 rounded-xl shadow-lg hover:bg-slate-50 transition-all">
                  GET STARTED
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <Zap className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 group-hover:scale-125 transition-transform duration-700" />
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-12 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-100 dark:shadow-none transition-all group overflow-hidden relative"
            >
              <div className="relative z-10 text-slate-900 dark:text-white">
                <div className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-slate-400">Expand Your Reach</div>
                <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight">Xtributor for SaaS ISVs</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed">
                  Automate the subscription billing management for your software apps, create bundles with other products & services, and boost the revenue.
                </p>
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-indigo-100 dark:shadow-none hover:bg-indigo-700 transition-all">
                  LEARN MORE
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <LinkIcon className="absolute -bottom-10 -right-10 w-48 h-48 text-indigo-600/5 group-hover:scale-125 transition-transform duration-700" />
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
