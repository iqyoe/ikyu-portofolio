'use client';

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

// Initialize mermaid configuration once
mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    primaryColor: '#232323',
    primaryTextColor: '#ffffff',
    primaryBorderColor: '#1e90ff',
    lineColor: '#00ff85',
    secondaryColor: '#0d0d0d',
    tertiaryColor: '#232323',
    edgeLabelBackground: '#0d0d0d',
  },
  securityLevel: 'loose',
});

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, originX: 0, originY: 0 });

  const clampZoom = (value: number) => Math.min(Math.max(value, 0.5), 2.5);

  const resetView = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    const resetFrame = requestAnimationFrame(resetView);

    if (containerRef.current) {
      // Clear previous rendering before drawing
      containerRef.current.innerHTML = '';
      
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      
      mermaid.render(id, chart).then(({ svg }) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;

          const renderedSvg = containerRef.current.querySelector('svg');
          if (renderedSvg) {
            const viewBox = renderedSvg.getAttribute('viewBox');
            const viewBoxWidth = viewBox ? Number(viewBox.split(/\s+/)[2]) : 0;

            // Keep the diagram at a readable natural size instead of shrinking
            // the entire SVG to fit the article column.
            renderedSvg.style.width = `${Math.max(viewBoxWidth, 720)}px`;
            renderedSvg.style.maxWidth = 'none';
            renderedSvg.style.height = 'auto';

            renderedSvg.querySelectorAll('.edgePath .path, .flowchart-link').forEach((edge) => {
              edge.setAttribute('stroke', '#00ff85');
              edge.setAttribute('stroke-width', '2.5');
            });
            renderedSvg.querySelectorAll('marker path').forEach((arrow) => {
              arrow.setAttribute('fill', '#00ff85');
              arrow.setAttribute('stroke', '#00ff85');
            });
          }
        }
      }).catch((error) => {
        console.error('Mermaid rendering error:', error);
      });
    }

    return () => cancelAnimationFrame(resetFrame);
  }, [chart]);

  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsExpanded(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded]);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    setZoom((currentZoom) => clampZoom(currentZoom - event.deltaY * 0.001));
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: offset.x,
      originY: offset.y,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    setOffset({
      x: dragRef.current.originX + event.clientX - dragRef.current.startX,
      y: dragRef.current.originY + event.clientY - dragRef.current.startY,
    });
  };

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  return (
    <div className={`${isExpanded ? 'fixed inset-4 z-50 flex flex-col shadow-2xl' : 'my-6'} overflow-hidden rounded-2xl border border-slate-800 bg-slate-950`}>
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-3 py-2">
        <p className="text-xs font-semibold text-slate-400">
          Diagram · {Math.round(zoom * 100)}%
        </p>
        <div className="flex items-center gap-1" aria-label="Diagram controls">
          <button type="button" onClick={() => setZoom((currentZoom) => clampZoom(currentZoom - 0.1))} className="rounded-md px-2 py-1 text-sm font-bold text-slate-300 hover:bg-pink-500" aria-label="Zoom out">−</button>
          <button type="button" onClick={resetView} className="rounded-md px-2 py-1 text-xs font-semibold text-slate-300 hover:bg-pink-500" aria-label="Reset diagram view">Reset</button>
          <button type="button" onClick={() => setZoom((currentZoom) => clampZoom(currentZoom + 0.1))} className="rounded-md px-2 py-1 text-sm font-bold text-slate-300 hover:bg-pink-500" aria-label="Zoom in">+</button>
          <button type="button" onClick={() => setIsExpanded((expanded) => !expanded)} className="ml-1 rounded-md px-2 py-1 text-xs font-semibold text-slate-300 hover:bg-pink-500" aria-label={isExpanded ? 'Close expanded diagram' : 'Open expanded diagram'}>{isExpanded ? 'Close' : 'Expand'}</button>
        </div>
      </div>
      <div
        className={`mermaid-chart flex min-h-64 flex-1 items-center justify-center overflow-hidden p-6 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        role="application"
        aria-label="Interactive Mermaid diagram. Use the buttons or mouse wheel to zoom, and drag to pan."
      >
        <div
          ref={containerRef}
          className="flex shrink-0 justify-center transition-transform duration-100"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`, transformOrigin: 'center center' }}
        />
      </div>
      <p className="border-t border-slate-800 px-3 py-2 text-center text-xs text-slate-400">
        Scroll to zoom · Drag to move
      </p>
    </div>
  );
}
