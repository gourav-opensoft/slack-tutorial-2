"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useConvexAuth } from "convex/react";

import { UserButton } from "@/features/auth/components/user-button";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useCreateWorkspaceModal();

  const { data, isLoading: isLoadingWorkspaces } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  const { isAuthenticated, isLoading: isLoadingAuth } = useConvexAuth();

  useEffect(() => {
    if (isLoadingAuth || isLoadingWorkspaces) return;

    if (!isAuthenticated) {
      router.replace("/login-page");
    } else if (workspaceId) {
      router.replace(`/workspace/${workspaceId}`);
    } else if (!open) {
      setOpen(true);
    }
  }, [workspaceId, isLoadingWorkspaces, open, setOpen, router, isAuthenticated, isLoadingAuth]);

  return (
    <div className="h-full">
      <UserButton />
    </div>
  );
}
