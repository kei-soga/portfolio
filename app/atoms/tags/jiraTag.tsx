export default function JiraTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/jira-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">Jira</span>
        </div>
    );
}
