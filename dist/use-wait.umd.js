!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e(t.useWait={},t.react)}(this,function(t,e){var n="default"in e?e.default:e,i=function(t){return t.size>0},r=function(t,e){return t.has(e)},a=function(t,e){return t.add(e),t},u=function(t,e){return t.delete(e),t},c=n.createContext();function o(t){return e.useContext(c).waiters.has(t.message)?t.waiting:t.children}t.Waiter=function(t){var f=e.useState(new Set([])),s=f[0],d=f[1];return n.createElement(c.Provider,{value:{waiters:s,createWaitingContext:function(t){return{isWaiting:function(){return r(s,t)},startWaiting:function(){return d(a(s,t))},endWaiting:function(){return d(u(s,t))},Wait:function(e){return n.createElement(o,Object.assign({},{message:t},e))}}},anyWaiting:function(){return i(s)},isWaiting:function(t){return r(s,t)},startWaiting:function(t){d(a(s,t))},endWaiting:function(t){d(u(s,t))}}},t.children)},t.useWait=function(){var t=e.useContext(c);return Object.assign({},t,{waiters:[].concat(t.waiters),Wait:o})}});
//# sourceMappingURL=use-wait.umd.js.map
