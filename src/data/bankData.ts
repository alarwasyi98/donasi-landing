// Data rekening penerima donasi

export interface BankAccount {
    bankName: string;
    bankShortName: string;
    bankLogoUrl: string;
    accountNumber: string;
    accountHolder: string;
}

export const primaryAccount: BankAccount = {
    bankName: "Bank Syariah Indonesia",
    bankShortName: "BSI",
    bankLogoUrl: "/logo-bsi.webp",
    accountNumber: "7000345614",
    accountHolder: "YAYASAN ULUL ILMI",
};
