import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import socket from "./socket"

class App {
  static init() {
    var username = $("#username")
    var msgBody = $("#message")

    let socket = new Socket("/socket")
    socket.connect()
    socket.onClose(event => console.log("Close all the connections!"))

    var channel = socket.channel("rooms:lobby", {})
    channel.join()
      .receive("error", () => console.log("Connection couldn't be established"))

    msgBody.off("keypress")
      .on("keypress", event => {
        if (event.keyCode == 13) {
          console.log('[${username.val()}] ${msgBody.val()}}')
          msgBody.val("")
        }
      })
    console.log("Is this thing on?")
  }
}

$(() => App.init())
console.log("Are you on?")
export default App
