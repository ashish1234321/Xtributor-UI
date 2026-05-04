import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Cloud, Zap, Shield, BarChart, Users, Globe, 
  ShoppingBag, CheckCircle2, Layout, Settings, Mail, Bell, 
  Target, UserCheck, Grid, Briefcase, CreditCard, PieChart,
  ChevronDown, HelpCircle, Laptop, Smartphone, Database,
  ArrowUpRight, ShoppingCart, Wallet, FileText, Package,
  Activity
} from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';
import { useState } from 'react';

import { CloudSolutionsIllustration } from './CloudSolutionsIllustration';

export default function CloudSellers() {
  const toolkitFeatures = [
    { title: "Multi Disti Connect", description: "Integrate APIs from Crayon, Ingram Micro, and more.", icon: Grid },
    { title: "Ready-to-go Marketplace", description: "Launch a white-labeled cloud store in minutes.", icon: ShoppingBag },
    { title: "Catalog Configurator", description: "Configure products, categories, and custom specs.", icon: Package },
    { title: "Promotions Master", description: "Run automated marketing campaigns and discounts.", icon: Target },
    { title: "Automated Provisioning", description: "Instant service activation upon customer purchase.", icon: Zap },
    { title: "Billing Engine", description: "Automated recurring billing and proration management.", icon: CreditCard },
    { title: "Payment Gateways", description: "Seamless PayPal, Stripe, and credit integration.", icon: Wallet },
    { title: "Sales Management", description: "Unified portal for leads, deals, and sales tracking.", icon: Activity },
    { title: "Ticket Management", description: "Integrated support module for customer queries.", icon: HelpCircle },
    { title: "Pricing Management", description: "Dynamic margin control and custom pricebooks.", icon: PieChart },
    { title: "Administration", description: "Full control over user roles and organization hierarchy.", icon: Users },
    { title: "Smart Dashboard", description: "Real-time analytics and business performance tracking.", icon: Laptop },
  ];

  const advantages = [
    {
      title: "Streamline Business Operations",
      description: "No need to do manual tasks of provisioning the services, managing long spreadsheets, taxation, or complicated billing terms. Xtributor automates all these mundane tasks and streamlines your business operations.",
      icon: Settings
    },
    {
      title: "Skyrocket Your Sales",
      description: "An intuitive & user-friendly marketplace powered by Xtributor drives the customers to buy your services. For upselling/cross-selling, bundle up multiple solutions and sell at a single discounted price.",
      icon: Zap
    },
    {
      title: "Improve Customer Experience",
      description: "Provide support & self-service panel to your customers, respond to their queries faster, reduce ticket backlogs, and enable a great customer experience with customized pricing.",
      icon: Users
    },
    {
      title: "Unified Management",
      description: "Xtributor provides a centralized dashboard where you can manage every aspect of your cloud or software business from leads to marketplace from a single place.",
      icon: Layout
    },
    {
      title: "Accelerate Business Growth",
      description: "When the provisioning and billing of the services you sell are automated, it saves you time and costs involved in manual management, allowing you to onboard more customers faster.",
      icon: Target
    },
    {
      title: "Flexible Billing",
      description: "Get complete flexibility in billing cloud services and SaaS applications. For instance, if a customer opts for a multi-year billing cycle, the pricing can be slightly reduced.",
      icon: CreditCard
    }
  ];

  const marketplaceFeatures = [
    "Shopping cart", "Email Templates", "Product Management", "Custom Pricing",
    "Notification Scheduler", "Value Sell Bundle Designer", "User & Role Management", "Multiple Categories"
  ];

  const systemFeatures = [
    { title: "Dashboard", description: "Customers get a dedicated dashboard for unified management of cloud services.", icon: Layout },
    { title: "Support Center", description: "Customers can quickly raise tickets and get responses in the support center.", icon: HelpCircle },
    { title: "Control Panel", description: "Customers can access their services, upgrade the billing cycle, and do much more.", icon: Settings },
    { title: "Self-Service", description: "You can also offer support resources that customers can use for self-service.", icon: UserCheck },
    { title: "Credit Wallets", description: "Allows customers to add money to their wallets for buying new services or renewals.", icon: Wallet },
    { title: "Orders & Invoicing", description: "Ability to check and manage product orders and download invoices.", icon: FileText },
  ];

  const faqs = [
    { q: "1. Payment Integrations", a: "PayPal, Stripe, and Bank Account payments supported" },
    { q: "2. Free Trial Availability", a: "14-day free trial (Invite-only program)" },
    { q: "3. What is Microsoft CSP?", a: "Cloud Solution Provider program allowing you to resell Microsoft services (Azure, M365, etc.) and manage customer lifecycle (provisioning, billing, support)." },
    { q: "4. Cloud Subscription Billing Management", a: "Manage complete lifecycle: Provisioning & onboarding, trials, upgrades, downgrades, invoicing & billing, and customer support." },
    { q: "5. Benefits of Xtributor", a: "Streamline operations via automation, increase sales with bundles/pricing control, better customer experience through self-service panels, and centralized management." },
    { q: "6. Supported Distributors", a: "Crayon, SoftwareONE, Ingram Micro" },
    { q: "7. Setup Time", a: "~5 minutes quick setup for a ready-to-sell platform." },
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
              FOR MICROSOFT CSP RESELLERS
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[32px] md:text-[42px] lg:text-[52px] font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
            >
              Industry's First Subscription Billing Software For <br />
              <span className="text-indigo-600 dark:text-indigo-400">Microsoft Cloud Resellers</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium"
            >
              Xtributor, a top-notch cloud subscription management software, is built to address the challenges of Microsoft CSPs. It easily connects APIs from multiple distributors, fetches the products with pricebooks directly to your own marketplace, and automates the instant provisioning & billing of cloud services to customers.
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
                The Ultimate Toolkit for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600">Cloud Distribution</span>
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

        {/* Detailed Platform Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-40">
           <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-16 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 dark:bg-indigo-600/5 rounded-full blur-[100px] -mr-48 -mt-48" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-50 dark:bg-violet-600/5 rounded-full blur-[100px] -ml-48 -mb-48" />
              
              <div className="relative z-10">
                 <div className="text-center mb-16">
                    <h2 className="text-[24px] md:text-[36px] font-black text-slate-900 dark:text-white tracking-tight mb-4 uppercase">Cloud Subscription Management <br />Platform Features</h2>
                    <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full" />
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {[
                       { title: "Multi Disti Connect", sub: "Multiple Microsoft distributors APIs connect", detail: "Azure, Office 365 & other cloud billing automation", icon: Grid },
                       { title: "Ready-to-go Marketplace", sub: "Pre-built marketplace", detail: "Fetch & sell products with subscription automation", icon: ShoppingBag },
                       { title: "Catalog & Category Configurator", sub: "Create & manage categories", detail: "Add / modify products & services easily", icon: Settings },
                       { title: "Promotions & Campaigns Master", sub: "Run offers & campaigns", detail: "Promote specific products quickly", icon: Target },
                       { title: "Automated Provisioning", sub: "Auto service delivery after order", detail: "Distributor → Customer automation", icon: Zap },
                       { title: "Subscription Billing Platform", sub: "Automated billing system", detail: "No manual spreadsheets required", icon: CreditCard },
                       { title: "Payment Gateways & Credit Manager", sub: "Multiple payment integrations", detail: "Global cloud service selling enabled", icon: Wallet },
                       { title: "Sales Management", sub: "Manage leads, clients & renewals", detail: "Track complete sales lifecycle", icon: Activity },
                       { title: "Support Ticket Management", sub: "Handle customer queries efficiently", detail: "Improve response time & experience", icon: HelpCircle },
                       { title: "Margin & Pricing Management", sub: "Flexible pricing control", detail: "Adjust margins, discounts & offers", icon: PieChart },
                       { title: "Customer Administration", sub: "Full control over customer accounts", detail: "Manage subscriptions & billing", icon: Users },
                       { title: "Smart Dashboard", sub: "Centralized control panel", detail: "Manage sales, customers, tickets & insights", icon: Laptop },
                    ].map((feature, i) => (
                       <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex gap-5 group"
                       >
                          <div className="flex-shrink-0 w-12 h-12 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm">
                             <feature.icon className="h-6 w-6" />
                          </div>
                          <div>
                             <h3 className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{feature.title}</h3>
                             <div className="space-y-1">
                                <div className="flex items-center gap-2 text-indigo-600/80 dark:text-indigo-300/80 text-[11px] font-bold">
                                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                   {feature.sub}
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[10px] font-medium pl-3.5 italic">
                                   <ArrowRight className="h-2.5 w-2.5" />
                                   {feature.detail}
                                </div>
                             </div>
                          </div>
                       </motion.div>
                    ))}
                 </div>
              </div>
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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Cloud Business?</span>
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

        {/* How It Works */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
          <div className="text-center mb-20">
            <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white tracking-tight mb-4">Launch Your Own Cloud Marketplace With A Few Clicks</h2>
            <div className="text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] bg-indigo-50 dark:bg-indigo-950 px-4 py-2 rounded-full inline-block">SIMPLE 3-STEP PROCESS</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             <div className="hidden md:block absolute top-[45%] left-[10%] right-[10%] h-0.5 bg-dashed-border -z-10" />
             {[
               { step: "01", title: "Connect Distributors", desc: "Integrate APIs of your preferred distributors" },
               { step: "02", title: "Store Setup", desc: "Fetch products/services, customize information, pricing, and other elements." },
               { step: "03", title: "Launch Marketplace", desc: "Launch a user-friendly marketplace for your customers." }
             ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity:0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center relative shadow-sm"
                >
                   <div className="text-4xl font-black text-indigo-600/10 dark:text-indigo-600/20 mb-6 font-mono">{item.step}</div>
                   <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight">{item.title}</h3>
                   <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>

        {/* Marketplace Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
           <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-[3.5rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-indigo-200 dark:shadow-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -mr-[250px] -mt-[250px] blur-3xl" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div>
                    <div className="bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block mb-6">SEO-FRIENDLY & SALES-DRIVEN</div>
                    <h2 className="text-[27px] md:text-[40px] font-black text-white leading-[1.1] mb-8">Delightful Marketplace Features For Increased Cloud Sales</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                       {marketplaceFeatures.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-white font-bold text-sm">
                             <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="h-3 w-3 text-white" />
                             </div>
                             {item}
                          </div>
                       ))}
                    </div>
                 </div>
                 <div className="relative">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: -1 }}
                      className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[2.5rem] relative z-20"
                    >
                       <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                         <ShoppingCart className="w-8 h-8 text-indigo-600" />
                       </div>
                       <h3 className="text-2xl font-black text-white mb-6 tracking-tight uppercase">Cloud Marketplace</h3>
                       <p className="text-indigo-50 font-medium leading-relaxed mb-8">The cloud marketplace offered by Xtributor helps you accelerate sales while enabling subscription and billing automation for Azure, Office 365, Dynamics 365, and many more solutions.</p>
                       <button className="w-full py-4 bg-white text-indigo-700 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-indigo-50 transition-colors shadow-lg">View Demo</button>
                    </motion.div>
                 </div>
              </div>
           </div>
        </div>

        {/* Scalable System Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
           <div className="text-center mb-20">
              <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white tracking-tight mb-4 uppercase">Meet The Expectations Of Modern Customers</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed italic">"Xtributor has been designed keeping in mind the expectations and demands of today's customers."</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, transition: { type: 'spring' } }}
                  className="p-10 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl shadow-slate-100 dark:shadow-none group"
                >
                  <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 border border-indigo-100/50 dark:border-indigo-800/30">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Microsoft Solutions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
           <div className="text-center mb-20">
              <div className="text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">PROVISION INDUSTRY-LEADING CLOUD SOLUTIONS</div>
              <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white tracking-tight leading-tight">Resell Microsoft Cloud Services With <br />Billing Automation Platform</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Dynamics 365 Billing", 
                  desc: "Microsoft Dynamics 365 brings together ERP, CRM, and productivity tools. Enable Dynamics 365 billing automation with Xtributor's powerful platform built by industry veterans.",
                  type: 'dynamics' as const
                },
                { 
                  title: "Azure Billing", 
                  desc: "Microsoft Azure is the fastest-growing cloud solution globally. Onboard Azure customers, provision services instantly, and manage the complete billing automation.",
                  type: 'azure' as const
                },
                { 
                  title: "Office 365 Billing", 
                  desc: "Cater to potential customers with simplified billing and subscription management. save time, costs, and get rid of numerous operational challenges.",
                  type: 'office' as const
                }
              ].map((item, i) => (
                <div key={i} className="group overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all h-full flex flex-col">
                   <div className="aspect-video relative overflow-hidden bg-slate-50 dark:bg-slate-950">
                      <CloudSolutionsIllustration type={item.type} />
                      <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-transparent transition-all pointer-events-none" />
                   </div>
                   <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight uppercase leading-tight">{item.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed flex-1">{item.desc}</p>
                      <button className="mt-8 text-[11px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* FAQs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              <div className="lg:col-span-5">
                 <div className="sticky top-32">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-indigo-100 dark:border-indigo-800/50">
                          <HelpCircle className="h-3 w-3" />
                          Help Center
                       </div>
                       <h2 className="text-[32px] md:text-[42px] font-black text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight">
                          Frequently Asked <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-600">Questions</span>
                       </h2>
                       <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-10 max-w-sm">
                          Find answers to common questions about our Microsoft Cloud Billing Software and how it can transform your CSP business.
                       </p>
                       
                       <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
                          <div className="relative z-10">
                             <h4 className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-tight mb-2">Still have questions?</h4>
                             <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-6">Our team of cloud veterans is here to help you navigate your journey.</p>
                             <button className="px-6 py-3 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 rounded-xl text-xs font-black uppercase tracking-widest border border-slate-100 dark:border-slate-700 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all shadow-sm">
                                Contact Support
                             </button>
                          </div>
                          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl group-hover:bg-indigo-600/10 transition-colors" />
                       </div>
                    </motion.div>
                 </div>
              </div>
              <div className="lg:col-span-7">
                 <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <FaqItem key={i} question={faq.q} answer={faq.a} index={i} />
                    ))}
                 </div>
              </div>
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

function FaqItem({ question, answer, index }: { question: string, answer: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`border transition-all duration-500 rounded-[1.5rem] overflow-hidden ${
        isOpen 
          ? 'bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-800 shadow-xl shadow-indigo-100/50 dark:shadow-none' 
          : 'bg-slate-50/50 dark:bg-slate-900/30 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 shadow-sm'
      }`}
    >
       <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left transition-all group"
       >
          <div className="flex items-center gap-4">
             <span className="hidden sm:flex w-8 h-8 items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-[9px] font-black text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 transition-colors">
                {index < 9 ? `0${index + 1}` : index + 1}
             </span>
             <span className={`font-black uppercase tracking-wider text-[11px] leading-relaxed transition-colors ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400'}`}>
                {question}
             </span>
          </div>
          <div className={`flex-shrink-0 ml-4 p-1.5 rounded-full border transition-all duration-500 ${
            isOpen 
              ? 'bg-indigo-600 text-white border-transparent rotate-180' 
              : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700 group-hover:border-indigo-300'
          }`}>
            <ChevronDown className="h-3.5 w-3.5" />
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
               <div className="px-6 pb-6 sm:ml-12">
                  <div className="h-px w-full bg-slate-100 dark:bg-slate-800 mb-4" />
                  <div className="text-slate-600 dark:text-slate-400 font-medium text-[13px] leading-relaxed max-w-2xl prose dark:prose-invert prose-p:leading-relaxed">
                     {answer}
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Was this helpful?</span>
                     <div className="flex gap-2">
                        <button className="p-1 px-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-[10px] font-black uppercase text-slate-500 transition-colors">Yes</button>
                        <button className="p-1 px-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-[10px] font-black uppercase text-slate-500 transition-colors">No</button>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
       </AnimatePresence>
    </motion.div>
  );
}
