export default function AsanaTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/asana-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">Asana</span>
        </div>
    );
}
