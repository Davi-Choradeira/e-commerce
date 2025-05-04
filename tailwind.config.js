module.exports = {
    mode: "jit",
    content: ["./components/**/*.vue", "./layouts/**/*.vue", "./pages/**/*.vue", "./app.vue"],
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A",
          secondary: "#9333EA",
          accent: "#FACC15",
        },
      },
    },
  };