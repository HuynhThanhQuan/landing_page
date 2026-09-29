// src/components/fx/HeroField.tsx
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { Theme } from "@/lib/theme";

const VERT = /* glsl */ `
attribute float aSeed;
uniform float uTime;
uniform vec2 uPointer;
uniform float uSize;
uniform float uPixel;
varying float vMix;
varying float vSeed;
void main() {
  vec3 p = position;
  float t = uTime * 0.18;
  p.x += sin(t + p.y * 0.55 + aSeed * 6.2831) * 0.42;
  p.y += cos(t * 1.13 + p.x * 0.47 + aSeed * 3.1415) * 0.42;
  p.z += sin(t * 0.8 + p.x * 0.3 + p.y * 0.3) * 0.6;
  vec2 d = uPointer - p.xy;
  float f = exp(-dot(d, d) * 0.22);
  p.xy += d * f * 0.45;
  vMix = clamp(f * 1.4 + (p.z + 3.0) / 8.0, 0.0, 1.0);
  vSeed = aSeed;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = uSize * uPixel * (1.0 + f * 1.6) * (7.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;

const FRAG = /* glsl */ `
uniform vec3 uA;
uniform vec3 uB;
uniform vec3 uC;
varying float vMix;
varying float vSeed;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  if (r > 0.5) discard;
  float a = smoothstep(0.5, 0.0, r);
  vec3 col = mix(uA, uB, vMix);
  if (vSeed > 0.97) col = uC;
  gl_FragColor = vec4(col, a * 0.9);
}`;

const rgb = (hex: string) =>
  new THREE.Vector3(parseInt(hex.slice(1, 3), 16) / 255, parseInt(hex.slice(3, 5), 16) / 255, parseInt(hex.slice(5, 7), 16) / 255);

const PALETTE: Record<Theme, { a: string; b: string; c: string }> = {
  dark: { a: "#22C7F0", b: "#8F73FF", c: "#F2A03D" },
  light: { a: "#0088B0", b: "#5B3BD6", c: "#B86A0C" },
};

export default function HeroField({ theme, onFail }: { theme: Theme; onFail: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef(theme);
  const applyTheme = useRef<((t: Theme) => void) | null>(null);
  const failRef = useRef(onFail);

  useEffect(() => {
    failRef.current = onFail;
  });
  useEffect(() => {
    themeRef.current = theme;
    applyTheme.current?.(theme);
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
    } catch {
      failRef.current();
      return;
    }

    const compact = window.innerWidth < 700 || (navigator.hardwareConcurrency || 8) <= 4;
    const COUNT = compact ? 2500 : 5200;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 7;

    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      seeds[i] = Math.random();
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));

    const uniforms = {
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(99, 99) },
      uSize: { value: compact ? 2.2 : 1.8 },
      uPixel: { value: 1 },
      uA: { value: new THREE.Vector3() },
      uB: { value: new THREE.Vector3() },
      uC: { value: new THREE.Vector3() },
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
    });
    scene.add(new THREE.Points(geometry, material));

    const apply = (t: Theme) => {
      const p = PALETTE[t];
      uniforms.uA.value.copy(rgb(p.a));
      uniforms.uB.value.copy(rgb(p.b));
      uniforms.uC.value.copy(rgb(p.c));
      material.blending = t === "dark" ? THREE.AdditiveBlending : THREE.NormalBlending;
      material.needsUpdate = true;
    };
    applyTheme.current = apply;
    apply(themeRef.current);

    const target = new THREE.Vector2(99, 99);
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = -(((e.clientY - r.top) / r.height) * 2 - 1);
      const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
      target.set(nx * halfH * camera.aspect, ny * halfH);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      uniforms.uPixel.value = dpr;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    let raf = 0;
    let visible = true;
    let last = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      uniforms.uTime.value += (now - last) / 1000;
      last = now;
      uniforms.uPointer.value.lerp(target, 0.08);
      renderer.render(scene, camera);
    };
    const sync = () => {
      const should = visible && !document.hidden;
      if (should && !raf) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      } else if (!should && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    const onLost = (e: Event) => {
      e.preventDefault();
      failRef.current();
    };
    canvas.addEventListener("webglcontextlost", onLost);
    sync();
    canvas.classList.add("is-ready");

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", sync);
      canvas.removeEventListener("webglcontextlost", onLost);
      applyTheme.current = null;
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="lab-hero-canvas" aria-hidden="true" />;
}
