export function DottedPattern({ spacing = 28, dotSize = 1.5, color = '#d4944d' }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage: `radial-gradient(circle, ${color} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
      }}
    />
  )
}

export function WavyLines({ opacity = 0.05, color = '#6d4f34' }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        className="absolute left-0 top-0 h-full w-full"
      >
        <path
          d="M-80,550 C150,420 280,200 480,320 C620,400 560,100 720,180 C880,260 920,480 1080,360 C1240,240 1380,420 1520,340"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity={opacity}
        />
        <path
          d="M-80,650 C250,500 350,250 550,380 C680,460 720,180 850,260 C980,340 940,550 1100,440 C1260,330 1400,480 1520,400"
          fill="none"
          stroke={color}
          strokeWidth="3"
          opacity={opacity * 0.7}
        />
        <path
          d="M-80,400 C120,220 220,500 380,360 C540,220 620,440 780,320 C940,200 1020,420 1180,300 C1340,180 1420,380 1520,280"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          opacity={opacity * 0.85}
        />
        <path
          d="M-80,500 C200,380 320,550 520,420 C720,290 820,480 1020,350 C1220,220 1360,420 1520,320"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          opacity={opacity * 0.5}
        />
      </svg>
    </div>
  )
}

export function WaveDivider({ opacity = 0.15, color = '#d4944d' }) {
  return (
    <div className="w-full overflow-hidden leading-none" style={{ opacity }}>
      <svg width="100%" height="24" viewBox="0 0 1200 24" preserveAspectRatio="none" className="block">
        <path
          d="M0,12 C100,4 200,20 300,12 C400,4 500,20 600,12 C700,4 800,20 900,12 C1000,4 1100,20 1200,12"
          stroke={color}
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  )
}
