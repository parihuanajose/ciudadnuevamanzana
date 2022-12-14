var map = L.map('map', {
center: [-17.98657346967841,  -70.23614053508682],
zoom: 19,
minZoom: 10,
maxZoom: 18,
maxBounds: [[-18.002961,-70.268537], [-17.961667,-70.216528]]
});
var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var MZ_133 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:133", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_133.addTo(map);

var MZ_134 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:MZ_134", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_134.addTo(map);

var MZ_135 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:MZ_135", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_135.addTo(map);

var MZ_136 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuanar:MZ_136", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_136.addTo(map);

var MZ_137 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:MZ_137", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_137.addTo(map);

var MZ_138 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:138", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_138.addTo(map);

var MZ_139 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuanao:139", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_139.addTo(map);

var MZ_140 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:140", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_140.addTo(map);

var MZ_141 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:141", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_141.addTo(map);

var MZ_142 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:142b", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_142.addTo(map);

var MZ_143 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:Mz_143", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_143.addTo(map);

var MZ_144 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:Mz_144", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_144.addTo(map);

var MZ_145 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:145", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_145.addTo(map);

var MZ_146 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:146", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_146.addTo(map);

var MZ_147 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuanao:147000", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_147.addTo(map);

var MZ_148 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:148", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_148.addTo(map);

var MZ_149 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:149", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_149.addTo(map);

var MZ_150 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:150", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_150.addTo(map);

var MZ_151 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:151", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_151.addTo(map);

var MZ_152 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:152", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_152.addTo(map);

var MZ_153 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:153", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_153.addTo(map);

var MZ_154 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:Mz154", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_154.addTo(map);

var MZ_155 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:Mz155", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_155.addTo(map);

var MZ_156 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:MZ156", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_156.addTo(map);

var MZ_157 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:MZ157", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_157.addTo(map);

var MZ_158 = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuana:MZ_158", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_158.addTo(map);

var MZ_154b = L.tileLayer.wms("http://localhost:8080/geoserver/ciudadnueva_parihuana/wms", {
layers: "ciudadnueva_parihuanao:area_154", //gisweb:ciudad_nueva
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
MZ_154b.addTo(map);

var baseMaps = {
"OSM": basemapOSM,
};
var overlayMaps = {
"MZ_133": MZ_133,
"MZ_134": MZ_134,
"MZ_135": MZ_135,
"MZ_136": MZ_136,
"MZ_137": MZ_137,
"MZ_138": MZ_138,
"MZ_139": MZ_139,
"MZ_140": MZ_140,
"MZ_141": MZ_141,
"MZ_142": MZ_142,
"MZ_143": MZ_143,
"MZ_144": MZ_144,
"MZ_145": MZ_145,
"MZ_146": MZ_146,
"MZ_147": MZ_147,
"MZ_148": MZ_148,
"MZ_149": MZ_149,
"MZ_150": MZ_150,
"MZ_151": MZ_151,
"MZ_152": MZ_152,
"MZ_153": MZ_153,
"MZ_154": MZ_154,
"MZ_155": MZ_155,
"MZ_156": MZ_156,
"MZ_157": MZ_157,
"MZ_158": MZ_158,
"MZ_154b": MZ_154b
};
L.control.layers(baseMaps, overlayMaps,{
position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
collapsed: false // true
}).addTo(map);