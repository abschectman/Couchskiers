export const postRef = ref => {

  return $.ajax({
    method: "POST",
    url: "api/references",
    data: { reference: ref }
  });
};

export const getRef = userId => {
  return $.ajax({
    method: "GET",
    url: "api/references"
  })
}
