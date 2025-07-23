export default function HTMLTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/html-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">HTML</span>
        </div>
    );
}
