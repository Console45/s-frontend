import { useQuery } from "react-query";
import axios from "../../config/axios-config";

export const useBusinessData = () => {
  const getBusinessData = async () => {
    const apiRoute = "/business/data";
    const { data } = await axios.get(apiRoute);
    return data.data;
  };
  const { data, isLoading, isSuccess, isError } = useQuery(
    "business-data",
    getBusinessData,
    { retry: 1 }
  );
  return { data, loading: isLoading, success: isSuccess, isError };
};
