
import ConstructorAPIAsync from './Constructor';
import ErrorHandler from './ErrorsHandler';

async function GetListArtistsRelated(id) {
  const API = await ConstructorAPIAsync();
  try {
    // return await API.get(`artists/${id}/related-artists`);
    return await API.get(`artists/0TnOYISbd1XYRBk9myaseg/related-artists`);
  } catch (err) {
    ErrorHandler(err);
  }
}

export {
  GetListArtistsRelated, 
}