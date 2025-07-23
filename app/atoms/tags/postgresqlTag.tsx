export default function PostgreSQLTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/postgresql-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">PostgreSQL</span>
        </div>
    );
}
