import CategoryTitle from "~/molecules/categoryTitle";
import type { Route } from "./+types/home";
import Profile from "~/organisms/profile";
import Achievement from "~/organisms/achievement";

export function meta({}: Route.MetaArgs) {
    return [{ title: "Portfolio" }, { name: "description", content: "" }];
}

export default function Home() {
    return (
        <>
            <section>
                <div className="container px-5 py-12 mx-auto">
                    <div className="mb-12">
                        <Profile />
                    </div>

                    <CategoryTitle title="経歴" />

                    <div className="flex flex-wrap -m-4">
                        <Achievement
                            imgsrc="/achievement/cosmetics.jpg"
                            summary="化粧品販売の顧客管理システム開発"
                            term={{ from: "2025/08" }}
                            role="サブリーダー"
                            roleRemarks="コードレビュー、メンバーへの技術サポート"
                            devEnv={{
                                python: true,
                                html: true,
                                css: true,
                                javascript: true,
                                vue: true,
                                aws: true,
                                postgresql: true,
                                github: true,
                                backlog: true,
                            }}
                        />
                        <Achievement
                            imgsrc="/achievement/rocket.jpg"
                            summary="ロケット打ち上げ試験用テレメトリデータ解析"
                            term={{ from: "2025/03", to: "2025/07" }}
                            role="サブリーダー"
                            roleRemarks="メンバーへの技術サポート"
                            devEnv={{
                                python: true,
                                csharp: true,
                                html: true,
                                css: true,
                                javascript: true,
                                aws: true,
                                postgresql: true,
                                github: true,
                                asana: true,
                            }}
                        />
                        <Achievement
                            imgsrc="/achievement/apparel.jpg"
                            summary="アパレルトレンド分析プラットフォーム開発"
                            term={{ from: "2021/07", to: "2025/02" }}
                            devEnv={{
                                python: true,
                                html: true,
                                css: true,
                                typescript: true,
                                angular: true,
                                react: true,
                                gcp: true,
                                azure: true,
                                postgresql: true,
                                mongodb: true,
                                docker: true,
                                github: true,
                                jira: true,
                            }}
                        />
                        <Achievement
                            imgsrc="/achievement/giraffe_service.jpg"
                            summary="総務・事務の業務効率化サービス開発"
                            term={{ from: "2021/01", to: "2021/06" }}
                            devEnv={{
                                python: true,
                                html: true,
                                css: true,
                                typescript: true,
                                vue: true,
                                gcp: true,
                                postgresql: true,
                                gitlab: true,
                            }}
                        />
                        <Achievement
                            imgsrc="/achievement/stock_brokerage.jpg"
                            summary="証券決済業務のRPA開発"
                            term={{ from: "2019/07", to: "2020/12" }}
                            devEnv={{
                                uipath: true,
                                powershell: true,
                                excelvba: true,
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
