import DevEnvTags, { type DevEnvTagsProps } from "~/molecules/devEnvTags";

export default function Achievement({
    imgsrc,
    summary,
    term,
    role,
    roleRemarks,
    devEnv,
}: {
    imgsrc: string;
    summary: string;
    term: { from: string; to?: string };
    role?: string;
    roleRemarks?: string;
    devEnv: DevEnvTagsProps;
}) {
    return (
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-indigo-50 p-6 rounded-lg">
                <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={imgsrc}
                    alt="content"
                />
                <h3 className="tracking-widest text-indigo-800 text-xs font-medium">
                    案件概要
                </h3>
                <h2 className="text-lg text-gray-900 font-medium mb-4">
                    {summary}
                </h2>
                <h3 className="tracking-widest text-indigo-800 text-xs font-medium">
                    期間
                </h3>
                <p className="leading-relaxed text-base mb-4">
                    {term.from} ～ {term.to ? term.to : null}
                </p>
                {role ? (
                    <>
                        <h3 className="tracking-widest text-indigo-800 text-xs font-medium">
                            役割
                        </h3>
                        <p className="leading-relaxed text-base mb-4">
                            {role}
                            {roleRemarks ? (
                                <span className="text-xs block">
                                    ({roleRemarks})
                                </span>
                            ) : null}
                        </p>
                    </>
                ) : null}
                <div>
                    <h3 className="tracking-widest text-indigo-800 text-xs font-medium">
                        開発環境
                    </h3>
                    <DevEnvTags {...devEnv} />
                </div>
            </div>
        </div>
    );
}
