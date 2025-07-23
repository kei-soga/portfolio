export default function MongoDBTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/mongodb-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">MongoDB</span>
        </div>
    );
}
