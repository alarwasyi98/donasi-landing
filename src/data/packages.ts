// Data paket donasi — ekstrak dari HTML asli

export interface PackageSubItem {
    label: string;
    price: string;
    numericPrice: number;
    unit: string;
}

export interface DonationPackage {
    id: string;
    category: string;
    title: string;
    description?: string;
    price?: string;
    numericPrice?: number;
    priceLabel?: string;
    subItems?: PackageSubItem[];
    featured?: boolean;
    ctaText: string;
    ctaHref: string;
}

export const packages: DonationPackage[] = [
    {
        id: "buka-puasa",
        category: "Harian",
        title: "Sedekah Buka Puasa",
        subItems: [
            { label: "Makan Lengkap", price: "Rp25.000", numericPrice: 25000, unit: "/anak" },
            { label: "Takjil Istimewa", price: "Rp10.000", numericPrice: 10000, unit: "/anak" },
        ],
        ctaText: "Pilih Paket",
        ctaHref: "/checkout?paket=buka-puasa",
    },
    {
        id: "bingkisan-sembako",
        category: "Keluarga",
        title: "Bingkisan Sembako",
        description:
            "Paket bahan pokok (Beras, Minyak, Gula, dll) untuk stok pangan keluarga santri selama lebaran.",
        price: "Rp150.000",
        numericPrice: 150000,
        priceLabel: "Per Paket Sembako",
        ctaText: "Pilih Paket",
        ctaHref: "/checkout?paket=bingkisan-sembako",
    },
    {
        id: "bingkisan-lebaran",
        category: "Terpopuler",
        title: "Bingkisan Lebaran",
        description:
            "Pakaian muslim baru, perlengkapan shalat, dan uang saku THR untuk keceriaan hari raya santri.",
        price: "Rp335.000",
        numericPrice: 335000,
        priceLabel: "Paket Lengkap Santri",
        featured: true,
        ctaText: "Pilih Paket",
        ctaHref: "/checkout?paket=bingkisan-lebaran",
    },
    {
        id: "bingkisan-guru",
        category: "Apresiasi",
        title: "Bingkisan Guru Ngaji",
        description:
            "Muliakan asatidzah yang membimbing santri dengan paket bingkisan khusus hari raya.",
        price: "Rp500.000",
        numericPrice: 500000,
        priceLabel: "Per Paket Guru",
        ctaText: "Pilih Paket",
        ctaHref: "/checkout?paket=bingkisan-guru",
    },
];
