export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#ED7014] via-[#FA8128] to-[#FCAE1E] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Conectando Artesanos con el Mundo
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Descubre la esencia de Colombia a través de productos artesanales auténticos
          </p>
          <div className="pt-6">
            <a
              href="#productos"
              className="inline-block bg-white text-[#893101] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explorar Productos
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}
