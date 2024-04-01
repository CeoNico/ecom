import Link from "next/link"

const Landing = () => {
  return (
    <section className="bg-white w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container grid items-center gap-4 px-4 text-center text-black md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Ofertas Del Norte
              </h1>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Busca la ofertas que te gustan sobre varios productos!
              </p>
            </div>
            <form className="mx-auto max-w-sm space-y-2 flex flex-col">
              <input className="max-w-lg mx-auto p-2 rounded-lg border-2 border-black" placeholder="Enter your email" type="email" />
              <button className="p-2 bg-black  text-white rounded-lg" type="submit">Sign Up</button>
              <p className="text-xs text-white">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </form>
          </div>
        </section>
  )
}

export default Landing