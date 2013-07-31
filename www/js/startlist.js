var serviceURLStart = "http://91.123.198.48:8080/testdf/df/start";
//var startArr;

//id , namn , beskrivning
/*var resultObj1 =  {"id":"1","heat":"1","boatnr":"1", "teamName":"Capgemini","start":"01:20:43","heattypid":"UTMANINGEN"};
var resultObj2 =  {"id":"2","heat":"1","boatnr":"2", "teamName":"Sogeti","start":"01:30:05","heattypid":"UTMANINGEN"};
var resultObj3 =  {"id":"3","heat":"1","boatnr":"3", "teamName":"Softtronic","start":"01:50:20","heattypid":"UTMANINGEN"};
var resultObj4 =  {"id":"4","heat":"2","boatnr":"4", "teamName":"Lag a","start":"01:20:43","heattypid":"UTMANINGEN"};
var resultObj5 =  {"id":"5","heat":"2","boatnr":"5", "teamName":"Lag b","start":"01:10:43","heattypid":"UTMANINGEN"};
var resultObj6 =  {"id":"6","heat":"2","boatnr":"6", "teamName":"Lag c","start":"01:30:43","heattypid":"UTMANINGEN"};

startArr = [resultObj1, resultObj2, resultObj3, resultObj4, resultObj5, resultObj6];
*/
var pageid;
var elementid;
function ajax_call_createStartListview(pageid, elementid){
	console.log('ajax_call_createStartListview(pageid, elementid)');
	this.pageid = pageid;
	this.elementid = elementid
	ajax_call(serviceURLStart, true, createStartListview);
}

function ajax_call_createStartListview(pageid, elementid, urlparams){
	console.log('ajax_call_createStartListview(pageid, elementid, urlparams)');
	this.pageid = pageid;
	this.elementid = elementid
	ajax_call(serviceURLStart + urlparams, true, createStartListview);
}


function createStartListview(data){
	console.log('createStartListview');
	var prevHeat = "";
	$(elementid).html('<h5>Startlista</h5>');
	var $UL = $('<ul data-role="listview" data-inset="true"></ul>');
	
	$.each(data,
			function(index, rowdata) {
				var heat = rowdata.heat;
				console.log(rowdata.id);
				var heatName = "";
				if(heat != prevHeat){
					heatName = "Heat " + heat;
					var $LIDivider = $('<li data-role="list-divider">' +heatName+  '</li>');
					$UL.append($LIDivider);

				}
					console.log('grid data');
					var $GRIDA = $('<div class="ui-grid-b" ></div>');
					var $BLOCKA = $('<div class="ui-block-a"></div>');
					var $BLOCKABAR = $('<div class="ui-bar"></div>');

					$GRIDA.append($BLOCKA);
					$BLOCKA.append($BLOCKABAR);
					$BLOCKABAR.append(rowdata.teamName);

					var $BLOCKB = $('<div class="ui-block-b"></div>');
					var $BLOCKBBAR = $('<div class="ui-bar"></div>');

					$GRIDA.append($BLOCKB);
					$BLOCKB.append($BLOCKBBAR);
					$BLOCKBBAR.append(rowdata.boatnr);
					
					var $BLOCKC = $('<div class="ui-block-c"></div>');
					var $BLOCKCBAR = $('<div class="ui-bar"></div>');

					$GRIDA.append($BLOCKC);
					$BLOCKC.append($BLOCKCBAR);
					$BLOCKCBAR.append(rowdata.start);
					
					
					$UL.append($GRIDA);
				
				prevHeat = heat;

			});
	$(elementid).append($UL);
	$.mobile.loading('hide');
	$( pageid).trigger('pagecreate');
	
}