## **Color Palette**

### **Primary Colors**

* **Primary Pine Green** \- `#0F4A2A` (Warna utama brand, digunakan untuk tombol utama, tipografi heading, dan elemen navigasi sidebar untuk kesan eksklusif, mapan, dan tepercaya)  
* **Primary White** \- `#FFFFFF` (Warna dominan untuk card, modal, dan kanvas utama yang memastikan negative space bernapas dengan baik)

### **Secondary Colors**

* **Secondary Sage** \- `#4A5D52` (Digunakan untuk teks sekunder, ikon inaktif, dan border elemen yang tidak menonjol; warna abu-abu dengan sedikit tint hijau agar selaras)  
* **Secondary Mint Whisper** \- `#F4F7F5` (Warna latar belakang alternatif yang sangat sejuk untuk membedakan area konten tanpa menggunakan garis tebal)

### **Accent Colors**

* **Accent Gold** \- `#F59E0B` (Aksen hangat yang dipadukan dengan hijau pekat menciptakan estetika classic luxury. Digunakan untuk indikator mikro-cicilan, status pending, dan apresiasi visual)  
* **Accent Teal** \- `#0D9488` (Aksen dinamis dan modern khusus untuk interaksi Tenant Switcher, hyperlink, dan hover states pada navigasi Super Admin)

### **Functional Colors**

* **Success Emerald** \- `#10B981` (Untuk status pembayaran lunas, e-Struk terkirim, dan konfirmasi sukses)  
* **Warning Amber** \- `#D97706` (Untuk notifikasi perhatian yang butuh tindakan namun tidak kritis)  
* **Error Crimson** \- `#E11D48` (Untuk tunggakan kritis, validasi error, dan destructive actions)  
* **Neutral Gray** \- `#9CA3AF` (Untuk placeholder, disabled states, dan metadata)  
* **Dark Moss** \- `#19241E` (Untuk teks body utama, hitam dengan sedikit rona hijau tua untuk memastikan rasio kontras aksesibilitas tinggi yang lebih lembut di mata daripada hitam murni)

### **Background Colors**

* **Background Surface** \- `#FFFFFF` (Putih murni untuk cards data tabel siswa dan finansial)  
* **Background Canvas** \- `#EEF2F0` (Abu-abu dengan undertone hijau sangat pudar untuk latar belakang aplikasi, memunculkan ilusi elevasi pada card)  
* **Background Dark Canvas** \- `#080D0A` (Kanvas utama untuk mode gelap)

## **Typography**

### **Font Family**

* **Primary Font**: Geist (Font utama untuk headings dan angka/data finansial, memberikan kesan modern, rapi, dan compact)  
* **Alternative Font**: Inter (Font fallback untuk body text dan elemen antarmuka umum)

### **Font Weights**

* **Regular**: 400 (Untuk body text dan tabel)  
* **Medium**: 500 (Untuk button, label input, dan nama kolom tabel)  
* **Semibold**: 600 (Untuk sub-heading dan status pembayaran)  
* **Bold**: 700 (Untuk heading utama dan nominal total tagihan)

### **Text Styles**

#### **Headings**

* **H1**: 28px/36px, Bold, Letter spacing -0.5px  
  * Digunakan untuk judul halaman (misal: "Buku Besar Unit A" atau Dasbor Super Admin)  
* **H2**: 22px/28px, Semibold, Letter spacing -0.3px  
  * Digunakan untuk judul section dan ringkasan agregat  
* **H3**: 18px/24px, Medium, Letter spacing -0.2px  
  * Digunakan untuk judul card metrik finansial dan profil siswa

#### **Body Text**

* **Body Large**: 16px/24px, Regular, Letter spacing 0px  
  * Teks bacaan utama untuk insight analitik  
* **Body**: 14px/20px, Regular, Letter spacing 0.1px  
  * Teks standar untuk isi tabel CRM, detail siswa, dan log histori  
* **Body Small**: 12px/16px, Regular, Letter spacing 0.2px  
  * Informasi sekunder, sisa tagihan mikro, dan deskripsi tooltip

#### **Special Text**

* **Caption**: 11px/14px, Medium, Letter spacing 0.3px, Uppercase  
  * Digunakan untuk label status (pill), tanggal transaksi, dan metadata e-Struk  
* **Button Text**: 14px/20px, Medium, Letter spacing 0.2px  
  * Teks interaktif pada tombol aksi (misal: "Kirim e-Struk WA")  
* **Financial Data**: 16px/24px, SemiBold, Font: Geist, Letter spacing 0px  
  * Digunakan khusus untuk nominal uang (Rupiah) agar angka presisi dan sejajar

## **Component Styling**

### **Buttons**

* **Primary Button** * Background: Primary Pine Green (`#0F4A2A`)  
  * Text: White (`#FFFFFF`)  
  * Height: 44dp (Kompak dan presisi)  
  * Corner Radius: 8dp  
  * Padding: 16dp horizontal  
* **Secondary Button** * Border: 1dp Solid Secondary Sage (`#4A5D52`)  
  * Text: Primary Pine Green (`#0F4A2A`)  
  * Background: Transparent (Hover: `#F4F7F5`)  
  * Height: 44dp  
  * Corner Radius: 8dp  
* **Text Button / Action Link** * Text: Accent Teal (`#0D9488`)  
  * No background or border  
  * Height: 40dp

### **Cards & Modules**

* Background: White (`#FFFFFF`)  
* Shadow: Y-offset 2dp, Blur 4dp, Opacity 4%, Color: `#0F4A2A` (Menggunakan warna brand untuk bayangan transparan agar lebih natural dari bayangan hitam biasa)  
* Corner Radius: 12dp  
* Padding: 20dp (Menciptakan ruang kognitif yang lapang untuk membaca angka)  
* Border (Optional): 1dp Solid `#E5EBE7` untuk transisi card di dalam card

### **Input Fields & Form**

* Height: 44dp  
* Corner Radius: 8dp  
* Border: 1dp Neutral Gray (`#CBD5E1`)  
* Active/Focus Border: 2dp Accent Teal (`#0D9488`) dengan ring offset 2px  
* Background: White (`#FFFFFF`)  
* Text: Dark Moss (`#19241E`)  
* Placeholder Text: Neutral Gray (`#9CA3AF`)

### **Progress Bar (Mikro-Cicilan)**

* Track Background: Secondary Mint Whisper (`#F4F7F5`)  
* Indicator Fill: Success Emerald (`#10B981`) untuk lunas, Accent Gold (`#F59E0B`) untuk in-progress  
* Height: 6dp (Halus namun terlihat jelas)  
* Corner Radius: 4dp

### **Icons**

* **Primary Icons**: 24dp x 24dp (Gaya Linear/Outline dengan ketebalan stroke 1.5px)  
* **Small Icons**: 16dp x 16dp (Untuk ikon inline dengan teks, seperti ikon WhatsApp)  
* Primary color for interactive icons: Primary Pine Green (`#0F4A2A`)  
* Secondary color for decorative icons: Neutral Gray (`#9CA3AF`)

## **Spacing System**

* **4dp** \- Micro spacing (Jarak antara label input dan field, atau ikon dan teks)  
* **8dp** \- Small spacing (Jarak antar item dalam daftar (list))  
* **16dp** \- Default spacing (Padding standar internal card kecil)  
* **24dp** \- Medium spacing (Jarak antar card pada dashboard agregat)  
* **32dp** \- Large spacing (Jarak antar section utama, misal: dari grafik ke tabel data)  
* **48dp** \- Extra large spacing (Padding layar utama di sisi kiri/kanan pada tampilan desktop)

## **Motion & Animation**

* **Standard Transition**: 200ms, Ease-out curve (Untuk hover states pada tombol dan baris tabel)  
* **Emphasis Transition (Tenant Switcher)**: 400ms, Spring curve (Tension: 250, Friction: 25) (Membuat perpindahan data antar sekolah terasa natural dan taktil)  
* **Microinteractions**: 150ms, Linear (Untuk ceklis status lunas atau animasi ikon copy e-Struk)  
* **Page/View Transitions (Tabel ke Galeri)**: 300ms, Cubic-bezier(0.4, 0.0, 0.2, 1) (Transisi fade dan scale ringan untuk perpindahan Dual View)

## **Dark Mode Variants**

* **Dark Background**: `#080D0A` (Hijau gelap mendekati hitam pekat untuk kontras layar)  
* **Dark Surface**: `#101713` (Latar belakang card dan formulir)  
* **Dark Primary Accent**: `#2DD4BF` (Teal yang lebih terang agar pop-out di atas latar gelap)  
* **Dark Text Primary**: `#F8FAFC` (Putih bersih untuk teks utama)  
* **Dark Text Secondary**: `#9CA3AF` (Abu-abu netral untuk teks pendukung)  
* **Dark Borders**: `#1A241D` (Garis tepi sangat tipis untuk mempertegas batas card)