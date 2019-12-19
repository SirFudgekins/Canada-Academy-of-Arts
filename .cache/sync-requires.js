const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\glenn\\Documents\\GitHub\\Canada-Academy-of-Arts\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\glenn\\Documents\\GitHub\\Canada-Academy-of-Arts\\src\\pages\\about.js"))),
  "component---src-pages-gallery-js": hot(preferDefault(require("C:\\Users\\glenn\\Documents\\GitHub\\Canada-Academy-of-Arts\\src\\pages\\gallery.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\glenn\\Documents\\GitHub\\Canada-Academy-of-Arts\\src\\pages\\index.js")))
}

