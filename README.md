# xscript
new javascript-based compiler for browsers using &lt;div class="njs>//code&lt;/div>

<h1>Unlike most scripts, you instert this one after the &#60;/body&#62; tag. Like this:<h1>
<h3>&#60;body&#62;&#60;/body&#62;&lt;end&gt;
&lt;script src=&quot;https://austinjacks.github.io/njs/xscript.js&quot;&gt;&lt;/script&gt;
&lt;/end&gt;</h3>
<br>
<br>
<h1>Using ajax with xscript:</h1>
<br>
<h2>
&lt;html&gt;
&lt;body&gt;
&lt;script&gt;
function useAjax(resp) {
	document.write(resp);
}
&lt;/script&gt;
&lt;script type=&quot;text/xscript&quot;&gt;
ajx(&quot;GET&quot;,&quot;ajax_info.txt&quot;,true)-aj;
setTimeout(function(){ useAjax(window.ajaxresp); }, 50);
&lt;/script&gt;
&lt;/body&gt;
&lt;end&gt;
&lt;script src=&quot;https://austinjacks.github.io/njs/xscript.js&quot;&gt;&lt;/script&gt;
&lt;/end&gt;
&lt;/html&gt;
<h2>
