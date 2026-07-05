import { motion } from 'framer-motion'

const categories = [
  {
    name: 'Classic Cookies',
    items: [
      { name: 'Chocolate Chunk', price: '$3.50', desc: 'Dark chocolate chunks, golden edges, gooey center — the one that started it all.', tag: 'Best Seller' },
      { name: 'Sugar Cookie', price: '$3.00', desc: 'Vanilla bean, rainbow sprinkles, soft-baked perfection.', tag: 'Kid Favorite' },
      { name: 'Double Fudge', price: '$3.80', desc: 'Cocoa dough, dark fudge chunks, extra chocolatey.', tag: 'Rich' },
    ],
  },
  {
    name: 'Nutty & Caramel',
    items: [
      { name: 'Pecan Caramel', price: '$4.00', desc: 'Brown butter, toasted pecans, gooey caramel center.', tag: 'Indulgent' },
      { name: 'Salted Pretzel', price: '$3.80', desc: 'Pretzel crunch, caramel, flaky sea salt — sweet & salty.', tag: 'Popular' },
      { name: 'Oatmeal Raisin', price: '$3.50', desc: 'Rolled oats, cinnamon, honey, plump raisins — a classic done right.', tag: 'Wholesome' },
    ],
  },
  {
    name: 'Fruit & Specialty',
    items: [
      { name: 'Raspberry White Choc', price: '$4.00', desc: 'Tart raspberry, creamy white chocolate, tender crumb.', tag: 'Fruity' },
      { name: 'Matcha White Choc', price: '$4.00', desc: 'Earthy matcha, sweet white chocolate — beautifully balanced.', tag: 'Unique' },
      { name: 'Red Velvet', price: '$3.80', desc: 'Cocoa, cream cheese chips, drizzle — bakery-style decadence.', tag: 'Decadent' },
    ],
  },
  {
    name: 'Brownies & Bars',
    items: [
      { name: 'Fudge Brownie', price: '$4.50', desc: 'Dense, fudgy, crackly top — chocolate in its purest form.', tag: 'Rich' },
      { name: 'Blondie', price: '$4.00', desc: 'Brown butter, white chocolate, macadamia — golden and buttery.', tag: 'Buttery' },
      { name: 'Brookie', price: '$4.50', desc: 'Brownie + cookie in one. The best of both worlds.', tag: 'Hybrid' },
    ],
  },
]

export default function Menu() {
  return (
    <section className="pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 pt-8 md:pt-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">Fresh From The Oven</span>
          <h1 className="font-display mt-3 text-5xl leading-[0.9] tracking-[-1px] md:text-7xl lg:text-8xl">
            Our <span className="text-brand-500">Menu</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-warm-800/50">Every cookie baked fresh daily. Gooey, golden, and absolutely irresistible.</p>
        </div>

        {categories.map((cat) => (
          <div key={cat.name} className="mb-16 last:mb-0">
            <h2 className="font-display mb-8 text-2xl tracking-wide md:text-3xl">{cat.name}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {cat.items.map((item, ii) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ii * 0.08 }}
                  className="rounded-2xl border border-warm-200/40 bg-white p-6 transition-all duration-300 hover:border-brand-300"
                >
                  <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-200/50 text-5xl">🍪</div>
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-lg tracking-wide">{item.name}</h3>
                    <span className="font-display text-base tracking-wide text-brand-500">{item.price}</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-warm-800/50">{item.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">{item.tag}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
