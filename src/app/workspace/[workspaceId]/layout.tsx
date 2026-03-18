"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCurrentUser } from "@/features/auth/api/use-current-user";

import { Toolbar } from "./toolbar";
import { Sidebar } from "./sidebar";

interface WorkspaceIdLayoutProps {
    children: React.ReactNode;
};

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
    const router = useRouter();
    const { data: currentUser, isLoading } = useCurrentUser();

    useEffect(() => {
        if (!isLoading && !currentUser) {
            router.replace("/login-page");
        }
    }, [currentUser, isLoading, router]);

    if (isLoading) {
        return null; // Or a loader
    }

    return (
        <div className="h-full">
            <Toolbar />
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
            {children}
            </div>
        </div>
    );
};

export default WorkspaceIdLayout;