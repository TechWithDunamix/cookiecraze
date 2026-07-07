import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Send, ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function Contact() {
  return (
    <section className="pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 pt-8 md:pt-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">Get In Touch</span>
          <h1 className="font-display mt-3 text-5xl leading-[0.9] tracking-[-1px] md:text-7xl lg:text-8xl">
            Find <span className="text-brand-500">Us</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-warm-800/50">Come visit, give us a call, or drop us a message. We'd love to hear from you.</p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row">
          <div className="grid flex-1 gap-5 md:grid-cols-2">
            {[
              { icon: MapPin, title: 'Location', content: '42 Cookie Lane\nVictoria Island, Lagos' },
              { icon: Clock, title: 'Hours', content: 'Mon–Fri: 7AM – 9PM\nSat: 8AM – 10PM\nSun: 9AM – 6PM' },
              { icon: Phone, title: 'Phone', content: '+1 443 418 6463\nOrder via WhatsApp' },
              { icon: Mail, title: 'Email', content: 'hello@cookiecraze.com\norder@cookiecraze.com' },
            ].map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-warm-200/40 bg-white p-6 transition-all duration-300 hover:border-brand-300"
              >
                <info.icon size={20} className="text-brand-500" />
                <h3 className="font-display mt-3 text-lg tracking-wide">{info.title}</h3>
                <div className="mt-1.5 whitespace-pre-line text-sm text-warm-800/50">{info.content}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:w-[380px]"
          >
            <div className="rounded-2xl border border-warm-200/40 bg-warm-50/50 p-7">
              <h3 className="font-display text-xl tracking-wide">Send a Message</h3>
              <p className="mt-1 text-xs text-warm-800/40">We'll get back within 24 hours.</p>
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full rounded-xl border border-warm-200/60 bg-white px-4 py-3 text-sm text-warm-900 placeholder:text-warm-800/30 outline-none transition-all duration-200 focus:border-brand-400" />
                <input type="email" placeholder="Your Email" className="w-full rounded-xl border border-warm-200/60 bg-white px-4 py-3 text-sm text-warm-900 placeholder:text-warm-800/30 outline-none transition-all duration-200 focus:border-brand-400" />
                <textarea rows={4} placeholder="Your Message" className="w-full rounded-xl border border-warm-200/60 bg-white px-4 py-3 text-sm text-warm-900 placeholder:text-warm-800/30 outline-none transition-all duration-200 focus:border-brand-400 resize-none" />
                <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-choco-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-choco-500">
                  Send <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-12 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/14434186463" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-brand-400">
            <MessageCircle size={18} />
            Order via WhatsApp
          </a>
          <Link to="/menu" className="group inline-flex items-center gap-2 rounded-full border border-warm-200 bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-warm-800 transition-all duration-300 hover:border-warm-300">
            Browse Our Menu
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
