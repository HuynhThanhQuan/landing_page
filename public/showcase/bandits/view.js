'use strict';
const data = window.BANDIT_RESULTS;
const $ = id => document.getElementById(id);
const colors = ['#7f897d', '#ba6227', '#4168a9', '#3c784c'];
const ns = 'http://www.w3.org/2000/svg';
function svg(tag, attributes, text) {
  const element = document.createElementNS(ns, tag);
  for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value);
  if (text !== undefined) element.textContent = text;
  $('chart').append(element);
  return element;
}
function render() {
  const scene = data.scenarios.find(s => s.id === $('scenario').value);
  const index = Math.min(Number($('round').value), scene.steps.length - 1);
  $('description').textContent = scene.description;
  $('round-label').textContent = scene.steps[index].toLocaleString();
  $('arms').replaceChildren(...scene.means.map((rate, i) => {
    const span = document.createElement('span'); span.textContent = `${'ABC'[i]} · ${rate * 100}%`; return span;
  }));
  $('experiment').textContent = `${data.runs} independent runs × ${data.horizon.toLocaleString()} visitors per policy. Seed ${data.seed}. Synthetic stationary Bernoulli rewards.`;
  const max = Math.max(1, ...scene.policies.flatMap(p => p.high)) * 1.08;
  const x = t => 55 + t / data.horizon * 680;
  const y = value => 280 - value / max * 250;
  $('chart').replaceChildren();
  for (let i = 0; i <= 4; i++) {
    const v = i * max / 4;
    svg('line', {x1:55, x2:735, y1:y(v), y2:y(v), stroke:'#dce1d5'});
    svg('text', {x:45, y:y(v) + 4, 'text-anchor':'end'}, v.toFixed(0));
    svg('text', {x:x(i * data.horizon / 4), y:308, 'text-anchor':'middle'}, Math.round(i * data.horizon / 4));
  }
  const path = series => series.map((value, i) => `${x(scene.steps[i])},${y(value)}`).join(' ');
  scene.policies.forEach((policy, i) => {
    if ($('bands').checked) {
      const points = path(policy.high) + ' ' + policy.low.map((v,j) => `${x(scene.steps[j])},${y(v)}`).reverse().join(' ');
      svg('polygon', {points, fill:colors[i], opacity:0.12});
    }
    svg('polyline', {points:path(policy.mean), stroke:colors[i], fill:'none', 'stroke-width':2.5});
    svg('circle', {cx:x(scene.steps[index]), cy:y(policy.mean[index]), r:4, fill:colors[i]});
  });
  svg('line', {x1:x(scene.steps[index]), x2:x(scene.steps[index]), y1:20, y2:280, stroke:'#687361', 'stroke-dasharray':'4 5'});
  $('legend').replaceChildren(...scene.policies.map((p,i) => {
    const span = document.createElement('span'); span.textContent=p.label; span.style.setProperty('--color',colors[i]); return span;
  }));
  $('metrics').replaceChildren(...scene.policies.map(policy => {
    const row = document.createElement('tr');
    const values = [policy.label, `${policy.mean[index].toFixed(1)} [${policy.low[index].toFixed(1)}, ${policy.high[index].toFixed(1)}]`, policy.conversions.toFixed(1), policy.pulls.map(n => `${(100*n/data.horizon).toFixed(1)}%`).join(' / ')];
    values.forEach(value => { const cell=document.createElement('td'); cell.textContent=value; row.append(cell); }); return row;
  }));
  const best = [...scene.policies].sort((a,b) => a.mean.at(-1)-b.mean.at(-1))[0];
  $('insight').textContent = scene.id === 'equal'
    ? 'Equal true rates → zero pseudo-regret for every policy. Different observed conversion counts here are simulation noise, not evidence that one variant is better.'
    : `At the full horizon, ${best.label} has the lowest mean pseudo-regret in this experiment. Its paired saving versus random is ${best.pairedSaving.toFixed(1)} ± ${best.pairedMargin.toFixed(1)} expected conversions (approximate 95% interval half-width). This is not a universal ranking.`;
  history.replaceState(null, '', `#scenario=${scene.id}&step=${index}`);
}
if (!data) {
  $('description').textContent = 'Results are missing. Run benchmark.py to generate results.js.';
} else {
  for (const scene of data.scenarios) { const option=new Option(scene.title,scene.id); $('scenario').add(option); }
  const params=new URLSearchParams(location.hash.slice(1));
  if (data.scenarios.some(s => s.id === params.get('scenario'))) $('scenario').value=params.get('scenario');
  $('round').max=data.scenarios[0].steps.length-1;
  const requested=Number(params.get('step'));
  $('round').value=params.has('step') && Number.isFinite(requested) ? Math.max(1,Math.min(Number($('round').max),requested)) : $('round').max;
  $('scenario').addEventListener('change',render); $('round').addEventListener('input',render); $('bands').addEventListener('change',render);
  render();
}
