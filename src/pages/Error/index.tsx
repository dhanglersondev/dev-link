export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <main className="w-full max-w-lg text-center">
        <div className="w-full rounded-md bg-linear-to-r from-blue-1200 to-indigo-900 px-8 py-10 text-gray-200 shadow-lg">
          <h1 className="text-7xl font-extrabold text-purple-400">
            404
          </h1>

          <h2 className="mt-4 text-2xl font-bold">
            Página não encontrada
          </h2>

          <p className="mt-3 text-gray-200">
            A página que você tentou acessar não existe ou foi removida.
          </p>

          <a
            href="/"
            className="
              mt-8
              inline-block
              rounded-md
              bg-white
              px-4
              py-2
              text-gray-700
              transition-all
              hover:bg-gray-50
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
            "
          >
            Voltar para Home
          </a>
        </div>
      </main>
    </div>
  );
}