(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(3),i=n.n(a),r=n(4),o=n(5),c=n(7),u=n(6),d=[{id:0,question:"What is the best way to have a visual struddle eating experience?",options:["standing on top of a building","private jet!","do it in the day","struddle and pie at same time"],answer:"private jet!"},{id:1,question:"how to you fix a crooked eyes?",options:["you cannot fix it","slap that face real hard with the palm of your hand","do some hoppings","bend over"],answer:"you cannot fix it duh"},{id:2,question:"What is the best way to have a visual sexual experience?",options:["scissors","like a dog","hard as rock","!handstad"],answer:"!handstad!"},{id:3,question:"What is the best way to have a visual sexual experience?",options:["scissors","like a dog","hard as rock","!handstad"],answer:"!handstad!"},{id:4,question:"What is the best way to have a visual sexual experience?",options:["scissors","like a dog","hard as rock","!handstad"],answer:"!handstad!"}],h=n(0),l=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={userAnswer:null,currentIndex:0,options:[],quizEnd:!1,score:0,disabled:!0},e.loadQuiz=function(){var t=e.state.currentIndex;e.setState((function(){return{question:d[t].question,options:d[t].options,answer:d[t].answer}}))},e.nextQuestionHander=function(){var t=e.state,n=t.userAnswer,s=t.answer,a=t.score;e.setState({currentIndex:e.state.currentIndex+1}),n===s&&e.setState({score:a+1})},e.checkAnswer=function(t){e.setState({userAnswer:t,disable:!1})},e.finishHandler=function(){e.state.currentIndex===d.length-1&&e.setState({quizEnd:!0})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadQuiz()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.currentIndex;this.state.currentIndex!==t.currentIndex&&this.setState((function(){return{disabled:!0,question:d[n].question,options:d[n].options,answer:d[n].answer}}))}},{key:"render",value:function(){var e=this.state,t=e.question;e.options,e.currentindex,e.userAnswer;return e.quizEnd?Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:["Game Over, Final score is ",this.state.score," points"]}),Object(h.jsx)("p",{children:"The correct Answers for the quiz are"}),Object(h.jsx)("ul",{children:d.map((function(e,t){return Object(h.jsx)("li",{className:"options",children:e.answer},t)}))})]}):Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:t})})}}]),n}(s.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};function x(){return Object(h.jsx)("div",{classNmae:"App",children:Object(h.jsx)(l,{})})}var v=document.getElementById("root");i.a.render(Object(h.jsx)(x,{}),v),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.6ca7101d.chunk.js.map