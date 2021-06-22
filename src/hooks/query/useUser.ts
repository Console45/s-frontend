import { useQuery } from "react-query";
import axios from "../../config/axios-config";

export const useUser = () => {
  const getUser = async () => {
    const apiRoute = "/user/me";
    const { data } = await axios.get(apiRoute);
    return data.data;
  };
  const { data, isLoading } = useQuery("user", getUser, { retry: 1 });
  return { data, loading: isLoading };
};
