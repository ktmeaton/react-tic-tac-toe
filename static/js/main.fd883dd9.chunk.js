(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{15:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);for(var s=r(8),n=r(0),i=r(3),a=r(4),c=r(6),u=r(5),o=r(1),l=r.n(o),h=r(7),b=r.n(h),d=(r(15),[]),j=0;j<3;j++)d.push(Object(n.jsx)("div",{className:"board-row"}));function v(e){return e.winningLine?Object(n.jsx)("button",{className:"square",onClick:e.onClick,style:e.winningLine.includes(e.i)?{backgroundColor:"#00FF00"}:null,children:e.value}):Object(n.jsx)("button",{className:"square",onClick:e.onClick,style:e.prevMove?{backgroundColor:"#DCDCDC"}:null,children:e.value})}console.log(d);var p=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(n.jsx)(v,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},prevMove:e===this.props.prevMove,winningLine:this.props.winningLine,i:e})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(l.a.Component),m=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var s;return Object(i.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,prevMove:null,winningLine:null},s}return Object(a.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();x(r)||r[e]||this.state.stepNumber>=9||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,prevMove:e}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],i=x(s.squares),a=null,c=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(n.jsx)("li",{children:Object(n.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})},r)}));return i?(e="Winner: "+i[0],a=i[1]):e=this.state.stepNumber>=9?"Draw!":"Next Player: "+(this.state.xIsNext?"X":"O"),Object(n.jsxs)("div",{className:"game",children:[Object(n.jsx)("div",{className:"game-board",children:Object(n.jsx)(p,{squares:s.squares,onClick:function(e){return t.handleClick(e)},stepNumber:this.state.stepNumber,prevMove:this.state.prevMove,winningLine:a})}),Object(n.jsxs)("div",{className:"game-info",children:[Object(n.jsx)("div",{children:e}),Object(n.jsx)("ol",{children:c})]})]})}}]),r}(l.a.Component);function x(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(s.a)(t[r],3),i=n[0],a=n[1],c=n[2];if(e[i]&&e[i]===e[a]&&e[i]===e[c])return[e[i],t[r]]}return null}b.a.render(Object(n.jsx)(m,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.fd883dd9.chunk.js.map