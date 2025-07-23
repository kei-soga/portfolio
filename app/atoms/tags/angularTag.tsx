export default function AngularTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/angular-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">Angular</span>
        </div>
    );
}
