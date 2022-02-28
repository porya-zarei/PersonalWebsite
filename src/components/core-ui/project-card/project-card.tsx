import {FC} from "react";
import {GithubRepository} from "../../../api-calls/get-github-repositories";

interface ProjectCardProps {
    repository: GithubRepository;
}

const ProjectCard: FC<ProjectCardProps> = ({repository}) => {
    return (
        <article className="max-w-md w-full mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
            <a className="w-full" href={repository.html_url}>
                <div className="w-full p-3 bg-white">
                    <img
                        src={"/assets/images/github.png"}
                        loading="lazy"
                        alt={repository.full_name}
                        className="w-full h-32 rounded-t-md drop-shadow-xl"
                    />
                </div>
                <div className="flex w-full justify-start items-center mt-2 pt-3 ml-4 mr-2">
                    <div className="flex-none w-10 h-10 rounded-full">
                        <img
                            src={repository.owner.avatar_url}
                            className="w-full h-full rounded-full"
                            alt={repository.owner.login}
                        />
                    </div>
                    <div className="ml-3">
                        <span className="block text-gray-900">
                            {repository.owner.login}
                        </span>
                        <span className="block text-gray-400 text-sm">
                            {repository.created_at}
                        </span>
                    </div>
                </div>
                <div className="pt-3 ml-4 mr-2 mb-3">
                    <h3 className="text-xl text-gray-900">{repository.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                        {repository.description}
                    </p>
                </div>
            </a>
        </article>
    );
};

export default ProjectCard;
