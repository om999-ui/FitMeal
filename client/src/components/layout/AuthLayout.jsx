import Logo from "../common/Logo";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto flex min-h-screen max-w-7xl">

        {/* Left Side */}
        <div className="hidden w-1/2 bg-green-600 lg:flex flex-col justify-center p-16 text-white">

          <Logo />

          <h1 className="mt-12 text-5xl font-bold leading-tight">
            Track Your Nutrition.
            <br />
            Transform Your Lifestyle.
          </h1>

          <p className="mt-6 text-lg text-green-100">
            Monitor calories, protein, carbs, water intake,
            weight progress, and reach your fitness goals.
          </p>

        </div>

        {/* Right Side */}
        <div className="flex w-full items-center justify-center bg-white p-8 lg:w-1/2">

          <div className="w-full max-w-md">

            <div className="mb-10">
              <Logo />

              <h2 className="mt-8 text-3xl font-bold text-gray-900">
                {title}
              </h2>

              <p className="mt-2 text-gray-500">
                {subtitle}
              </p>
            </div>

            {children}

          </div>

        </div>

      </div>
    </div>
  );
}

export default AuthLayout;