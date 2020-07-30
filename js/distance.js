/// ---------------------------------------------------------
/// Option 1  ( Haversine )
/// ---------------------------------------------------------
function rad(x) {
    return x * Math.PI / 180;
}
//
function getDistanceHaversine (p1, p2) {
    //
    const R = 6378137; // Earth’s mean radius in meter
    
    // Lat Lng
    var dLat  = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);
    
    // Calcl
    var a = Math.sin(dLat / 2)     * Math.sin(dLat / 2)     +
            Math.cos(rad(p1.lat))  * Math.cos(rad(p2.lat))  *
            Math.sin(dLong / 2)    * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
}
/// ---------------------------------------------------------

/// ---------------------------------------------------------
/// Option 2 ( Google Geometry API )
/// ---------------------------------------------------------
function getDistanceGoogle(p1, p2){    
    return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(p1.lat, p1.lng), new google.maps.LatLng(p2.lat, p2.lng));  
}         
/// ---------------------------------------------------------