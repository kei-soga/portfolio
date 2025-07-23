export default function GitLabTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/gitlab-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">GitLab</span>
        </div>
    );
}
