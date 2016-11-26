function njinit(cnum) {
  var njsc = document.getElementsByClassName('njs')[cnum].innerText;
  njsc = njsc.replace('ajax','function loadDoc() {var xhttp = new XMLHttpRequest();xhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) {window.ajaxresp = this.responseText;}};xhttp.open');
  njsc = njsc.replace('$ajax',';xhttp.send();}');
  eval(njsc);
}
