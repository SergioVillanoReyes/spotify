
import ConstructorAPIAsync from './Constructor';
import ErrorHandler from './ErrorsHandler';

async function GetNewReleases() {

  const API = await ConstructorAPIAsync();
  try {
    return await API.get("browse/new-releases/");
  } catch (err) {
    ErrorHandler(err);
  }
}

async function GetAlbum(id) {

  const API = await ConstructorAPIAsync();
  try {
    return await API.get(`albums/${id}`);
  } catch (err) {
    ErrorHandler(err);
  }
}

export {
  GetAlbum,
  GetNewReleases, 
}