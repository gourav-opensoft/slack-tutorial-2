"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle, 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { useCreateWorkspace } from "../api/use-create-workspace";

export const CreateWorkspaceModal = () => {
    const [open, setOpen ] = useCreateWorkspaceModal();

    const { mutate, isPending } = useCreateWorkspace();

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        try {

        const data = await mutate({
            name: "Workspace 1",
        }, {
            onSuccess(data) {

            },
            onError(error) {

            },
        })
    } catch (error) {

    }
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a workspace</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                    <Input
                        value=""
                        disabled={false}
                        required
                        autoFocus
                        minLength={3}
                        placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
                    />
                    <div className="flex justify-end">
                        <Button disabled={false}>
                            Create
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};