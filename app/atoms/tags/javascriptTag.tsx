export default function JavascriptTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/javascript-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">JavaScript</span>
        </div>
    );
}
