import { useId } from 'react'

const DaySix = () => {
  const id = useId()
  const articles = [
    {
      title: 'Featured Article',
      desc: 'This is the featured article section. It spans two columns on larger screens, providing ample space for content and a strong visual focus.',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      featured: true,
    },
    {
      title: 'Design Trends 2025',
      desc: 'Explore the upcoming design movements and color palettes defining 2025.',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600',
    },
    {
      title: 'Mastering Responsive Layouts',
      desc: 'Learn how to build fluid, scalable layouts that adapt across all devices.',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600',
    },
    {
      title: 'AI Tools for Creators',
      desc: 'Top AI tools every modern creator should know in 2025.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
    },
    {
      title: 'The Future of Web Animation',
      desc: 'How motion design shapes modern UI/UX experiences.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
    },
    {
      title: 'Next.js Performance Tips',
      desc: '10 quick optimizations to make your Next.js apps lightning fast.',
      image:
        'https://images.unsplash.com/photo-1581276879432-15a19d654956?w=600',
    },
  ]

  return (
    <div className="p-4">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">
        Blog Layout (Magazine-style)
      </h1>

      <div className="grid md:grid-cols-[2fr_1fr] gap-6">
        {/* Featured Article */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end">
            <h2 className="text-2xl font-bold text-white mb-2">
              {articles[0].title}
            </h2>
            <p className="text-gray-200 text-sm md:text-base">
              {articles[0].desc}
            </p>
          </div>
        </div>

        {/* Right-hand Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:col-span-1">
          {articles.slice(1).map(item => (
            <div
              key={id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-44">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <button className="mt-auto px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DaySix
