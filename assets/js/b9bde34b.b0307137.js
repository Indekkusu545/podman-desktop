"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5468],{5318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,h=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(5773),o=(n(7378),n(5318));const i={sidebar_position:10,title:"Working with OpenShift",description:"Working with OpenShift",keywords:["podman desktop","podman","containers","migrating","kubernetes","openshift"],tags:["migrating-to-kubernetes","openshift"]},a="Working with OpenShift",s={unversionedId:"kubernetes/openshift/index",id:"kubernetes/openshift/index",title:"Working with OpenShift",description:"Working with OpenShift",source:"@site/docs/kubernetes/openshift/index.md",sourceDirName:"kubernetes/openshift",slug:"/kubernetes/openshift/",permalink:"/docs/kubernetes/openshift/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/openshift/index.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"openshift",permalink:"/docs/tags/openshift"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Working with OpenShift",description:"Working with OpenShift",keywords:["podman desktop","podman","containers","migrating","kubernetes","openshift"],tags:["migrating-to-kubernetes","openshift"]},sidebar:"mySidebar",previous:{title:"Push an image to Kind",permalink:"/docs/kubernetes/kind/pushing-an-image-to-kind"},next:{title:"Developer Sandbox",permalink:"/docs/kubernetes/openshift/configuring-access-to-a-developer-sandbox"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-openshift"},"Working with OpenShift"),(0,o.kt)("p",null,"With Podman Desktop, you can work on ",(0,o.kt)("a",{parentName:"p",href:"https://openshift.com/"},"OpenShift-powered")," Kubernetes clusters."),(0,o.kt)("p",null,"To get started, configure access to an OpenShift cluster, and optionally, create the cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"openshift/creating-an-openshift-local-cluster"},"Creating an OpenShift Local cluster"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"openshift/configuring-access-to-a-developer-sandbox"},"Configuring access to a Developer Sandbox"),".")))}u.isMDXComponent=!0}}]);