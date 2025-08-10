export default function Newsletter() {
  return (
    <section className="mt-10">
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 mb-6">
        Let's Connect
      </h2>
      <div className="p-5 rounded-xl bg-linear-to-tr from-gray-100 to-gray-50">
        <form>
          <div className="flex bg-white p-2 rounded-lg focus-within:ring-2 ring-gray-300">
            <input
              className="flex-1 text-sm bg-transparent text-gray-800 placeholder:text-gray-400 border-none focus:ring-0 focus:outline-hidden"
              type="email"
              name="email"
              aria-label="Enter your email to subscribe my newsletter"
              placeholder="Enter your email..."
              autoComplete="off"
            />
            <button className="btn-sm text-gray-200 bg-linear-to-r from-gray-800 to-gray-700 shadow-xs relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-linear-[45deg,transparent_25%,var(--color-white)_50%,transparent_75%,transparent_100%] before:opacity-20 before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-1500">
              Join Newsletter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
