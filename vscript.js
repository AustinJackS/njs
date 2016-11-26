var scs = document.getElementsByTagName('script');
for (i = 0; i < scs.length; i++) {
    if (scs[i].type=="text/vscript") {
    	cde = scs[i].innerText.replace('display','alert')
    }
}
fn = new Function(cde)
fn();
