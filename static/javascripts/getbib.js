//isbn pattern in content, from more likely to less likely
//we always treat second group as ISBN number
var contentRE=[/\b[ai]s[ibs]n.{0,5}[^-\d](\b)((978|979)?-?[-\d]{9,11}-?[\dX])[^-\d]/i,/\b()((978|979)?-?[-\d]{9,11}-?[\dX])\b/i];

//isbn pattern in URL, from more likely to less likely
var urlRE=[/([\/-]|\b[ai]s[ibs]n=)((978|979)?-?[-\d]{9,11}-?[\dX])[^-\d]/i,/([\/-]|\bsku=)((978|979)?-?[-\d]{9,11}-?[\dX])[^-\d]/i,/\b(ISBN)((978|979)?-?[-\d]{9,11}-?[\dX])[^-\d]/i,/\b()((978|979)?-?[-\d]{9,11}-?[\dX])[^-\d]/i];

var idnum='';
var sel='';

// Look for a selection containing an ISBN regular expression
 if(document.selection) {
  // IE
  if (document.selection.type == 'None') {
    // No selection, so grab the entire document text
    sel = document.body.createTextRange().text;
  } else {
    // Grab only the selected text
    sel = document.selection.createRange().text;
  }
}
else{
  // NN 4
  sel = window.getSelection();
 //no selection, grab the entire document text
  if (sel==null || sel==''){	
        sel=document.body.textContent;
  }
}

for (var myre in contentRE){
    var result=contentRE[myre].exec(sel);
    if (result!=null){
       idnum=result[2];
       break;       
    }
}


if (idnum==''){
   for (var myre in urlRE){
       var result=location.href.match(urlRE[myre]);
       if (result!=null){
       	  idnum=result[2];
       	  break;       
       }
   }
}




s='http://xisbn.worldcat.org:80/liblook2/resolve.htm?res_id='
  + escape(document.res_id)
  + '&rft.isbn='
  + idnum
  +"&url_ver=Z39.88-2004&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook";

if (document.siteparams){
	s=s+'&siteparams='
	+escape(document.siteparams);
}

if (document.opactype){
	s=s+'&opactype='
	+escape(document.opactype);
}


if (document.popup) {
  void(window.open(s));
} else {
	if (!window.open(s))
		window.location.replace(s);

}

