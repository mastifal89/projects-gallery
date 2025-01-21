import { useState, useEffect } from "react";
import { Octokit } from "octokit";
import { runtimeEnvConfig as config } from "../utils/config";

const useFetchRepos = () => {
  const [repos, setRepos] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("ASD: ", repos);

  useEffect(() => {
    const fetchRepos = async () => {
      const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
      });

      try {
        const response = await octokit.request(`GET /users/${config.githubUsername}/repos`, {
            username: config.githubUsername ? config.githubUsername : "octokit",
        });
        setRepos(response?.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
};

export default useFetchRepos;
