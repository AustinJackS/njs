function njinit() {
  var nscode = document.getElementsByClassName('nscript')[0].innerHTML
  nscode = nscode.replace('ajax','function loadDoc() {var xhttp = new XMLHttpRequest();xhttp.onreadystatechange = function() {if (this.readyState == 4 && this.status == 200) {window.ajaxresp = this.responseText;}};xhttp.open');
  nscode = nscode.replace('$ajax',';xhttp.send();}');
  document.getElementsByClassName('nscript')[0].innerHTML = nscode;
  eval(nscode);
}
