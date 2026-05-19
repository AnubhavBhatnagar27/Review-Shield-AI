function AnalyzerPage() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>ReviewShield AI - Security Console</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            backdrop-filter: blur(12px);\n            background: rgba(26, 31, 48, 0.6);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n        }\n        .ai-node-glow {\n            border: 1px solid transparent;\n            background: linear-gradient(#1a1f30, #1a1f30) padding-box,\n                        linear-gradient(to bottom right, #4f46e5, #4cd7f6) border-box;\n        }\n        .scan-pulse {\n            box-shadow: 0 0 0 0 rgba(76, 215, 246, 0.4);\n            animation: pulse 2s infinite;\n        }\n        @keyframes pulse {\n            0% { box-shadow: 0 0 0 0 rgba(76, 215, 246, 0.4); }\n            70% { box-shadow: 0 0 0 10px rgba(76, 215, 246, 0); }\n            100% { box-shadow: 0 0 0 0 rgba(76, 215, 246, 0); }\n        }\n    "
    }}
  />
  <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(79,70,229,0.15)] flex justify-between items-center px-gutter py-4 max-w-full">
    <div className="flex items-center gap-3">
      <span
        className="material-symbols-outlined text-primary"
        data-icon="shield_with_heart"
        style={{ fontVariationSettings: '"FILL" 1' }}
      >
        shield_with_heart
      </span>
      <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
        ReviewShield AI
      </span>
    </div>
    <div className="hidden md:flex items-center gap-6">
      <nav className="flex gap-8">
        <a
          className="text-secondary font-bold font-label-md text-label-md transition-all duration-300 ease-in-out"
          href="#"
        >
          Overview
        </a>
        <a
          className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all duration-300 ease-in-out"
          href="#"
        >
          History
        </a>
        <a
          className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-all duration-300 ease-in-out"
          href="#"
        >
          Settings
        </a>
      </nav>
      <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden border border-white/10">
        <img
          alt="Admin User"
          data-alt="A professional close-up studio portrait of a cybersecurity analyst with soft dramatic lighting against a dark blue background. The style is crisp and modern, matching the high-end security aesthetic with cool blue and indigo tones, conveying intelligence and technical expertise."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUwBEckhM3x-_ZYzuNELsQUYqsblG92UHnRzVLT9V3gJCUqWzv0RP8gyudHCR9rLcnDPJH9VVgecmizDUoa6-zc47CIv28WkqLgS0Rbk_3dy_eCcG9V8uB-q4CCBLKnbUr-KDIR-ZBZ4bSgJXuth-qgyuz2cehiXnTeVCP_VIYJhJ-g-Ne71OMzvndQCZZHwQa6gsig5KUOutwH82KiecKLOg8-d7wVLKZdilfYZP-xq7fzmC5ts-HNmmHEQsmgg4irVxHAJl0IYw"
        />
      </div>
    </div>
  </header>
  <aside className="fixed left-0 top-0 h-full w-[280px] hidden md:flex flex-col gap-4 p-6 bg-surface-container-low/90 dark:bg-surface-container-low/90 backdrop-blur-lg border-r border-white/10 shadow-2xl z-40 pt-24">
    <div className="mb-6">
      <span className="font-headline-sm text-headline-sm text-secondary font-bold tracking-widest">
        SECURITY CONSOLE
      </span>
    </div>
    <nav className="flex flex-col gap-2">
      <a
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface transition-all duration-200"
        href="#"
      >
        <span className="material-symbols-outlined" data-icon="dashboard">
          dashboard
        </span>
        <span className="font-label-md text-label-md">Overview</span>
      </a>
      <a
        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-container/20 text-secondary border-r-4 border-secondary transition-all duration-200"
        href="#"
      >
        <span
          className="material-symbols-outlined"
          data-icon="psychology"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          psychology
        </span>
        <span className="font-label-md text-label-md">Analyzer</span>
      </a>
      <a
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface transition-all duration-200"
        href="#"
      >
        <span className="material-symbols-outlined" data-icon="analytics">
          analytics
        </span>
        <span className="font-label-md text-label-md">Analytics</span>
      </a>
      <a
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface transition-all duration-200"
        href="#"
      >
        <span className="material-symbols-outlined" data-icon="verified_user">
          verified_user
        </span>
        <span className="font-label-md text-label-md">Trust Scores</span>
      </a>
      <a
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface transition-all duration-200"
        href="#"
      >
        <span className="material-symbols-outlined" data-icon="account_circle">
          account_circle
        </span>
        <span className="font-label-md text-label-md">Reviewers</span>
      </a>
      <a
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface transition-all duration-200"
        href="#"
      >
        <span className="material-symbols-outlined" data-icon="sensors">
          sensors
        </span>
        <span className="font-label-md text-label-md">Live Feed</span>
      </a>
    </nav>
  </aside>
  <main className="md:ml-[280px] pt-24 pb-24 md:pb-8 px-6 lg:px-12 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
      <section className="flex flex-col gap-6">
        <div className="glass-card rounded-xl p-card-padding">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="rate_review"
            >
              rate_review
            </span>
            Submission Entry
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="font-label-md text-label-md text-on-surface-variant block mb-2">
                Review Content
              </label>
              <div className="relative">
                <div className="absolute inset-0 p-4 font-body-md text-body-md pointer-events-none text-transparent leading-relaxed">
                  This{" "}
                  <span className="bg-error-container/30 border-b border-error text-error px-1 rounded">
                    phenomenal
                  </span>{" "}
                  deal was almost{" "}
                  <span className="bg-error-container/30 border-b border-error text-error px-1 rounded">
                    too good to be true
                  </span>
                  . I was{" "}
                  <span className="bg-error-container/30 border-b border-error text-error px-1 rounded">
                    compensated
                  </span>{" "}
                  for this honest feedback, but I truly believe every{" "}
                  <span className="bg-error-container/30 border-b border-error text-error px-1 rounded">
                    guaranteed
                  </span>{" "}
                  word.
                </div>
                <textarea
                  className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline focus:border-primary ring-0 focus:ring-0 rounded-t-lg p-4 font-body-md text-body-md text-on-surface placeholder:text-outline-variant transition-all duration-300 resize-none"
                  rows={6}
                  defaultValue={
                    "This phenomenal deal was almost too good to be true. I was compensated for this honest feedback, but I truly believe every guaranteed word."
                  }
                />
              </div>
            </div>
            <div className="flex items-center gap-4 py-2">
              <span className="font-label-md text-label-md text-on-surface-variant">
                Rating:
              </span>
              <div className="flex gap-1">
                <span
                  className="material-symbols-outlined text-secondary"
                  data-icon="star"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-secondary"
                  data-icon="star"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-secondary"
                  data-icon="star"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-secondary"
                  data-icon="star"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-secondary"
                  data-icon="star"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">
                  Reviewer ID
                </label>
                <input
                  className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline focus:border-primary rounded-t-lg px-3 py-2 font-label-md text-label-md text-on-surface"
                  type="text"
                  defaultValue="USR-99283-XK"
                />
              </div>
              <div>
                <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">
                  IP Origin
                </label>
                <input
                  className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline focus:border-primary rounded-t-lg px-3 py-2 font-label-md text-label-md text-on-surface"
                  type="text"
                  defaultValue="192.168.1.104"
                />
              </div>
            </div>
            <button className="mt-4 bg-primary-container text-on-primary-container font-headline-md text-headline-md py-4 rounded-xl font-bold shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3">
              <span
                className="material-symbols-outlined"
                data-icon="bolt"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                bolt
              </span>
              RUN NEURAL SCAN
            </button>
          </div>
        </div>
        <div className="glass-card rounded-xl p-card-padding">
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
            Metadata Context
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-surface-container/50 rounded-lg">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Browser Fingerprint
              </span>
              <span className="font-label-md text-label-md text-secondary">
                Match High (89%)
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-surface-container/50 rounded-lg">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Account Age
              </span>
              <span className="font-label-md text-label-md text-tertiary">
                2 Days
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-surface-container/50 rounded-lg">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Previous Flags
              </span>
              <span className="font-label-md text-label-md text-error">
                3 Instances
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="ai-node-glow rounded-xl p-card-padding relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <div className="bg-error/10 border border-error/50 px-4 py-1 rounded-full flex items-center gap-2 scan-pulse">
              <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
              <span className="font-label-sm text-label-sm text-error uppercase font-bold tracking-widest">
                Prediction: Fraudulent
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  className="text-white/5"
                  cx={80}
                  cy={80}
                  fill="none"
                  r={70}
                  stroke="currentColor"
                  strokeWidth={8}
                />
                <circle
                  className="text-secondary drop-shadow-[0_0_8px_rgba(76,215,246,0.5)]"
                  cx={80}
                  cy={80}
                  fill="none"
                  r={70}
                  stroke="currentColor"
                  strokeDasharray={440}
                  strokeDashoffset={44}
                  strokeWidth={8}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-display-lg text-display-lg text-on-surface">
                  92<span className="text-headline-md">%</span>
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  Confidence
                </span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                Fraud Indicator Radar
              </h3>
              <div className="aspect-square w-full max-w-[200px] mx-auto bg-surface-container-highest/20 rounded-full flex items-center justify-center border border-white/5 p-4 relative">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] border border-dashed border-white rounded-full" />
                  <div className="absolute w-[50%] h-[50%] border border-dashed border-white rounded-full" />
                </div>
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 100 100"
                >
                  <polygon
                    fill="none"
                    points="50,10 85,35 75,80 25,80 15,35"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth={1}
                  />
                  <polygon
                    className="drop-shadow-[0_0_4px_rgba(76,215,246,0.6)]"
                    fill="rgba(76,215,246,0.2)"
                    points="50,20 80,45 65,70 35,75 20,40"
                    stroke="#4cd7f6"
                    strokeWidth={2}
                  />
                  <circle cx={50} cy={20} fill="#4cd7f6" r={2} />
                  <circle cx={80} cy={45} fill="#4cd7f6" r={2} />
                  <circle cx={65} cy={70} fill="#4cd7f6" r={2} />
                  <circle cx={35} cy={75} fill="#4cd7f6" r={2} />
                  <circle cx={20} cy={40} fill="#4cd7f6" r={2} />
                </svg>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-label-sm text-[10px] text-on-surface-variant uppercase">
                  Syntax
                </div>
                <div className="absolute top-1/3 -right-6 font-label-sm text-[10px] text-on-surface-variant uppercase">
                  Bias
                </div>
                <div className="absolute -bottom-4 right-4 font-label-sm text-[10px] text-on-surface-variant uppercase">
                  History
                </div>
                <div className="absolute -bottom-4 left-4 font-label-sm text-[10px] text-on-surface-variant uppercase">
                  Network
                </div>
                <div className="absolute top-1/3 -left-8 font-label-sm text-[10px] text-on-surface-variant uppercase">
                  Sentiment
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card rounded-xl p-card-padding">
          <div className="flex items-center gap-2 mb-6">
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="visibility"
            >
              visibility
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Explainability Panel
            </h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-surface-container-high/50 border-l-4 border-error">
              <h4 className="font-label-md text-label-md text-error mb-1">
                Incentivized Language Pattern
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-snug">
                The phrase "compensated for this honest feedback" is a 99% match
                for standard disclosure bypass attempts used by farm reviewers.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-high/50 border-l-4 border-primary">
              <h4 className="font-label-md text-label-md text-primary mb-1">
                Superlative Density
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-snug">
                Usage of "phenomenal" and "guaranteed" within a single
                short-form review exceeds natural user variance by 4.2x.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-high/50 border-l-4 border-secondary">
              <h4 className="font-label-md text-label-md text-secondary mb-1">
                Network Anomaly
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-snug">
                IP origin 192.168.1.104 has generated 12 reviews across 4
                distinct accounts in the last 60 minutes.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex gap-4">
            <button className="flex-1 px-4 py-2 rounded-lg border border-error/50 text-error font-label-md text-label-md hover:bg-error/10 transition-all">
              CONFIRM FRAUD
            </button>
            <button className="flex-1 px-4 py-2 rounded-lg border border-outline text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-all">
              DISMISS ALERT
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
  <nav className="fixed bottom-0 w-full rounded-t-xl z-50 md:hidden bg-surface-container-high/80 dark:bg-surface-container-high/80 backdrop-blur-2xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] flex justify-around items-center h-16 pb-safe px-4">
    <div className="flex flex-col items-center gap-1 transition-transform duration-150 active:scale-95 text-outline-variant">
      <span className="material-symbols-outlined" data-icon="home">
        home
      </span>
      <span className="font-label-sm text-label-sm-mobile">Home</span>
    </div>
    <div className="flex flex-col items-center gap-1 transition-transform duration-150 active:scale-95 text-secondary drop-shadow-[0_0_5px_rgba(76,215,246,0.8)]">
      <span
        className="material-symbols-outlined"
        data-icon="query_stats"
        style={{ fontVariationSettings: '"FILL" 1' }}
      >
        query_stats
      </span>
      <span className="font-label-sm text-label-sm-mobile">Analyze</span>
    </div>
    <div className="flex flex-col items-center gap-1 transition-transform duration-150 active:scale-95 text-outline-variant">
      <span className="material-symbols-outlined" data-icon="insert_chart">
        insert_chart
      </span>
      <span className="font-label-sm text-label-sm-mobile">Stats</span>
    </div>
    <div className="flex flex-col items-center gap-1 transition-transform duration-150 active:scale-95 text-outline-variant">
      <span
        className="material-symbols-outlined"
        data-icon="notifications_active"
      >
        notifications_active
      </span>
      <span className="font-label-sm text-label-sm-mobile">Alerts</span>
    </div>
    <div className="flex flex-col items-center gap-1 transition-transform duration-150 active:scale-95 text-outline-variant">
      <span className="material-symbols-outlined" data-icon="person">
        person
      </span>
      <span className="font-label-sm text-label-sm-mobile">Profile</span>
    </div>
  </nav>
</>

  );
}

export default AnalyzerPage;