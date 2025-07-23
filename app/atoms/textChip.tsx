export default function TextChip({ text }: { text: string }) {
    return (
        <span className="bg-indigo-100 text-indigo-800 hover:bg-indigo-800 hover:text-indigo-100 px-3 py-1 rounded-full text-sm">
            {text}
        </span>
    );
}
