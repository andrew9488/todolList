(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{102:function(t,e,a){t.exports=a(133)},107:function(t,e,a){},132:function(t,e,a){},133:function(t,e,a){"use strict";a.r(e);var r={};a.r(r),a.d(r,"tasksSelector",(function(){return b}));var n={};a.r(n),a.d(n,"appStatusSelector",(function(){return R})),a.d(n,"isInitializedSelector",(function(){return F}));var o={};a.r(o),a.d(o,"todoListsSelector",(function(){return Q}));var i={};a.r(i),a.d(i,"isLoggedInSelector",(function(){return vt}));var s=a(0),c=a.n(s),d=a(9),u=a.n(d);a(107),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l,p,f=a(20),m=a(10),b=function(t){return t.tasks},v=a(54),h=a(7),g=a.n(h),k=a(14),L=a(83),y=a.n(L);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(l||(l={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.High=2]="High",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(p||(p={}));var E=y.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.1/",headers:{"API-KEY":"daffbeb3-8fec-4c34-9d8d-6fcb41a16549"}}),j=function(){return E.get("todo-lists")},O=function(t){return E.post("todo-lists",{title:t})},I=function(t){return E.delete("todo-lists/".concat(t))},x=function(t,e){return E.put("todo-lists/".concat(t),{title:e})},w=function(t){return E.get("todo-lists/".concat(t,"/tasks"))},C=function(t,e){return E.post("todo-lists/".concat(t,"/tasks"),{title:e})},S=function(t,e,a){return E.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},T=function(t,e){return E.delete("todo-lists/".concat(t,"/tasks/").concat(e))},A=function(){return E.get("auth/me")},z=function(t){return E.post("auth/login",t)},P=function(){return E.delete("auth/login")},R=function(t){return t.app.status},F=function(t){return t.app.isInitialized},N=a(16),D=Object(N.b)("auth/login",function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(K({status:"loading"})),t.prev=1,t.next=4,z(e);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(K({status:"succeeded"})),t.abrupt("return",{isLoggedIn:!0});case 10:return t.abrupt("return",X(r.data,a));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",Y(t.t0,a));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),M=Object(N.b)("auth/logout",function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(K({status:"loading"})),t.prev=1,t.next=4,P();case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(K({status:"succeeded"})),t.abrupt("return",{isLoggedIn:!1});case 10:return t.abrupt("return",X(r.data,a));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",Y(t.t0,a));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),V=Object(N.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedIn:function(t,e){t.isLoggedIn=e.payload.isLoggedIn}},extraReducers:function(t){t.addCase(D.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn})),t.addCase(M.fulfilled,(function(t,e){t.isLoggedIn=e.payload.isLoggedIn}))}}),W={login:D,logout:M},B=V.actions.setIsLoggedIn,U=Object(N.b)("application/initializeApp",function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(K({status:"loading"})),t.prev=1,t.next=4,A();case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}a.dispatch(B({isLoggedIn:!0})),a.dispatch(K({status:"succeeded"})),t.next=11;break;case 10:return t.abrupt("return",X(r.data,a));case 11:return t.abrupt("return",{isInitialized:!0});case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",Y(t.t0,a));case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,a){return t.apply(this,arguments)}}()),q=Object(N.c)({name:"app",initialState:{status:"loading",error:null,isInitialized:!1},reducers:{setAppStatus:function(t,e){t.status=e.payload.status},setAppError:function(t,e){t.error=e.payload.error}},extraReducers:function(t){t.addCase(U.fulfilled,(function(t,e){t.isInitialized=e.payload.isInitialized}))}}),H=q.actions,K=H.setAppStatus,Z=(H.setAppError,{initializeApp:U}),J=Object(m.a)(Object(m.a)({},Z),q.actions),$=q.reducer,_=J.setAppError,G=J.setAppStatus,X=function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a&&e.dispatch(_({error:t.messages.length?t.messages[0]:"Some error occurred"})),e.dispatch(G({status:"failed"})),e.rejectWithValue({errors:t.messages,fieldsErrors:t.fieldsErrors})},Y=function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a&&e.dispatch(_({error:t.message?t.message:"Some error occurred"})),e.dispatch(G({status:"failed"})),e.rejectWithValue({errors:[t.message],fieldsErrors:void 0})},Q=function(t){return t.todoLists},tt=Object(N.b)("todoLists/fetchTodoLists",function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(K({status:"loading"})),t.prev=1,t.next=4,j();case 4:return r=t.sent,a.dispatch(K({status:"succeeded"})),t.abrupt("return",{todoLists:r.data});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",Y(t.t0,a));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()),et=Object(N.b)("todoLists/removeTodoList",function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(K({status:"loading"})),a.dispatch(it({todoListId:e,entityStatus:"loading"})),t.prev=2,t.next=5,I(e);case 5:if(0!==(r=t.sent).data.resultCode){t.next=11;break}return a.dispatch(K({status:"succeeded"})),t.abrupt("return",{id:e});case 11:return t.abrupt("return",X(r.data,a));case 12:t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(2),t.abrupt("return",Y(t.t0,a));case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e,a){return t.apply(this,arguments)}}()),at=Object(N.b)("todoLists/addTodoList",function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(K({status:"loading"})),t.prev=1,t.next=4,O(e);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(K({status:"succeeded"})),t.abrupt("return",{todoList:r.data.data.item});case 10:return t.abrupt("return",X(r.data,a,!1));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",Y(t.t0,a));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),rt=Object(N.b)("todoLists/changeTodoListTitle",function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(K({status:"loading"})),t.prev=1,t.next=4,x(e.todoListId,e.title);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(K({status:"succeeded"})),t.abrupt("return",{title:e.title,id:e.todoListId});case 10:return t.abrupt("return",X(r.data,a,!1));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",Y(t.t0,a));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),nt=Object(N.c)({name:"todoLists",initialState:[],reducers:{changeFilterTodoList:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));-1!==a&&(t[a].filter=e.payload.filter)},changeTodoListEntityStatus:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todoListId}));-1!==a&&(t[a].entityStatus=e.payload.entityStatus)}},extraReducers:function(t){t.addCase(tt.fulfilled,(function(t,e){return e.payload.todoLists.map((function(t){return Object(m.a)(Object(m.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})),t.addCase(et.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));-1!==a&&t.splice(a,1)})),t.addCase(at.fulfilled,(function(t,e){t.unshift(Object(m.a)(Object(m.a)({},e.payload.todoList),{},{filter:"all",entityStatus:"idle"}))})),t.addCase(rt.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));-1!==a&&(t[a].title=e.payload.title)}))}}),ot=nt.actions,it=(ot.changeFilterTodoList,ot.changeTodoListEntityStatus),st={fetchTodoLists:tt,removeTodoList:et,addTodoList:at,changeTodoListTitle:rt},ct=a(171),dt=a(134),ut=a(45),lt=a(181),pt=a(169),ft=a(170),mt=c.a.memo((function(t){var e=t.addItem,a=t.title,r=t.disabled,n=void 0!==r&&r,o=Object(s.useState)(""),i=Object(ut.a)(o,2),d=i[0],u=i[1],l=Object(s.useState)(null),p=Object(ut.a)(l,2),f=p[0],m=p[1],b=function(){var t=Object(k.a)(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""!==(a=d.trim())?e(a,{setError:m,setValue:u}):m("Title is required!");case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.a.createElement("div",{style:{display:"flex",alignItems:"center",position:"relative"}},c.a.createElement("div",{style:{width:"218px"}},c.a.createElement(lt.a,{variant:"outlined",value:d,onChange:function(t){u(t.currentTarget.value),m(null)},onKeyPress:function(t){null!==f&&m(null),"Enter"===t.key&&b().then()},onBlur:function(){m(null)},helperText:f,label:a,error:!!f,disabled:n})),c.a.createElement(pt.a,{onClick:b,color:"primary",disabled:n,style:{marginLeft:"14px",position:"absolute",right:"0px",top:"0px"}},c.a.createElement(ft.a,null)))})),bt=a(15),vt=function(t){return t.auth.isLoggedIn},ht=a(186),gt=a(168),kt=a(172),Lt=a(187),yt=a(183),Et=a(173),jt=a(90),Ot=a(21),It=function(){return Object(f.b)()};function xt(t){var e=It();return Object(s.useMemo)((function(){return Object(Ot.b)(t,e)}),[])}var wt=function(){var t=Object(f.c)(i.isLoggedInSelector),e=It(),a=Object(jt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Must be 3 characters or more"):e.password="Required",e},onSubmit:function(){var t=Object(k.a)(g.a.mark((function t(a,r){var n,o,i,s,c,d;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Ct.login(a),t.next=3,e(n);case 3:o=t.sent,Ct.login.rejected.match(o)&&(null===(i=o.payload)||void 0===i||null===(s=i.fieldsErrors)||void 0===s?void 0:s.length)&&(d=null===(c=o.payload)||void 0===c?void 0:c.fieldsErrors[0],r.setFieldError(d.field,d.error));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()});return t?c.a.createElement(bt.a,{to:"/"}):c.a.createElement(ct.a,{container:!0,justify:"center"},c.a.createElement(ct.a,{item:!0,xs:4},c.a.createElement("form",{onSubmit:a.handleSubmit},c.a.createElement(ht.a,null,c.a.createElement(gt.a,null,c.a.createElement("p",null,"To log in get registered",c.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank",rel:"noopener noreferrer"}," here")),c.a.createElement("p",null,"or use common test account credentials:"),c.a.createElement("p",null,"Email: free@samuraijs.com"),c.a.createElement("p",null,"Password: free")),c.a.createElement(kt.a,null,c.a.createElement(lt.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.touched.email&&a.errors.email?c.a.createElement("div",{style:{color:"red"}},a.errors.email):null,c.a.createElement(lt.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.touched.password&&a.errors.password?c.a.createElement("div",{style:{color:"red"}},a.errors.password):null,c.a.createElement(Lt.a,{label:"Remember me",control:c.a.createElement(yt.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),c.a.createElement(Et.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))},Ct=Object(m.a)(Object(m.a)({},W),V.actions),St=V.reducer,Tt=function(t){var e=t.demo,a=void 0!==e&&e,n=Object(f.c)(o.todoListsSelector),d=Object(f.c)(r.tasksSelector),u=Object(f.c)(i.isLoggedInSelector),l=It(),p=xt(Ft).fetchTodoLists;Object(s.useEffect)((function(){!a&&u&&p()}),[]);var m=Object(s.useCallback)(function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r,n,o,i,s,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Ft.addTodoList(e),t.next=3,l(r);case 3:n=t.sent,Ft.addTodoList.rejected.match(n)?(null===(o=n.payload)||void 0===o||null===(i=o.errors)||void 0===i?void 0:i.length)?(c=null===(s=n.payload)||void 0===s?void 0:s.errors[0],a.setError(c)):a.setError("Some error"):a.setValue("");case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),[]);return u?c.a.createElement(c.a.Fragment,null,c.a.createElement(ct.a,{container:!0,style:{padding:"10px 0"}},c.a.createElement(dt.a,{style:{padding:"10px",width:"280px"},elevation:3},c.a.createElement(mt,{addItem:m,title:"TodoList title"}))),c.a.createElement(ct.a,{container:!0,spacing:3,style:{flexWrap:"nowrap",overflowX:"scroll"}},n.map((function(t){var e=d[t.id];return c.a.createElement(ct.a,{item:!0,key:t.id},c.a.createElement("div",{style:{width:"300px"}},c.a.createElement(Rt,{todoList:t,tasks:e,demo:a})))})))):c.a.createElement(bt.a,{to:"/login"})},At=a(91),zt=c.a.memo((function(t){var e=Object(s.useState)(!1),a=Object(ut.a)(e,2),r=a[0],n=a[1],o=Object(s.useState)(t.title),i=Object(ut.a)(o,2),d=i[0],u=i[1],l=function(){n(!1),t.changeItem(d)};return r?c.a.createElement(lt.a,{value:d,autoFocus:!0,onBlur:l,onChange:function(t){u(t.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&l()},disabled:t.disabled}):c.a.createElement("span",{onDoubleClick:function(){n(!0)}},t.title)})),Pt=a(174),Rt=c.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,r=Object(At.a)(t,["demo"]),n=xt(Ft),o=n.changeTodoListTitle,i=n.removeTodoList,d=n.changeFilterTodoList,u=xt(Kt).fetchTasks,p=It();Object(s.useEffect)((function(){a||u(r.todoList.id)}),[]);var f=r.tasks,m=f;"active"===r.todoList.filter&&(m=f.filter((function(t){return t.status===l.New}))),"completed"===r.todoList.filter&&(m=f.filter((function(t){return t.status===l.Completed})));var b=Object(s.useCallback)((function(t){o({title:t,todoListId:r.todoList.id})}),[r.todoList.id,o]),v=Object(s.useCallback)((function(){i(r.todoList.id)}),[r.todoList.id,i]),h=Object(s.useCallback)((function(){return d({id:r.todoList.id,filter:"all"})}),[r.todoList.id]),L=Object(s.useCallback)((function(){return d({id:r.todoList.id,filter:"active"})}),[r.todoList.id]),y=Object(s.useCallback)((function(){return d({id:r.todoList.id,filter:"completed"})}),[r.todoList.id]),E=Object(s.useCallback)(function(){var t=Object(k.a)(g.a.mark((function t(e,a){var n,o,i,s,c,d;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Kt.addTask({title:e,todoListId:r.todoList.id}),t.next=3,p(n);case 3:o=t.sent,Kt.addTask.rejected.match(o)?(null===(i=o.payload)||void 0===i||null===(s=i.errors)||void 0===s?void 0:s.length)?(d=null===(c=o.payload)||void 0===c?void 0:c.errors[0],a.setError(d)):a.setError("Some error"):a.setValue("");case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),[r.todoList.id]),j=m.map((function(t){return c.a.createElement(Ht,{key:t.id,task:t,todoListId:r.todoList.id,disabled:"loading"===t.entityStatus})}));return c.a.createElement(dt.a,{style:{padding:"10px",position:"relative"},elevation:3},c.a.createElement(pt.a,{style:{position:"absolute",right:"9px",top:"3px"},onClick:v,disabled:"loading"===r.todoList.entityStatus},c.a.createElement(Pt.a,null)),c.a.createElement("h3",null,c.a.createElement(zt,{title:r.todoList.title,changeItem:b,disabled:"loading"===r.todoList.entityStatus})),c.a.createElement(mt,{addItem:E,title:"Task title",disabled:"loading"===r.todoList.entityStatus}),c.a.createElement("ul",{style:{listStyle:"none",paddingLeft:"0"}},!j.length&&c.a.createElement("span",{style:{color:"gray",marginLeft:"15px"}},"No tasks"),j),c.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},c.a.createElement(Et.a,{color:"all"===r.todoList.filter?"secondary":"primary",variant:"contained",size:"small",onClick:h},"All"),c.a.createElement(Et.a,{color:"active"===r.todoList.filter?"secondary":"primary",variant:"contained",size:"small",onClick:L},"Active"),c.a.createElement(Et.a,{color:"completed"===r.todoList.filter?"secondary":"primary",variant:"contained",size:"small",onClick:y},"Completed")))})),Ft=Object(m.a)(Object(m.a)({},st),nt.actions),Nt=nt.reducer,Dt=Object(N.b)("tasks/fetchTasks",function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(K({status:"loading"})),t.prev=1,t.next=4,w(e);case 4:return r=t.sent,a.dispatch(K({status:"succeeded"})),t.abrupt("return",{todoListId:e,tasks:r.data.items});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",Y(t.t0,a));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()),Mt=Object(N.b)("tasks/removeTask",function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(K({status:"loading"})),a.dispatch(Ut({todoListId:e.todoListId,taskId:e.taskId,entityStatus:"loading"})),t.prev=2,t.next=5,T(e.todoListId,e.taskId);case 5:if(0!==(r=t.sent).data.resultCode){t.next=11;break}return a.dispatch(K({status:"succeeded"})),t.abrupt("return",{taskId:e.taskId,todoListId:e.todoListId});case 11:return t.abrupt("return",X(r.data,a));case 12:t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(2),t.abrupt("return",Y(t.t0,a));case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e,a){return t.apply(this,arguments)}}()),Vt=Object(N.b)("tasks/addTask",function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(K({status:"loading"})),t.prev=1,t.next=4,C(e.todoListId,e.title);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(K({status:"succeeded"})),t.abrupt("return",{task:r.data.data.item});case 10:return t.abrupt("return",X(r.data,a,!1));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",Y(t.t0,a));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),Wt=Object(N.b)("tasks/updateTask",function(){var t=Object(k.a)(g.a.mark((function t(e,a){var r,n,o,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.dispatch(K({status:"loading"})),r=a.getState(),n=r.tasks[e.todoListId].find((function(t){return t.id===e.taskId}))){t.next=5;break}return t.abrupt("return",a.rejectWithValue("error"));case 5:return o=Object(m.a)({title:n.title,status:n.status,deadline:n.deadline,description:n.description,priority:p.Low,startDate:n.startDate},e.model),t.prev=6,t.next=9,S(e.todoListId,e.taskId,o);case 9:if(0!==(i=t.sent).data.resultCode){t.next=15;break}return a.dispatch(K({status:"succeeded"})),t.abrupt("return",{taskId:e.taskId,model:e.model,todoListId:e.todoListId});case 15:return t.abrupt("return",X(i.data,a));case 16:t.next=21;break;case 18:return t.prev=18,t.t0=t.catch(6),t.abrupt("return",Y(t.t0,a));case 21:case"end":return t.stop()}}),t,null,[[6,18]])})));return function(e,a){return t.apply(this,arguments)}}()),Bt=Object(N.c)({name:"tasks",initialState:{},reducers:{changeTasksEntityStatusAC:function(t,e){var a=t[e.payload.todoListId],r=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==r&&(a[r].entityStatus=e.payload.entityStatus)}},extraReducers:function(t){t.addCase(Ft.addTodoList.fulfilled,(function(t,e){t[e.payload.todoList.id]=[]})),t.addCase(Ft.removeTodoList.fulfilled,(function(t,e){delete t[e.payload.id]})),t.addCase(Ft.fetchTodoLists.fulfilled,(function(t,e){e.payload.todoLists.forEach((function(e){t[e.id]||(t[e.id]=[])}))})),t.addCase(Dt.fulfilled,(function(t,e){return Object(m.a)(Object(m.a)({},t),{},Object(v.a)({},e.payload.todoListId,e.payload.tasks.map((function(t){return Object(m.a)(Object(m.a)({},t),{},{entityStatus:"idle"})}))))})),t.addCase(Mt.fulfilled,(function(t,e){var a=t[e.payload.todoListId],r=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==r&&a.splice(r,1)})),t.addCase(Vt.fulfilled,(function(t,e){t[e.payload.task.todoListId].unshift(Object(m.a)(Object(m.a)({},e.payload.task),{},{entityStatus:"idle"}))})),t.addCase(Wt.fulfilled,(function(t,e){var a=t[e.payload.todoListId],r=a.findIndex((function(t){return t.id===e.payload.taskId}));-1!==r&&(a[r]=Object(m.a)(Object(m.a)({},a[r]),e.payload.model))}))}}),Ut=Bt.actions.changeTasksEntityStatusAC,qt={fetchTasks:Dt,removeTask:Mt,addTask:Vt,updateTask:Wt},Ht=c.a.memo((function(t){var e=xt(Kt),a=e.updateTask,r=e.removeTask,n=Object(s.useCallback)((function(){return r({taskId:t.task.id,todoListId:t.todoListId})}),[t.task.id,t.todoListId,r]),o=Object(s.useCallback)((function(e){return a({taskId:t.task.id,model:{status:e.currentTarget.checked?l.Completed:l.New},todoListId:t.todoListId})}),[t.task.id,t.todoListId,a]),i=Object(s.useCallback)((function(e){a({taskId:t.task.id,model:{title:e},todoListId:t.todoListId})}),[t.task.id,t.todoListId,a]);return c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("li",{className:t.task.status===l.Completed?"is-done":""},c.a.createElement(yt.a,{color:"secondary",checked:t.task.status===l.Completed,onChange:o}),c.a.createElement(zt,{title:t.task.title,changeItem:i,disabled:t.disabled}),c.a.createElement(pt.a,{onClick:n,disabled:t.disabled,style:{position:"absolute",right:"2px",top:"0"}},c.a.createElement(Pt.a,{fontSize:"small"}))))})),Kt=Object(m.a)(Object(m.a)({},qt),Bt.actions),Zt=Bt.reducer,Jt=a(48),$t=Object(Ot.c)({app:$,tasks:Zt,todoLists:Nt,auth:St}),_t=Object(N.a)({reducer:$t,middleware:function(t){return t().prepend(Jt.a)}}),Gt=(a(132),a(175)),Xt=a(176),Yt=a(177),Qt=a(179),te=a(180),ee=a(178),ae=a(185),re=a(182);function ne(t){return c.a.createElement(re.a,Object.assign({elevation:6,variant:"filled"},t))}var oe=function(){var t=Object(f.c)((function(t){return t.app.error})),e=xt(J).setAppError,a=function(t,a){"clickaway"!==a&&e({error:null})},r=null!==t;return c.a.createElement(ae.a,{open:r,autoHideDuration:6e3,onClose:a},c.a.createElement(ne,{onClose:a,severity:"error"},t))},ie=function(t){var e=t.demo,a=void 0!==e&&e,r=Object(f.c)(n.isInitializedSelector),o=Object(f.c)(n.appStatusSelector),d=Object(f.c)(i.isLoggedInSelector),u=xt(J).initializeApp,l=xt(Ct).logout;Object(s.useEffect)((function(){u()}),[]);return r?c.a.createElement("div",{className:"App"},c.a.createElement(Xt.a,{position:"static"},c.a.createElement(oe,null),c.a.createElement(Yt.a,null,c.a.createElement(pt.a,{edge:"start",color:"inherit","aria-label":"menu"},c.a.createElement(ee.a,null)),d&&c.a.createElement(Et.a,{color:"inherit",onClick:function(){l()}},"Logout")),"loading"===o&&c.a.createElement(Qt.a,{color:"secondary"})),c.a.createElement(te.a,{fixed:!0},c.a.createElement(bt.d,null,c.a.createElement(bt.b,{exact:!0,path:"/",render:function(){return c.a.createElement(Tt,{demo:a})}}),c.a.createElement(bt.b,{path:"/login",render:function(){return c.a.createElement(wt,null)}}),c.a.createElement(bt.b,{path:"/404",render:function(){return c.a.createElement("h1",null,"ERROR 404. PAGE NOT FOUND")}}),c.a.createElement(bt.a,{from:"*",to:"/404"})))):c.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},c.a.createElement(Gt.a,{color:"secondary",size:150}))},se=a(47);u.a.render(c.a.createElement(se.a,{basename:"/todolist"},c.a.createElement(f.a,{store:_t},c.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[102,1,2]]]);
//# sourceMappingURL=main.867414a9.chunk.js.map