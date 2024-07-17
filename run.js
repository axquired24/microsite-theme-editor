import {
  createApp
} from 'https://unpkg.com/petite-vue?module';

const run = () => {
  createApp({
    // exposed to all expressions
    count: 0,
    visibleContent: "site", // site/form
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
        primary: "#FF3333",
        secondary: "#018534",
        headerBg: "#FF3333",
        headerTextColor: "light",
        buttonTextColor: "light"
      },
      text: {
        headerTitle: "Driver Special"
      }
    },
    themeForm: {
      headerTitle: "",
      primaryColor: "",
      secondaryColor: "",
      headerBgColor: "",
      headerTextColor: "",
      buttonTextColor: ""
    },
    colorPickerModels: [
      ["Header Background Color", "headerBgColor"],
      ["Primary Color", "primaryColor"],
      ["Secondary Color", "secondaryColor"]
    ],
    colorDropdownModels: [
      ["Header Text Color", "headerTextColor"],
      ["Button Text Color", "buttonTextColor"]
    ],
    currentThemeToForm() {
      const currentTheme = JSON.parse(JSON.stringify(this.theme))
      const newThemeForm = {
        headerTitle: currentTheme.text.headerTitle,
        primaryColor: currentTheme.color.primary,
        secondaryColor: currentTheme.color.secondary,
        headerBgColor: currentTheme.color.headerBg,
        headerTextColor: currentTheme.color.headerTextColor,
        buttonTextColor: currentTheme.color.buttonTextColor
      }
      this.themeForm = newThemeForm
    },
    applyThemeUsingForm() {
      const currentForm = JSON.parse(JSON.stringify(this.themeForm))
      const newTheme = {
        color: {
          primary: currentForm.primaryColor,
          secondary: currentForm.secondaryColor,
          headerBg: currentForm.headerBgColor,
          headerTextColor: currentForm.headerTextColor,
          buttonTextColor: currentForm.buttonTextColor
        },
        text: {
          headerTitle: currentForm.headerTitle
        }
      }
      this.theme = newTheme

      return true
    },
    applyNewTheme() {
      const isCorrect = this.applyThemeUsingForm()
      if(isCorrect) {
        this.visibleContent = "site"
      } // endif
    },
  
    // getters
    get plusOne() {
      return this.count + 1
    },
    // methods
    toggleContent() {
      if(this.visibleContent === "site") {
        this.currentThemeToForm();
      } // endif

      const newContent = this.visibleContent === "site" ? "form" : "site"
      this.visibleContent = newContent
    },
    darkLightToColor(param) {
      return param == 'dark' ? '#000000' : '#FFFFFF';
    }
  }).mount()
}

export { run }