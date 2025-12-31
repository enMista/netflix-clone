import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useCurrentuser = () => {
    const {data, error, isLoading, mutate} = useSWR("/api/currentuser", fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useCurrentuser;