export default function PythonTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/python-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">Python</span>
        </div>
    );
}
