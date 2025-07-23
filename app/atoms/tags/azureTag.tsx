export default function AzureTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/azure-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">Azure</span>
        </div>
    );
}
