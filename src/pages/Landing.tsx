import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { DottedPattern, WavyLines, WaveDivider } from '../components/DecorativeEffects'

const cookies = [
  { name: 'Triple Chocolate', tag: 'Dark, milk & white chocolate', price: '$4.00', img: '/images/chocolate-chip.jpg', benefit: 'Best Seller' },
  { name: 'Cookie Monster', tag: 'Chocolate chips + cookie chunks', price: '$4.00', img: '/images/sugar-cookie.jpg', benefit: 'Fan Favorite' },
  { name: 'Birthday Cake', tag: 'Funfetti + cream cheese frosting', price: '$4.00', img: '/images/pecan-caramel.jpg', benefit: 'Celebration' },
  { name: 'Mint Chocolate Chip', tag: 'Cool mint + dark chocolate', price: '$4.00', img: '/images/chocolate-chip.jpg', benefit: 'Refreshing' },
  { name: 'Matcha White Choc', tag: 'Earthy matcha + white chips', price: '$4.00', img: '/images/sugar-cookie.jpg', benefit: 'Unique' },
  { name: 'Oatmeal Raisin', tag: 'Oats + cinnamon + honey', price: '$3.50', img: '/images/pecan-caramel.jpg', benefit: 'Wholesome' },
]

const flavors = [
  { name: 'Classic Chocolate Chip', desc: 'Golden edges, gooey center, melted dark chocolate in every bite.' },
  { name: 'Red Velvet White Choc', desc: 'Velvety cocoa, tangy cream cheese chips, a crown of white chocolate drizzle.' },
  { name: 'Salted Caramel Pretzel', desc: 'Sweet caramel, crunchy pretzel bits, flaky sea salt — sweet & salty perfection.' },
  { name: 'Matcha White Choc', desc: 'Earthy matcha, creamy white chocolate, a beautifully balanced bite.' },
]

export default function Landing() {
  return (
    <>
      {/* Hero — contained with bg image */}
      <section className="px-4 pt-4 md:px-6 md:pt-6">
        <div className="relative flex items-end overflow-hidden rounded-3xl md:rounded-4xl" style={{ height: '65vh', minHeight: 400 }}>
          <DottedPattern spacing={30} dotSize={1.2} color="#d4944d" />
          <WavyLines opacity={0.06} color="#6d4f34" />
          <div className="absolute inset-0">
            <img src="/images/cookies-hero.jpg" alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
          </div>
          <div className="relative z-10 w-full px-8 pb-14 md:px-14 md:pb-20">
            <div className="mx-auto max-w-6xl">
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block rounded-full bg-brand-500 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">Baked Fresh Daily</motion.span>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="font-display mt-4 text-7xl leading-[0.85] tracking-[-2px] text-warm-900 md:text-8xl lg:text-9xl">
                Cookie
                <br />
                <span className="text-brand-500">Craze</span>
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider opacity={0.12} color="#d4944d" />

      {/* Intro + cookie list */}
      <section className="px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl text-base leading-relaxed text-warm-800/60">
            Every cookie is baked fresh daily with real butter, premium chocolate, and a whole lot of love. Golden edges, gooey centers — exactly how a cookie should be.
          </motion.p>

          <div className="mt-10 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {cookies.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group relative w-[340px] shrink-0"
                >
                  <div className="relative h-72 overflow-hidden rounded-3xl border border-warm-200/40 bg-warm-50">
                    <img src={c.img || ''} alt={c.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-500/0 transition-all duration-300 md:opacity-0 md:group-hover:bg-brand-500/30 md:group-hover:opacity-100">
                      <span className="rounded-full bg-white px-6 py-2 font-display text-xl tracking-wide text-warm-900">{c.price}</span>
                    </div>
                    <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-1.5 font-display text-lg tracking-wide text-warm-900 md:hidden">{c.price}</span>
                    <div className="absolute top-4 left-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">{c.benefit}</div>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-display text-xl tracking-wide">{c.name}</h3>
                    <p className="mt-0.5 text-sm text-warm-800/40">{c.tag}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link to="/menu" className="group inline-flex items-center gap-2 rounded-full bg-choco-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-choco-500">
              See Full Menu
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 100% Real Ingredients */}
      <section className="bg-warm-50 border-y border-warm-200/30 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">Pure Quality</span>
            <h2 className="font-display mt-4 text-5xl leading-[0.9] tracking-[-1px] md:text-7xl lg:text-8xl">
              100% Real
              <br />
              <span className="text-brand-400">Ingredients</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-warm-800/50">
              Real butter. Real chocolate. Real vanilla. No shortcuts, no substitutes — just the good stuff.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-3xl" style={{ aspectRatio: '1/1' }}>
              <img src="/images/sugar-cookie.jpg" alt="Fresh ingredients" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl" style={{ aspectRatio: '1/1' }}>
              <img src="/images/pecan-caramel.jpg" alt="Baked goods" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Flavor spotlight — zigzag */}
      {flavors.map((f, i) => (
        <section key={f.name} className={`px-6 py-16 md:px-12 md:py-24 ${i % 2 === 1 ? 'bg-warm-50/50' : ''}`}>
          <div className={`mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="h-48 w-48 shrink-0 overflow-hidden rounded-full md:h-64 md:w-64">
              <img src={['/images/chocolate-chip.jpg', '/images/sugar-cookie.jpg', '/images/pecan-caramel.jpg', '/images/cookies-hero.jpg'][i]} alt={f.name} className="h-full w-full object-cover" />
            </div>
            <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">Flavor {String(i + 1).padStart(2, '0')}</span>
              <h2 className="font-display mt-2 text-3xl tracking-[-1px] md:text-4xl">{f.name}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-warm-800/50">{f.desc}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Our Bakery — full brand section */}
      <section className="relative overflow-hidden bg-brand-500 px-6 py-20 md:py-32 md:px-12">
        <WavyLines opacity={0.08} color="#fff" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="mx-auto flex max-w-6xl flex-col items-center md:flex-row">
          <div className="relative z-10 -mb-16 rounded-3xl bg-warm-900 p-8 text-white md:-mr-20 md:mb-0 md:p-12" style={{ maxWidth: 400 }}>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">Our Bakery</span>
            <h2 className="font-display mt-3 text-3xl leading-[0.9] tracking-[-1px] md:text-4xl">
              Baked With
              <br />
              <span className="text-brand-400">Love</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Small batches, big flavor. Every cookie is hand-scooped, baked to golden perfection, and
              meant to be shared — though we won't judge if you keep them all to yourself.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-brand-300 md:h-[480px] md:w-[600px] lg:w-[700px]">
            <img src="/images/cookies-hero.jpg" alt="Our bakery" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:py-28 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl leading-[0.9] tracking-[-1px] md:text-6xl">
            Got a <span className="text-brand-500">Craving?</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-warm-800/50">Come visit us or order online. Fresh cookies waiting.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/menu" className="group inline-flex items-center gap-2 rounded-full bg-choco-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-choco-500">
              Browse Menu
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full border border-warm-200 bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-warm-800 transition-all duration-300 hover:border-warm-300">
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
