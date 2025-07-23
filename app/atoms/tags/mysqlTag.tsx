export default function MySQLTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/mysql-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">MySQL</span>
        </div>
    );
}
