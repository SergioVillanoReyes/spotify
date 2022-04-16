
import ConstructorAPIAsync from './Constructor';
import ErrorHandler from './ErrorsHandler';

async function GetGenres() {
  const API = await ConstructorAPIAsync();
  try {
    return await API.get("browse/categories/");
  } catch (err) {
    ErrorHandler(err);
  }
}


export {
  GetGenres, 
}