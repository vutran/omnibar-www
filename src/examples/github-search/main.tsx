export default `
import React from 'react';
import ReactDOM from 'react-dom';
import Omnibar from 'omnibar';
import GitHubSearchExtension from './GitHubSearchExtension';
import ResultItem from './ResultItem';

ReactDOM.render(
    <div>
        <Omnibar
            placeholder="Search GitHub repositories"
            maxResults={10}
            maxViewableResults={5}
            extensions={[
                GitHubSearchExtension,
            ]}>
            ({ items }) => <div>{items.map(ResultItem)}</div>
        </Omnibar>
    </div>,
    document.getElementById('app')
);
`;
