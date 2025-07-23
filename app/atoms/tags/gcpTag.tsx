export default function GCPTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/gcp-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">GCP</span>
        </div>
    );
}
