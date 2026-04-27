import { Truck, ShieldCheck, RefreshCcw, Headphones, Icon } from 'lucide-react'

const featuresData = [
  { icon: Truck, title: "Free Shipping", description: "On orders over $100",color: "from-cyan-400 to-blue-500" },
  { icon: ShieldCheck, title: "Secure Payment", description: "Your payment is safe",color: "from-green-400 to-emerald-500" },
  { icon: RefreshCcw, title: "Easy Returns", description: "30-day return policy",color: "from-purple-500 to-pink-500" },
  { icon: Headphones, title: "24/7 Support", description: "Get help anytime",color: "from-yellow-400 to-orange-500" }
]

const Featuers = () => {
  return (
    <section className='relative w-full py-20 bg-linear-to-r from-indigo-900 via-purple-900 to-pink-900 text-white'>
      <div className='absolute inset-0 bg-black/30'></div>
      <div className='relative z-10 max-w-7xl mx-auto px-6 sm:px-10 text-center'>
        <h2 className='text-4xl font-extrabold mb-12 sm:text-5xl'>Why Choose Us ?</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8'>
          {featuresData.map((feature, index) => (
            <div key={index} className={` bg-white/20 backdrop-blur-md border border-white/20 rounded-3xl flex flex-col items-center shadow-2xl text-center p-8 transform transition-transform hover:scale-105 hover:shadow-cyan-600/30`}>
              <div className={ ` bg-linear-to-r ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-6 `}>
              <feature.icon className='w-10 h-10 text-white' />
              </div>
              <h3 className='text-2xl font-bold mb-3'>{feature.title}</h3>
              <p className='text-gray-200 text-base'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featuers
