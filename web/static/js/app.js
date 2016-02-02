import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import socket from "./socket"

class App {
  static init() {
    console.log("Is this thing on?")
  }
}

$(() => App.init())
console.log("Are you on?")
export default App
