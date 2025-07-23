export default function CSSTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/css-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">CSS</span>
        </div>
    );
}
