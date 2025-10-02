export default function GlobalService() {
  const countries = [
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'USA', flag: '🇺🇸' },
    { name: 'England', flag: '🇬🇧' },
    { name: 'Mexico', flag: '🇲🇽' },
    { name: 'Brazil', flag: '🇧🇷' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Moving Mountain is an international truck transport service
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          We provide reliable transportation services across multiple countries,
          ensuring your cargo reaches its destination safely and on time,
          wherever in the world it needs to go.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl group-hover:scale-110 transition-transform">
                {country.flag}
              </div>
              <span className="text-lg font-semibold text-gray-700">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
