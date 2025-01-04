// Simple motion component wrapper for animations
export const motion = {
  div: ({ children, initial, animate, transition, className }: any) => {
    return (
      <div 
        className={className}
        style={{
          opacity: animate?.opacity ?? initial?.opacity,
          transform: `translateY(${animate?.y ?? initial?.y}px)`,
          transition: `all ${transition?.duration ?? 0.3}s ease-out`
        }}
      >
        {children}
      </div>
    );
  }
};