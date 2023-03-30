function addMessage(message, me = true) {
    const template = `<div class="message">
      <div class="${
        me ? "myMessage" : "fromThem"
      }" data-date="${new Date().toLocaleTimeString()}">
        <p>${message}</p>
        <date> ${new Date().toLocaleTimeString()} </date>
      </div>
    </div>`;
  
    document.querySelector(".chat .messages").innerHTML += template;
  }
  
  function typing() {
    document.querySelector(".typing").classList.toggle("active");
    setTimeout(() => {
      document.querySelector(".typing").classList.toggle("active");
    }, 1000);
  }
  
  typing();
  addMessage("Hi!", false);
  addMessage("In this exercise you will work with events in JS", false);
  addMessage("Let's go!");
  
  /**
   * Listen to the submit of the form and add a new message
   * with addMessage()
   */
  document.querySelector(".chat").addEventListener("submit", function (event) {
    event.preventDefault();
    let message = document.querySelector('input[type="text"]').value;
    if (message.trim !== "") addMessage(message);
    document.querySelector('input[type="text"]').value = "";
  });
  /**
   * Listen to the click on each message and create an alert
   * with the date from 'data-date'
   * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   */
  // let messagesAll = document.querySelectorAll(".messages");
  // messagesAll.forEach(function (message) {
  //   message.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     let date = this.getAttribute("data-date");
  //     window.alert(date);
  //   });
  // });
  
  let messagesContainer = document.querySelector(".messages");
  
  messagesContainer.addEventListener("click", function (event) {
    event.preventDefault();
    let target = event.target;
    if (target.nodeName === "P") {
      let date = target.parentNode.dataset.date;
      window.alert(date);
    }
  });
  
  /**
   * Listen to every Keydown (from the keyboard) in the input and call
   * the function typing()
   */
  
  document.querySelector(".chat").addEventListener("keydown", typing);
  