import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const categories = [
  {
    name: 'Our Signature Cookies',
    items: [
      { name: 'Triple Chocolate', price: '$4.00', desc: 'Three kinds of chocolate — dark, milk, and white — in one decadent, gooey cookie.', tag: 'Best Seller', img: '/images/menu-3-chocolate.jpg' },
      { name: 'Cookie Monster', price: '$4.00', desc: 'Packed with chocolate chips, cookie chunks, and a hidden surprise in every bite.', tag: 'Fan Favorite', img: '/images/menu-monster.jpg' },
      { name: 'Birthday Cake', price: '$4.00', desc: 'Funfetti frosting, rainbow sprinkles, and that classic birthday cake taste you love.', tag: 'Celebration', img: '/images/menu-birthday.jpg' },
      { name: 'Red Velvet', price: '$4.00', desc: 'Velvety cocoa, cream cheese chips, and a drizzle of white chocolate.', tag: 'Decadent', img: '/images/menu-red-velvet-new.jpg' },
      { name: 'Matcha White Chocolate', price: '$4.00', desc: 'Earthy matcha, creamy white chocolate chips — beautifully balanced.', tag: 'Unique', img: '/images/menu-matcha.jpg' },
      { name: 'Mint Chocolate Chip', price: '$4.00', desc: 'Cool mint meets rich dark chocolate chunks. Refreshingly indulgent.', tag: 'Refreshing', img: '/images/menu-mint.jpg' },
      { name: 'Oatmeal Raisin', price: '$3.50', desc: 'Rolled oats, cinnamon, honey, plump raisins — a timeless classic.', tag: 'Wholesome', img: '/images/menu-oatmeal.jpg' },
    ],
  },
  {
    name: 'Gluten Free Cookies',
    items: [
      { name: 'Gluten Free Chocolate Chip', price: '$4.50', desc: 'All the flavor you love — made with gluten-free flour, dark chocolate, love.', tag: 'GF', img: '/images/menu-gf-chip.jpg' },
      { name: 'Gluten Free Oatmeal', price: '$4.50', desc: 'Certified gluten-free oats, cinnamon, honey, and raisins.', tag: 'GF', img: '/images/menu-gf-oatmeal.jpg' },
      { name: 'Gluten Free Double Fudge', price: '$5.00', desc: 'Rich cocoa, fudge chunks, completely gluten-free. You won\'t know the difference.', tag: 'GF', img: '/images/menu-gf-fudge.jpg' },
    ],
  },
  {
    name: 'Seasonal & Special Occasions',
    items: [
      { name: 'Thanksgiving Spice', price: '$4.50', desc: 'Pumpkin spice, warm cinnamon, nutmeg — tastes like November in every bite.', tag: 'Limited', img: '/images/menu-thanksgiving.jpg' },
      { name: 'Valentine\'s Strawberry', price: '$4.50', desc: 'White chocolate, freeze-dried strawberries, pink drizzle.', tag: 'Seasonal', img: '/images/menu-valentine.jpg' },
      { name: 'Christmas Peppermint', price: '$4.50', desc: 'Crushed peppermint, dark chocolate, snowy white chocolate drizzle.', tag: 'Seasonal', img: '/images/menu-christmas.jpg' },
    ],
  },
  {
    name: 'Custom Orders — All Occasions',
    items: [
      { name: 'Birthdays', price: 'From $35', desc: 'Custom cookie cakes, party boxes, and themed cookies for your celebration.', tag: 'Order Now', img: '/images/birthday.jpg' },
      { name: 'Baby Showers', price: 'From $40', desc: 'Elegant cookie favors, themed designs, and dessert tables for your shower.', tag: 'Order Now', img: '/images/baby-shower.jpg' },
      { name: 'Football Season', price: 'From $30', desc: 'Team-colored cookies, stadium snack boxes, game-day platters.', tag: 'Order Now', img: '/images/football.jpg' },
      { name: 'Fall & Thanksgiving', price: 'From $35', desc: 'Autumn-themed cookies, pumpkin spice treats, harvest gift boxes.', tag: 'Order Now', img: '/images/fall.jpg' },
      { name: 'Christmas & Holidays', price: 'From $40', desc: 'Holiday cookie boxes, gift tins, festive designs for every occasion.', tag: 'Order Now', img: '/images/christmas.jpg' },
      { name: 'Custom Requests', price: 'Varies', desc: 'Have a specific theme or occasion? We\'ll create the perfect cookie experience.', tag: 'Contact Us', img: '/images/menu-3-chocolate.jpg' },
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
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-warm-800/50">Every cookie baked fresh daily. Gooey, golden, and absolutely irresistible. Custom orders available for every occasion.</p>
        </div>

        <div className="mb-16 text-center">
          <a
            href="https://wa.me/14434186463"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-brand-400"
          >
            <MessageCircle size={18} />
            Order via WhatsApp
          </a>
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
                  <div className="mb-4 h-32 overflow-hidden rounded-xl">
                    <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-lg tracking-wide">{item.name}</h3>
                    <span className="font-display text-base tracking-wide text-brand-500 shrink-0 ml-2">{item.price}</span>
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
