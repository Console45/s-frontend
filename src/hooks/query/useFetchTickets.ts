import { useQuery } from "react-query";
import axios from "../../config/axios-config";

export const useMyTickets = () => {
  const getMyTickets = async () => {
    const apiRoute = "/users/me/tickets";
    const { data } = await axios.get(apiRoute);
    return data.data;
  };
  const { data, isLoading, isSuccess, isError } = useQuery(
    "my-tickets",
    getMyTickets,
    { retry: 1 }
  );
  return { data, loading: isLoading, success: isSuccess, isError };
};
