export default `
import React from 'react';
import ReactDOM from 'react-dom';
import Omnibar, { withVoice } from 'omnibar';
import GitHubSearchExtension from './GitHubSearchExtension';
import MathExtension from './MathExtension';
import NpmSearchExtension from './NpmSearchExtension';
import ResultItem from './ResultItem';

const VoiceOmnibar = withVoice(Omnibar);

ReactDOM.render(
    <div>
        <VoiceOmnibar
            placeholder="Search GitHub, npm, or calculate something"
            maxResults={10}
            maxViewableResults={5}
            extensions={[
                GitHubSearchExtension,
                MathExtension,
                NpmSearchExtension,
            ]}>
            {ResultItem}
        </VoiceOmnibar>
    </div>,
    document.getElementById('app')
);
`;
