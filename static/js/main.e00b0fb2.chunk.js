(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),o=n(14),s=n.n(o),i=(n(23),n(17)),l=n(6),d=n(3),j=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(c.jsx)("button",{className:"btn",style:{backgroundColor:t},onClick:r,children:n})};j.defaultProps={color:"steelblue"};var u=j,b=function(e){var t=e.title,n=e.onButton,r=e.open;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)(u,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};b.defaultProps={title:"Task Tracker"};var O=b,h=n(16),x=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(c.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:r,children:[Object(c.jsxs)("h3",{children:[t.text," ",Object(c.jsx)(h.a,{onClick:n,style:{color:"red",cursor:"pointer"}})]}),Object(c.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)(x,{task:e,onDelete:function(){return n(e.id)},onToggle:function(){return r(e.id)}},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(r.useState)(""),a=Object(d.a)(n,2),o=a[0],s=a[1],i=Object(r.useState)(""),l=Object(d.a)(i,2),j=l[0],u=l[1],b=Object(r.useState)(!1),O=Object(d.a)(b,2),h=O[0],x=O[1];return Object(c.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:j,reminder:h}),s(""),u(""),x(!1)):alert("Please add a task")},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Task"}),Object(c.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){return s(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Day & time"}),Object(c.jsx)("input",{type:"text",placeholder:"Add date",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control form-control-check",children:[Object(c.jsx)("label",{children:"Set Reminder"}),Object(c.jsx)("input",{className:"btn btn-block",type:"checkbox",value:h,checked:h,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(c.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})},k=function(){return Object(c.jsx)("footer",{children:Object(c.jsx)("p",{children:" Carlos F. Yago"})})};n(7);var p=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)([{id:1,text:"React",day:"Feb 6th at 1:15pm",reminder:!0},{id:2,text:"Node.js",day:"Feb 9th at 5:30pm",reminder:!0},{id:3,text:"Next.js",day:"Feb 10th at 11:30pm",reminder:!0},{id:4,text:"Resting API",day:"Feb 7th at 1:30pm",reminder:!1}]),s=Object(d.a)(o,2),j=s[0],u=s[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(O,{onButton:function(){a(!n)},open:n}),n&&Object(c.jsx)(f,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(l.a)(Object(l.a)({},e),{},{id:t});u([].concat(Object(i.a)(j),[n]))}}),j.length>0?Object(c.jsx)(m,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))},onToggle:function(e){u(j.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No tasks to show",Object(c.jsx)(k,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),g()}},[[29,1,2]]]);
//# sourceMappingURL=main.e00b0fb2.chunk.js.map