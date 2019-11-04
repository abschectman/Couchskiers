export const postRes = res => {
  return $.ajax({
    method: "POST",
    url: "api/reservations",
    data: { reservation: res }
  });
};

export const getRes = id => {
  return $.ajax({
    method: "GET",
    url: `api/reservations/${id}`
  });
};
