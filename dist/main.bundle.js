webpackJsonp([0],{

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_omnibar__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_omnibar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_omnibar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extensions_MathExtension__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extensions_NpmSearchExtension__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__extensions_GitHubSearchExtension__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_math__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__examples_npm_search__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__examples_github_search__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Editor__ = __webpack_require__(223);









function ResultItem(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: 'flex', paddingLeft: 15, paddingRight: 15, color: '#000', textAlign: 'left' } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: props.item.url, style: { display: 'flex', width: '100%', textDecoration: 'none', color: 'inherit' } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: 'flex', flexDirection: 'row', alignItems: 'center', width: 30, marginRight: 15 } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: props.item.image, width: 30, height: 30 })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { flexGrow: 1 } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", { style: { fontSize: 16, fontWeight: 'bold', lineHeight: 2, marginTop: 0, marginBottom: 0 } }, props.item.title), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { style: { color: '#bbb', fontSize: 11, lineHeight: 1, marginTop: 0, marginBottom: 0 } }, props.item.subtitle))));
}
class App extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "header" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "wrapper" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Omnibar"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Extensible search component for React."))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "body wrapper" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "block center" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "block-img", src: "./assets/binocular.svg", alt: "Search" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Search"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "A simple and powerful search bar for your React application.")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "block center" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "block-img", src: "./assets/package.svg", alt: "Search" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Extensions"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Extend the capabilities of your Omnibar with custom extensions with a simple API.")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "block center" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "block-img", src: "./assets/paperclip.svg", alt: "Search" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Flexibility"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Populate results from different sources, apply unique actions, or create custom renderers.")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "block full" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "block-header" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Example 1 - Math"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_omnibar___default.a, { placeholder: "Enter an expression", extensions: [__WEBPACK_IMPORTED_MODULE_2__extensions_MathExtension__["a" /* default */]] })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__Editor__["a" /* default */], { tabs: [{ filename: 'main.tsx', code: __WEBPACK_IMPORTED_MODULE_5__examples_math__["a" /* default */].main }, { filename: 'MathExtension.tsx', code: __WEBPACK_IMPORTED_MODULE_5__examples_math__["a" /* default */].MathExtension }] })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "block full" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "block-header" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Example 2 - NPM Search"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_omnibar___default.a, { placeholder: "Search npm packages", maxResults: 10, maxViewableResults: 5, extensions: [__WEBPACK_IMPORTED_MODULE_3__extensions_NpmSearchExtension__["a" /* default */]] })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__Editor__["a" /* default */], { tabs: [{ filename: 'main.tsx', code: __WEBPACK_IMPORTED_MODULE_6__examples_npm_search__["a" /* default */].main }, { filename: 'NpmSearchExtension.tsx', code: __WEBPACK_IMPORTED_MODULE_6__examples_npm_search__["a" /* default */].NpmSearchExtension }] })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "block full" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "block-header" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Example 3 - GitHub Search"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_omnibar___default.a, { placeholder: "Search GitHub repositories", maxResults: 10, maxViewableResults: 5, extensions: [__WEBPACK_IMPORTED_MODULE_4__extensions_GitHubSearchExtension__["a" /* default */]], resultRenderer: ResultItem })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__Editor__["a" /* default */], { tabs: [{ filename: 'main.tsx', code: __WEBPACK_IMPORTED_MODULE_7__examples_github_search__["a" /* default */].main }, { filename: 'GitHubSearchExtension.tsx', code: __WEBPACK_IMPORTED_MODULE_7__examples_github_search__["a" /* default */].GitHubSearchExtension }, { filename: 'ResultItem.tsx', code: __WEBPACK_IMPORTED_MODULE_7__examples_github_search__["a" /* default */].ResultItem }] })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "block full center" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "get-started", href: "https://github.com/vutran/omnibar/" }, "Get Started"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("footer", { className: "footer" }, "Developed by ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "https://github.com/vutran/" }, "@vutran"), ". Icons by ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "http://www.flaticon.com/packs/management-2" }, "Freepik"), "."));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = App;


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_App__ = __webpack_require__(220);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__src_App__["a" /* default */], null), document.getElementById('app'));

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CodeBlock;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js_styles_github_css__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlight_js_styles_github_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highlight_js_styles_github_css__);
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
};



/**
 * Renders a code block via highlight.js
 *
 * @param {Props} props
 * @return {React.ReactChild}
 */
function CodeBlock(props) {
    const { children } = props,
          rest = __rest(props, ["children"]);
    const text = children.toString().replace(/^(\s+|\s+$)/g, '');
    const highlighted = __WEBPACK_IMPORTED_MODULE_1_highlight_js___default.a.highlightAuto(text);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("pre", Object.assign({}, rest), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("code", { style: { padding: 30 }, className: "hljs js", dangerouslySetInnerHTML: { __html: highlighted.value } }));
}

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CodeBlock__ = __webpack_require__(222);



class Editor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            tab: null
        };
        this.switchTab = evt => {
            this.setState({ tab: evt.target.id });
        };
    }
    componentWillMount() {
        this.setState({ tab: this.props.tabs[0].filename });
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tab-nav" }, this.props.tabs.map(tab => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { key: tab.filename, type: "button", id: tab.filename, className: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* active */])(this.state.tab === tab.filename, 'active'), onClick: this.switchTab }, tab.filename))), this.props.tabs.map(tab => this.state.tab === tab.filename && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__CodeBlock__["a" /* default */], { key: tab.filename, className: "editor" }, tab.code)));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Editor;


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (`
import fetch from 'unfetch';

export default function GitHubSearchExtension(query) {
    const options = {
        headers: {
            Accept: 'application/vnd.github.vutran-omnibar+json',
        },
    };

    const prom = fetch(\`https://api.github.com/search/repositories?q=\${query}\`, options);

    return prom
        .then(resp => resp.items.map(
            item => ({
                title: item.full_name,
                subtitle: item.html_url,
                image: item.owner.avatar_url,
                url: item.html_url,
            }),
        ));
}
`);

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (`
export default function(props) {
    return (
        <div>
            <a href={props.item.url}>
                <img src={props.item.image} />
                <h2>{props.item.title}</h2>
                <h3>{props.item.subtitle}</h2>
            </a>
        </div>
    );
}
`);

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GitHubSearchExtension__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResultItem__ = __webpack_require__(225);



/* harmony default export */ __webpack_exports__["a"] = ({
    main: __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */],
    GitHubSearchExtension: __WEBPACK_IMPORTED_MODULE_1__GitHubSearchExtension__["a" /* default */],
    ResultItem: __WEBPACK_IMPORTED_MODULE_2__ResultItem__["a" /* default */]
});

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (`
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
            ]}
            resultRenderer={ResultItem} />
    </div>,
    document.getElementById('app')
);
`);

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (`
import math from 'mathjs';

export default function MathExtension(query) {
    try {
        const answer = math.eval(query);
        return [
            {
                title: answer.toString(),
                subtitle: 'Calculate: ' + query,
            },
        ];
    } catch (err) {
        return [];
    }
}
`);

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MathExtension__ = __webpack_require__(228);


/* harmony default export */ __webpack_exports__["a"] = ({
    main: __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */],
    MathExtension: __WEBPACK_IMPORTED_MODULE_1__MathExtension__["a" /* default */]
});

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (`
import React from 'react';
import ReactDOM from 'react-dom';
import Omnibar from 'omnibar';
import MathExtension from './MathExtension';

ReactDOM.render(
    <div>
        <Omnibar
            placeholder="Enter an expression"
            extensions={[
                MathExtension,
            ]} />
    </div>,
    document.getElementById('app')
);
`);

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (`
import fetch from 'unfetch';

const URL = 'https://api.npms.io/v2/search/suggestions';

export default function NpmSearchExtension(query) {
    const prom = fetch(\`\${URL}?q=\${query}&size=10\`);

    return prom
        .then(packages => packages.map(
            item => ({
                title: item.package.name,
                url: item.package.links.npm,
            }),
        ));
}
`);

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NpmSearchExtension__ = __webpack_require__(231);


/* harmony default export */ __webpack_exports__["a"] = ({
    main: __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */],
    NpmSearchExtension: __WEBPACK_IMPORTED_MODULE_1__NpmSearchExtension__["a" /* default */]
});

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (`
import React from 'react';
import ReactDOM from 'react-dom';
import Omnibar from 'omnibar';
import NpmSearchExtension from './NpmSearchExtension';

ReactDOM.render(
    <div>
        <Omnibar
            placeholder="Search npm packages"
            maxResults={10}
            maxViewableResults={5}
            extensions={[
                NpmSearchExtension,
            ]} />
    </div>,
    document.getElementById('app')
);
`);

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = GitHubSearchExtension;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(94);

;
const FETCH_CACHE = {};
/**
 * Demo extension that returns a Promise which resolves a list of `ResultItem`.
 * The user's original `query` is passed in the function's argument which is
 * passed to the 3rd-party API.
 *
 * @param {string} query
 * @param {Promise}
 */
function GitHubSearchExtension(query) {
    const options = {
        headers: {
            Accept: 'application/vnd.github.vutran-omnibar+json'
        }
    };
    // retrieves from cache makes a new fetch request (and cache)
    const prom = FETCH_CACHE[query] || (FETCH_CACHE[query] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* fetch */])(`https://api.github.com/search/repositories?q=${query}`, options));
    return prom.then(resp => resp.items.map(item => ({
        title: item.full_name,
        subtitle: item.html_url,
        image: item.owner.avatar_url,
        url: item.html_url
    })));
}

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MathExtension;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mathjs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mathjs__);

/**
 * Calculate and return anything.
 *
 * @param {string} query
 * @param {Array<any>}
 */
function MathExtension(query) {
    try {
        const answer = __WEBPACK_IMPORTED_MODULE_0_mathjs___default.a.eval(query);
        return [{
            title: answer.toString(),
            subtitle: 'Calculate: ' + query
        }];
    } catch (err) {
        return [];
    }
}

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NpmSearchExtension;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(94);

const FETCH_CACHE = {};
const URL = 'https://api.npms.io/v2/search/suggestions';
/**
 * Demo extension that returns a Promise which resolves a list of `ResultItem`.
 * The user's original `query` is passed in the function's argument which is
 * passed to the 3rd-party API.
 *
 * @param {string} query
 * @param {Promise}
 */
function NpmSearchExtension(query) {
    // retrieves from cache makes a new fetch request (and cache)
    const prom = FETCH_CACHE[query] || (FETCH_CACHE[query] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* fetch */])(`${URL}?q=${query}&size=10`));
    return prom.then(packages => packages.map(item => ({
        title: item.package.name,
        url: item.package.links.npm
    })));
}

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(239)(undefined);
// imports


// module
exports.push([module.i, "/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-subst {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-literal,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag .hljs-attr {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-doctag {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-section,\n.hljs-selector-id {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-type,\n.hljs-class .hljs-title {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-name,\n.hljs-attribute {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-regexp,\n.hljs-link {\n  color: #009926;\n}\n\n.hljs-symbol,\n.hljs-bullet {\n  color: #990073;\n}\n\n.hljs-built_in,\n.hljs-builtin-name {\n  color: #0086b3;\n}\n\n.hljs-meta {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ 239:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(41);

const COLORS = {
    BLACK: '#000',
    BLUE: '#00f',
    DARKGRAY: '#ddd',
    GRAY: '#eee',
    GREEN: '#0f0',
    RED: '#f00',
    WHITE: '#fff',
};
const KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
};

const INPUT_STYLE = {
    width: '100%',
    height: 50,
    fontSize: 24,
    lineHeight: '24px',
    boxSizing: 'border-box',
    outline: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.DARKGRAY,
    paddingLeft: 15,
    paddingRight: 15,
};
class Input extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            value: '',
        };
        this.handleChange = (evt /* Event */) => {
            const value = evt.target.value;
            this.setState({ value });
            this.props.onChange(value);
        };
        this.handleKeyDown = (evt /* Event */) => {
            this.props.onKeyDown(evt);
        };
        this.handleBlur = (evt /* Event */) => {
            this.props.onBlur(evt);
        };
        this.handleFocus = (evt /* Event */) => {
            this.props.onFocus(evt);
        };
    }
    render() {
        const style = Object.assign({}, INPUT_STYLE, this.props.style);
        if (this.props.width) {
            style.width = this.props.width;
        }
        if (this.props.height) {
            style.height = this.props.height;
        }
        return (React.createElement("input", { type: "text", value: this.state.value, placeholder: this.props.placeholder, style: style, onChange: this.handleChange, onKeyDown: this.handleKeyDown, onBlur: this.handleBlur, onFocus: this.handleFocus }));
    }
}

const ANCHOR_STYLE = {
    display: 'block',
    textDecoration: 'none',
    color: COLORS.BLACK,
    paddingLeft: 15,
    paddingRight: 15,
};
function AnchorRenderer(props) {
    return (React.createElement("a", { href: props.item.url, style: ANCHOR_STYLE }, props.item.title));
}

const ITEM_STYLE = {
    height: 50,
    lineHeight: '50px',
    fontSize: 24,
    borderStyle: 'solid',
    borderColor: COLORS.DARKGRAY,
    borderTopWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    boxSizing: 'border-box',
};
const ITEM_HOVER_STYLE = {
    backgroundColor: COLORS.GRAY,
};
class ResultRenderer extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            hover: false,
        };
        this.handleMouseEnter = () => {
            this.setState({ hover: true });
        };
        this.handleMouseLeave = () => {
            this.setState({ hover: false });
        };
    }
    render() {
        const item = this.props.item;
        let style = Object.assign({}, ITEM_STYLE, this.props.style);
        if (this.props.highlighted || this.state.hover) {
            style = Object.assign({}, style, ITEM_HOVER_STYLE);
        }
        const renderer = this.props.resultRenderer
            ? this.props.resultRenderer
            : AnchorRenderer;
        return (React.createElement("li", { style: style, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, renderer({ item })));
    }
}
ResultRenderer.defaultProps = {
    highlighted: false,
};

const LIST_STYLE = {
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    backgroundColor: COLORS.WHITE,
};
function Results(props) {
    const style = Object.assign({}, LIST_STYLE, props.style);
    if (props.maxHeight) {
        style.maxHeight = props.maxHeight;
        style.borderBottomWidth = 1;
        style.borderBottomColor = COLORS.GRAY;
        style.borderBottomStyle = 'solid';
        style.overflow = 'auto';
    }
    return (React.createElement("ul", { style: style }, props.items.map((item, key) => React.createElement(ResultRenderer, {
        key,
        highlighted: props.selectedIndex === key,
        item,
        style: props.rowStyle,
        resultRenderer: props.resultRenderer,
    }))));
}

/**
 * Flatten a list of lists
 *
 * @param {Array<Array<T>>} lists
 * @return {Array<T>}
 */
/**
 * Flatten a list of lists
 *
 * @param {Array<Array<T>>} lists
 * @return {Array<T>}
 */ function flatten(list) {
    return list.reduce((prev, next) => {
        return prev.concat(next);
    }, []);
}
/**
 * Prevent a function from being called multiple times
 * repeatedly within a short time frame.
 *
 * @param {Function} fn
 * @param {number} wait
 * @return {Function}
 */
function debounce(fn, wait) {
    let timeout = null;
    return (...args) => {
        const ctx = this;
        const later = () => {
            timeout = null;
            fn.apply(ctx, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Does a search for the given `query` against the list of `extensions`
 * and returns a Promise that results into a list of `ResultItem`.
 *
 * @param {string} query
 * @param {Array<Extension>} extension
 * @return {Promise<Array<T>>}
 */
function search(query, extensions) {
    const results = [];
    // iterate through all extensions and compile them into `results` list
    for (let extension of extensions) {
        if (typeof extension === 'function') {
            results.push(extension.call(null, query));
        }
    }
    return Promise.all(results)
        .then(groups => flatten(groups));
}

function AnchorAction(item) {
    if (item.url) {
        window.location.href = item.url;
    }
}

class Omnibar$1 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            selectedIndex: 0,
            displayResults: false,
        };
        this.query = (value) => {
            if (this.props.extensions.length) {
                search(value, this.props.extensions)
                    .then(items => {
                    if (items.length) {
                        let results = items;
                        if (this.props.maxResults) {
                            results = results.slice(0, this.props.maxResults);
                        }
                        this.setState({ results, displayResults: true });
                    }
                });
            }
        };
        this.prev = () => {
            this.setState((prevState) => {
                const selectedIndex = prevState.selectedIndex - 1;
                if (selectedIndex >= 0) {
                    return { selectedIndex };
                }
            });
        };
        this.next = () => {
            this.setState((prevState) => {
                const selectedIndex = prevState.selectedIndex + 1;
                if (selectedIndex < prevState.results.length) {
                    return { selectedIndex };
                }
            });
        };
        this.action = () => {
            const item = this.state.results[this.state.selectedIndex];
            const action = this.props.onAction || AnchorAction;
            action.call(null, item);
        };
        this.handleChange = (value) => {
            if (value) {
                this.query(value);
            }
            else {
                this.reset();
            }
        };
        this.handleKeyDown = (evt /* Event */) => {
            switch (evt.keyCode) {
                case KEYS.UP:
                    this.prev();
                    break;
                case KEYS.DOWN:
                    this.next();
                    break;
                case KEYS.ENTER:
                    this.action();
                    break;
            }
        };
        this.handleBlur = () => {
            this.setState({ displayResults: false });
        };
        this.handleFocus = () => {
            this.setState({ displayResults: true });
        };
        this.query = debounce(this.query, this.props.inputDelay);
    }
    reset() {
        this.setState({
            results: [],
            displayResults: false,
        });
    }
    render() {
        const { maxViewableResults, placeholder, width, height, inputStyle, rowHeight, rowStyle, resultStyle, resultRenderer, onAction, } = this.props;
        const maxHeight = maxViewableResults ? maxViewableResults * rowHeight : null;
        return (React.createElement("div", { style: { position: 'relative' } },
            React.createElement(Input, {
                width,
                height,
                style: inputStyle,
                placeholder,
                onChange: this.handleChange,
                onKeyDown: this.handleKeyDown,
                onBlur: this.handleBlur,
                onFocus: this.handleFocus,
            }),
            this.state.displayResults && (React.createElement(Results, {
                selectedIndex: this.state.selectedIndex,
                items: this.state.results,
                rowHeight: rowHeight,
                maxHeight: maxHeight,
                style: resultStyle,
                rowStyle: rowStyle,
                resultRenderer: resultRenderer,
            }))));
    }
}
// TODO - fix generic container
Omnibar$1.defaultProps = {
    extensions: [],
    maxViewableResults: null,
    rowHeight: 50,
    resultStyle: {},
    inputDelay: 100,
};

module.exports = Omnibar$1;


/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(805);
exports.encode = exports.stringify = __webpack_require__(806);


/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(886);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 886:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(885)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./github.css", function() {
			var newContent = require("!!../../css-loader/index.js!./github.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fetch;
/* harmony export (immutable) */ __webpack_exports__["b"] = active;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_querystring__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_querystring__);

/**
 * Makes a fetch request if not yet cached.
 * Note: This function does not follow the Fetch API.
 *
 * @param {string} url - Request URL
 * @return {Promise} - A Promise that resolves to the response object, rejects on error
 */
function fetch(url, options) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const qs = options && options.params ? `?${__WEBPACK_IMPORTED_MODULE_0_querystring___default.a.stringify(options.params)}` : '';
        xhr.open('GET', `${url}${qs}`, true);
        // set headers
        if (options && options.headers) {
            for (let header in options.headers) {
                xhr.setRequestHeader(header, options.headers[header]);
            }
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const resp = JSON.parse(xhr.responseText);
                if (xhr.status === 200) {
                    resolve(resp);
                } else {
                    reject(resp);
                }
            }
        };
        xhr.onerror = () => {
            const resp = JSON.parse(xhr.responseText);
            reject(resp);
        };
        xhr.send();
    });
}
function active(compare, className) {
    if (compare) {
        return className;
    }
}

/***/ })

},[221]);