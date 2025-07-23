export default function DockerTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/docker-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">Docker</span>
        </div>
    );
}
