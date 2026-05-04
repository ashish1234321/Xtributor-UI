import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Zap, BarChart, Users, 
  ShoppingBag, CheckCircle2, Layout, Settings, Mail, 
  UserCheck, Grid, CreditCard, PieChart,
  ChevronDown, HelpCircle, 
  ArrowUpRight,
  Activity, TrendingUp
} from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';
import { useState } from 'react';
import { BundlingIllustration } from './BundlingIllustration';

export default function B2BSaaS() {
  const toolkitFeatures = [
    { title: "Intuitive Storefront", description: "User-friendly interface for your customers to browse and buy.", icon: ShoppingBag },
    { title: "Subscription Billing", description: "Automated recurring billing and proration management.", icon: CreditCard },
    { title: "Customer Support", description: "Integrated ticketing system for efficient query handling.", icon: HelpCircle },
    { title: "Product & Pricing Management", description: "Flexible control over catalogs and pricing strategies.", icon: Settings },
    { title: "Sales Management", description: "Track leads, closures, and renewals in one place.", icon: Activity },
    { title: "Real-time Analytics", description: "Deep insights into your business performance.", icon: BarChart },
    { title: "Communication Templates", description: "Pre-built email templates for all scenarios.", icon: Mail },
    { title: "Essential Integrations", description: "Connect with your favorite accounting and payment tools.", icon: Grid },
  ];

  const advantages = [
    {
      title: "Become High-Growth SaaS ISV",
      description: "Our platform supports modern SaaS growth strategies to help you scale rapidly.",
      icon: TrendingUp
    },
    {
      title: "Save Time & Resources",
      description: "Automate billing, provisioning, and manual spreadsheets to focus on core product.",
      icon: Zap
    },
    {
      title: "Great Customer Experience",
      description: "Ensure accurate invoicing and provide a responsive support system.",
      icon: Users
    },
    {
      title: "Centralized SaaS Management",
      description: "Manage sales, leads, support, and marketing from a single unified dashboard.",
      icon: Layout
    },
    {
      title: "Remove Billing Complexity",
      description: "Handle flexible billing for all scenarios without any manual intervention.",
      icon: CreditCard
    },
    {
      title: "Data-Driven Decisions",
      description: "Get actionable insights on sales, revenue, and growth to drive your strategy.",
      icon: PieChart
    }
  ];

  const innovativeFeatures = [
    { title: "Intuitive Storefront", sub: "User-friendly UI with catalog & categories", detail: "Professional shopping experience for customers", icon: ShoppingBag },
    { title: "Subscription Billing Automation", sub: "Auto invoices + taxation handling", detail: "Recurring billing without manual errors", icon: CreditCard },
    { title: "Customer Support", sub: "Ticket system for queries", detail: "Efficient customer relationship management", icon: HelpCircle },
    { title: "Product & Pricing Management", sub: "Flexible pricing, discounts, updates", detail: "Dynamic control over your offerings", icon: Settings },
    { title: "Sales Management", sub: "Leads, sales, margins tracking", detail: "Complete visibility into sales lifecycle", icon: Activity },
    { title: "Real-time Analytics", sub: "Insights on revenue, customers, subscriptions", detail: "Live metrics for better decision making", icon: BarChart },
    { title: "Communication Templates", sub: "Pre-built email templates", detail: "Standardized customer communications", icon: Mail },
    { title: "Essential Integrations", sub: "Payments, taxation, accounting tools", detail: "Seamless connection with your stack", icon: Grid },
  ];

  const faqs = [
    { 
      q: "1. What is SaaS product bundling, and what are the benefits of bundle pricing?", 
      a: (
        <div className="space-y-4">
          <p>In Software-as-a-Service (SaaS) business, there are solutions that can complement each other and meet client needs.</p>
          <ul className="space-y-2 list-none">
            {[
              "By creating bundles of the right solutions, you can sell multiple products to a single customer, even if they are on your platform to purchase only one solution.",
              "SaaS product bundling is one of the best ways to create innovative offerings and sell them to customers for increased revenue.",
              "It has several other benefits, like reduced customer churn, profitability, providing value to customers, addressing multiple needs, etc. Xtributor's robust cloud SaaS billing software for B2B helps you do that in a smart manner."
            ].map((text, i) => (
              <li key={i} className="flex gap-2 items-start text-slate-500 dark:text-slate-400">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      )
    },
    { 
      q: "2. What are some SaaS billing best practices that actually work?", 
      a: (
        <div className="space-y-4">
          <p>Here are a few top best practices for SaaS billing and subscription management:</p>
          <div className="grid grid-cols-1 gap-3">
            {[
              "Simplify the complex billing terms and processes with a B2B SaaS automation system",
              "Set the pricing logically",
              "Bundle up your software or app with relevant cloud/SaaS products",
              "Improve customer experience with a self-service portal",
              "Make the most out of data",
              "Reduce customer churn and avoid revenue leakage"
            ].map((text, i) => (
              <div key={i} className="flex gap-3 items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 text-[12px] font-medium text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" />
                {text}
              </div>
            ))}
          </div>
          <p className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">Most of these best practices and tips can be brought into action using a SaaS subscription and billing automation platform.</p>
        </div>
      )
    },
    { 
      q: "3. What are the different payment gateways available with Xtributor?", 
      a: "Currently, Xtributor is integrated with PayPal and Stripe for online payments. It also allows you to accept payment through bank account details." 
    },
    { 
      q: "4. What is SaaS billing software or B2B SaaS subscription management platform?", 
      a: "In a Software as a Service (SaaS) business, you need to manage the subscriptions of customers, their plans, payments, billing terms, usage, etc. Using a premium or free SaaS billing solution, you can unify the management of all these aspects while enabling complete automation. Xtributor is one such platform that helps you achieve that." 
    },
    { 
      q: "5. How can I simplify my SaaS billing and subscription management?", 
      a: "One of the most effortless ways to simplify your SaaS subscription management is to adopt a trusted and robust billing engine or a tool like Xtributor. It automates the provisioning of your solutions to customers, manages their billing cycles automatically, offers them self-service options, which eventually simplifies your business and helps you grow faster in the market." 
    },
    { 
      q: "6. What is the best subscription management software for SaaS?", 
      a: (
        <div className="space-y-4">
          <p>Xtributor. The reason we call it the best cloud SaaS billing software is that it takes care of all aspects of your software and cloud business. You can not only automate provisioning and billing, but also utilize several handy features essential for fast growth.</p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {["Intuitive Storefront", "Subscription Billing", "Customer Support", "Product & Pricing Management", "Sales Management", "Real-Time Analytics", "Communication Templates", "Essential Integrations"].map((feat) => (
              <div key={feat} className="px-3 py-2 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-lg text-[10px] font-black uppercase tracking-tight text-indigo-700 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-800/30">
                {feat}
              </div>
            ))}
          </div>
        </div>
      )
    },
    { 
      q: "7. What is the best Chargebee alternative?", 
      a: (
        <div className="space-y-4">
          <p>Xtributor is counted among the best Chargebee alternatives because of the benefits it offers to the independent software vendors (ISVs). As a leading SaaS billing management system, it has numerous benefits:</p>
          <ul className="space-y-2">
            {[
              "Become a high-growth SaaS business",
              "Save your time and resources",
              "Optimize operational costs",
              "Improve customer experience",
              "Put an end to subscription billing complexities",
              "Make data-driven decisions"
            ].map((benefit, i) => (
              <li key={i} className="flex gap-2 items-center text-slate-500 dark:text-slate-400">
                <ArrowRight className="h-3 w-3 text-indigo-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )
    },
  ];


  return (
    <div className="pt-20">
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
        <BackgroundAnimation />
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-32">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-indigo-100 dark:border-indigo-800/50"
            >
              FOR B2B SAAS VENDORS
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[32px] md:text-[42px] lg:text-[52px] font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
            >
              Best SaaS Subscription Management <br />
              <span className="text-indigo-600 dark:text-indigo-400">& Billing Software</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 max-w-4xl mx-auto font-medium"
            >
              Xtributor is the most reliable & robust cloud SaaS billing software for ISVs (independent software vendors) to bill customers at custom pricing, automate billing & provisioning, and seamlessly manage all transactions.
              <br /><br />
              Adopt the B2B SaaS subscription management platform today to eliminate your operational challenges, reduce customer churn, get consistent revenue, and boost sales.
            </motion.p>
          </div>
        </div>

        {/* Toolkit Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-40">
           <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800/50">
                Toolkit Specs
              </div>
              <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white tracking-tight mb-4">
                Innovative SaaS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600">Features</span>
              </h2>
              <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full" />
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
              {toolkitFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ rotate: 1.5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group p-6 bg-slate-50/50 dark:bg-slate-900/50 rounded-2xl border border-slate-100/10 dark:border-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-indigo-200 dark:hover:border-indigo-500/50 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all cursor-default"
                >
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-5 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 transition-all transform group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight leading-snug">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Section 3: B2B SaaS Product Bundling */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-40">
           <div className="relative group p-1 lg:p-2 rounded-[4rem] bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10">
              <div className="bg-white dark:bg-slate-900 rounded-[3.8rem] p-10 lg:p-24 relative overflow-hidden border border-slate-100 dark:border-slate-800/50 shadow-2xl shadow-indigo-100/30 dark:shadow-none">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 dark:bg-indigo-900/5 rounded-full blur-[120px] -mr-64 -mt-64" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-50/50 dark:bg-violet-900/5 rounded-full blur-[120px] -ml-64 -mb-64" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-indigo-100 dark:border-indigo-800/50">
                      Revenue Maximizer
                    </div>
                    <h2 className="text-[36px] md:text-[56px] font-black text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
                      B2B SaaS <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Product Bundling</span>
                    </h2>
                    <p className="text-xl font-bold text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
                      Transform one-off sales into <span className="text-indigo-600 dark:text-indigo-400">strategic hypergrowth</span> through smart bundling.
                    </p>
                    
                    <div className="space-y-10">
                      <motion.div 
                        whileHover={{ x: 10 }}
                        className="p-8 bg-slate-50/50 dark:bg-slate-800/30 rounded-[2.5rem] border-l-4 border-indigo-600 dark:border-indigo-500 relative group transition-all"
                      >
                        <div className="absolute top-4 right-6 text-6xl text-indigo-600/5 font-serif leading-none opacity-20 transition-opacity group-hover:opacity-40">“</div>
                        <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic pr-4">
                          "Businesses that sell multi-products experience accelerated growth and find it easier to reach $100 million, as compared to single-product businesses."
                        </p>
                        <div className="mt-4 flex items-center gap-3">
                          <div className="h-px w-8 bg-indigo-600/30" />
                          <span className="font-black uppercase text-[10px] tracking-widest text-indigo-600 dark:text-indigo-400">Profitwell Industry Report</span>
                        </div>
                      </motion.div>

                      <div className="flex flex-col gap-6">
                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                          Xtributor empowers you to cross-sell your core software by bundling it with high-demand cloud services like <span className="text-slate-900 dark:text-white font-black underline decoration-indigo-500/30">Azure or Office 365</span>. 
                        </p>
                        <div className="flex items-center gap-6">
                          <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 dark:shadow-none flex items-center gap-3 group">
                            Explore Strategy
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                          <div className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                            <Zap className="h-4 w-4 text-amber-500" />
                            Automation Ready
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/20 to-violet-600/20 blur-3xl rounded-full opacity-50" />
                    <div className="relative rounded-[3.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl group min-h-[400px] bg-slate-50 dark:bg-slate-950">
                      <BundlingIllustration />
                      <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-transparent transition-all duration-500 pointer-events-none" />
                      
                      {/* Floating Badge */}
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white dark:border-slate-800 z-20"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                            <TrendingUp className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Growth Index</div>
                            <div className="text-xl font-black text-slate-900 dark:text-white">+42% AOV</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
           </div>
        </div>

        {/* Section 4: Detailed Benefits of Bundle Pricing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-40">
           <div className="text-center mb-16">
              <h2 className="text-[32px] lg:text-[42px] font-black text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">Benefits of Bundle Pricing With <br /><span className="text-indigo-600">Best SaaS Billing Software</span></h2>
              <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest text-sm">Increase Average Order Value (AOV) while Decreasing Customer Acquisition Cost (CAC)</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Increase Profit",
                  desc: "Bundled products drive more revenue and profits by helping you up-sell and cross-sell. Moreover, you can sell your new software or app, which can be challenging to monetize otherwise.",
                  icon: TrendingUp
                },
                {
                  title: "Reduce Marketing Budget",
                  desc: "Optimize your costs of marketing different products individually. When you bundle up your SaaS products with other cloud solutions or software, you can reach a large audience with reduced investment.",
                  icon: BarChart
                },
                {
                  title: "Simplify Customer Experience",
                  desc: "Clients don't buy bundles to save money but to make the consumption & processes streamlined, quick and easy. With the adoption of the best SaaS billing automation software, simplify the experience of your clients.",
                  icon: UserCheck
                },
                {
                  title: "Offer Value-Added Services",
                  desc: "By bundling the solutions and enabling billing automation with the best subscription management software for SaaS, you can provide extreme value to customers and solve their challenges.",
                  icon: Zap
                }
              ].map((benefit, i) => (
                <div key={i} className="p-10 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-indigo-500/30 transition-all group">
                   <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-110 transition-transform">
                         <benefit.icon className="h-7 w-7" />
                      </div>
                      <div>
                         <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight">{benefit.title}</h3>
                         <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Advantages Section */}
        <div className="py-40 bg-white dark:bg-slate-950 relative overflow-hidden">
           {/* Background Accents */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 dark:bg-indigo-900/5 rounded-full blur-[120px] -mr-96 -mt-96" />
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-50/50 dark:bg-violet-900/5 rounded-full blur-[120px] -ml-96 -mb-96" />

           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-indigo-100 dark:border-indigo-800/50">
                    The Xtributor Advantages
                  </div>
                  <h2 className="text-[32px] md:text-[52px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                    Why Adopt Xtributor For Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">SaaS Business?</span>
                  </h2>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {advantages.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -12 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/5 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="p-10 bg-slate-50/50 dark:bg-slate-900/50 rounded-[3rem] border border-slate-100 dark:border-slate-800/50 hover:bg-white dark:hover:bg-slate-900 hover:border-indigo-200 dark:hover:border-indigo-700 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 dark:hover:shadow-none transition-all duration-500 relative z-10">
                      <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 border border-slate-100 dark:border-slate-700 shadow-sm group-hover:scale-110 group-hover:rotate-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm">{item.description}</p>
                      
                      <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600/50 group-hover:text-indigo-600 transition-colors">Core Advantage</span>
                        <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>

        {/* Integrations Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
           <div className="text-center mb-20">
              <div className="text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">PAYMENT GATEWAYS, TAXATION & ACCOUNTING TOOLS, AND MORE</div>
              <h2 className="text-[27px] md:text-[42px] font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-8">
                Integrations Available With Our <br /><span className="text-indigo-600">SaaS Subscription Billing Software</span>
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-4xl mx-auto font-medium">
                Xtributor SaaS subscription management software comes integrated with almost every essential integration that you need to run your business successfully. We ensure that you and your customers never get stuck at any point.
              </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "PayPal", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
                { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
                { name: "QuickBooks", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Intuit_QuickBooks_logo.svg/3840px-Intuit_QuickBooks_logo.svg.png" },
                { name: "Tally", url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Tally_Solutions_Logo.svg/1200px-Tally_Solutions_Logo.svg.png" }
              ].map((logo, i) => (
                <div key={i} className="flex items-center justify-center p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:scale-105 transition-transform hover:border-indigo-100 dark:hover:border-indigo-500/50 h-32 group">
                   <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="h-8 md:h-10 w-auto object-contain transition-all duration-300 dark:brightness-200 dark:contrast-125 grayscale group-hover:grayscale-0 dark:grayscale dark:group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                   />
                </div>
              ))}
           </div>
           
           <div className="mt-16 text-center">
              <button className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-2xl flex items-center gap-3 mx-auto group">
                 Explore All Integrations <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40 text-center">
           <div className="bg-indigo-600 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
              <h2 className="text-[32px] md:text-[52px] font-black text-white mb-10 tracking-tight leading-tight">Explore all features & <br />functionalities</h2>
              <button className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-100 transition-all shadow-2xl scale-110">
                 Request Invite
              </button>
           </div>
        </div>

        {/* FAQs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
           <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-indigo-100 dark:border-indigo-800/50">
                 <HelpCircle className="h-3 w-3" />
                 FAQs: SaaS Billing Automation
              </div>
              <h2 className="text-[32px] md:text-[42px] font-black text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight">
                 Your Growth Questions, <br /><span className="text-indigo-600">Answered</span>
              </h2>
           </div>

           <div className="max-w-5xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <FaqItem key={i} question={faq.q} answer={faq.a} index={i} />
              ))}
           </div>
        </div>

      </section>
      
      <style>{`
        .bg-dashed-border {
          background-image: linear-gradient(to right, #cbd5e1 50%, transparent 50%);
          background-size: 20px 1px;
          background-repeat: repeat-x;
        }
        .dark .bg-dashed-border {
          background-image: linear-gradient(to right, #334155 50%, transparent 50%);
        }
      `}</style>
    </div>
  );
}

function FaqItem({ question, answer, index }: { question: string, answer: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`group transition-all duration-500 rounded-[2rem] overflow-hidden ${
        isOpen 
          ? 'bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-800 shadow-2xl shadow-indigo-100/50 dark:shadow-none border' 
          : 'bg-slate-50/50 dark:bg-slate-900/10 border-slate-100 dark:border-slate-800 border hover:bg-white dark:hover:bg-slate-900 shadow-sm'
      }`}
    >
       <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-8 flex items-center justify-between text-left transition-all"
       >
          <div className="flex items-center gap-5">
             <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-all ${
               isOpen 
                 ? 'bg-indigo-600 text-white' 
                 : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-110'
             }`}>
                {index + 1}
             </div>
             <span className={`font-black tracking-tight text-sm md:text-base leading-tight transition-colors ${
               isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white group-hover:text-indigo-600'
             }`}>
                {question}
             </span>
          </div>
          <div className={`flex-shrink-0 ml-4 p-2 rounded-xl transition-all duration-500 ${
            isOpen 
              ? 'bg-indigo-600 text-white rotate-180' 
              : 'bg-slate-200/50 dark:bg-slate-800 text-slate-400'
          }`}>
            <ChevronDown className="h-4 w-4" />
          </div>
       </button>
       <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
               <div className="px-8 pb-8 pl-8 md:pl-24">
                  <div className="h-px w-full bg-slate-100 dark:bg-slate-800 mb-6" />
                  <div className="text-slate-600 dark:text-slate-400 font-medium text-sm leading-relaxed max-w-3xl">
                     {answer}
                  </div>
               </div>
            </motion.div>
          )}
       </AnimatePresence>
    </motion.div>
  );
}
