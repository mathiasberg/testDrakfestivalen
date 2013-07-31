//Ajax call. populate program list
function ajax_call(url, showloading, callback) {
	console.log('ajaxCall - start');
	console.log('ajaxCall - url ' + url);
	if(showloading){
		$.mobile.loading('show');
	}
	
	$.getJSON(url )
	.done(function( data ) {
	  console.log( "ajaxCall - done! " );
	  callback(data);
	})
	.fail(function( jqxhr, textStatus, error ) {
		var err = textStatus + ', ' + error;
		console.log( "ajaxCall - Request Failed: " + err);
		alert("Ooops, detta var ju onšdigt nšdigt...\n " + err);
	})
	.always(function() { 
		console.log( "ajaxCall - complete" ); 
		if(showloading){
			$.mobile.loading('hide');
		}
	});
}