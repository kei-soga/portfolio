import PythonTag from "~/atoms/tags/pythonTag";
import CSharpTag from "~/atoms/tags/csharpTag";
import HTMLTag from "~/atoms/tags/htmlTag";
import CSSTag from "~/atoms/tags/cssTag";
import JavascriptTag from "~/atoms/tags/javascriptTag";
import TypescriptTag from "~/atoms/tags/typescriptTag";
import AngularTag from "~/atoms/tags/angularTag";
import ReactTag from "~/atoms/tags/reactTag";
import VueTag from "~/atoms/tags/vueTag";
import PowerShellTag from "~/atoms/tags/powershellTag";
import ExcelVBATag from "~/atoms/tags/excelVbaTag";
import AWSTag from "~/atoms/tags/awsTag";
import GCPTag from "~/atoms/tags/gcpTag";
import AzureTag from "~/atoms/tags/azureTag";
import MySQLTag from "~/atoms/tags/mysqlTag";
import PostgreSQLTag from "~/atoms/tags/postgresqlTag";
import MongoDBTag from "~/atoms/tags/mongodbTag";
import DockerTag from "~/atoms/tags/dockerTag";
import UiPathTag from "~/atoms/tags/uipathTag";
import GitHubTag from "~/atoms/tags/githubTag";
import GitLabTag from "~/atoms/tags/gitlabTag";
import AsanaTag from "~/atoms/tags/asanaTag";
import JiraTag from "~/atoms/tags/jiraTag";

export interface DevEnvTagsProps {
    python?: boolean;
    csharp?: boolean;
    html?: boolean;
    css?: boolean;
    javascript?: boolean;
    typescript?: boolean;
    angular?: boolean;
    react?: boolean;
    vue?: boolean;
    powershell?: boolean;
    excelvba?: boolean;
    aws?: boolean;
    gcp?: boolean;
    azure?: boolean;
    mysql?: boolean;
    postgresql?: boolean;
    mongodb?: boolean;
    docker?: boolean;
    uipath?: boolean;
    github?: boolean;
    gitlab?: boolean;
    asana?: boolean;
    jira?: boolean;
}

export default function DevEnvTags({
    python = false,
    csharp = false,
    html = false,
    css = false,
    javascript = false,
    typescript = false,
    angular = false,
    react = false,
    vue = false,
    powershell = false,
    excelvba = false,
    aws = false,
    gcp = false,
    azure = false,
    mysql = false,
    postgresql = false,
    mongodb = false,
    docker = false,
    uipath = false,
    github = false,
    gitlab = false,
    asana = false,
    jira = false,
}: DevEnvTagsProps) {
    return (
        <>
            <div className="flex flex-row flex-wrap">
                {python ? <PythonTag className="mr-3 mb-2" /> : null}
                {csharp ? <CSharpTag className="mr-3 mb-2" /> : null}
                {html ? <HTMLTag className="mr-3 mb-2" /> : null}
                {css ? <CSSTag className="mr-3 mb-2" /> : null}
                {javascript ? <JavascriptTag className="mr-3 mb-2" /> : null}
                {typescript ? <TypescriptTag className="mr-3 mb-2" /> : null}
                {angular ? <AngularTag className="mr-3 mb-2" /> : null}
                {react ? <ReactTag className="mr-3 mb-2" /> : null}
                {vue ? <VueTag className="mr-3 mb-2" /> : null}
                {powershell ? <PowerShellTag className="mr-3 mb-2" /> : null}
                {excelvba ? <ExcelVBATag className="mr-3 mb-2" /> : null}
                {aws ? <AWSTag className="mr-3 mb-2" /> : null}
                {gcp ? <GCPTag className="mr-3 mb-2" /> : null}
                {azure ? <AzureTag className="mr-3 mb-2" /> : null}
                {mysql ? <MySQLTag className="mr-3 mb-2" /> : null}
                {postgresql ? <PostgreSQLTag className="mr-3 mb-2" /> : null}
                {mongodb ? <MongoDBTag className="mr-3 mb-2" /> : null}
                {docker ? <DockerTag className="mr-3 mb-2" /> : null}
                {uipath ? <UiPathTag className="mr-3 mb-2" /> : null}
                {github ? <GitHubTag className="mr-3 mb-2" /> : null}
                {gitlab ? <GitLabTag className="mr-3 mb-2" /> : null}
                {asana ? <AsanaTag className="mr-3 mb-2" /> : null}
                {jira ? <JiraTag className="mr-3 mb-2" /> : null}
            </div>
        </>
    );
}
