export default function BacklogTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/backlog-logo.svg"
                alt="Logo"
                className="inline h-5 align-middle"
            />
        </div>
    );
}
