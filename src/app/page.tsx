"use client";

import { UserButton } from "@/features/auth/components/user-button";

import { useMemo } from "react";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useConvexAuth } from "convex/react";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";

export default function Home() {
  const [open, setOpen ] = useCreateWorkspaceModal();

  const { data, isLoading: isLoadingWorkspaces } = useGetWorkspaces();

  const router = useRouter();
  const { isAuthenticated, isLoading } = useConvexAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login-page");
    }
  }, [isLoading, isAuthenticated, router]);

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      console.log("Redirect to workspace");
    } else if (!open){
      setOpen(true);
    }
  }, [workspaceId, isLoading, open, setOpen ]);

  if (isLoading || isLoadingWorkspaces) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserButton />
    </div>
  );
}
