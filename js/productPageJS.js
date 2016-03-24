// JavaScript Document

function commentSubmit(){	
var commentTimeStamp=Date();
var commentTimeStamp=commentTimeStamp.toString();
//var date = new Date(d);
//alert(commentTimeStamp);
emailId=document.getElementById("emailID").value;
var checkedValue="null";
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
productname=filename.replace(".php", "");
productname=productname.replace(/%20/g, " ");
elements=document.getElementsByName("stars");
for(i=0;i<elements.length;i++){
	a =elements[i].getAttribute( 'id' );
	if(document.getElementById(a).checked)
		checkedValue=elements[i].getAttribute( 'value' );		
}
var comment=document.getElementById("reviewText").value;
	$.ajax({
		type: "POST",
		url: "insertComment.php",
		data: { emailId: emailId , productname: productname , rating: checkedValue , comment : comment , timestamp : commentTimeStamp },
		dataType:"html",
		success: function (data) {	
			$( "#commentForm" ).remove();
			str='<hr><div class="row"><div class="col-md-12">';
			document.getElementById("productComment").innerHTML="Your comment has been registered!";	
			for(i=0;i<checkedValue;i++){
				str=str+'<span class="glyphicon glyphicon-star"></span>';
				}
			for(j=0;j<5-checkedValue;j++){
				str=str+'<span class="glyphicon glyphicon-star-empty"></span>';
			}
			str=str+emailId+'<span class="pull-right">'+Date()+'</span><p>'+comment+'</p></div></div>';
			document.getElementById("new").innerHTML=str;
		}
	});

	return false;	
}

function onLike(){
	var commentTimeStamp=Date();
	var commentTimeStamp=commentTimeStamp.toString();
	emailId=document.getElementById("emailID").value;
	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	productname=filename.replace(".php", "");
	productname=productname.replace(/%20/g, " ");
	$.ajax({
		type: "POST",
		url: "insertLike.php",
		data: { emailId: emailId , productname: productname , timestamp : commentTimeStamp },
		dataType:"html",
		success: function (data) {	
			$( "#Like" ).remove();
			document.getElementById("Likesection").innerHTML="Liked!";
		}
	});
}