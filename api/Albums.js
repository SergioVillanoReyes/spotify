import Constructor from "./Constructor";

const API = Constructor();

const apiGetRecentlyPlayed = async () => {
  try {
    return await API.get("/me/player/recently-played");
  } catch (error) {
    console.log("error", error);
  }
};

const apiGetArtist = async (id) => {
  try {
    return await API.get(`/artists/${id}`);
  } catch (error) {
    console.log("error", error);
  }
};

const apiUserSavedAlbums = async (id) => {
  try {
    return await API.get("/me/albums" );
  } catch (error) {
    console.log("error", error);
  }
};

const apiRelatedArtists = async (id) => {
  try {
    return await API.get(`artists/${id}/related-artists`);
  } catch (error) {
    console.log("error", error);
  }
};

export { apiGetArtist, apiUserSavedAlbums, apiRelatedArtists, apiGetRecentlyPlayed };