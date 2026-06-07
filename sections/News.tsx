const publications = [

  "Reports",

  "Careers & Tenders",

  "Whistleblowing Policy",

  "Latest News",
]

export default function News() {

  return (

    <section className="bg-gray-100 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          News & Publications
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {publications.map((item) => (

            <div
              key={item}
              className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition"
            >

              <h3 className="text-xl font-bold">

                {item}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}