(this["webpackJsonpreact-tast-tracker"]=this["webpackJsonpreact-tast-tracker"]||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),o=n(19),s=n.n(o),i=(n(28),n(22)),j=n(12),l=n(8),d=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(c.jsx)("button",{className:"btn",style:{backgroundColor:t},onClick:r,children:n})};d.defaultProps={color:"steelblue"};var b=d,u=function(e){var t=e.title,n=e.onButton,r=e.open;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)(b,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};u.defaultProps={title:"Tast Tracker"};var h=u,O=n(21),x=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(c.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:r,children:[Object(c.jsxs)("h3",{children:[t.text," ",Object(c.jsx)(O.a,{onClick:n,style:{color:"red",cursor:"pointer"}})]}),Object(c.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)(x,{task:e,onDelete:function(){return n(e.id)},onToggle:function(){return r(e.id)}},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(r.useState)(""),a=Object(l.a)(n,2),o=a[0],s=a[1],i=Object(r.useState)(""),j=Object(l.a)(i,2),d=j[0],b=j[1],u=Object(r.useState)(!1),h=Object(l.a)(u,2),O=h[0],x=h[1];return Object(c.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:d,reminder:O}),s(""),b(""),x(!1)):alert("Please add a task")},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Task"}),Object(c.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){return s(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Day & time"}),Object(c.jsx)("input",{type:"text",placeholder:"Add date",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control form-control-check",children:[Object(c.jsx)("label",{children:"Set Reminder"}),Object(c.jsx)("input",{className:"btn btn-block",type:"checkbox",value:O,checked:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(c.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})},p=n(9),k=function(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)("p",{children:"Copyright \xa9"}),Object(c.jsx)(p.b,{to:"/about",children:"About"})]})},g=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Version 1.0.0"}),Object(c.jsx)(p.b,{to:"/",children:"Go back"})]})},v=n(2);var y=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)([{id:1,text:"React",day:"Feb 6th at 1:15pm",reminder:!0},{id:2,text:"Node.js",day:"Feb 9th at 5:30pm",reminder:!0},{id:3,text:"Next.js",day:"Feb 10th at 11:30pm",reminder:!0},{id:4,text:"Resting API",day:"Feb 7th at 1:30pm",reminder:!1}]),s=Object(l.a)(o,2),d=s[0],b=s[1],u=function(e){b(d.filter((function(t){return t.id!==e})))},O=function(e){b(d.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{reminder:!t.reminder}):t})))},x=function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(j.a)(Object(j.a)({},e),{},{id:t});b([].concat(Object(i.a)(d),[n]))};return Object(c.jsx)(p.a,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(h,{onButton:function(){a(!n)},open:n}),Object(c.jsx)(v.a,{path:"/",exact:!0,render:function(e){return Object(c.jsxs)(c.Fragment,{children:[n&&Object(c.jsx)(f,{onAdd:x}),d.length>0?Object(c.jsx)(m,{tasks:d,onDelete:u,onToggle:O}):"No tasks to show"]})}}),Object(c.jsx)(v.a,{path:"/about",component:g}),Object(c.jsx)(k,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),C()}},[[34,1,2]]]);
//# sourceMappingURL=main.5aae3861.chunk.js.map