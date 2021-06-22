jQuery(document).ready(function () {
  //For testing purposes
  console.log("DOM Loaded");

  var typeWriting = new TypeWriting(
    {
      targetElement: document.getElementsByClassName("terminal")[0],
      inputString: "> Milton Ginebra",
      typing_interval: 130, // Interval between each character
      blink_interval: "1s", // Interval of the cursor blinks
      cursor_color: "#00fd55", // Color of the cursor
    },
    function () {
      console.log("END");
    }
  );
});
