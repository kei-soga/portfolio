import TextChip from "~/atoms/textChip";

export default function Profile() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/6 text-center mb-8 md:mb-0">
                <img
                    src="/profile.jpg"
                    alt="プロフィール画像"
                    className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 transition-transform duration-300 hover:scale-105"
                />
                <h1 className="text-2xl font-bold text-indigo-800 mb-2">曽我 敬</h1>
                <p>フリーランスエンジニア</p>
                <ul className="flex flex-row space-x-4 mt-4 mx-auto w-16">
                    <li>
                        <a href="https://lin.ee/E9PQN3IZ">
                            <img src="/sns/line_app_icon.png" alt="友だち追加" width="24" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kei-soga-127362200">
                            <img src="/sns/linkedin-icon.svg" alt="友だち追加" width="24" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="md:w-5/6 md:px-12">
                <h2 className="text-xl font-semibold text-indigo-800 mb-4">自己紹介</h2>
                <p className="mb-6">
                    RPA（UiPath）開発に1年以上、フロントエンドとバックエンドの開発に4年以上携わってきました。
                </p>
                <h2 className="text-xl font-semibold text-indigo-800 mb-4">スキル</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                    <TextChip text="Python" />
                    <TextChip text="Flask" />
                    <TextChip text="Django" />
                    <TextChip text="FastAPI" />
                    <TextChip text="Selenium" />
                    <TextChip text="Node.js" />
                    <TextChip text="Express" />
                    <TextChip text="C#.NET" />

                    <TextChip text="HTML" />
                    <TextChip text="CSS" />
                    <TextChip text="Sass/Scss" />
                    <TextChip text="TailWindCSS" />
                    <TextChip text="JavaScript" />
                    <TextChip text="TypeScript" />
                    <TextChip text="Angular" />
                    <TextChip text="React" />
                    <TextChip text="Next.js" />
                    <TextChip text="Vue" />
                    <TextChip text="Nuxt.js" />
                    <TextChip text="Svelte" />

                    <TextChip text="Apache(httpd)" />
                    <TextChip text="Nginx" />
                    <TextChip text="Caddy" />

                    <TextChip text="MySQL" />
                    <TextChip text="PostgreSQL" />
                    <TextChip text="MongoDB" />
                    <TextChip text="Redis" />
                    <TextChip text="Memcached" />

                    <TextChip text="Docker" />
                    <TextChip text="AWS" />
                    <TextChip text="GCP" />
                    <TextChip text="Firebase" />

                    <TextChip text="UiPath" />
                    <TextChip text="VBA" />
                    <TextChip text="PowerShell" />
                    <TextChip text="Bash" />
                </div>
                <h2 className="text-xl font-semibold text-indigo-800 mb-4">連絡先</h2>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2 text-indigo-800"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        千葉県松戸市
                    </li>
                    <li className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2 text-indigo-800"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        contact@keisoga.com
                    </li>
                </ul>
            </div>
        </div>
    );
}
