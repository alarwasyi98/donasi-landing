// Data lembaga dari company-profile.md
export const siteData = {
  name: "Ulul Ilmi",
  fullName: "Yayasan Pondok Pesantren Ulul Ilmi",
  tagline: "Mendidik dengan Ilmu, Membina dengan Akhlak",
  description:
    "Lembaga pendidikan Islam yang berfokus pada pembinaan karakter dan hafalan Al-Qur'an bagi anak-anak yatim dan dhuafa di wilayah Munjul, Jakarta Timur.",
  yearFounded: 2000,

  contact: {
    address:
      "Jl. Masjid Al-Akbar No. 22, RT 01/RW 05, Munjul, Cipayung, Jakarta Timur, DKI Jakarta 13850.",
    email: "ululilmijkt@gmail.com",
    phone: "0851-7433-8087",
    website: "https://ululilmi.sch.id",
  },

  socialLinks: {
    instagram: "https://www.instagram.com/ppululilmijkt/",
    whatsapp: "https://wa.link/sngkde",
    facebook: "https://www.facebook.com/ppululilmijkt",
  },

  assets: {
    logoUrl:
      "https://ululilmi.sch.id/wp-content/uploads/2026/02/ulul-ilmi-logo-alt-colored.png",
    heroImageUrl:
      "https://ululilmi.sch.id/wp-content/uploads/2026/02/jumbotron.webp",
  },

  stats: {
    totalSantri: 147,
    targetSantri: 150,
    progressPercent: 75,
  },

  hero: {
    badge: "Ramadan Kareem 2026",
    title: "Sempurnakan Ramadan,",
    titleHighlight: "Muliakan Yatim",
    titleSuffix: "& Penghafal Al-Qur'an.",
    subtitle:
      "Berikan dampak nyata bagi 150 santri binaan kami di Jakarta Timur melalui paket ifthar berkualitas dan bingkisan lebaran.",
    ctaPrimary: "Donasi Sekarang",
    ctaSecondary: "Konfirmasi Donasi",
  },

  quote: {
    text: '"Kami berkomitemen untuk memastikan setiap rupiah yang Anda donasikan memberikan manfaat langsung kepada santri yatim dan penghafal Al-Qur\'an di pesantren kami."',
    attribution: "Dewan Pembina Yayasan",
  },

  navLinks: [
    { label: "Program", href: "#about" },
    { label: "Donasi", href: "#packages" },
    { label: "Bantuan", href: "#faq" },
  ],

  footerLinks: [
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
  ],
} as const;
