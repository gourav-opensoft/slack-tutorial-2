"use client";

import { Loader2, TriangleAlert } from "lucide-react";

import { useGetChannel } from "@/features/channels/api/use-get-channel";

import { useChannelId } from "@/hooks/use-channel-id";

const ChannelIdPage = () => {
  const channelId = useChannelId(); 

  const { data: channel, isLoading: channelLoading} = useGetChannel({ id: channelId });

  if (channelLoading) {
    return (
      <div className="h-full flex-1 flex items-center justify-center">
        <Loader2 className="animate-spin size-5 text-muted-foreground" />
      </div>
    );
  }

  if (!channel) {
    return (
      <div className="h-full flex-1 flex flex-col gap-y-2 items-center justify-center">
        <TriangleAlert className="size-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          Channel not found
        </span>
      </div>
    );
  }

  return (
    <div>
      Channel Id Page
    </div>
  );
};

export default ChannelIdPage;