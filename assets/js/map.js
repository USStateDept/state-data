var urlWhole = "http://" + host + "/geoserver/opengeo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=opengeo%3Astate-data_50m&maxfeatures=500&outputformat=json";
			
$.ajax({
	url: urlWhole,
	dataType: 'json',
	success: function (data) {
		// load the geojson to the map with marker styling
		stateDataJSON = new L.geoJson(data, {
			style: styleStateData, 
			onEachFeature: onEachFeature,
			attribution: cmAttr
		}).addTo(map)
	}
});
			
function getColorStateData(d) {
	if (d == 'Yes') {
		return	'#2E9AFE'
	} else if (d == 'No') {
		return	'#FAAC58'
	} else if (d == 'Unsure') {
		return	'#A9F5A9'
	} else {
		return	'#D8D8D8';
	}
}
			
function styleStateData(feature) {
	return {
		weight: 1,
		opacity: 1,
		color: 'white',
		fillColor: getColorStateData(feature.properties.Response)
	};
}
			
var cmAttr = "<a href='mailto:dittemoremb@state.gov'>eDiplomacy Geo|DST</a>";

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var deviceZoom ;
			
if (width < 350) {
	deviceZoom = "1"
} else if (width < 600) {
	deviceZoom = "1"
} else if (width < 1000) {
	deviceZoom = "2"
} else if (width < 2000) {
	deviceZoom = "2"
} else {
	deviceZoom = "3"
}

var southWest = L.latLng(-67,-179.5),
	northEast = L.latLng(80, 179.5),
	bounds = L.latLngBounds(southWest, northEast);

var map = new L.Map('map', {
	center: [20, 10],
	zoom: deviceZoom,
	maxZoom: 6,
	minZoom: deviceZoom,
	//worldCopyJump: true,
	noWrap: false,
	maxBounds: bounds
});

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: cmAttr,
	id: 'examples.map-20v6611k'
}).addTo(map);

function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 2,
		color: '#666',
		dashArray: '',
		fillOpacity: 0.7
	});

	if (!L.Browser.ie && !L.Browser.opera) {
		layer.bringToFront();
	}
}
			
function resetHighlight(e) {
	geoJsonLayer1.resetStyle(e.target);
	//geoJsonLayer2.resetStyle(e.target);
}
			
function zoomToFeature(e) {
	map.fitBounds(e.target.getBounds());
}

var popup = L.popup();

function onEachFeature(feature, layer) {
	layer.on({
	//mouseover: highlightFeature,
	//mouseout: resetHighlight
	//click: zoomToFeature
	});
			
	var popupContent = "";
	if(feature.properties.Country!=null){
				
	popupContent = "<h4>" + feature.properties.Country + "</h4><h5>Stance: " + feature.properties.Response + "</h5><h5>Details: " + feature.properties.Details + "</h5>";
				
	layer.bindPopup(popupContent);
	}
}