var scs = document.getElementsByTagName('script');
for (i = 0; i < scs.length; i++) {
    if (scs[i].type=="text/xscript") {
        cde = scs[i].innerText;
    	cde = cde.replace(/display/g,'alert');
        cde = cde.replace(/alrt/g,'alert');
        cde = cde.replace(/ajx/g,'var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = function() { if (this.readyState == 4 && this.status == 200) { window.ajaxresp = this.responseText; } }; xhttp.open');
        cde = cde.replace(/-aj/g,'; xhttp.send()');
        cde= cde.replace(/byId/g,'document.getElementById');
        cde = cde.replace(/byClass/g,'document.getElementsByClassName');
        cde = cde.replace(/byTag/g,'document.getElementsByTagName');
        cde = cde.replace(/eventL/g,'addEventListener');
        cde = cde.replace(/createE/g,'document.createElement');
        cde = cde.replace(/createTN/g, 'document.createTextNode');
        cde = cde.replace(/appendC/g, 'appendChild');
        fn = new Function(cde);
        fn();
    }
}
