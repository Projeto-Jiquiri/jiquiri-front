"use client";

import { useState } from "react";
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'
import Clarity from "@microsoft/clarity";


const projectId = "rhix9be4o5";
Clarity.init(projectId);

export default function QueryProvider({ children }: { children: React.ReactNode }) {

    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}