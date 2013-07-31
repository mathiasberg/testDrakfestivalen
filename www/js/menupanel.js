
$(document).one('panelcreate', '#menuDiv', function () {
	console.log('######## panelcreate #####');
    $('div.ui-panel-inner').append('<div class="panel-content" />');
    $('div.panel-content').append('<a data-role="button" href="#" id="add" data-theme="e" data-icon="grid">Add Contents</a> <a data-role="button" href="#" class="toggle-panel" data-theme="a" data-icon="delete">Close</a>').trigger('create');
});
/*
$(document).on( "pagebeforecreate", function( event ) {
    var listview = '<ul data-role="listview" data-inset="true"><li><a href="#">Acura</a></li><li><a href="#">Audi</a></li></ul>';
    $('div.panel-content #add').after(listview);
    $('[data-role=page]').trigger('pagecreate');
});

	
function writeMenu (){
	console.log('WriteMenu');
	var ulEl = $('<ul id="menulist" data-role="listview" data-icon="false">'); 
	var liElStart = $('<li><a href="index.html" >Start</a></li>');
	var liElProgram = $('<li><a href="program.html" >Program</a></li>');
	var liElStartlista = $('<li><a href="drakkampen_startlista.html" >Startlista</a></li>');
	var liElResultat = $('<li><a href="drakkampen_resultat.html" >Resultat</a></li>');
	var liElLaglista = $('<li><a href="laglista.html" >Lag</a></li>');
	var liElArtistlista = $('<li><a href="artistlista.html" >Artister</a></li>');
	var liElInfo = $('<li><a href="info.html" >Information</a></li>');
	
	ulEl.append(liElStart);
	ulEl.append(liElProgram);
	ulEl.append(liElStartlista);
	ulEl.append(liElResultat);
	ulEl.append(liElLaglista);
	ulEl.append(liElArtistlista);
	ulEl.append(liElInfo);
	//$('#menulist').listview('refresh');
	$('#menuDiv').append(ulEl);
	
}
*/
