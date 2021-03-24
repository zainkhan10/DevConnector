import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGithubRepos } from "../../store/actions/creators";
import Spinner from "../layout/Spinner";

const ProfileGithub = ({ username }) => {
  const dispatch = useDispatch();
  const { loading, repos } = useSelector(({ profile }) => profile);

  useEffect(() => {
    dispatch(getGithubRepos(username));
  }, []);

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">
        <i className="fab fa-github"></i> Github Repos
      </h2>
      {loading && repos.length === 0 ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div className="repo bg-white p-1 my-1" key={repo.id.toString()}>
            <div>
              <h4>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description || 'No description'}</p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">Stars: {repo.stargazers_count}</li>
                <li className="badge badge-dark">Watchers: {repo.watchers_count}</li>
                <li className="badge badge-light">Forks: {repo.forks_count}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProfileGithub;
