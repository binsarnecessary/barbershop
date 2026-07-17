export const site = {
  name: "Crown Barber",
  logo: "👑",
  whatsapp: "6287830377139", // TODO: ganti nomor asli
  waGreeting: "Halo Crown Barber! Saya mau booking cukur.",
  address: "Jl. Mahkota No. 12, Blok M, Jakarta Selatan",
  hours: "Setiap hari, 10.00 – 21.00 WIB",
};

export const waLink = (t: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t)}`;

export const nav = {
  links: [
    { href: "#layanan", label: "Layanan" },
    { href: "#barber", label: "Barber" },
    { href: "#gallery", label: "Gallery" },
    { href: "#membership", label: "Membership" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { href: "#booking", label: "Booking" },
};

export const footer = {
  about:
    "Premium barbershop dengan barber berpengalaman dan suasana klasik. Look sharp, feel royal.",
  columns: [
    {
      title: "Menu",
      links: [
        { href: "#layanan", label: "Layanan & Harga" },
        { href: "#barber", label: "Barber Kami" },
        { href: "#membership", label: "Membership" },
        { href: "#faq", label: "FAQ" },
      ],
    },
    {
      title: "Hubungi",
      links: [
        { href: "https://wa.me/6287830377139", label: "WhatsApp" },
        { href: "#", label: "Instagram" },
        { href: "#", label: "Google Maps" },
      ],
    },
  ],
};

export type Field = { id: string; label: string; placeholder: string; textarea?: boolean };

export const form = {
  fields: [
    { id: "nama", label: "Nama", placeholder: "Nama Anda" },
    { id: "layanan", label: "Layanan", placeholder: "cth: Signature Cut" },
    { id: "jadwal", label: "Jadwal", placeholder: "cth: Sabtu, 14.00" },
    { id: "barber", label: "Barber (opsional)", placeholder: "cth: Bang Jaka", textarea: false },
  ] as Field[],
  cta: "Booking via WhatsApp",
  buildMessage: (v: Record<string, string>) =>
    `Halo Crown Barber! Saya ${v.nama ?? ""}, mau booking ${v.layanan ?? ""} pada ${v.jadwal ?? ""}. Barber: ${v.barber ?? "bebas"}.`,
};
