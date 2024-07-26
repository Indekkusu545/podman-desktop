"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49867],{19142:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=s(24246),i=s(71670);const a={},r="Function: statsContainer()",o={id:"namespaces/containerEngine/functions/statsContainer",title:"Function: statsContainer()",description:"statsContainer(engineId, id, callback): Promise\\",source:"@site/api/namespaces/containerEngine/functions/statsContainer.md",sourceDirName:"namespaces/containerEngine/functions",slug:"/namespaces/containerEngine/functions/statsContainer",permalink:"/api/namespaces/containerEngine/functions/statsContainer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"startPod",permalink:"/api/namespaces/containerEngine/functions/startPod"},next:{title:"stopContainer",permalink:"/api/namespaces/containerEngine/functions/stopContainer"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"function-statscontainer",children:"Function: statsContainer()"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"statsContainer"}),"(",(0,t.jsx)(e.code,{children:"engineId"}),", ",(0,t.jsx)(e.code,{children:"id"}),", ",(0,t.jsx)(e.code,{children:"callback"}),"): ",(0,t.jsx)(e.code,{children:"Promise"}),"<",(0,t.jsx)(e.a,{href:"/api/classes/Disposable",children:(0,t.jsx)(e.code,{children:"Disposable"})}),">"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Get the streamed stats of a running container."}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(e.p,{children:["\u2022 ",(0,t.jsx)(e.strong,{children:"engineId"}),": ",(0,t.jsx)(e.code,{children:"string"})]}),"\n",(0,t.jsxs)(e.p,{children:["the id of the engine managing the container, obtained from the result of ",(0,t.jsx)(e.a,{href:"/api/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u2022 ",(0,t.jsx)(e.strong,{children:"id"}),": ",(0,t.jsx)(e.code,{children:"string"})]}),"\n",(0,t.jsxs)(e.p,{children:["the id or name of the container on this engine, obtained from the result of ",(0,t.jsx)(e.a,{href:"/api/namespaces/containerEngine/functions/listContainers",children:"containerEngine.listContainers"})," or as the result of ",(0,t.jsx)(e.a,{href:"/api/namespaces/containerEngine/functions/createContainer",children:"containerEngine.createContainer"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u2022 ",(0,t.jsx)(e.strong,{children:"callback"})]}),"\n",(0,t.jsx)(e.p,{children:"the function called when container stats info are emitted."}),"\n",(0,t.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Promise"}),"<",(0,t.jsx)(e.a,{href:"/api/classes/Disposable",children:(0,t.jsx)(e.code,{children:"Disposable"})}),">"]}),"\n",(0,t.jsxs)(e.p,{children:["A Promise resolving a ",(0,t.jsx)(e.a,{href:"/api/classes/Disposable",children:"Disposable"})," that unregister the callback when called."]}),"\n",(0,t.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(e.p,{children:"Here is a usage example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"const disposable = await statsContainer('engineId', 'containerId', (stats: ContainerStatsInfo): void => {\n console.log('CPU Usage', stats.cpu_stats.cpu_usage.total_usage);\n});\n\n// When no longer needed\ndisposable.dispose();\n"})}),"\n",(0,t.jsx)(e.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/containers/podman-desktop/blob/3697aa8a94907c039b0af87696558032a3ad5989/packages/extension-api/src/extension-api.d.ts#L3527",children:"packages/extension-api/src/extension-api.d.ts:3527"})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},71670:(n,e,s)=>{s.d(e,{Z:()=>o,a:()=>r});var t=s(27378);const i={},a=t.createContext(i);function r(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);