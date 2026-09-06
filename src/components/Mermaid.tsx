'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// Initialize mermaid configuration once
mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
});

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear previous rendering before drawing
      containerRef.current.innerHTML = '';
      
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      
      mermaid.render(id, chart).then(({ svg }) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      }).catch((error) => {
        console.error('Mermaid rendering error:', error);
      });
    }
  }, [chart]);

  return (
    <div 
      ref={containerRef} 
      className="mermaid-chart my-6 flex justify-center overflow-x-auto" 
    />
  );
}