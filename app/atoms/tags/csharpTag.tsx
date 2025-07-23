export default function CSharpTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/csharp-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">C#.NET</span>
        </div>
    );
}
