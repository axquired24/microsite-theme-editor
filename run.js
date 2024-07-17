import {
  createApp
} from 'https://unpkg.com/petite-vue?module';

const run = () => {
  createApp({
    // exposed to all expressions
    count: 0,
    detailTransaksi: [
      [
        "ID Transaksi",
        "CHG88272111KFG"
      ],
      [
        "Metode Pembayaran",
        "Virtual Account"
      ],
      [
        "Nama Bank",
        "BNI"
      ],
      [
        "No. Pelanggan",
        "08121821821111",
        "-"
      ],
      [
        "Pulsa 20.000",
        "Rp 20.000"
      ],
      [
        "Biaya Admin VA",
        "Rp 1.600"
      ],
      [
        "Biaya Platform",
        "Rp 500",
        "-"
      ],
    ],
    theme: {
      color: {
        primary: "red",
        secondary: "green",
        headerBg: "blue",
        headerTextColor: "light",
        buttonTextColor: "light"
      },
      text: {
        headerTitle: "Driver Special"
      }
    },
  
    // getters
    get plusOne() {
      return this.count + 1
    },
    // methods
    increment() {
      this.count++
    }
  }).mount()
}

export { run }