import{_ as u}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BnQvln9X.js";import{o as d,b as c,w as a,g as s,d as i,m as t,ad as n,v as f,x as m,T as p}from"./modules/vue-Bb5JUXOJ.js";import{I as k}from"./slidev/default-BN-VHn_O.js";import{u as g,f as h}from"./slidev/context-Dp0pZ1vr.js";import"./modules/unplugin-icons-OiqrM49x.js";import"./index-CxEnYQh6.js";import"./modules/shiki-CgH6uPBv.js";import"./slidev/TitleIcon.vue_vue_type_script_setup_true_lang-D4hgpOf-.js";const P={__name:"slides.md__slidev_19",setup(v){const{$clicksContext:r,$frontmatter:o}=g();return r.setup(),(B,l)=>{const e=u;return d(),c(k,f(m(p(h)(p(o),18))),{default:a(()=>[l[2]||(l[2]=s("h1",null,"渲染順序 (DFS) vs 觸摸檢測 (Reverse DFS)",-1)),l[3]||(l[3]=s("ul",null,[s("li",null,"觸摸檢測的順序與渲染順序相反")],-1)),i(e,t({},{title:"",ranges:[]}),{default:a(()=>[...l[0]||(l[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"├─ Traversal：Scene Graph DFS（關鍵）")]),n(`
`),s("span",{class:"line"},[s("span",null,"│   │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│   ├─ Node A")]),n(`
`),s("span",{class:"line"},[s("span",null,"│   │   ├─ A1")]),n(`
`),s("span",{class:"line"},[s("span",null,"│   │   └─ A2")]),n(`
`),s("span",{class:"line"},[s("span",null,"│   │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│   ├─ Node B")]),n(`
`),s("span",{class:"line"},[s("span",null,"│   │   ├─ B1")]),n(`
`),s("span",{class:"line"},[s("span",null,"│   │   └─ B2")]),n(`
`),s("span",{class:"line"},[s("span",null,"│   │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│   └─ Node C")])])],-1)])]),_:1},16),i(e,t({},{title:"",ranges:[]}),{default:a(()=>[...l[1]||(l[1]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"Render（畫）        HitTest（點）")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"A                  A（最後檢查）")]),n(`
`),s("span",{class:"line"},[s("span",null,"A1                 A1")]),n(`
`),s("span",{class:"line"},[s("span",null,"A2                 A2")]),n(`
`),s("span",{class:"line"},[s("span",null,"B                  B")]),n(`
`),s("span",{class:"line"},[s("span",null,"B1                 B1")]),n(`
`),s("span",{class:"line"},[s("span",null,"B2                 B2")]),n(`
`),s("span",{class:"line"},[s("span",null,"C                  C（最先檢查）// 從 `Canvas` 開始，**倒過來遍歷**子節點（從 SiblingIndex 大的開始）")])])],-1)])]),_:1},16)]),_:1},16)}}};export{P as default};
