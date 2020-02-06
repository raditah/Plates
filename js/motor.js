document.getElementById("loader").style.display = 'none';   



const request = function () {var myHeaders = new Headers();
myHeaders.append("Accept", "*/*");
myHeaders.append("Cache-Control", "no-cache");
myHeaders.append("Host", "sheets.googleapis.com");
myHeaders.append("Accept-Encoding", "gzip, deflate, br");
myHeaders.append("Connection", "keep-alive");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://sheets.googleapis.com/v4/spreadsheets/1Q58WuQhKpUyLxvgrfvsK2eRnYtvUmK7DQqivhesRgb4/values/Placa!c5:c30000?key=AIzaSyB-zG4e4VM0ZpfsntR0ckIUvPJqVfeJM-0", requestOptions)
.then(response => {
  return response.json()
})
.then(data => {
  var results = [];
  var plate = document.getElementById('placa').value
  var searchVal = plate;
  for (var i=0 ; i < data.values.length ; i++)
  {
      if (data.values[i] == searchVal) {
          results.push(data.values[i]);
      }
  }  

if (results.length == 0 ){
  document.getElementById("loader").style.display = 'none';   
  document.getElementById("fraude").style.display = 'none';   
  document.getElementById("nofraude").style.display = 'block';   

document.getElementById("nofraude").innerHTML = "Placa no encontrada en drive";
chrome.extension.getBackgroundPage().rad();
}

  else {
    document.getElementById("loader").style.display = 'none';   
    document.getElementById("nofraude").style.display = 'none';   
    document.getElementById("fraude").style.display = 'block';   
    document.getElementById("fraude").innerHTML = "Placa registrada como fraude"
    chrome.extension.getBackgroundPage().rad2();
}
    
})
}

  var gou = document.getElementById('gooo')

  gou.addEventListener("click", function (event) {
    request();
    rellenar();
    document.getElementById("loader").style.display = 'block';   
  })


 
  
  function rellenar() {
  
      var d = document.getElementById("placa").value;
      chrome.storage.sync.set({ "data" : d }, function() {
        if (chrome.runtime.error) {
          console.log("Runtime error.");
        }
      });
  }
