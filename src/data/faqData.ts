// Data FAQ — ekstrak dari HTML asli

export interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

export const faqItems: FaqItem[] = [
    {
        id: "faq-1",
        question: "Bagaimana cara konfirmasi donasi?",
        answer:
            'Anda dapat melakukan konfirmasi otomatis melalui WhatsApp dengan menyertakan bukti transfer. Klik tombol <a href="#">"Konfirmasi Donasi"</a> pada dasbor donasi setelah pembayaran. Tim kami akan memvalidasi dalam 1x24 jam.',
    },
    {
        id: "faq-2",
        question: "Apa saja metode pembayaran yang tersedia?",
        answer:
            "Kami menerima donasi melalui transfer antar bank (BSI, Mandiri, BCA), serta berbagai dompet digital seperti QRIS, GoPay, dan OVO untuk memudahkan sedekah harian Anda.",
    },
    {
        id: "faq-3",
        question: "Kapan laporan penyaluran dikirimkan?",
        answer:
            "Transparansi adalah prioritas kami. Laporan harian kegiatan ifthar akan diunggah di Instagram, sementara laporan komprehensif (dokumentasi & rincian dana) akan dikirimkan ke email atau WhatsApp Anda setiap hari Jumat selama bulan Ramadan.",
    },
    {
        id: "faq-4",
        question: "Apakah saya bisa berkunjung langsung ke Pesantren?",
        answer:
            "Tentu saja. Kami sangat menyambut kehadiran para donatur di asrama kami di Munjul, Cipayung. Anda dapat melihat langsung proses pembinaan santri dan penyaluran paket buka puasa. Silakan hubungi admin untuk pengaturan jadwal kunjungan.",
    },
    {
        id: "faq-5",
        question: "Dapatkah saya berdonasi atas nama keluarga yang sudah tiada?",
        answer:
            "Bisa. Anda dapat mencantumkan nama almarhum/almarhumah di catatan donasi. Nama tersebut akan kami sertakan dalam doa bersama para santri penghafal Al-Qur'an sebelum waktu berbuka puasa tiba.",
    },
];
