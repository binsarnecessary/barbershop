import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

const services = [
  { name: "Signature Cut", desc: "Konsultasi, cukur presisi, styling, dan hot towel finish.", price: "95rb" },
  { name: "Cut + Shave", desc: "Signature cut plus traditional shave dengan pisau lipat.", price: "140rb" },
  { name: "Beard Trim & Shape", desc: "Rapikan dan bentuk jenggot sesuai karakter wajah.", price: "60rb" },
  { name: "Hair Coloring", desc: "Full color atau highlight dengan produk premium.", price: "250rb" },
  { name: "Kids Cut (<10 th)", desc: "Cukur anak dengan barber yang sabar.", price: "65rb" },
  { name: "The Royal Package", desc: "Cut, shave, hair spa, facial scrub, dan head massage.", price: "350rb" },
];

const barbers = [
  { ava: "JK", name: "Bang Jaka", spec: "Classic cuts & pompadour · 10 th", tag: "HEAD BARBER" },
  { ava: "RD", name: "Ridho", spec: "Fade specialist & modern style · 7 th", tag: "" },
  { ava: "SM", name: "Sam", spec: "Beard sculpting & shave · 8 th", tag: "" },
];

const gallery = [
  "/img/gallery-1.jpg",
  "/img/gallery-2.jpg",
  "/img/gallery-3.jpg",
  "/img/gallery-4.jpg",
  "/img/gallery-5.jpg",
  "/img/gallery-6.jpg",
];

const plans = [
  { name: "Gentleman", price: "Rp250rb", unit: "/bulan", featured: false, items: ["3x Signature Cut", "Prioritas booking", "Gratis minuman", "Diskon 10% produk"] },
  { name: "Royal Member", price: "Rp400rb", unit: "/bulan", featured: true, items: ["Cut unlimited (max 1x/minggu)", "1x Beard trim", "Prioritas booking + slot malam", "Diskon 20% produk & paket"] },
  { name: "Walk-in", price: "Bayar", unit: " per kunjungan", featured: false, items: ["Tanpa komitmen", "Harga normal", "Booking tetap disarankan", "Semua layanan tersedia"] },
];

const testimonials = [
  { text: "Fade-nya rapi banget dan konsisten tiap kunjungan. Booking via WA gampang, nggak pernah nunggu lama.", name: "Aldi Kurnia", role: "Royal Member" },
  { text: "Traditional shave-nya juara — hot towel, pisau lipat, wangi aftershave-nya. Ritual me-time tiap dua minggu.", name: "Bara Aditama", role: "Pelanggan Setia" },
  { text: "Anak saya 6 tahun biasanya susah dicukur, di sini malah minta balik lagi. Barbernya sabar dan tempatnya keren.", name: "Pak Hendra", role: "Kids Cut" },
];

const faqs = [
  { q: "Apakah harus booking dulu?", a: "Walk-in dilayani, tapi booking via WhatsApp diprioritaskan — terutama akhir pekan dan jam 18.00 ke atas." },
  { q: "Bisa pilih barber?", a: "Bisa. Sebutkan nama barber saat booking. Jika penuh, kami tawarkan jadwal terdekat atau barber lain." },
  { q: "Berapa lama satu sesi?", a: "Signature Cut sekitar 45 menit, Cut + Shave 75 menit, Royal Package sekitar 2 jam." },
  { q: "Apakah alatnya higienis?", a: "Ya. Pisau shave selalu blade baru per pelanggan, dan alat lainnya disterilkan setiap habis pakai." },
  { q: "Ada produk yang dijual?", a: "Ada — pomade, sea salt spray, beard oil, dan shampoo pilihan barber kami. Member dapat diskon." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-accent">{children}</p>;
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-28 text-center">
        <img src="/img/hero.jpg" alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="pointer-events-none absolute inset-0 bg-body-bg/70" />
        <div className="relative mx-auto max-w-4xl px-5">
          <div className="text-lg tracking-[10px] text-accent">━━ ✦ ━━</div>
          <h1 className="mt-5 text-5xl uppercase tracking-wide md:text-7xl">
            Look Sharp.<br />Feel <span className="text-accent">Royal.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted">
            Premium barbershop dengan barber berpengalaman, suasana klasik,
            dan detail yang tidak pernah asal.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="#booking" className="rounded-none bg-accent px-9 py-3.5 text-sm font-bold uppercase tracking-widest text-accent-contrast transition-opacity hover:opacity-85">
              Booking Sekarang
            </a>
            <a href="#layanan" className="rounded-none border border-accent px-9 py-3.5 text-sm font-bold uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-accent-contrast">
              Lihat Harga
            </a>
          </div>
        </div>
      </section>

      {/* Services / price list */}
      <section id="layanan" className="bg-alt py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Eyebrow>Layanan &amp; Harga</Eyebrow>
          <h2 className="text-3xl uppercase tracking-wide md:text-4xl">Price List</h2>
          <div className="mt-12 space-y-0 text-left">
            {services.map((s) => (
              <div key={s.name} className="flex items-center justify-between gap-6 border-b border-dashed border-accent/30 py-5">
                <div>
                  <h3 className="font-heading text-xl uppercase tracking-wide text-heading">{s.name}</h3>
                  <p className="mt-1 text-sm text-muted">{s.desc}</p>
                </div>
                <span className="whitespace-nowrap font-heading text-2xl text-accent">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers */}
      <section id="barber" className="py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>The Crew</Eyebrow>
          <h2 className="text-3xl uppercase tracking-wide md:text-4xl">Barber Kami</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {barbers.map((b) => (
              <div key={b.name} className="relative rounded-2xl border border-line bg-card p-8 text-center">
                {b.tag && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent px-3.5 py-1 text-[10px] font-bold tracking-[2px] text-accent-contrast">{b.tag}</span>
                )}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent font-heading text-xl text-accent">
                  {b.ava}
                </div>
                <h3 className="mt-4 font-heading text-xl uppercase tracking-wide text-heading">{b.name}</h3>
                <p className="mt-1 text-sm text-muted">{b.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-alt py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="text-3xl uppercase tracking-wide md:text-4xl">Di Dalam Crown</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((src, i) => (
              <img key={i} src={src} alt={`Crown Barber ${i + 1}`} loading="lazy" className="aspect-square w-full rounded-2xl object-cover transition-transform hover:scale-[1.03]" />
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Membership</Eyebrow>
          <h2 className="text-3xl uppercase tracking-wide md:text-4xl">Jadi Bagian Kerajaan</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`relative p-8 text-left ${p.featured ? "bg-accent" : "border border-line bg-card"}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-heading px-3.5 py-1 text-[10px] font-bold tracking-[2px] text-accent">BEST VALUE</span>
                )}
                <h3 className={`font-heading text-xl uppercase tracking-wide ${p.featured ? "text-accent-contrast" : "text-heading"}`}>{p.name}</h3>
                <div className={`my-4 font-heading text-3xl ${p.featured ? "text-accent-contrast" : "text-accent"}`}>
                  {p.price}<span className="text-sm">{p.unit}</span>
                </div>
                <ul className="space-y-2 text-sm">
                  {p.items.map((it) => (
                    <li key={it} className={p.featured ? "text-[#3a3226]" : "text-muted"}>
                      <span className="mr-2 font-bold">✓</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-alt py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Eyebrow>Testimonial</Eyebrow>
          <h2 className="text-3xl uppercase tracking-wide md:text-4xl">Kata Mereka</h2>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-card p-7">
                <div className="mb-3.5 tracking-[3px] text-accent">★★★★★</div>
                <blockquote className="text-sm">“{t.text}”</blockquote>
                <figcaption className="mt-4">
                  <strong className="block text-sm text-heading">{t.name}</strong>
                  <span className="text-xs text-muted">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl uppercase tracking-wide md:text-4xl">Sering Ditanyakan</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-line bg-card p-6 open:border-accent">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-heading">
                  {f.q}
                  <span className="text-xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3.5 text-sm text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="bg-alt py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <Eyebrow>Booking</Eyebrow>
            <h2 className="text-3xl uppercase tracking-wide md:text-4xl">Amankan Kursimu</h2>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              {[
                ["📍", "Lokasi", site.address],
                ["⏰", "Jam Buka", site.hours],
                ["💬", "WhatsApp", "+62 878-3037-7139"],
                ["💈", "Tips", "Slot ramai: weekend & 18.00 ke atas — booking H-1"],
              ].map(([ic, t, d]) => (
                <div key={t} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card text-xl">{ic}</div>
                  <div>
                    <strong className="block text-sm text-heading">{t}</strong>
                    <span className="text-sm text-muted">{d}</span>
                  </div>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
