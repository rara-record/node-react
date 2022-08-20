import axios from 'axios';

export const sendRequest = async (data: any) => {
  const response = await axios.post('http://localhost:8080/shopping', data);
  console.log(response);
  console.log(response.data);
};
