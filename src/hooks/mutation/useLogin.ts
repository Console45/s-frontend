// import { setAccessToken } from "./../../config/accessToken";
import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import axios from "../../config/axios-config";
import { setUser } from "../../config/user";
import { useUser } from "../query/useUser";

export interface LoginDetails {
  studentId: string;
  password: string;
}

/**
 * Mutation hook for logging in users
 */
export const useLogin = () => {
  const history = useHistory();
  const apiRoute = "/auth/login";
  const queryClient = useQueryClient();
  //login request handler
  const loginUser = async (userDetails: LoginDetails) => {
    const { data } = await axios.post(apiRoute, userDetails);
    return data;
  };

  const { mutate, isLoading, error } = useMutation(loginUser, {
    onSuccess: async ({ data }) => {
      // setAccessToken(data.accessToken);
      console.log(data);
      const { data: userData } = useUser();
      console.log(userData);
      setUser(data.user);
      queryClient.invalidateQueries("user");
      history.push("/");
    },
    retry: 1,
  });

  return { mutate, loading: isLoading, error };
};
