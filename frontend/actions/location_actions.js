import {getLocation, getLocationsWithString} from "../util/location_api_util"
export const RECEIVE_CURRENT_LOCATION = "RECEIVE_CURRENT_LOCATION"
export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS"

const receiveCurrentLocation = location => {
  return {
    type: RECEIVE_CURRENT_LOCATION,
    currentLocation: location.locations,
    users: location.users
  };
};

const receiveLocations = locations => {
  return {
    type: RECEIVE_LOCATIONS,
    locations
  };
};

export const findLocation = id => dispatch => {
  return getLocation(id).then(
    location => {
      dispatch(receiveCurrentLocation(location));
    }
  );
};

export const findLocations = string => dispatch => {
  getLocationsWithString(string).then(locationArr => {
    dispatch(receiveLocations(locationArr))
  })
}

export const clearLocations = () => dispatch => {
  dispatch(receiveLocations([]))
}

