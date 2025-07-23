export default function UiPathTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/uipath-logo.svg"
                alt="Logo"
                className="inline h-6 align-middle"
            />
        </div>
    );
}
