  
import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: "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 "  });

export const allUsers = (since) => octokit.request("GET /users", {
    since,
    per_page: 30,
});

export const fetchUsers = (query, page) => octokit.request('GET /search/users', {
    q: query,
    per_page: 30,
    page,
})

export const findRepos = (username, page) => octokit.request('GET /users/{username}/repos', {
    username,
    per_page: 4,
    page,
})

