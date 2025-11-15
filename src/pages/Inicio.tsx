export default function Inicio() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-4xl w-full mx-auto">
        {/* Hero Section con logo */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="relative inline-block mb-3">
            <img
              src="/img/LogotipoUMG.png"
              alt="Logotipo UMG"
              className="relative mx-auto w-36 h-36 object-contain transition-transform duration-300 hover:scale-105"
              style={{ border: 'none', boxShadow: 'none', outline: 'none', background: 'transparent' }}
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-800 mb-3">
            Universidad Mariano Gálvez de Guatemala
          </h1>
        </div>

        {/* Card de información personal (agrandada) */}
        <div className="mt-6 bg-white rounded-2xl shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
          <div className="bg-linear-to-r from-blue-600 to-blue-700 px-8 py-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center">
              Información del Estudiante
            </h2>
          </div>

          <div className="px-8 py-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Nombre */}
              <div className="bg-linear-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Nombre
                  </h3>
                </div>
                <p className="text-lg font-medium text-gray-900 leading-tight">
                  Wilson Eduardo Hernández López
                </p>
              </div>

              {/* Carnet */}
              <div className="bg-linear-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Carnet
                  </h3>
                </div>
                <p className="text-lg font-medium text-gray-900">
                  1790-22-7315
                </p>
              </div>

              {/* Ciclo */}
              <div className="bg-linear-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Ciclo
                  </h3>
                </div>
                <p className="text-lg font-medium text-gray-900">
                  Octavo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-gray-300"></div>
            <span className="font-medium">Examen Final Desarrollo Web 2025</span>
            <div className="w-12 h-px bg-linear-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
