import React, { useState, useEffect } from 'react';
import { Cpu, Play, RefreshCw, Zap } from 'lucide-react';

interface Node {
  id: string;
  x: number;
  y: number;
  layer: number;
  label: string;
}

export const NeuralNetworkVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [loss, setLoss] = useState<number>(0.0124);
  const [epoch, setEpoch] = useState<number>(42);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Define layers: Input (3), Hidden 1 (4), Hidden 2 (4), Output (2)
  const nodes: Node[] = [
    // Input layer
    { id: 'in-0', x: 45, y: 40, layer: 0, label: 'x₁' },
    { id: 'in-1', x: 45, y: 95, layer: 0, label: 'x₂' },
    { id: 'in-2', x: 45, y: 150, layer: 0, label: 'x₃' },
    // Hidden 1
    { id: 'h1-0', x: 135, y: 30, layer: 1, label: 'h₁' },
    { id: 'h1-1', x: 135, y: 75, layer: 1, label: 'h₂' },
    { id: 'h1-2', x: 135, y: 120, layer: 1, label: 'h₃' },
    { id: 'h1-3', x: 135, y: 165, layer: 1, label: 'h₄' },
    // Hidden 2
    { id: 'h2-0', x: 225, y: 30, layer: 2, label: 'h₅' },
    { id: 'h2-1', x: 225, y: 75, layer: 2, label: 'h₆' },
    { id: 'h2-2', x: 225, y: 120, layer: 2, label: 'h₇' },
    { id: 'h2-3', x: 225, y: 165, layer: 2, label: 'h₈' },
    // Output layer
    { id: 'out-0', x: 315, y: 65, layer: 3, label: 'y₁' },
    { id: 'out-1', x: 315, y: 130, layer: 3, label: 'y₂' },
  ];

  // Connections between adjacent layers
  const connections: { from: Node; to: Node; id: string }[] = [];
  nodes.forEach((source) => {
    nodes.forEach((target) => {
      if (target.layer === source.layer + 1) {
        connections.push({
          from: source,
          to: target,
          id: `${source.id}-${target.id}`,
        });
      }
    });
  });

  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
      if (Math.random() > 0.6) {
        setEpoch((e) => e + 1);
        setLoss((l) => Math.max(0.008, +(l - 0.0001).toFixed(4)));
      }
    }, 1200);
    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleStepForward = () => {
    setActiveStep((prev) => (prev + 1) % 4);
    setEpoch((e) => e + 1);
    setLoss((l) => Math.max(0.005, +(l - 0.0002).toFixed(4)));
  };

  return (
    <div
      id="hero-neural-card"
      className="w-full bg-white border border-pink-200/90 rounded-xl shadow-[0_4px_24px_-4px_rgba(219,39,119,0.08)] overflow-hidden transition-all duration-300 hover:border-pink-300"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#fdf4f7] border-b border-pink-100">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f472b6]/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#db2777]/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#9d174d]/80 inline-block"></span>
          </div>
          <span className="font-mono text-xs text-[#5c4a56] font-medium flex items-center gap-1.5 ml-2">
            <span className="text-[#db2777]">●</span> core_inference.py
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            id="neural-sim-toggle-btn"
            onClick={() => setIsSimulating(!isSimulating)}
            title={isSimulating ? 'Pause simulation' : 'Resume simulation'}
            className="text-[11px] font-mono text-[#9d174d] hover:text-[#b7005e] px-1.5 py-0.5 rounded border border-pink-200 bg-white"
          >
            {isSimulating ? 'PAUSE' : 'RUN'}
          </button>
          <span className="px-2 py-0.5 rounded-full bg-[#fce7f3] border border-pink-200 text-[#9d174d] font-mono text-[10px] font-bold tracking-wider uppercase">
            v2.4-ACTIVE
          </span>
        </div>
      </div>

      {/* SVG Neural Network Graphic */}
      <div className="relative p-3 bg-gradient-to-b from-[#fffafb] to-white">
        <svg
          viewBox="0 0 360 200"
          className="w-full h-44 sm:h-48 select-none"
          aria-label="Neural Network Diagram"
        >
          <defs>
            <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#db2777" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="activeEdgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#db2777" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Lines */}
          {connections.map((conn) => {
            const isSourceActive = activeStep === conn.from.layer;
            const isSelected =
              selectedNode === conn.from.id || selectedNode === conn.to.id;

            return (
              <g key={conn.id}>
                <line
                  x1={conn.from.x}
                  y1={conn.from.y}
                  x2={conn.to.x}
                  y2={conn.to.y}
                  stroke={
                    isSelected
                      ? '#db2777'
                      : isSourceActive
                      ? 'url(#activeEdgeGrad)'
                      : 'url(#edgeGrad)'
                  }
                  strokeWidth={isSelected ? 1.8 : isSourceActive ? 1.4 : 0.8}
                  strokeDasharray={isSourceActive ? '3,2' : undefined}
                  className="transition-colors duration-500"
                />
              </g>
            );
          })}

          {/* Animated signal pulses across active layer */}
          {connections
            .filter((c) => c.from.layer === activeStep)
            .slice(0, 5)
            .map((conn, idx) => {
              const dx = conn.to.x - conn.from.x;
              const dy = conn.to.y - conn.from.y;
              return (
                <circle
                  key={`pulse-${conn.id}-${idx}`}
                  cx={conn.from.x + dx * 0.55}
                  cy={conn.from.y + dy * 0.55}
                  r={2.2}
                  fill="#db2777"
                  filter="url(#glow)"
                  className="animate-pulse"
                />
              );
            })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isLayerActive = activeStep === node.layer;
            const isSelected = selectedNode === node.id;

            return (
              <g
                key={node.id}
                className="cursor-pointer group"
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              >
                {/* Ambient glow ring if active */}
                {(isLayerActive || isSelected) && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={9}
                    fill="none"
                    stroke="#db2777"
                    strokeWidth={1}
                    strokeOpacity={0.4}
                    className="animate-ping"
                    style={{ animationDuration: '2.5s' }}
                  />
                )}

                {/* Outer circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? 6.5 : 5.5}
                  fill={isLayerActive || isSelected ? '#ffffff' : '#fdf4f7'}
                  stroke={isLayerActive || isSelected ? '#db2777' : '#e1bec6'}
                  strokeWidth={isLayerActive || isSelected ? 2 : 1.2}
                  className="transition-all duration-300 group-hover:stroke-[#9d174d]"
                />

                {/* Inner center dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isLayerActive ? 2.5 : 1.8}
                  fill={isLayerActive || isSelected ? '#9d174d' : '#8d6f77'}
                />

                {/* Subtext label */}
                <text
                  x={node.x}
                  y={node.y - 9}
                  textAnchor="middle"
                  className="text-[9px] font-mono fill-[#8c7283] group-hover:fill-[#9d174d] select-none font-medium"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Quick Trigger Tooltip / Helper */}
        <button
          onClick={handleStepForward}
          className="absolute top-3 right-3 text-[10px] font-mono flex items-center gap-1 text-[#9d174d] hover:text-[#b7005e] bg-white/80 hover:bg-white border border-pink-200/80 rounded px-1.5 py-0.5 shadow-2xs backdrop-blur-xs transition"
          title="Forward pass inference pulse"
        >
          <Zap className="w-2.5 h-2.5 text-[#db2777]" />
          <span>Pulse</span>
        </button>
      </div>

      {/* Code Snippet Box */}
      <div className="mx-4 mb-3 px-3 py-2 rounded-md bg-[#fdf4f7] border border-pink-200/60 font-mono text-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#9d174d] font-semibold">import</span>
          <span className="text-[#1e1b1e]">numpy as np</span>
          <span className="text-[#db2777]">●</span>
        </div>
        <div className="text-[#594047] font-medium bg-white/80 px-2 py-0.5 rounded border border-pink-100">
          dense(dim=128)
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 divide-x divide-pink-100 border-t border-b border-pink-100 bg-[#fffafb] py-2.5 px-3">
        <div className="px-2">
          <div className="font-mono text-[10px] text-[#8c7283] font-semibold tracking-wider uppercase">
            METRIC
          </div>
          <div className="font-display text-sm font-bold text-[#1e1b1e]">96.4%</div>
          <div className="font-mono text-[10px] text-[#5c4a56] truncate">Accuracy target</div>
        </div>
        <div className="px-2">
          <div className="font-mono text-[10px] text-[#8c7283] font-semibold tracking-wider uppercase">
            EPOCH
          </div>
          <div className="font-display text-sm font-bold text-[#1e1b1e]">#{String(epoch).padStart(3, '0')}</div>
          <div className="font-mono text-[10px] text-[#5c4a56] truncate">Loss: {loss}</div>
        </div>
        <div className="px-2">
          <div className="font-mono text-[10px] text-[#8c7283] font-semibold tracking-wider uppercase">
            STREAM
          </div>
          <div className="font-display text-xs font-bold text-[#db2777] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f43f5e] animate-pulse"></span>
            ACTIVE
          </div>
          <div className="font-mono text-[10px] text-[#5c4a56] truncate">32.8 kb/s batch</div>
        </div>
      </div>

      {/* Footer Tag Banner */}
      <div className="px-4 py-2.5 bg-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-[#fce7f3] border border-pink-200 flex items-center justify-center text-[#9d174d]">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold font-display text-[#1e1b1e]">
              AI Problem Solving
            </div>
            <div className="font-mono text-[11px] text-[#9d174d] font-medium">
              Python • C • Sensor IoT
            </div>
          </div>
        </div>
        <span className="text-[10px] font-mono text-[#8c7283] bg-[#fdf4f7] px-2 py-1 rounded border border-pink-100">
          REVA Lab 2024
        </span>
      </div>
    </div>
  );
};
