import API from "../configs/api";

class DogService {
  listFacts = async () => {
    const { data } = await API.get('dogs/facts');
    return data;
  };

  getImage = async () => {
    const { data } = await API.get('dogs/image');
    return data;
  };
}

export default new DogService();
