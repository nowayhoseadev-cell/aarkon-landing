const lanes = [
  { label: "Project state", value: "indexed / inspectable", tone: "bg-aarkon-mint" },
  { label: "Decision gate", value: "approval required", tone: "bg-aarkon-gold" },
  { label: "Proof path", value: "tamper-evident", tone: "bg-aarkon-cyan" },
];

const stages = [
  { label: "Observe", state: "watch" },
  { label: "Explain", state: "trace" },
  { label: "Approve", state: "gate" },
  { label: "Commit", state: "write" },
];

const terminalRows = [
  "state: observe",
  "risk: bounded",
  "gate: awaiting approval",
];

export function SystemSignal() {
  return (
    <div
      aria-label="AARKON operational signal visual"
      className="reveal reveal-delay-2 operational-glow relative min-h-[420px] min-w-0 overflow-hidden rounded-[8px] border border-aarkon-line bg-aarkon-panel/88 p-4 shadow-2xl shadow-black/30 sm:min-h-[440px] sm:p-5"
    >
      <div className="drifting-grid absolute inset-0 bg-[linear-gradient(rgba(231,236,232,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(231,236,232,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="micro-scanline absolute inset-0" />
      <div className="signal-sweep absolute inset-y-0 left-1/2 w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-aarkon-mint/10 to-transparent blur-sm" />

      <div className="relative flex h-full min-h-[388px] flex-col justify-between gap-4 sm:min-h-[400px]">
        <div className="flex items-center justify-between border-b border-aarkon-line-soft pb-4">
          <div>
            <p className="text-xs font-medium uppercase text-aarkon-cyan">
              Operation Trace
            </p>
            <p className="mt-1 text-sm text-aarkon-muted">
              careful execution model
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-[6px] border border-aarkon-line bg-aarkon-bg/72 px-2.5 py-1.5 text-xs text-aarkon-muted">
            <span className="node-pulse size-1.5 rounded-[2px] bg-aarkon-mint" />
            online
          </div>
        </div>

        <div className="grid gap-2">
          {lanes.map((lane) => (
            <div
              key={lane.label}
              className="grid grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] items-center gap-4 border-b border-aarkon-line-soft py-2.5 last:border-b-0"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className={`status-dot size-2 shrink-0 rounded-[2px] ${lane.tone}`} />
                <span className="truncate text-sm text-aarkon-text">
                  {lane.label}
                </span>
              </div>
              <span className="truncate text-right text-sm text-aarkon-muted">
                {lane.value}
              </span>
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-[1fr_0.82fr]">
          <div className="relative min-h-24 overflow-hidden rounded-[6px] border border-aarkon-line bg-aarkon-bg/62 p-3">
            <div className="mb-2 flex items-center justify-between text-[11px] uppercase text-aarkon-dim">
              <span>Trace</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="status-dot size-1.5 rounded-[2px] bg-aarkon-cyan" />
                live
              </span>
            </div>
            <svg
              className="h-12 w-full overflow-visible"
              viewBox="0 0 260 64"
              role="img"
              aria-label="Animated system trace"
            >
              <path
                d="M0 46 L34 46 L56 26 L89 26 L112 38 L144 38 L169 18 L204 18 L226 30 L260 30"
                className="trace-path"
                fill="none"
                pathLength="1"
              />
              <path
                d="M0 46 L34 46 L56 26 L89 26 L112 38 L144 38 L169 18 L204 18 L226 30 L260 30"
                className="trace-path trace-path-secondary"
                fill="none"
                pathLength="1"
              />
            </svg>
          </div>

          <div className="terminal-window min-h-24 rounded-[6px] border border-aarkon-line bg-aarkon-bg/72 p-3 font-mono text-[11px] text-aarkon-muted">
            {terminalRows.map((row, index) => (
              <p
                key={row}
                className="terminal-row flex items-center gap-2"
                style={{ animationDelay: `${index * 1.2}s` }}
              >
                <span className="text-aarkon-mint">&gt;</span>
                {row}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {stages.map((stage, index) => (
            <div key={stage.label} className="relative">
              {index < stages.length - 1 ? (
                <span className="absolute left-[calc(50%+1.25rem)] top-5 hidden h-px w-[calc(100%-1rem)] bg-aarkon-line sm:block" />
              ) : null}
              <div className="relative grid min-h-20 place-items-center rounded-[6px] border border-aarkon-line bg-aarkon-bg/72 px-2 text-center text-xs text-aarkon-muted">
                <span className="status-dot mb-2 block size-2 rounded-[2px] bg-aarkon-mint/80" />
                <span>{stage.label}</span>
                <span className="mt-1 font-mono text-[10px] text-aarkon-dim">
                  {stage.state}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
