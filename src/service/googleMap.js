import GoogleMapsLoader from 'google-maps';

import { googleAPIKey } from '../config/apiConstant';
/**
 * @description setting google map
 */
GoogleMapsLoader.KEY = googleAPIKey;
GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

let google;
const loadMap = () =>
    new Promise((resolve) => {
        if (google) {
            resolve(google);
        } else {
            GoogleMapsLoader.load(api => {
                google = api;
                resolve(api);
            });
        }
    });

const maps = async () => {
    const google = await loadMap();
    return google.maps;
};

export default maps ;
