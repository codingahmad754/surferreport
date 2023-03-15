const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

module.exports = async (loc) => {
    const geoData = await geocoder.forwardGeocode({
        query: loc,
        limit: 1
    }).send()
    return geoData.body.features[0].center
}

