interface WorkspaceIdLayoutProps {
    children: React.ReactNode;
};

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
    return (
        <div className="h-full bg-red-500">
            {children}
        </div>
    );
}

export default WorkspaceIdLayout;