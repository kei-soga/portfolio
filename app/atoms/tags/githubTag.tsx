export default function GitHubTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/github-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">GitHub</span>
        </div>
    );
}
