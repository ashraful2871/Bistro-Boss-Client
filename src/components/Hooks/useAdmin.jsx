import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/users/admin/${user?.email}`)
        .then((res) => {
          setIsAdmin(res.data.admin);
          setIsLoading(false);
        })
        .catch(() => {
          setIsAdmin(false);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [user, axiosSecure]);

  return [isAdmin, isLoading];
};

export default useAdmin;
