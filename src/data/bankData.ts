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
    bankLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/BSI_logo.svg/512px-BSI_logo.svg.png",
    accountNumber: "7128945030",
    accountHolder: "Yayasan Pondok Pesantren Ulul Ilmi",
};
