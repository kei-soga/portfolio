export default function CategoryTitle({ title }: { title: string }) {
    return (
        <div className="flex flex-wrap w-full mb-4 md:mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                    {title}
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
        </div>
    );
}
