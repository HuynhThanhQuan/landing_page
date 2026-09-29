"use strict";
const D = window.LAB_RESULTS;
const $ = id => document.getElementById(id);
const colors = ["#245ccf", "#cf6419", "#07856f", "#9460c8", "#697b91"];
const fmt = n => typeof n === "number" ? new Intl.NumberFormat("en", {maximumFractionDigits: 3}).format(n) : String(n);
function el(tag, text, cls) {const node=document.createElement(tag); if(text!==undefined) node.textContent=text; if(cls) node.className=cls; return node;}
function svg(tag, attrs, text) {const n=document.createElementNS("http://www.w3.org/2000/svg",tag); Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v)); if(text!==undefined)n.textContent=text; return n;}
if (!D) throw new Error("Experiment data missing: rebuild the showcase.");
D.cases.forEach((c,i)=>{const o=el("option",c.name);o.value=i;$("scenario").append(o);});
D.method.forEach(p=>$("method").append(el("p",p)));
D.limits.forEach(p=>$("limits").append(el("p",p)));
D.references.forEach(([label,url])=>{const a=el("a",label+" ↗");a.href=url;a.rel="noreferrer";$("references").append(a);});
let hash = new URLSearchParams(location.hash.slice(1));
let initialCase = D.cases.findIndex(c=>c.id===hash.get("case"));
$("scenario").value=String(initialCase<0?0:initialCase);
function setup(keep=false){const c=D.cases[Number($("scenario").value)];$("step").max=c.x.length-1;const requested=Number(hash.get("step"));$("step").value=keep&&hash.has("step")&&Number.isInteger(requested)?Math.max(0,Math.min(c.x.length-1,requested)):c.x.length-1;draw();}
function draw(){
 const c=D.cases[Number($("scenario").value)], i=Number($("step").value), snap=c.snapshots?.[i];
 $("context").textContent=c.context;$("step-label").textContent=c.parameter;$("step-value").textContent=fmt(c.x[i])+ (c.suffix||"");$("step").setAttribute("aria-valuetext",`${c.parameter}: ${fmt(c.x[i])}`);$("readout").textContent=c.readout;
 $("plot-kicker").textContent=D.kind;$("plot-title").textContent=c.title;$("unit").textContent=c.unit;$("chart-title").textContent=c.title;$("chart-desc").textContent=c.readout;
 $("bands").parentElement.hidden=!c.series.some(s=>s.low);const bands=$("bands").checked;
 const vals=c.series.flatMap(s=>[...s.values,...(bands?s.low||[]:[]),...(bands?s.high||[]:[])]);
 let lo=Math.min(0,...vals), hi=Math.max(...vals);if(hi===lo)hi=lo+1;const span=hi-lo;hi+=span*.06;lo-=span*.02;
 const width=Math.max(280,$("chart").clientWidth),right=width-18;
 $("chart").setAttribute("viewBox",`0 0 ${width} 320`);
 const X=j=>62+(c.x[j]-c.x[0])/Math.max(1e-12,c.x.at(-1)-c.x[0])*(right-62), Y=v=>260-(v-lo)/(hi-lo)*230;
 const g=$("drawing");g.replaceChildren();
 for(let j=0;j<=4;j++){const v=lo+(hi-lo)*j/4;g.append(svg("line",{x1:62,x2:right,y1:Y(v),y2:Y(v),stroke:"#e5ebf3"}));g.append(svg("text",{x:53,y:Y(v)+4,"text-anchor":"end"},fmt(v)));}
 [0,Math.floor((c.x.length-1)/2),c.x.length-1].forEach(j=>g.append(svg("text",{x:X(j),y:285,"text-anchor":"middle"},fmt(c.x[j]))));
 g.append(svg("text",{x:(62+right)/2,y:312,"text-anchor":"middle"},c.parameter));
 $("legend").replaceChildren();$("cards").replaceChildren();
 c.series.forEach((s,k)=>{const color=s.color||colors[k%colors.length];
   if(bands&&s.low){const points=s.low.map((v,j)=>`${X(j)},${Y(v)}`).concat(s.high.map((v,j)=>`${X(j)},${Y(v)}`).reverse()).join(" ");g.append(svg("polygon",{points,fill:color,opacity:.1}));}
   g.append(svg("polyline",{points:s.values.map((v,j)=>`${X(j)},${Y(v)}`).join(" "),stroke:color,fill:"none","stroke-width":2.5}));
   g.append(svg("circle",{cx:X(i),cy:Y(s.values[i]),r:4,fill:color,stroke:"white","stroke-width":2}));
   const l=el("span"),swatch=el("i");swatch.style.background=color;l.append(swatch,document.createTextNode(s.label));$("legend").append(l);
   const card=el("div",undefined,"metric");card.append(el("small",s.label),el("strong",fmt(s.values[i])));$("cards").append(card);
 });
 g.append(svg("line",{x1:X(i),x2:X(i),y1:25,y2:260,stroke:"#17243a","stroke-dasharray":"4 5",opacity:.45}));
 $("head").replaceChildren();const head=el("tr");(c.columns||["Method",c.unit]).forEach(t=>head.append(el("th",t)));$("head").append(head);$("rows").replaceChildren();
 const rows=snap?.rows||c.series.map(s=>[s.label,s.values[i]]);rows.forEach(row=>{const tr=el("tr");row.forEach(v=>tr.append(el("td",fmt(v))));$("rows").append(tr);});
 $("table-caption").textContent=c.caption||`Results at ${c.parameter.toLowerCase()} ${fmt(c.x[i])}`;
 $("insight").textContent=snap?.note||c.note;
 $("board").replaceChildren();$("board").hidden=!snap?.board;
 if(snap?.board)snap.board.forEach(cell=>{const n=el("div",cell.label,"cell "+(cell.kind||""));n.append(el("small",fmt(cell.value)));$("board").append(n);});
 history.replaceState(null,"",`#case=${encodeURIComponent(c.id)}&step=${i}`);
}
$("scenario").addEventListener("change",()=>setup());$("step").addEventListener("input",draw);$("bands").addEventListener("change",draw);window.addEventListener("resize",draw);
setup(true);
