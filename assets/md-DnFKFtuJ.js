import{_ as o}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BnQvln9X.js";import{o as r,b as c,w as l,g as s,d as u,m as d,ad as n,v as m,x as f,T as e}from"./modules/vue-Bb5JUXOJ.js";import{I as k}from"./slidev/default-BN-VHn_O.js";import{u as _,f as g}from"./slidev/context-Dp0pZ1vr.js";import"./modules/unplugin-icons-OiqrM49x.js";import"./index-CxEnYQh6.js";import"./modules/shiki-CgH6uPBv.js";import"./slidev/TitleIcon.vue_vue_type_script_setup_true_lang-D4hgpOf-.js";const N={__name:"slides.md__slidev_7",setup(x){const{$clicksContext:p,$frontmatter:i}=_();return p.setup(),(h,a)=>{const t=o;return r(),c(k,m(f(e(g)(e(i),6))),{default:l(()=>[a[1]||(a[1]=s("h2",null,"Destroy 時序",-1)),u(t,d({},{title:"",ranges:[]}),{default:l(()=>[...a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"[某一幀 update 中]")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),n(`
`),s("span",{class:"line"},[s("span",null,"node.destroy() 被呼叫")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),n(`
`),s("span",{class:"line"},[s("span",null,"(立刻發生)")]),n(`
`),s("span",{class:"line"},[s("span",null,"- node 被標記為「待銷毀」")]),n(`
`),s("span",{class:"line"},[s("span",null,"- isValid(node, true) → ❌")]),n(`
`),s("span",{class:"line"},[s("span",null,"- isValid(node) → 可能仍為 ✅")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),n(`
`),s("span",{class:"line"},[s("span",null,"(同一幀後續邏輯仍可能執行)")]),n(`
`),s("span",{class:"line"},[s("span",null,"- update / callback / 其他程式仍可能碰到這個 node ⚠️")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),n(`
`),s("span",{class:"line"},[s("span",null,"[該幀結束前]")]),n(`
`),s("span",{class:"line"},[s("span",null,"- 引擎統一處理銷毀佇列")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),n(`
`),s("span",{class:"line"},[s("span",null,"(真正銷毀)")]),n(`
`),s("span",{class:"line"},[s("span",null,"- onDisable()")]),n(`
`),s("span",{class:"line"},[s("span",null,"- onDestroy()")]),n(`
`),s("span",{class:"line"},[s("span",null,"- 從場景樹移除")]),n(`
`),s("span",{class:"line"},[s("span",null,"- 記憶體釋放（由 GC 處理）")])])],-1)])]),_:1},16),a[2]||(a[2]=n(" - ✅ **DO**: 使用 `isValid(node, true)` 檢查銷毀後的節點。 ",-1))]),_:1},16)}}};export{N as default};
