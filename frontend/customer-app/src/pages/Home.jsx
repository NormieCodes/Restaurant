import Plate from "../assets/platter.png";
import { MdDeliveryDining, MdRestaurantMenu } from "react-icons/md";
import { FaBookOpen, FaLeaf, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaStar, FaQuoteLeft } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { GiRiceCooker } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import Navbar from "../components/Navbar";
const facilities = [
  {
    id: 1,
    name: "Made Like Home",
    icon: IoIosHome,
    desc: "Simple, comforting meals cooked with the warmth of a family kitchen.",
  },
  {
    id: 2,
    name: "Fresh & Hygienic",
    icon: GiRiceCooker,
    desc: "Prepared daily in a clean kitchen using fresh ingredients.",
  },
  {
    id: 3,
    name: "Family Owned",
    icon: IoPeople,
    desc: "Food made with care, tradition, and the taste of mom’s kitchen.",
  },
  {
    id: 4,
    name: "Good Food. Good Price.",
    icon: FaLeaf,
    desc: "Wholesome South Indian meals that are light on your pocket.",
  },
];

const menuHighlights = [
  "Soft Idlis",
  "Crispy Dosa",
  "Fresh Sambar",
  "Curd Rice",
  "South Indian Meals",
  "Homestyle Specials",
];

const testimonials = [
  {
    id: 1,
    name: "Mohit Thakur",
    role: "Customer",
    text: "I’ve tried many South Indian restaurants across the Tricity area, but Simply South remains my personal favorite. The homemade taste, quality, and consistency keep me coming back every time.",
  },
  {
    id: 2,
    name: "Sonika Sharma",
    role: "Local Guide",
    text: "Consistently delicious! Every dish is packed with authentic flavor, perfectly seasoned, and served fresh. It’s my absolute go-to place for South Indian comfort food.",
  },
  {
    id: 3,
    name: "Namitha G P",
    role: "Customer",
    text: "After days of traveling through Shimla, Manali, and Amritsar, Simply South was the first place that truly felt like home. The food was comforting, authentic, and exactly what we needed.",
  },
];

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-green-50 px-6 py-16 md:px-10 lg:py-20">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-green-400/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <section className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm backdrop-blur">
              <FaLeaf className="text-green-600" />
              Fresh daily • Family kitchen • Pure comfort
            </div>

            <h1 className="cherry-bomb-one-regular text-5xl leading-tight text-[#2B1B17] md:text-7xl">
              Home Food.
              <span className="block text-orange-500">Made With Love.</span>
            </h1>

            <p className="akaya-kanadaka-regular mt-5 text-2xl text-green-800">
              Just like Amma makes it.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-[#4B3832] md:text-lg lg:mx-0">
              Authentic South Indian meals prepared daily with fresh ingredients,
              traditional recipes, and lots of love. From our family kitchen to
              your home.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="tel:+918288084880"
                className="akaya-kanadaka-regular inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-lg text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Order Now <MdDeliveryDining size={24} />
              </a>

              <a
                href="#menu"
                className="akaya-kanadaka-regular inline-flex items-center gap-2 rounded-full border-2 border-green-600 bg-white px-7 py-4 text-lg text-green-700 transition hover:-translate-y-1 hover:bg-green-600 hover:text-white"
              >
                View Menu <FaBookOpen />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 rounded-3xl bg-white/70 p-4 shadow-xl backdrop-blur">
              <div>
                <p className="text-2xl font-bold text-orange-500">Fresh</p>
                <p className="text-sm text-gray-600">Daily meals</p>
              </div>
              <div className="border-x border-orange-100">
                <p className="text-2xl font-bold text-green-700">10:30</p>
                <p className="text-sm text-gray-600">AM onwards</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-500">Homely</p>
                <p className="text-sm text-gray-600">Taste</p>
              </div>
            </div>
          </section>

          <section className="relative flex justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-orange-300/30 blur-2xl md:h-[420px] md:w-[420px]"></div>

            <div className="relative rounded-[3rem] border border-white/70 bg-white/60 p-6 shadow-2xl backdrop-blur">
              <div className="absolute -left-5 top-8 rounded-2xl bg-green-700 px-4 py-3 text-sm font-bold text-white shadow-lg">
                Family Owned
              </div>

              <img
                src={Plate}
                alt="Simply South platter"
                draggable="false"
                className="relative z-10 w-[280px] select-none drop-shadow-2xl md:w-[430px]"
              />

              <div className="absolute -bottom-5 right-6 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="flex items-center gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p className="mt-1 text-sm font-semibold text-[#2B1B17]">
                  Loved by locals
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <section className="bg-amber-50 px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="akaya-kanadaka-regular text-xl text-green-700">
              Why Simply South?
            </p>
            <h2 className="cherry-bomb-one-regular mt-2 text-4xl text-[#2B1B17] md:text-5xl">
              Food That Feels Like Home
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <div
                  key={facility.id}
                  className="group rounded-[2rem] border border-orange-100 bg-white p-6 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-green-100 text-green-800 transition group-hover:scale-110">
                    <Icon size={34} />
                  </div>

                  <h3 className="akaya-kanadaka-regular text-2xl text-[#2B1B17]">
                    {facility.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {facility.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="relative overflow-hidden bg-[#2B1B17] px-6 py-16 text-white md:px-10"
      >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="akaya-kanadaka-regular text-xl text-orange-300">
              Today’s Comfort Picks
            </p>

            <h2 className="cherry-bomb-one-regular mt-2 text-4xl md:text-5xl">
              Simple Meals.
              <span className="block text-green-400">Soulful Taste.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-300">
              Whether you are craving a quick dosa, a comforting plate of rice,
              or a proper South Indian meal, we serve food that is fresh,
              satisfying, and made with care.
            </p>

            <a
              href="tel:+918288084880"
              className="akaya-kanadaka-regular mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-lg text-white transition hover:bg-orange-600"
            >
              Call to Order <FaPhoneAlt />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {menuHighlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-orange-300">
                  <MdRestaurantMenu size={26} />
                </div>

                <p className="akaya-kanadaka-regular text-2xl">{item}</p>
                <p className="mt-2 text-sm text-gray-300">
                  Freshly prepared with authentic South Indian flavors.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <aside className="bg-yellow-50 px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto h-[360px] w-[280px] rounded-[2.5rem] bg-gradient-to-br from-orange-400 via-amber-200 to-green-300 p-5 shadow-2xl rotate-[-4deg]">
            <div className="flex h-full w-full flex-col justify-end rounded-[2rem] border border-white/60 bg-white/35 p-6 backdrop-blur">
              <p className="sarina-regular text-4xl text-[#2B1B17]">
                Simply
                <span className="block text-green-700">South</span>
              </p>
              <p className="mt-4 text-sm font-semibold text-[#2B1B17]">
                From our kitchen, with love.
              </p>
            </div>
          </div>

          <div>
            <p className="akaya-kanadaka-regular text-xl text-green-700">
              From the Owner
            </p>

            <h2 className="cherry-bomb-one-regular mt-2 text-4xl text-[#2B1B17] md:text-5xl">
              A Message From Our Kitchen
            </h2>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Cooking has always been my way of caring for the people around me.
              Every meal served at Simply South is prepared with the same love,
              attention, and homemade touch that I would give to my own family.
              My goal is simple — to bring authentic South Indian flavors to your
              table using fresh ingredients and traditional recipes cherished for
              generations.
            </p>

            <p className="akaya-kanadaka-regular mt-6 text-2xl text-orange-500">
              Thank you for letting us be part of your meals and memories.
            </p>
          </div>
        </div>
      </aside>

      <section className="bg-amber-50 px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="akaya-kanadaka-regular text-xl text-green-700">
              Customer Love
            </p>
            <h2 className="cherry-bomb-one-regular mt-2 text-4xl text-[#2B1B17] md:text-5xl">
              What People Are Saying
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((review) => (
              <div
                key={review.id}
                className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <FaQuoteLeft className="mb-5 text-3xl text-orange-300" />

                <p className="mb-4 flex gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>

                <p className="leading-7 text-gray-700 italic">
                  “{review.text}”
                </p>

                <div className="mt-6 border-t border-orange-100 pt-5">
                  <h4 className="font-bold text-[#2B1B17]">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2B1B17] px-6 py-16 text-white md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="cherry-bomb-one-regular text-4xl md:text-5xl">
            Ready for a Taste of Home?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            Freshly prepared South Indian meals made with love, just like Amma
            makes them.
          </p>

          <div className="my-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-6">
              <FaMapMarkerAlt className="mx-auto mb-3 text-2xl text-orange-400" />
              <p className="font-bold text-orange-300">Location</p>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Citi Plaza, 41-42 LGF, opposite BOLLYWOOD HEIGHTS-1, Sector 20,
                Sanauli, Punjab 160104
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6">
              <FaPhoneAlt className="mx-auto mb-3 text-2xl text-orange-400" />
              <p className="font-bold text-orange-300">Call Us</p>
              <p className="mt-2 text-sm text-gray-300">+91 82880 84880</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6">
              <FaClock className="mx-auto mb-3 text-2xl text-orange-400" />
              <p className="font-bold text-orange-300">Timings</p>
              <p className="mt-2 text-sm text-gray-300">
                10:30 AM - 10:00 PM
              </p>
            </div>
          </div>

          <a
            href="tel:+918288084880"
            className="akaya-kanadaka-regular inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg text-white transition hover:bg-orange-600"
          >
            Order Now <MdDeliveryDining size={24} />
          </a>

          <div className="mt-12 border-t border-white/20 pt-8">
            <h3 className="sarina-regular text-4xl">
              Simply <span className="text-green-500">South</span>
            </h3>

            <p className="mt-4 text-sm text-gray-400">
              © 2025 Simply South. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}