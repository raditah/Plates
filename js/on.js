
  function on() {
    document.getElementById("vehicle_save").style.display = "block";
  }
on();

function rellenar() {
  chrome.storage.sync.get("data", function(items) {
    if (!chrome.runtime.error) {
      var datilla = items.data;
      document.getElementsByClassName('required')[0].value = datilla;
      ;
    
      console.log(datilla)
    }
  });
}
