(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(5),r=a.n(s),i=(a(15),a(16),a(6)),o=a(7),b=a(8),l=a(10),d=a(9),j=a(2),u=a.n(j),O=a(4),h=a.n(O),p=a(20),x=a(0),_=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(x.jsx)("div",{className:h.a.wrap,children:t.map((function(e){return Object(x.jsx)("button",{type:"button",className:h.a.btn,onClick:function(){return a(e)},children:e.slice(0,1).toUpperCase()+e.slice(1)},Object(p.a)())}))})};function m(e){var t=e.message;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("p",{children:t})})}var f=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.percentage;return Object(x.jsx)(x.Fragment,{children:c>0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("li",{className:"itemStat",children:["Good: ",Object(x.jsx)("span",{className:"countStat",children:t})]}),Object(x.jsxs)("li",{className:"itemStat",children:["Neutral: ",Object(x.jsx)("span",{className:"countStat",children:a})]}),Object(x.jsxs)("li",{className:"itemStat",children:["Bad: ",Object(x.jsx)("span",{className:"countStat",children:n})]}),Object(x.jsxs)("li",{className:"itemStat",children:["Total: ",Object(x.jsx)("span",{className:"countStat",children:c})]}),Object(x.jsxs)("li",{className:"itemStat",children:["Positive feedback:",Object(x.jsxs)("span",{className:"countStat",children:[" ",s," %"]})]})]}):Object(x.jsx)(m,{message:"No feedback given"})})};function k(e){var t=e.title,a=e.children;return Object(x.jsxs)("section",{children:["Please leave feedback"===t?Object(x.jsx)("h2",{children:"Please leave feedback"}):Object(x.jsx)("h3",{children:"Statistics"}),a]})}var v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=t+e.neutral+e.bad,n=Math.round(100*t/a);return Object(x.jsx)("div",{className:u.a.container,children:Object(x.jsxs)("div",{className:u.a.feedback,children:[Object(x.jsx)(k,{title:"Please leave feedback",children:Object(x.jsx)(_,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(x.jsx)(k,{title:"Statistics",children:Object(x.jsx)("ul",{className:u.a.listStat,children:Object(x.jsx)(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:a,percentage:n})})})]})})}}]),a}(c.a.Component);var N=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(v,{})})};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={container:"Counter_container__1-xef",listStat:"Counter_listStat__1XZDJ",feedback:"Counter_feedback__wrnal"}},4:function(e,t,a){e.exports={wrap:"FeedbackOptions_wrap__xBZmM",btn:"FeedbackOptions_btn__XZOAQ",btnGood:"FeedbackOptions_btnGood__22odt FeedbackOptions_btn__XZOAQ",btnNeutral:"FeedbackOptions_btnNeutral__25tJM FeedbackOptions_btn__XZOAQ",btnBad:"FeedbackOptions_btnBad__2hfk2 FeedbackOptions_btn__XZOAQ"}}},[[18,1,2]]]);
//# sourceMappingURL=main.5c6e05bc.chunk.js.map