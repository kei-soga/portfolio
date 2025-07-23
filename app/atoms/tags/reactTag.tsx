export default function ReactTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/react-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">React</span>
        </div>
    );
}
