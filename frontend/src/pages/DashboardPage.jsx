function DashboardPage() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>ReviewShield AI | Executive Dashboard</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            backdrop-filter: blur(12px);\n            background: rgba(26, 31, 48, 0.6);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n        }\n        .ai-insight-node {\n            border: 1px solid transparent;\n            background: linear-gradient(#1a1f30, #1a1f30) padding-box,\n                        linear-gradient(to right, #4f46e5, #4cd7f6) border-box;\n        }\n        body {\n            background-color: #0e1323;\n            color: #dee1f9;\n        }\n    "
    }}
  />
  {/* TopAppBar */}
  <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(79,70,229,0.15)] flex justify-between items-center px-gutter py-4 max-w-full">
    <div className="flex items-center gap-3">
      <span
        className="material-symbols-outlined text-primary text-3xl"
        data-icon="shield_with_heart"
      >
        shield_with_heart
      </span>
      <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
        ReviewShield AI
      </span>
    </div>
    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center gap-6 px-6">
        <span className="font-label-md text-label-md text-secondary font-bold transition-all duration-300 ease-in-out hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(76,215,246,0.5)] cursor-pointer">
          Dashboard
        </span>
        <span className="font-label-md text-label-md text-on-surface-variant transition-all duration-300 ease-in-out hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(76,215,246,0.5)] cursor-pointer">
          Reports
        </span>
        <span className="font-label-md text-label-md text-on-surface-variant transition-all duration-300 ease-in-out hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(76,215,246,0.5)] cursor-pointer">
          System Logs
        </span>
      </div>
      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center border border-white/20 overflow-hidden">
        <img
          alt="Admin User"
          className="w-full h-full object-cover"
          data-alt="A professional headshot of a high-ranking technology executive with a confident expression, wearing a sleek modern business casual outfit. The background is a soft-focus corporate office with cool blue and indigo lighting, maintaining a premium cybersecurity aesthetic. The lighting is crisp and detailed, emphasizing technical mastery and executive presence."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEz1ihW681y6-AI-h0sOrqCBQSP3NkgPU4XfCYGUOTeuOamZLDRpH9-oG9My5NfkeWEVUQg5Gu7kEsrn4ZpUq4FEPckvv9ke9RLG4bOJOP6MxMbJPVjQFteV31nqOSDP9buPDxcHGUatw1TViwnMMb9-A98mY45zwtwFIc5Q-8jJxfHsPz035Wyo3AfRpU818_XflVWP2rNq8OK5V-Nzss3RsG8ONvKDuBXJDWjQn3GhxnHkB3s2bFISVaeoP5hz-j-FHJfVDv3XE"
        />
      </div>
    </div>
  </header>
  {/* NavigationDrawer (Desktop Only) */}
  <aside className="hidden md:flex fixed left-0 top-0 h-full w-[280px] bg-surface-container-low/90 dark:bg-surface-container-low/90 backdrop-blur-lg border-r border-white/10 shadow-2xl flex-col gap-4 p-6 pt-24 z-40">
    <div className="mb-6">
      <h2 className="font-headline-sm text-headline-sm text-secondary font-bold tracking-widest">
        SECURITY CONSOLE
      </h2>
    </div>
    <nav className="flex flex-col gap-2">
      {/* Active State: Overview */}
      <a
        className="flex items-center gap-4 p-3 rounded-lg bg-primary-container/20 text-secondary border-r-4 border-secondary transition-all duration-200"
        href="#"
      >
        <span className="material-symbols-outlined" data-icon="dashboard">
          dashboard
        </span>
        <span className="font-label-md text-label-md">Overview</span>
      </a>
      <a
        className="flex items-center gap-4 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface transition-all duration-200"
        href="#"
      >
        <span className="material-symbols-outlined" data-icon="psychology">
          psychology
        </span>
        <span className="font-label-md text-label-md">Analyzer</span>
      </a>
      <a
        className="flex items-center gap-4 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface transition-all duration-200"
        href="#"
      >
        <span className="material-symbols-outlined" data-icon="analytics">
          analytics
        </span>
        <span className="font-label-md text-label-md">Analytics</span>
      </a>
      <a
        className="flex items-center gap-4 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface transition-all duration-200"
        href="#"
      >
        <span className="material-symbols-outlined" data-icon="verified_user">
          verified_user
        </span>
        <span className="font-label-md text-label-md">Trust Scores</span>
      </a>
      <a
        className="flex items-center gap-4 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface transition-all duration-200"
        href="#"
      >
        <span className="material-symbols-outlined" data-icon="account_circle">
          account_circle
        </span>
        <span className="font-label-md text-label-md">Reviewers</span>
      </a>
      <a
        className="flex items-center gap-4 p-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface transition-all duration-200"
        href="#"
      >
        <span className="material-symbols-outlined" data-icon="sensors">
          sensors
        </span>
        <span className="font-label-md text-label-md">Live Feed</span>
      </a>
    </nav>
    <div className="mt-auto pt-6 border-t border-white/5">
      <div className="p-4 rounded-xl ai-insight-node flex flex-col gap-2">
        <span className="font-label-sm text-label-sm text-secondary">
          SYSTEM STATUS
        </span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="font-label-sm text-label-sm text-on-surface">
            AI Engine Core Online
          </span>
        </div>
      </div>
    </div>
  </aside>
  {/* Main Content Canvas */}
  <main className="md:ml-[280px] pt-24 pb-32 md:pb-12 px-gutter min-h-screen">
    <div className="max-w-7xl mx-auto space-y-gutter">
      {/* Welcome Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            Intelligence Overview
          </h1>
          <p className="text-on-surface-variant font-body-md mt-1">
            Real-time fraud detection and integrity monitoring system active.
          </p>
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-xl font-label-md flex items-center gap-2 shadow-lg hover:brightness-110 transition-all">
          <span
            className="material-symbols-outlined text-lg"
            data-icon="ios_share"
          >
            ios_share
          </span>
          Export Executive Summary
        </button>
      </header>
      {/* Top Row: Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Total Reviews */}
        <div className="glass-card p-card-padding rounded-xl relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span
              className="material-symbols-outlined text-8xl"
              data-icon="chat_bubble"
            >
              chat_bubble
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Total Reviews Processed
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-display-lg text-display-lg text-on-surface">
                1.2M
              </span>
              <span className="text-tertiary font-label-sm flex items-center">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_upward"
                >
                  arrow_upward
                </span>
                12.5%
              </span>
            </div>
          </div>
        </div>
        {/* Fake Detected */}
        <div className="glass-card p-card-padding rounded-xl relative overflow-hidden group border-error/20">
          <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity text-error">
            <span
              className="material-symbols-outlined text-8xl"
              data-icon="dangerous"
            >
              dangerous
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Anomalies Detected
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-display-lg text-display-lg text-error">
                14.2k
              </span>
              <span className="text-error font-label-sm flex items-center">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_upward"
                >
                  arrow_upward
                </span>
                4.2%
              </span>
            </div>
          </div>
        </div>
        {/* Avg Trust Score */}
        <div className="glass-card p-card-padding rounded-xl relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity text-secondary">
            <span
              className="material-symbols-outlined text-8xl"
              data-icon="verified"
            >
              verified
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Average Trust Score
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-display-lg text-display-lg text-secondary">
                84.2
              </span>
              <span className="text-tertiary font-label-sm flex items-center">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="trending_up"
                >
                  trending_up
                </span>
                Stable
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Middle Row: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Large Line Chart: Detection Trends */}
        <div className="lg:col-span-2 glass-card p-card-padding rounded-xl flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Detection Trends
            </h3>
            <div className="flex gap-2">
              <span className="bg-surface-container px-3 py-1 rounded-full font-label-sm text-on-surface-variant border border-white/5">
                7 Days
              </span>
              <span className="bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm border border-primary/30">
                30 Days
              </span>
            </div>
          </div>
          <div className="relative h-[300px] w-full flex items-end justify-between px-2 gap-4">
            {/* Simplified Visual Representation of a Line Chart */}
            <div className="absolute inset-0 flex flex-col justify-between py-2 opacity-30 pointer-events-none">
              <div className="border-t border-white/10 w-full h-0" />
              <div className="border-t border-white/10 w-full h-0" />
              <div className="border-t border-white/10 w-full h-0" />
              <div className="border-t border-white/10 w-full h-0" />
            </div>
            <div className="w-full h-full relative">
              <svg
                className="w-full h-full drop-shadow-[0_0_15px_rgba(76,215,246,0.3)]"
                preserveAspectRatio="none"
                viewBox="0 0 1000 300"
              >
                <path
                  d="M0,250 Q100,220 200,240 T400,180 T600,120 T800,150 T1000,50"
                  fill="none"
                  stroke="#4cd7f6"
                  strokeLinecap="round"
                  strokeWidth={4}
                />
                <path
                  d="M0,250 Q100,220 200,240 T400,180 T600,120 T800,150 T1000,50 L1000,300 L0,300 Z"
                  fill="url(#gradient-cyan)"
                  opacity="0.1"
                />
                <defs>
                  <linearGradient
                    id="gradient-cyan"
                    x1="0%"
                    x2="0%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#4cd7f6" />
                    <stop offset="100%" stopColor="#4cd7f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute top-[50px] right-[10%] w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(76,215,246,1)]" />
            </div>
          </div>
          <div className="flex justify-between font-label-sm text-outline-variant">
            <span>OCT 01</span>
            <span>OCT 10</span>
            <span>OCT 20</span>
            <span>OCT 30</span>
          </div>
        </div>
        {/* Pie Chart: Review Integrity */}
        <div className="glass-card p-card-padding rounded-xl flex flex-col gap-6">
          <h3 className="font-headline-md text-headline-md text-on-surface">
            Review Integrity
          </h3>
          <div className="flex flex-col items-center justify-center flex-1 relative">
            {/* Custom visual pie chart */}
            <div className="w-48 h-48 rounded-full border-[16px] border-surface-container-highest relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[16px] border-primary border-t-transparent border-l-transparent transform -rotate-45" />
              <div className="flex flex-col items-center">
                <span className="font-display-lg text-headline-lg text-primary">
                  76%
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                  Verified
                </span>
              </div>
            </div>
            <div className="mt-8 w-full space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="font-label-md text-label-md">Authentic</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  76%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-tertiary" />
                  <span className="font-label-md text-label-md">
                    Bot Managed
                  </span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  15%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-error" />
                  <span className="font-label-md text-label-md">Malicious</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  9%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section: Data Table */}
      <section className="glass-card rounded-xl overflow-hidden">
        <div className="p-card-padding border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Suspicious Reviews
            </h3>
            <p className="text-on-surface-variant font-label-sm">
              System high-priority alerts requiring immediate attention.
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                data-icon="search"
              >
                search
              </span>
              <input
                className="bg-surface-container-lowest border-none rounded-lg pl-10 pr-4 py-2 text-label-md focus:ring-1 focus:ring-primary w-full"
                placeholder="Filter alerts..."
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-high/50 text-on-surface-variant font-label-sm">
              <tr>
                <th className="p-4 font-medium uppercase tracking-wider">
                  Product ID
                </th>
                <th className="p-4 font-medium uppercase tracking-wider">
                  Review Fragment
                </th>
                <th className="p-4 font-medium uppercase tracking-wider">
                  Detection Logic
                </th>
                <th className="p-4 font-medium uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="p-4 font-medium uppercase tracking-wider">
                  Status
                </th>
                <th className="p-4 font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-body-md">
              {/* Table Row 1 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-label-sm text-secondary">#NX-9021</td>
                <td className="p-4 max-w-xs truncate">
                  "Best product ever had multiple items shipped quickly..."
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      data-icon="pattern"
                    >
                      pattern
                    </span>
                    <span className="text-label-md">Pattern Matching</span>
                  </div>
                </td>
                <td className="p-4 font-label-sm text-outline-variant">
                  2023-11-24 14:02:11
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded bg-error/10 text-error text-label-sm border border-error/20 uppercase">
                    Critical
                  </span>
                </td>
                <td className="p-4">
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="more_vert"
                    >
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
              {/* Table Row 2 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-label-sm text-secondary">#NX-4432</td>
                <td className="p-4 max-w-xs truncate">
                  "Incredible value for money, I recommend everyone buy..."
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      data-icon="psychology"
                    >
                      psychology
                    </span>
                    <span className="text-label-md">NLP Sentiment Drift</span>
                  </div>
                </td>
                <td className="p-4 font-label-sm text-outline-variant">
                  2023-11-24 13:58:45
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-label-sm border border-secondary/20 uppercase">
                    Suspicious
                  </span>
                </td>
                <td className="p-4">
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="more_vert"
                    >
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
              {/* Table Row 3 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-label-sm text-secondary">#NX-1108</td>
                <td className="p-4 max-w-xs truncate">
                  "Item arrived broken, but customer support fixed it fast."
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    <span className="text-label-md">IP Cluster Anomaly</span>
                  </div>
                </td>
                <td className="p-4 font-label-sm text-outline-variant">
                  2023-11-24 13:45:10
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded bg-surface-container-highest text-on-surface-variant text-label-sm border border-white/10 uppercase">
                    Reviewing
                  </span>
                </td>
                <td className="p-4">
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <span
                      className="material-symbols-outlined"
                      data-icon="more_vert"
                    >
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-white/5 flex justify-between items-center bg-surface-container-low/50">
          <span className="font-label-sm text-on-surface-variant">
            Showing 1-10 of 14,200 detections
          </span>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-on-surface-variant">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="chevron_left"
              >
                chevron_left
              </span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-on-surface-variant">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="chevron_right"
              >
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
  {/* BottomNavBar (Mobile Only) */}
  <footer className="fixed bottom-0 w-full rounded-t-xl z-50 md:hidden bg-surface-container-high/80 dark:bg-surface-container-high/80 backdrop-blur-2xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
    <div className="flex justify-around items-center h-16 pb-safe">
      <div className="flex flex-col items-center gap-1 text-secondary drop-shadow-[0_0_5px_rgba(76,215,246,0.8)] transition-transform duration-150 active:scale-95">
        <span className="material-symbols-outlined" data-icon="home">
          home
        </span>
        <span className="font-label-sm text-label-sm-mobile">Home</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-outline-variant transition-transform duration-150 active:scale-95">
        <span className="material-symbols-outlined" data-icon="query_stats">
          query_stats
        </span>
        <span className="font-label-sm text-label-sm-mobile">Analyze</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-outline-variant transition-transform duration-150 active:scale-95">
        <span className="material-symbols-outlined" data-icon="insert_chart">
          insert_chart
        </span>
        <span className="font-label-sm text-label-sm-mobile">Stats</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-outline-variant transition-transform duration-150 active:scale-95">
        <span
          className="material-symbols-outlined"
          data-icon="notifications_active"
        >
          notifications_active
        </span>
        <span className="font-label-sm text-label-sm-mobile">Alerts</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-outline-variant transition-transform duration-150 active:scale-95">
        <span className="material-symbols-outlined" data-icon="person">
          person
        </span>
        <span className="font-label-sm text-label-sm-mobile">Profile</span>
      </div>
    </div>
  </footer>
</>

  );
}

export default DashboardPage;