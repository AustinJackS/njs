var scs = document.getElementsByTagName('script');
for (i = 0; i < scs.length; i++) {
    if (scs[i].type=="text/xscript") {
        cde = scs[i].innerText;
    	cde = cde.replace(/display/g,'alert');
        cde = cde.innerText.replace(/alrt/g,'alert');
        fn = new Function(cde);
        fn();
    }
}
