import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CZm4yJsB.js";import{o as r,b as c,w as a,g as s,d,m as u,ad as n,v as f,x as m,T as e}from"./modules/vue-Bb5JUXOJ.js";import{I as h}from"./slidev/default-DP36LeSx.js";import{u as P,f as g}from"./slidev/context-r1BROf6b.js";import"./modules/unplugin-icons-OiqrM49x.js";import"./index-DcLTrcyU.js";import"./modules/shiki-CgH6uPBv.js";import"./slidev/TitleIcon.vue_vue_type_script_setup_true_lang-D4hgpOf-.js";const E={__name:"slides.md__slidev_49",setup(_){const{$clicksContext:t,$frontmatter:o}=P();return t.setup(),(C,l)=>{const i=p;return r(),c(h,f(m(e(g)(e(o),48))),{default:a(()=>[l[1]||(l[1]=s("h1",null,"One-way platform",-1)),d(i,u({},{title:"",ranges:["all","6-8","11-25","22-25"]}),{default:a(()=>[...l[0]||(l[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"@ccclass('OneWayPlatform')")]),n(`
`),s("span",{class:"line"},[s("span",null,"export class OneWayPlatform extends Component {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    start() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        let collider = this.getComponent(Collider2D);")]),n(`
`),s("span",{class:"line"},[s("span",null,"        if (collider) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"            // 💡 註解：不監聽BEGIN_CONTACT，因為只在重疊的第一幀觸發容易出事。")]),n(`
`),s("span",{class:"line"},[s("span",null,"            // 必須監聽 PRE_SOLVE，因為每幀都要重新決定是否穿透")]),n(`
`),s("span",{class:"line"},[s("span",null,"            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);")]),n(`
`),s("span",{class:"line"},[s("span",null,"        }")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    onPreSolve(self: Collider2D, other: Collider2D, contact: IPhysics2DContact) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        // 1. 獲取角色和平台的當前世界座標")]),n(`
`),s("span",{class:"line"},[s("span",null,"        const playerPos = other.node.worldPosition;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        const platformPos = self.node.worldPosition;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        // 2. 獲取平台的高度（假設碰撞體是矩形，拿尺寸的一半）")]),n(`
`),s("span",{class:"line"},[s("span",null,"        const platformHalfHeight = self.node.getComponent(UITransform).contentSize.height / 2;")]),n(`
`),s("span",{class:"line"},[s("span",null,"        ")]),n(`
`),s("span",{class:"line"},[s("span",null,"        // 3. 判斷邏輯：如果玩家中心點低於平台頂部，則穿透")]),n(`
`),s("span",{class:"line"},[s("span",null,"        if (playerPos.y < platformPos.y + platformHalfHeight) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"            contact.disabled = true; // 💡僅影響此幀,  💡IPhysics2DContact != rigidBocy.EnableContact")]),n(`
`),s("span",{class:"line"},[s("span",null,"        }")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])],-1)])]),_:1},16)]),_:1},16)}}};export{E as default};
