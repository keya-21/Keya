var wms_layers = [];

var format_LandUse_0 = new ol.format.GeoJSON();
var features_LandUse_0 = format_LandUse_0.readFeatures(json_LandUse_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandUse_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandUse_0.addFeatures(features_LandUse_0);
var lyr_LandUse_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandUse_0, 
                style: style_LandUse_0,
                popuplayertitle: "LandUse",
                interactive: true,
    title: 'LandUse<br />\
    <img src="styles/legend/LandUse_0_0.png" /> Residential<br />\
    <img src="styles/legend/LandUse_0_1.png" /> <br />\
    <img src="styles/legend/LandUse_0_2.png" /> <br />\
    <img src="styles/legend/LandUse_0_3.png" /> Slum Cluster<br />\
    <img src="styles/legend/LandUse_0_4.png" /> Open Space<br />\
    <img src="styles/legend/LandUse_0_5.png" /> Commercial<br />\
    <img src="styles/legend/LandUse_0_6.png" /> Public Utility and Facility<br />\
    <img src="styles/legend/LandUse_0_7.png" /> Municipal Office<br />\
    <img src="styles/legend/LandUse_0_8.png" /> Under Construction<br />\
    <img src="styles/legend/LandUse_0_9.png" /> Social Amenities<br />\
    <img src="styles/legend/LandUse_0_10.png" /> Educational Amenities<br />\
    <img src="styles/legend/LandUse_0_11.png" /> Government Office<br />\
    <img src="styles/legend/LandUse_0_12.png" /> Law & Order<br />\
    <img src="styles/legend/LandUse_0_13.png" /> Other Offices<br />\
    <img src="styles/legend/LandUse_0_14.png" /> Vacant Land<br />\
    <img src="styles/legend/LandUse_0_15.png" /> Medical Amenities<br />'
        });
var group_VectorLayers = new ol.layer.Group({
                                layers: [lyr_LandUse_0,],
                                fold: "open",
                                title: "Vector Layers"});

lyr_LandUse_0.setVisible(true);
var layersList = [group_VectorLayers];
lyr_LandUse_0.set('fieldAliases', {'id': 'id', 'CTS Number': 'CTS Number', 'Gaothan ?': 'Gaothan ?', 'LU-DP\'67': 'LU-DP\'67', 'LU-DP\'81': 'LU-DP\'81', 'LU-ELU\'14': 'LU-ELU\'14', 'LU-DP\'1634': 'LU-DP\'1634', 'LU-OnSite': 'LU-OnSite', });
lyr_LandUse_0.set('fieldImages', {'id': 'TextEdit', 'CTS Number': 'TextEdit', 'Gaothan ?': 'TextEdit', 'LU-DP\'67': 'TextEdit', 'LU-DP\'81': 'TextEdit', 'LU-ELU\'14': 'TextEdit', 'LU-DP\'1634': 'TextEdit', 'LU-OnSite': 'TextEdit', });
lyr_LandUse_0.set('fieldLabels', {'id': 'no label', 'CTS Number': 'no label', 'Gaothan ?': 'no label', 'LU-DP\'67': 'no label', 'LU-DP\'81': 'no label', 'LU-ELU\'14': 'no label', 'LU-DP\'1634': 'no label', 'LU-OnSite': 'no label', });
lyr_LandUse_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});