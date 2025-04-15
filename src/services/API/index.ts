import { useQuery } from "@tanstack/react-query";
import { getAllRecords } from "./api";

export function useAllRecords() {
    const query = useQuery({
        queryKey: ["allRecords"],
        queryFn: getAllRecords,
    })

    return {
        ...query,
        data: query.data?.data,
    };
}