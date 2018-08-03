import * as React from 'react';
import Omnibar from 'omnibar';
import { command, compose, withExtensions, withVoice } from 'omnibar';
import MathExtension from './extensions/MathExtension';
import NpmSearchExtension from './extensions/NpmSearchExtension';
import GitHubSearchExtension from './extensions/GitHubSearchExtension';
import math from './examples/math';
import npmSearch from './examples/npm-search';
import githubSearch from './examples/github-search';
import multiSearch from './examples/multi-search';
import Editor from './Editor';
import ResultItem from './ResultItem';

interface Props {}
interface State {}

const Omnibar1 = withExtensions([MathExtension])(Omnibar);
const Omnibar2 = withExtensions([NpmSearchExtension])(Omnibar);
const Omnibar3 = withExtensions([GitHubSearchExtension])(Omnibar);
const Omnibar4 = compose(
    withVoice,
    withExtensions([
        command(GitHubSearchExtension, 'gh'),
        command(NpmSearchExtension, 'npm'),
        MathExtension,
    ])
)(Omnibar);

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="wrapper">
                        <h1>Omnibar</h1>
                        <h2>Extensible search component for React.</h2>
                    </div>
                </header>
                <div className="body wrapper">
                    <div className="block center">
                        <img
                            className="block-img"
                            src="./assets/binocular.svg"
                            alt="Search"
                        />
                        <h2>Search</h2>
                        <p>
                            A simple and powerful search bar for your React
                            application.
                        </p>
                    </div>

                    <div className="block center">
                        <img
                            className="block-img"
                            src="./assets/package.svg"
                            alt="Search"
                        />
                        <h2>Extensions</h2>
                        <p>
                            Extend the capabilities of your Omnibar with custom
                            extensions with a simple API.
                        </p>
                    </div>

                    <div className="block center">
                        <img
                            className="block-img"
                            src="./assets/paperclip.svg"
                            alt="Search"
                        />
                        <h2>Flexibility</h2>
                        <p>
                            Populate results from different sources, apply
                            unique actions, or create custom renderers.
                        </p>
                    </div>

                    <div className="block full">
                        <header className="block-header">
                            <h2>Example 1 - Math</h2>
                            <p>
                                At the most simplest level, your extension is
                                just a function that returns a list of items. Go
                                ahead and type a math expression such as{' '}
                                <em>1 + 1</em> or <em>10 miles to km</em>.
                            </p>
                            <Omnibar1
                                placeholder={`Enter an expression (eg: "10+32")`}
                            />
                        </header>
                        <Editor
                            tabs={[
                                { filename: 'main.tsx', code: math.main },
                                {
                                    filename: 'MathExtension.tsx',
                                    code: math.MathExtension,
                                },
                            ]}
                        />
                    </div>

                    <div className="block full">
                        <header className="block-header">
                            <h2>Example 2 - NPM Search</h2>
                            <p>
                                Extensions can return a <em>Promise</em> and
                                Omnibar will support them. The example below
                                makes a fetch request to the NPM API to retrieve
                                relevant packages based on the given query.
                            </p>
                            <Omnibar2
                                placeholder={`Search npm packages (eg: "left-pad")`}
                                maxResults={10}
                                maxViewableResults={5}
                            />
                        </header>
                        <Editor
                            tabs={[
                                { filename: 'main.tsx', code: npmSearch.main },
                                {
                                    filename: 'NpmSearchExtension.tsx',
                                    code: npmSearch.NpmSearchExtension,
                                },
                            ]}
                        />
                    </div>

                    <div className="block full">
                        <header className="block-header">
                            <h2>Example 3 - GitHub Search</h2>
                            <p>
                                You can customize the look of your output by
                                creating a custom result item renderer which is
                                just a function that returns your rendered
                                component.
                            </p>
                            <Omnibar3
                                placeholder={`Search GitHub repositories (eg: "react")`}
                                maxResults={10}
                                maxViewableResults={5}
                                render={ResultItem}
                            />
                        </header>
                        <Editor
                            tabs={[
                                {
                                    filename: 'main.tsx',
                                    code: githubSearch.main,
                                },
                                {
                                    filename: 'GitHubSearchExtension.tsx',
                                    code: githubSearch.GitHubSearchExtension,
                                },
                                {
                                    filename: 'ResultItem.tsx',
                                    code: githubSearch.ResultItem,
                                },
                            ]}
                        />
                    </div>

                    <div className="block full">
                        <header className="block-header">
                            <h2>Example 4 - Multiple Search with Voice</h2>
                            <p>
                                You can combine all your extensions and serve
                                them all at once to create a rich and powerful
                                search experience.
                            </p>
                            <p>
                                Omnibar also comes packed with a built-in helper
                                function to wrap your extension behind a command
                                filter. (eg: "gh react" will trigger a GitHub
                                search and "npm left-pad" will trigger an npm
                                search).
                            </p>
                            <p>
                                You can also enhance your Omnibar with voice
                                capabilities (where supported).
                            </p>
                            <Omnibar4
                                placeholder={`Search anything (eg: "npm left-pad", or "gh react", or "10 miles to km")`}
                                maxResults={10}
                                maxViewableResults={5}
                                render={ResultItem}
                            />
                        </header>
                        <Editor
                            tabs={[
                                {
                                    filename: 'main.tsx',
                                    code: multiSearch.main,
                                },
                                {
                                    filename: 'GitHubSearchExtension.tsx',
                                    code: multiSearch.GitHubSearchExtension,
                                },
                                {
                                    filename: 'MathExtension.tsx',
                                    code: multiSearch.MathExtension,
                                },
                                {
                                    filename: 'NpmSearchExtension.tsx',
                                    code: multiSearch.NpmSearchExtension,
                                },
                                {
                                    filename: 'ResultItem.tsx',
                                    code: multiSearch.ResultItem,
                                },
                            ]}
                        />
                    </div>

                    <div className="block full center">
                        <a
                            className="get-started"
                            href="https://github.com/vutran/omnibar/"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
                <footer className="footer">
                    Developed by{' '}
                    <a href="https://github.com/vutran/">@vutran</a>. Icons by{' '}
                    <a href="http://www.flaticon.com/packs/management-2">
                        Freepik
                    </a>
                    .
                </footer>
            </div>
        );
    }
}
