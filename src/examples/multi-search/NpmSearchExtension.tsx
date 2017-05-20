export default `
import { command } from 'omnibar';

// command prefix: "npm"
// example: "npm left-pad"
function NpmSearchExtension(query) {
    // implementation...
}

export default command(NpmSearchExtension, 'npm');
`;
