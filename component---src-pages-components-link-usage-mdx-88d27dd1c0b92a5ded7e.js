"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[88365],{28399:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(67294),i=n(88650),l=n.n(i),s=n(1597),o=n(64905),r=n(68636),c=n(75900),d=n.n(c);var p=e=>{let{title:t,theme:n,tabs:i=[]}=e;return a.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:i}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:o,branch:r}=n||i,c=`${l}/edit/${r}${o}/src/pages${t}`;return l?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},k=n(56328),h=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,i=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),o=t===i,r=new RegExp(`${i}/?(#.*)?$`),c=n.replace(r,t);return a.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},a.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(a.Component);var u=g,b=n(17680),f=n(75387),A=n(50041);var y=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(A.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:n,location:i,Title:c}=e;const{frontmatter:d={},relativePagePath:h,titleType:g}=t,{tabs:A,title:w,theme:v,description:N,keywords:x,date:E}=d,{interiorTheme:T}=(0,f.Z)(),{site:{pathPrefix:L}}=(0,s.useStaticQuery)("2456312558"),C=L?i.pathname.replace(L,""):i.pathname,_=A?C.split("/").filter(Boolean).slice(-1)[0]||l()(A[0],{lower:!0}):"",P=v||T;return a.createElement(r.Z,{tabs:A,homepage:!1,theme:P,pageTitle:w,pageDescription:N,pageKeywords:x,titleType:g},a.createElement(p,{title:c?a.createElement(c,null):w,label:"label",tabs:A,theme:P}),A&&a.createElement(u,{title:w,slug:C,tabs:A,currentTab:_}),a.createElement(b.Z,{padded:!0},n,a.createElement(m,{relativePagePath:h}),a.createElement(y,{date:E})),a.createElement(k.Z,{pageContext:t,location:i,slug:C,tabs:A,currentTab:_}),a.createElement(o.Z,null))}},9159:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return f}});var a=n(45987),i=(n(67294),n(64983)),l=n(28399);const s=["components"],o={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=r("PageDescription"),d=r("AnchorLinks"),p=r("AnchorLink"),m=r("ComponentDemo"),k=r("ComponentVariant"),h=r("Row"),g=r("Column"),u={_frontmatter:o},b=l.Z;function f(e){let{components:t}=e,n=(0,a.Z)(e,s);return(0,i.kt)(b,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Links are used as navigational elements. They may appear on their own, within a\nsentence or paragraph, or directly following the content.")),(0,i.kt)(d,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"Overview"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Live demo"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Formatting"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Content"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Behaviors"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Link variants"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Modifiers"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Related"),(0,i.kt)(p,{mdxType:"AnchorLink"},"Feedback")),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("p",null,"Links are used as navigational elements and can be used on their own or inline\nwith text. They provide a lightweight option for navigation but like other\ninteractive elements, too many links will clutter a page and make it difficult\nfor users to identify their next steps. This is especially true for inline\nlinks, which should be used sparingly."),(0,i.kt)("h3",null,"When to use"),(0,i.kt)("p",null,"Use links when you want users to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to a different page within the application"),(0,i.kt)("li",{parentName:"ul"},"Navigate to an entirely different site"),(0,i.kt)("li",{parentName:"ul"},"Jump to an element on the same page"),(0,i.kt)("li",{parentName:"ul"},"Link to emails or phone numbers")),(0,i.kt)("h3",null,"When not to use"),(0,i.kt)("p",null,"Use a button instead of a link for actions that will change data or manipulate\nhow it is displayed, change a state, or trigger an action. Buttons should never\nbe used for navigational actions."),(0,i.kt)("h3",null,"Variants"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variant"),(0,i.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#standalone-link"},"Standalone")),(0,i.kt)("td",{parentName:"tr",align:null},"These links are the default link variant. They are used on their own or directly following content and they do not use underlines. They can be paired with an icon.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#inline-link"},"Inline")),(0,i.kt)("td",{parentName:"tr",align:null},"Inline links are used within a sentence or paragraph and are styled with an underline. They should not be paired with an icon.")))),(0,i.kt)("h2",null,"Live demo"),(0,i.kt)(m,{components:[{id:"link",label:"Link"}],mdxType:"ComponentDemo"},(0,i.kt)(k,{id:"link",knobs:{Link:["disabled","inline"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-link--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-link--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvlink--a","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-link--default"},mdxType:"ComponentVariant"},'\n  <Link href="#">Link</Link>\n  ')),(0,i.kt)("h2",null,"Formatting"),(0,i.kt)("h3",null,"Anatomy"),(0,i.kt)(h,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAAYElEQVQoz2P4T2XAQHMD//37B6eR2RS5ENkAdMMImY3ThX+//fz/79cfLBaQauBfiI4Puy///37tyf8fP//+f/3x3/93n//9//OXcBDgDsO/iDD8T4kLaRaGVI3lQZWwARghaz7zYsarAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"link anatomy image",title:"link anatomy image",src:"/static/94b574fa4ce1ded04c26ff50acdf45b4/3cbba/01_link_anatomy_608.png",srcSet:["/static/94b574fa4ce1ded04c26ff50acdf45b4/7fc1e/01_link_anatomy_608.png 288w","/static/94b574fa4ce1ded04c26ff50acdf45b4/a5df1/01_link_anatomy_608.png 576w","/static/94b574fa4ce1ded04c26ff50acdf45b4/3cbba/01_link_anatomy_608.png 1152w","/static/94b574fa4ce1ded04c26ff50acdf45b4/92c65/01_link_anatomy_608.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Label:")," Communicates what is being linked to.")),(0,i.kt)("h3",null,"Sizing"),(0,i.kt)("p",null,"There are three size variants for the link component: small, medium, and large.\nThe link size should match the type size of the text it is inline with. When\nusing links apart from other content, the link size should match the default\nbody copy size of the page."),(0,i.kt)(h,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABRElEQVQoz2NgQAP3799nePDgAYjmgNJgPjIbWY4goNhA/qR/KHjl/hcMd+6CFD/gePn0HgMDw38GweR/YPz//w6G50/ugeVu3nnAEN77GUM/poD8f4b/X28xPHhwn2PNgecMagW/4XJmlT8YNh15Bpb7//8yA0Pkf7wGsvAn/WOVz/nD0L/+NciVHCDXccb/Z+ZP+sfOn/SPjSX6PyNIDCRXNPcDg1DKX5AeLpAcNgO5+ZP+8Ymm/WOK6v/McO3WQw4Gw/8MPAlgw4T5k/4JcMf/Z2HQ+s9w9eZDDsvqHwwCyWA9kvxJ/3j4cHrZ7T/D//9XGB4+uM8xdfMrBrnsP3A59YJfDLO2vWJ4+BDk5Y0MbLEIL+M0MH/OB4YrNx6CA/7Px9sMDBL/GQSS/oExyLs/398Byx278JhBv/QnpoGDPh0CAObSTilfCwHiAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Examples of link sizes",title:"Examples of link sizes",src:"/static/6e81dc47bfd743b79750187d8c9147f9/3cbba/03_link_size_608.png",srcSet:["/static/6e81dc47bfd743b79750187d8c9147f9/7fc1e/03_link_size_608.png 288w","/static/6e81dc47bfd743b79750187d8c9147f9/a5df1/03_link_size_608.png 576w","/static/6e81dc47bfd743b79750187d8c9147f9/3cbba/03_link_size_608.png 1152w","/static/6e81dc47bfd743b79750187d8c9147f9/92c65/03_link_size_608.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Content"),(0,i.kt)("p",null,"We recommend links be three words or fewer. Because links take users to a new\nlocation, it is important that their labels accurately reflect the content users\nwill find at the link destination. Use meaningful labels for links and avoid\nterms like “click here” or the web address itself."),(0,i.kt)("p",null,"Links need to be clear enough to be understood by the user, but should not be so\nlong that the text wraps unless used inline."),(0,i.kt)("p",null,"For further content guidance, see IBM Accessibility on\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/able/requirements/requirements/#2_4_4"},"link purpose"),"."),(0,i.kt)("h2",null,"Behaviors"),(0,i.kt)("h3",null,"Interactions"),(0,i.kt)("h4",null,"Mouse"),(0,i.kt)("p",null,"Users can open a link by clicking anywhere along the link text or on the\nassociated icon."),(0,i.kt)("h4",null,"Keyboard"),(0,i.kt)("p",null,"Users can open a link by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," while the link has focus. For\nadditional keyboard interactions, see the Accessibility tab."),(0,i.kt)("h4",null,"Screen readers"),(0,i.kt)("p",null,"VoiceOver: Users can open a link by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Control-Option-Space")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,i.kt)("p",null,"JAWS: Users can open a link by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,i.kt)("p",null,"NVDA: Users can open a link by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,i.kt)("p",null,"For additional information, see\n",(0,i.kt)("a",{parentName:"p",href:"accessibility/#macos-screen-reader-tests"},"screen reader tests"),"."),(0,i.kt)("h2",null,"Link variants"),(0,i.kt)("h3",null,"Standalone link"),(0,i.kt)("p",null,"Standalone links are used on their own directly following content. They should\nnot be used within sentences or paragraphs. Standalone links are the default\nlink style for Carbon and only have an underline in the hover state."),(0,i.kt)("p",null,"The standalone link component can be paired with an icon. Use 16px icons and\nplace them to the right of the link. Icons should always be the same color as\nthe link text."),(0,i.kt)(h,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAASElEQVQoz2P4T2XAQHcD//2D0f/AGFmMZAOxafyHzzRSDER14T/SDYRp+vTt3/+XH/79f/fl3/+fvykwkOZeRo2gwZRsBtxAAMOjbC6dMK0NAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"link with icon example",title:"link with icon example",src:"/static/0d2d27d12fc6f5cf0492f91fa343ffd2/3cbba/02_link_icon_608.png",srcSet:["/static/0d2d27d12fc6f5cf0492f91fa343ffd2/7fc1e/02_link_icon_608.png 288w","/static/0d2d27d12fc6f5cf0492f91fa343ffd2/a5df1/02_link_icon_608.png 576w","/static/0d2d27d12fc6f5cf0492f91fa343ffd2/3cbba/02_link_icon_608.png 1152w","/static/0d2d27d12fc6f5cf0492f91fa343ffd2/92c65/02_link_icon_608.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Inline link"),(0,i.kt)("p",null,"Inline links are used in sentences or paragraphs of text. The inline link\nbehaves the same as the standalone link but it is styled with an underline. This\nhelps differentiate them from the text they are placed next to and makes it\nclear users can interact with them."),(0,i.kt)("p",null,"Inline links should not be used on their own and should not be paired with\nicons."),(0,i.kt)(h,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.7638888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAACnElEQVQ4y5VSy07jMBT1an4h8xGwQAIJ2LCbVTW/A3skqKBs+BEkHgVSQPAftM2jaRJXJUlDbPJw7uiYtmqAzVg6Ovfa18f3Ydbr9Zhpmuzq6krj4uKC3dzcsNvbW3Z5ealtoNvt6nPY2L++vtYxX8FeXl7Y8/PzL9M0/5im+bfb7bZ6vV7r6empdX9/33p4eNA+GD7su7u7Zczj42MDbG1tja2vr//e3d1Nt7e3aW9vj7a2tmhjY4Pgb25uah8MH/bOzs4y5ivY/v4+Ozg4MNrtdtjpdOj8/Lw6OTlRR0dHqtPpaD4+PtZ8enqq7bOzM9Vut9Xh4eE3MCICDCLiQgjK81wJIeo0TWsi+m+wLMuYEMIQQnDOOU2nUzWdTsGEB8qypKIoNPI8X9pVVS15Fayua50hBG3bJtd1leM4YIL/+vpKg8FA2/1+n3AGhv/29kZYdV0v0RDERcuy1Jw1hsOhFoENITyAPcRgP03ThihL0xQwyrLkSFkppcA4VEo1sLqHGLQDvLpYWZaAIaXknueR53lqMpl8K+UnLFajZCklYOR5zqMoojiOFXoTxzHNfUqSRDOAQfwktKhKZ1hVlc7Q933inKvxeExhGBIyBQNBECB78v2AEIc9PIjJL8R1yUopDEYPBZMdeZ6esuO6+uJi2hCzrCHZlkWOA3+kM0c/G0MRQjIhP4wiz/l7mlCSRGqWRDSbfZaJKS54lgqKZ0Cm7XpFbDmUKs+YKjJDfhTcmwiyxjPlhhkF4YQC318pOyAvjGgwzsjlkkYhHooaGWrBWhWM6sIQ8oP37YAsN1QD2yfH9Wg0L/fzP1pk2xa5rk3WcKDL//ob5j2sWT3/2I6NHg2VbX/2Svd0NNKCEEZvbcehMORaTEr5reR/sXx3MKF1xJ8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"inline link example",title:"inline link example",src:"/static/531219dbb15ca3fdae394fd7dc06e9b0/3cbba/03_link_inline_608.png",srcSet:["/static/531219dbb15ca3fdae394fd7dc06e9b0/7fc1e/03_link_inline_608.png 288w","/static/531219dbb15ca3fdae394fd7dc06e9b0/a5df1/03_link_inline_608.png 576w","/static/531219dbb15ca3fdae394fd7dc06e9b0/3cbba/03_link_inline_608.png 1152w","/static/531219dbb15ca3fdae394fd7dc06e9b0/92c65/03_link_inline_608.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Modifiers"),(0,i.kt)("h3",null,"Visited style"),(0,i.kt)("p",null,"By default, the link component does not use a visited style. Visited links\nindicate that a user has already opened the link so they can be a helpful\nindicator during task completion. Visited styles should be used sparingly\nbecause they often clutter the the page and add further visual noise as users\nare trying to navigate a product. They can be used if it is important that a\nuser knows they have already clicked on a link."),(0,i.kt)("h3",null,"Links that trigger actions"),(0,i.kt)("p",null,"Some links trigger actions to aid task completion in addition to navigation.\nThese links should still serve a navigation purpose. A common example is linking\nphone numbers so clicking the website automatically opens and calls the phone\nnumber when clicked. The label and any accompanying icons should make it clear\nwhat action will be triggered and where the user will be directed."),(0,i.kt)("h2",null,"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.carbondesignsystem.com/components/button/usage/"},"Button component"))),(0,i.kt)("h2",null,"Feedback"),(0,i.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}f.isMDXComponent=!0}}]);