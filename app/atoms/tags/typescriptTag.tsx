export default function TypescriptTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/typescript-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">Typescript</span>
        </div>
    );
}
