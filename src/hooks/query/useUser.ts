import { useQuery } from "react-query";
import axios from "../../config/axios-config";

export const useUser = () => {
  const getUser = async () => {
    const apiRoute = "/user";
    const { data } = await axios.get(apiRoute);
    console.log(data);
    return data.data;
  };
  const { data, isLoading, error } = useQuery("user", getUser, { retry: 1 });
  console.log(error);
  return { data, loading: isLoading };
};
