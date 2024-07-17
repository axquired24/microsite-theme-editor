import {
  createApp
} from 'https://unpkg.com/petite-vue?module';

const run = () => {
  createApp({
    // exposed to all expressions
    logo: {
      merchant: {
        bb: "https://zola-cdn.s3.ap-southeast-3.amazonaws.com/bluebird-header.png",
        mceasy: "https://zola-cdn.s3.ap-southeast-3.amazonaws.com/mceasy-header.png",
        maxim: "https://zola-cdn.s3.ap-southeast-3.amazonaws.com/maxim-header.png"
      },
      other: {
        insightDark: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/bluebird-microsite-8gwkhb/assets/tzyt6sxrsz2z/dark-powered-by-insight.png",
        insightWhite: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/bluebird-microsite-8gwkhb/assets/0ke38vc9gqa0/light-powered-by-insight.png"
      }
    },
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
        primary: "#005EB8",
        secondary: "#167F50",
        headerBg: "#005EB8",
        headerTextColor: "light",
        buttonTextColor: "light"
      },
      text: {
        homepageTitle: "Driver Special"
      },
      image: {
        headerLogo: "https://zola-cdn.s3.ap-southeast-3.amazonaws.com/bluebird-header.png"
      }
    },
    themeForm: {
      homepageTitle: "",
      primaryColor: "",
      secondaryColor: "",
      headerBgColor: "",
      headerTextColor: "",
      buttonTextColor: "",
      headerLogo: ""
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
      const currentTheme = this.jsonObj(this.theme)
      const newThemeForm = {
        homepageTitle: currentTheme.text.homepageTitle,
        primaryColor: currentTheme.color.primary,
        secondaryColor: currentTheme.color.secondary,
        headerBgColor: currentTheme.color.headerBg,
        headerTextColor: currentTheme.color.headerTextColor,
        buttonTextColor: currentTheme.color.buttonTextColor,
        headerLogo: currentTheme.image.headerLogo
      }
      this.themeForm = newThemeForm
    },
    applyThemeUsingForm() {
      const currentForm = this.jsonObj(this.themeForm)
      const newTheme = {
        color: {
          primary: currentForm.primaryColor,
          secondary: currentForm.secondaryColor,
          headerBg: currentForm.headerBgColor,
          headerTextColor: currentForm.headerTextColor,
          buttonTextColor: currentForm.buttonTextColor
        },
        text: {
          homepageTitle: currentForm.homepageTitle
        },
        image: {
          headerLogo: currentForm.headerLogo
        }
      }
      this.theme = newTheme

      return true
    },
    autocompleteLogo(logoUrl) {
      this.themeForm.headerLogo = logoUrl
    },
    applyNewTheme() {
      const isCorrect = this.applyThemeUsingForm()
      if(isCorrect) {
        this.visibleContent = "site"
      } // endif
    },
  
    // getters
    get logoList() {
      return Object.entries(this.logo.merchant)
    },
    get riwayatBtnColorCls() {
      let colorCls = "bg-white text-white";
      if(this.theme.color.headerTextColor === "dark") {
        colorCls = "bg-black text-black";
      } // endif

      return colorCls;
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
    },
    copiedToClipboard() {
      alert("Theme config copied to clipboard. If not, you can also check your browser's console.")
      console.log(this.jsonObj(this.theme))
    },
    jsonObj(obj) {
      return JSON.parse(JSON.stringify(obj))
    }
  }).mount()
}

export { run }