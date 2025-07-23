export default function VueTag({ className }: { className?: string }) {
    return (
        <div className={className}>
            <img
                src="/achievement/vue-logo.svg"
                alt="Logo"
                className="inline h-5 mr-0.5 align-middle"
            />
            <span className="align-middle">Vue</span>
        </div>
    );
}
