import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGithubRepos } from "../../state/actions/profileAction";
import Spinner from "../layout/Spinner";

const ProfileGithub = ({ githubusername }) => {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);
  const { loading, repos } = profileState;

  useEffect(() => {
    dispatch(getGithubRepos(githubusername));
  }, [dispatch, githubusername]);
  return (
    <>
      {!repos || loading ? (
        <Spinner />
      ) : (
        <>
          {repos.length <= 0 ? (
            ""
          ) : (
            <div className="profile-github">
              <h2 className="text-primary my-1">
                <i className="fab fa-github"></i> Github Repos
              </h2>
              {repos.map((repo, index) => (
                <div key={index} className="repo bg-white p-1 my-1">
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
                    <p>{repo.description}</p>
                  </div>
                  <div>
                    <ul>
                      <li className="badge badge-primary">
                        Stars: {repo.stargazers_count}
                      </li>
                      <li className="badge badge-dark">
                        Watchers: {repo.watchers_count}
                      </li>
                      <li className="badge badge-light">
                        Forks: {repo.forks_count}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProfileGithub;
