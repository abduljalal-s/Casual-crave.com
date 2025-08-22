// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #a63ce0 50%, #fbc2eb 100%)',
      }}
    >
      {/* Hero Text */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-pink-400 drop-shadow-lg">
        Welcome to CasualCrave
      </h1>
      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-pink-200/90 max-w-2xl drop-shadow">
        Secure, stylish, and exciting casual meets. Find your perfect vibe.
      </p>

      {/* Call to Action */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="#Events"
          className="px-8 py-4 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition shadow-lg"
        >
          Browse Listings
        </a>
        <a
          href="#register"
          className="px-8 py-4 bg-transparent border-2 border-pink-400 text-pink-400 rounded-full font-semibold hover:bg-pink-400 hover:text-black transition shadow-lg"
        >
        
        Join Us
        </a>
      </div>
    </section>
  )
}
