export function startSearch(searchValue, radioValue, page) {
  return (dispatch) => {
    dispatch(fetchRequest());

    return fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=97b84eae92cb8df4d0ea1c834e4fcec0&tags=${searchValue}&per_page=${radioValue}&page=${page}&format=json&nojsoncallback=1`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        dispatch(fetchSuccess(data));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(fetchFailure());
      });
  };
}

function fetchRequest() {
  return {
    type: "START_SEARCH",
    isFetching: true,
  };
}
function fetchSuccess(data) {
  return {
    type: "GET_PHOTOS",
    payload: data,
    isFetching: false,
  };
}
function fetchFailure() {
  return {
    type: "NOT_GET_PHOTOS",
    isFetching: false,
  };
}
