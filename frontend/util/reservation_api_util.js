export const postRes = res => {
  return $.ajax({
    method: "POST",
    url: "api/reservations",
    data: { reservation: res }
  });
};
