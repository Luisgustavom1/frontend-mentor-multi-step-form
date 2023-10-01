/** @type {import('tailwindcss').Config} */
module.exports = {
  screens: {
    sm: "375px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  colors: {
    primary: {
      "marine-blue": "hsl(213, 96%, 18%)",
      "purplish-blue": "hsl(243, 100%, 62%)",
      "pastel-blue": "hsl(228, 100%, 84%)",
      "light-blue": "hsl(206, 94%, 87%)",
      "strawberry-red": "hsl(354, 84%, 57%)",
    },
    neutral: {
      "cool-gray": "hsl(231, 11%, 63%)",
      "light-gray": "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  boxShadow: {
    main: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    secondary: "rgba(0, 0, 0, 0.1) 0px 3px 12px",
  },
  backgroundImage: {
    "aside-mobile": "url('/src/assets/images/bg-sidebar-mobile.svg')",
    "aside-desktop": "url('/src/assets/images/bg-sidebar-desktop.svg')",
  },
  backgroundSize: {
    full: "100%",
  },
};
