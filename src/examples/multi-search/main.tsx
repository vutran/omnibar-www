export default `
import React from 'react';
import ReactDOM from 'react-dom';
import Omnibar from 'omnibar';
import GitHubSearchExtension from './GitHubSearchExtension';
import MathExtension from './MathExtension';
import NpmSearchExtension from './NpmSearchExtension';
import ResultItem from './ResultItem';

ReactDOM.render(
    <div>
        <Omnibar
            placeholder="Search GitHub, npm, or calculate something"
            maxResults={10}
            maxViewableResults={5}
            extensions={[
                GitHubSearchExtension,
                MathExtension,
                NpmSearchExtension,
            ]}
            resultRenderer={ResultItem} />
    </div>,
    document.getElementById('app')
);
`;
