import React, { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  CheckCircle2,
  Cpu,
  Droplets,
  ExternalLink,
  Layers,
  Plus,
  RefreshCw,
  Sliders,
  Terminal,
  Trash2,
  Wifi,
  X,
  Zap,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModals: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1e1b1e]/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-pink-200 rounded-xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-pink-100 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#fce7f3] text-[#9d174d] border border-pink-200">
                {project.category}
              </span>
              {project.year && (
                <span className="text-xs font-mono text-[#8c7283]">{project.year}</span>
              )}
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1e1b1e]">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5c4a56]">{project.subtitle}</p>
          </div>
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-md border border-pink-200 flex items-center justify-center text-[#5c4a56] hover:text-[#9d174d] hover:bg-[#fdf4f7] transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Project-Specific Interactive Simulator */}
        {project.type === 'ai-iot' && <PreservXSimulator />}
        {project.type === 'c-graphics' && <GraphicsEditorSimulator />}
        {project.type === 'iot-hardware' && <IoTIrrigationSimulator />}

        {/* Technical Architecture Overview */}
        <div className="space-y-3 pt-2 border-t border-pink-100">
          <h4 className="font-display text-sm font-bold text-[#1e1b1e] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#db2777]" />
            Core Architecture & Methodology
          </h4>
          <p className="text-xs sm:text-sm text-[#5c4a56] leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded bg-[#fdf4f7] border border-pink-200 text-[11px] font-mono text-[#9d174d] font-medium"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex justify-end pt-3 border-t border-pink-100">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-[#9d174d] hover:bg-[#83123e] text-white text-xs font-semibold shadow-2xs transition"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};

// 1. PreservX Interactive Simulator Component
function PreservXSimulator() {
  const [items, setItems] = useState([
    { id: 1, name: 'Dairy: Milk (Organic)', days: 2, status: 'urgent', category: 'Dairy' },
    { id: 2, name: 'Fresh Greens: Spinach', days: 5, status: 'safe', category: 'Produce' },
    { id: 3, name: 'Greek Yogurt (500g)', days: 1, status: 'urgent', category: 'Dairy' },
    { id: 4, name: 'Free-Range Eggs (12pk)', days: 14, status: 'safe', category: 'Poultry' },
  ]);
  const [alertSent, setAlertSent] = useState<string | null>(null);

  const simulateNotification = (name: string, days: number) => {
    setAlertSent(`Proactive notification dispatched to user app for "${name}" (expires in ${days}d)`);
    setTimeout(() => setAlertSent(null), 3500);
  };

  return (
    <div className="space-y-4 bg-[#fffafb] border border-pink-200 rounded-lg p-4 sm:p-5">
      <div className="flex items-center justify-between pb-2 border-b border-pink-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#f43f5e] animate-pulse"></span>
          <span className="font-mono text-xs font-bold text-[#1e1b1e]">
            PRESERV-X VISION INVENTORY ENGINE
          </span>
        </div>
        <span className="font-mono text-[10px] bg-[#fce7f3] text-[#9d174d] px-2 py-0.5 rounded border border-pink-200">
          CAM_FEED_ACTIVE
        </span>
      </div>

      {alertSent && (
        <div className="p-2.5 rounded bg-[#fdf4f7] border border-pink-300 text-xs font-mono text-[#9d174d] flex items-center gap-2 animate-in fade-in">
          <Bell className="w-3.5 h-3.5 text-[#db2777]" />
          <span>{alertSent}</span>
        </div>
      )}

      {/* Items Grid */}
      <div className="space-y-2.5">
        <div className="text-[11px] font-mono text-[#8c7283] uppercase tracking-wider">
          Detected Stored Items & Dynamic Shelf-Life
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-3 rounded border transition ${
                item.status === 'urgent'
                  ? 'bg-[#fff5f7] border-pink-300'
                  : 'bg-white border-pink-100'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-display text-xs font-bold text-[#1e1b1e]">
                    {item.name}
                  </div>
                  <div className="font-mono text-[11px] text-[#8c7283]">
                    Category: {item.category}
                  </div>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    item.status === 'urgent'
                      ? 'bg-[#fce7f3] text-[#9d174d] border border-pink-200'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}
                >
                  {item.days <= 2 ? `Exp: ${item.days}d` : `${item.days}d left`}
                </span>
              </div>
              <div className="mt-2 pt-2 border-t border-pink-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#5c4a56]">
                  {item.days <= 2 ? '⚠️ High Priority' : '✓ Normal State'}
                </span>
                <button
                  onClick={() => simulateNotification(item.name, item.days)}
                  className="text-[10px] font-mono text-[#9d174d] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Bell className="w-2.5 h-2.5" />
                  Test Push Alert
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 2. 2D Graphics Editor Simulator Component
function GraphicsEditorSimulator() {
  const [activeShape, setActiveShape] = useState<'rect' | 'circle' | 'line'>('rect');
  const [fillChar, setFillChar] = useState<string>('*');

  const canvasWidth = 24;
  const canvasHeight = 9;

  // Generate ASCII grid
  const generateCanvas = () => {
    const grid: string[][] = Array(canvasHeight)
      .fill(null)
      .map(() => Array(canvasWidth).fill(' '));

    if (activeShape === 'rect') {
      for (let x = 6; x < 18; x++) {
        grid[2][x] = fillChar;
        grid[6][x] = fillChar;
      }
      for (let y = 2; y <= 6; y++) {
        grid[y][6] = fillChar;
        grid[y][17] = fillChar;
      }
    } else if (activeShape === 'circle') {
      const cx = 11;
      const cy = 4;
      const r = 3.5;
      for (let y = 0; y < canvasHeight; y++) {
        for (let x = 0; x < canvasWidth; x++) {
          const dist = Math.sqrt((x - cx) ** 2 + ((y - cy) * 2) ** 2);
          if (dist > r - 0.7 && dist < r + 0.7) {
            grid[y][x] = fillChar;
          }
        }
      }
    } else if (activeShape === 'line') {
      for (let i = 2; i < 7; i++) {
        grid[i][i * 3] = fillChar;
      }
    }

    return grid;
  };

  const currentGrid = generateCanvas();

  return (
    <div className="space-y-4 bg-[#fffafb] border border-pink-200 rounded-lg p-4 sm:p-5">
      <div className="flex items-center justify-between pb-2 border-b border-pink-100">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#9d174d]" />
          <span className="font-mono text-xs font-bold text-[#1e1b1e]">
            CANVAS_BUFFER: 24x9 • C CHARACTER MATRIX
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveShape('rect')}
            className={`px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer ${
              activeShape === 'rect'
                ? 'bg-[#9d174d] text-white'
                : 'bg-white border border-pink-200 text-[#5c4a56]'
            }`}
          >
            RECT
          </button>
          <button
            onClick={() => setActiveShape('circle')}
            className={`px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer ${
              activeShape === 'circle'
                ? 'bg-[#9d174d] text-white'
                : 'bg-white border border-pink-200 text-[#5c4a56]'
            }`}
          >
            CIRCLE
          </button>
          <button
            onClick={() => setActiveShape('line')}
            className={`px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer ${
              activeShape === 'line'
                ? 'bg-[#9d174d] text-white'
                : 'bg-white border border-pink-200 text-[#5c4a56]'
            }`}
          >
            LINE
          </button>
        </div>
      </div>

      {/* ASCII Canvas Box */}
      <div className="p-3 bg-[#1e1b1e] rounded-md font-mono text-xs text-pink-300 overflow-x-auto shadow-inner">
        <div className="text-pink-400/80 text-[10px] mb-1">
          // struct Canvas &#123; char buffer[9][24]; Shape current; &#125;;
        </div>
        <div className="border border-pink-900/60 p-2 bg-black/40 rounded inline-block font-mono leading-none tracking-widest select-none">
          {'+' + '-'.repeat(canvasWidth) + '+'}
          {currentGrid.map((row, rIdx) => (
            <div key={rIdx}>
              |{row.join('')}|
            </div>
          ))}
          {'+' + '-'.repeat(canvasWidth) + '+'}
        </div>
        <div className="text-pink-300/90 text-[10px] mt-2">
          &gt; canvas_render(shape={activeShape}, fill='{fillChar}'); // Status: OK (0 mem leaks)
        </div>
      </div>
    </div>
  );
}

// 3. IoT Irrigation Simulator Component
function IoTIrrigationSimulator() {
  const [moisture, setMoisture] = useState<number>(28);
  const threshold = 35;
  const isPumpActive = moisture < threshold;

  return (
    <div className="space-y-4 bg-[#fffafb] border border-pink-200 rounded-lg p-4 sm:p-5">
      <div className="flex items-center justify-between pb-2 border-b border-pink-100">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4 text-[#db2777]" />
          <span className="font-mono text-xs font-bold text-[#1e1b1e]">
            NODEMCU ESP8266 + RELAY FEED
          </span>
        </div>
        <span
          className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
            isPumpActive
              ? 'bg-[#fce7f3] text-[#9d174d] border-pink-300 font-bold animate-pulse'
              : 'bg-emerald-50 text-emerald-700 border-emerald-200'
          }`}
        >
          PUMP: {isPumpActive ? 'ENGAGED (RELAY ON)' : 'STANDBY (RELAY OFF)'}
        </span>
      </div>

      {/* Moisture Control Slider */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-[#5c4a56]">Simulated Soil Moisture Sensor:</span>
          <span className="font-bold text-[#1e1b1e]">{moisture}% (Threshold: {threshold}%)</span>
        </div>
        <input
          type="range"
          min="10"
          max="80"
          value={moisture}
          onChange={(e) => setMoisture(Number(e.target.value))}
          className="w-full accent-[#db2777] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] font-mono text-[#8c7283]">
          <span>Dry (&lt; 35% triggers water pump)</span>
          <span>Saturated (&gt; 60%)</span>
        </div>
      </div>

      {/* Visual Circuit Pathway */}
      <div className="p-3 bg-white border border-pink-200 rounded-md">
        <div className="font-mono text-[10px] text-[#8c7283] uppercase tracking-wider mb-2">
          Circuit &amp; Signal Pathway
        </div>
        <div className="grid grid-cols-4 gap-2 text-center font-mono text-xs">
          <div className="p-2 rounded bg-[#fdf4f7] border border-pink-200">
            <div className="text-[10px] text-[#8c7283]">ANALOG IN</div>
            <div className="font-bold text-[#1e1b1e] mt-0.5">Soil Probe</div>
            <div className="text-[10px] text-[#db2777]">{moisture}%</div>
          </div>
          <div className="p-2 rounded bg-[#fdf4f7] border border-pink-200">
            <div className="text-[10px] text-[#8c7283]">ADC</div>
            <div className="font-bold text-[#1e1b1e] mt-0.5">Sensor ADC</div>
            <div className="text-[10px] text-[#5c4a56]">A0 Pin</div>
          </div>
          <div className="p-2 rounded bg-[#fdf4f7] border border-pink-200">
            <div className="text-[10px] text-[#8c7283]">MCU LOGIC</div>
            <div className="font-bold text-[#1e1b1e] mt-0.5">NodeMCU</div>
            <div className="text-[10px] text-[#5c4a56]">ESP8266</div>
          </div>
          <div
            className={`p-2 rounded border transition ${
              isPumpActive
                ? 'bg-[#fce7f3] border-pink-300 text-[#9d174d]'
                : 'bg-[#fdf4f7] border-pink-200 text-[#5c4a56]'
            }`}
          >
            <div className="text-[10px]">OUTPUT PIN</div>
            <div className="font-bold mt-0.5">Motor Relay</div>
            <div className="text-[10px] font-bold">
              {isPumpActive ? 'HIGH (12V ON)' : 'LOW (OFF)'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
