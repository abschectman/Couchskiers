export const getLocation = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/locations/${id}`
  })}

  export const getLocationsWithString = (string) => {
     return $.ajax({
       method: "GET",
       url: `api/locations`,
       data: {string}
     });
  }