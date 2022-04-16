import ConstructorAPIAsync from './Constructor';
import ErrorHandler from './ErrorsHandler';

async function GetSearch(search) {
  const params = {
    q: search,
  }
  const API = await ConstructorAPIAsync();
  try {
    return await API.get(`search?type=album&include_external=audio`, { params });
  } catch (err) {
    ErrorHandler(err);
  }
}

async function GetSearchArtists(search) {
  const params = {
    q: search,
  }
  const API = await ConstructorAPIAsync();
  try {
    return await API.get(`search?type=srtist&include_external=audio`, { params });
  } catch (err) {
    ErrorHandler(err);
  }
}

export {
  GetSearchArtists,
  GetSearch, 
}