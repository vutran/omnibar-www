export default `
import { command } from 'omnibar';

// command prefix: "gh"
// example: "gh vutran/dext"
function GitHubSearchExtension(query) {
    // implementation...
}

export default command(GitHubSearchExtension, 'gh');
`;
