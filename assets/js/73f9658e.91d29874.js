"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61305],{34683:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=i(24246),t=i(71670);const a={},r="Function: pushImage()",c={id:"namespaces/containerEngine/functions/pushImage",title:"Function: pushImage()",description:"pushImage(engineId, imageId, callback, authInfo?): Promise\\",source:"@site/api/namespaces/containerEngine/functions/pushImage.md",sourceDirName:"namespaces/containerEngine/functions",slug:"/namespaces/containerEngine/functions/pushImage",permalink:"/api/namespaces/containerEngine/functions/pushImage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"pullImage",permalink:"/api/namespaces/containerEngine/functions/pullImage"},next:{title:"removeManifest",permalink:"/api/namespaces/containerEngine/functions/removeManifest"}},o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"function-pushimage",children:"Function: pushImage()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"pushImage"}),"(",(0,s.jsx)(n.code,{children:"engineId"}),", ",(0,s.jsx)(n.code,{children:"imageId"}),", ",(0,s.jsx)(n.code,{children:"callback"}),", ",(0,s.jsx)(n.code,{children:"authInfo"}),"?): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Push an image to a registry."}),"\n",(0,s.jsxs)(n.p,{children:["If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, ",(0,s.jsx)(n.code,{children:"registry.example.com/myimage:latest"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"engineId"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.p,{children:["the id of the engine managing the image, obtained from the result of ",(0,s.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/listImages",children:"containerEngine.listImages"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"imageId"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.p,{children:["the id of the image on this engine, obtained from the result of ",(0,s.jsx)(n.a,{href:"/api/namespaces/containerEngine/functions/listImages",children:"containerEngine.listImages"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"callback"})]}),"\n",(0,s.jsxs)(n.p,{children:["the function called when new logs are emitted or new events happen on the stream. The value of ",(0,s.jsx)(n.code,{children:"name"})," can be either ",(0,s.jsx)(n.code,{children:"data"}),"(and ",(0,s.jsx)(n.code,{children:"data"})," contains the logs), or ",(0,s.jsx)(n.code,{children:"end"})," indicating the end of the stream, or ",(0,s.jsx)(n.code,{children:"first-message"})," indicating no data has been emitted yet on the stream."]}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"authInfo?"}),": ",(0,s.jsx)(n.a,{href:"/api/interfaces/ContainerAuthInfo",children:(0,s.jsx)(n.code,{children:"ContainerAuthInfo"})})]}),"\n",(0,s.jsx)(n.p,{children:"Authentication credentials"}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/86c7ee8b7dd09225a0b59dcfcf535021664bc48f/packages/extension-api/src/extension-api.d.ts#L3590",children:"packages/extension-api/src/extension-api.d.ts:3590"})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(27378);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);