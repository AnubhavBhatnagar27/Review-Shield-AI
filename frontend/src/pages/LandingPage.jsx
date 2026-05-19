function LandingPage() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>ReviewShield AI - Detect Fake Reviews with Explainable AI</title>
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
        "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n        }\n        .ai-node-gradient {\n            border: 1px solid transparent;\n            background: linear-gradient(to bottom, #1a1f30, #1a1f30) padding-box,\n                        linear-gradient(to bottom right, #4f46e5, #4cd7f6) border-box;\n        }\n        .hero-grid {\n            background-image: radial-gradient(rgba(76, 215, 246, 0.05) 1px, transparent 1px);\n            background-size: 40px 40px;\n        }\n    "
    }}
  />
  {/* TopAppBar */}
  <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(79,70,229,0.15)] transition-all duration-300 ease-in-out">
    <div className="flex justify-between items-center px-gutter py-4 max-w-full">
      <div className="flex items-center gap-3">
        <span
          className="material-symbols-outlined text-primary"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          shield_with_heart
        </span>
        <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
          ReviewShield AI
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a
          className="font-label-md text-label-md text-secondary font-bold hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(76,215,246,0.5)] transition-all"
          href="#"
        >
          Overview
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(76,215,246,0.5)] transition-all"
          href="#"
        >
          Solutions
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(76,215,246,0.5)] transition-all"
          href="#"
        >
          Technology
        </a>
        <a
          className="font-label-md text-label-md text-on-surface-variant hover:text-secondary hover:drop-shadow-[0_0_8px_rgba(76,215,246,0.5)] transition-all"
          href="#"
        >
          Pricing
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="px-6 py-2 rounded-lg font-label-md text-label-md border border-secondary text-secondary hover:bg-secondary/10 transition-all">
          Console Login
        </button>
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
          <img
            alt="Admin User"
            className="w-full h-full object-cover"
            data-alt="A professional headshot of a cybersecurity analyst in a modern office, illuminated by the blue glow of data monitors. The image has a high-tech, cinematic quality with shallow depth of field and vibrant indigo and cyan highlights."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjo5fLT1IsOlH7iuQzuIYEUjudE3Rx6C9wEYqETVoBn813cRf0i7KPJiLxRe6s13UsoLIFSmePa6ZQ4AQXaJvU3NZfLt-tQLmTO4zKPlQXcTEni_b7lypLaho9nRhMSpsr35wKg10XGvEKKxBRTQ2BD4mAGUVgKi1T4fjJTtmNV9Xrb4H4AfLf0KKgyNBXup86R04_Lqd3zv9fbqW_v8EFrBM8gSlreIMrq4It5QNqHcWRi2MTqER8ZavvgPNFS1_7LFS08SloruY"
          />
        </div>
      </div>
    </div>
  </header>
  <main className="pt-24">
    {/* Hero Section */}
    <section className="relative min-h-[819px] flex items-center overflow-hidden hero-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
      {/* Emissive Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-gutter relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="material-symbols-outlined text-[16px] text-secondary">
              psychology
            </span>
            <span className="font-label-sm text-label-sm text-secondary uppercase">
              Next-Gen Fraud Detection
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-background mb-6 leading-tight">
            Detect Fake Reviews with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Explainable AI
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Stop manipulative review cycles and restore consumer trust. Our
            multi-vector security engine analyzes sentiment patterns, reviewer
            behavior, and metadata with 99.8% precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-primary-container text-on-primary-container rounded-xl font-headline-md flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:scale-[1.02] transition-all">
              Start Scanning Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="px-8 py-4 border border-outline-variant text-on-surface rounded-xl font-headline-md flex items-center justify-center gap-2 glass-card hover:bg-white/5 transition-all">
              View Live Demo
            </button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="ai-node-gradient p-6 rounded-2xl glass-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="material-symbols-outlined text-secondary text-4xl animate-pulse">
                sensors
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    verified_user
                  </span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-outline">
                    SOURCE_VERIFICATION
                  </div>
                  <div className="font-headline-sm text-on-surface">
                    Active Monitoring
                  </div>
                </div>
              </div>
              <div className="h-48 rounded-lg bg-surface-container-lowest/50 flex items-center justify-center relative border border-white/5">
                <img
                  className="w-full h-full object-cover opacity-60 mix-blend-screen"
                  data-alt="A complex neural network visualization with glowing interconnected nodes and data streams in vibrant shades of neon blue and deep violet. The background is a dark, tech-oriented space with subtle grid lines, conveying high-speed data processing and artificial intelligence analysis."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPIENZmFH8wOI6saiXD5Bud0XoiZN-58X0ZWcBqoKlHFYJqe932at-7YBkDqYFEerbcKAUK204pCbYRSrQa1NEb8fpZ6444n3ZEjfUpLghUkmSZ_7rbnISo0ONEdqcLnao9cFKu80iuQYD94Na0gT2HB2TNxqu9PzqcgSPyjvm0stJAVJkON1hsmluGbfO3oBcT4r53C5fffcX3aEgC2xsOIqHYrRgZMfDCrhmakFWvfdqXANJwzurcYZ0d1m7Fo9Ti7FwWezdnxY"
                />
              </div>
              <div className="flex justify-between gap-4">
                <div className="flex-1 p-3 rounded-lg bg-surface-container-low border border-white/5">
                  <div className="text-secondary font-label-sm">INTEGRITY</div>
                  <div className="text-2xl font-bold">94.2%</div>
                </div>
                <div className="flex-1 p-3 rounded-lg bg-surface-container-low border border-white/5">
                  <div className="text-tertiary font-label-sm">LATENCY</div>
                  <div className="text-2xl font-bold">14ms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Stats Grid */}
    <section className="py-section-gap container mx-auto px-gutter">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="glass-card p-card-padding rounded-2xl border-l-4 border-l-primary group hover:bg-surface-container-high transition-colors">
          <div className="font-label-md text-label-md text-outline mb-2">
            SCAN ACCURACY
          </div>
          <div className="text-5xl font-bold text-on-surface mb-2 tracking-tighter">
            99.8%
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Industry-leading precision in identifying non-human review patterns.
          </p>
        </div>
        <div className="glass-card p-card-padding rounded-2xl border-l-4 border-l-secondary group hover:bg-surface-container-high transition-colors">
          <div className="font-label-md text-label-md text-outline mb-2">
            REVIEWS ANALYZED
          </div>
          <div className="text-5xl font-bold text-on-surface mb-2 tracking-tighter">
            2.4B+
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Global intelligence network processing reviews across 40+ platforms.
          </p>
        </div>
        <div className="glass-card p-card-padding rounded-2xl border-l-4 border-l-tertiary group hover:bg-surface-container-high transition-colors">
          <div className="font-label-md text-label-md text-outline mb-2">
            DETECTION SPEED
          </div>
          <div className="text-5xl font-bold text-on-surface mb-2 tracking-tighter">
            &lt;0.5s
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Real-time API response for immediate moderation and prevention.
          </p>
        </div>
      </div>
    </section>
    {/* Multi-Vector Security Features */}
    <section className="py-section-gap bg-surface-container-lowest/50">
      <div className="container mx-auto px-gutter">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Multi-Vector Security Framework
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Our AI doesn't just read text; it understands the entire lifecycle
            of a review to ensure total authenticity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col gap-4 p-6 glass-card rounded-2xl hover:scale-[1.02] transition-transform">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Semantic Logic Analysis
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Detecting unnatural sentiment shifts and repetitive phrasing
              patterns across thousands of accounts.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col gap-4 p-6 glass-card rounded-2xl hover:scale-[1.02] transition-transform">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">group</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Reviewer Identity
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Behavioral biometrics for reviewers to flag click-farm activity
              and automated bot behavior.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col gap-4 p-6 glass-card rounded-2xl hover:scale-[1.02] transition-transform">
            <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">query_stats</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Metadata Forensics
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Analyzing IP clusters, timestamp distribution, and browser
              signatures to find anomalies.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col gap-4 p-6 glass-card rounded-2xl hover:scale-[1.02] transition-transform">
            <div className="w-12 h-12 rounded-full bg-error-container/20 flex items-center justify-center text-error">
              <span className="material-symbols-outlined">security</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Explainer Engine
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every flagged review comes with a detailed technical breakdown of
              why it was marked as fake.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* CTA Section */}
    <section className="py-section-gap">
      <div className="container mx-auto px-gutter">
        <div className="bg-primary-container/20 border border-primary/20 p-12 rounded-3xl relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
              Ready to secure your platform?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              Integrate ReviewShield AI via our secure API in less than 30
              minutes. High-volume custom plans available for enterprises.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-4 bg-secondary text-on-secondary-fixed rounded-xl font-bold hover:drop-shadow-[0_0_15px_rgba(76,215,246,0.6)] transition-all">
                Get Started Free
              </button>
              <button className="px-10 py-4 glass-card border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="bg-surface-container-lowest border-t border-white/10 pt-16 pb-8">
    <div className="container mx-auto px-gutter">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">
              shield_with_heart
            </span>
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
              ReviewShield AI
            </span>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
            The global standard for explainable review security and integrity
            management. Empowering businesses to trust their data again.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-secondary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                terminal
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-secondary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                public
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-secondary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                share
              </span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-6">
            PRODUCT
          </h4>
          <ul className="space-y-4 font-body-md text-on-surface-variant">
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Review API
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Chrome Extension
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Dashboard
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-6">
            RESOURCES
          </h4>
          <ul className="space-y-4 font-body-md text-on-surface-variant">
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Security Whitepaper
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                API Docs
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Success Stories
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Trust Center
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-6">
            LEGAL
          </h4>
          <ul className="space-y-4 font-body-md text-on-surface-variant">
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="hover:text-secondary transition-colors" href="#">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-outline">
          © 2024 ReviewShield AI. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 font-label-sm text-label-sm text-outline">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary" /> SYSTEM STATUS:
            OPERATIONAL
          </span>
        </div>
      </div>
    </div>
  </footer>
  {/* BottomNavBar (Mobile Only) */}
  <nav className="fixed bottom-0 w-full rounded-t-xl z-50 md:hidden bg-surface-container-high/80 dark:bg-surface-container-high/80 backdrop-blur-2xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
    <div className="flex justify-around items-center h-16 pb-safe">
      <a
        className="flex flex-col items-center gap-1 text-secondary drop-shadow-[0_0_5px_rgba(76,215,246,0.8)] transition-transform duration-150 active:scale-95"
        href="#"
      >
        <span className="material-symbols-outlined">home</span>
        <span className="font-label-sm text-label-sm-mobile">Home</span>
      </a>
      <a
        className="flex flex-col items-center gap-1 text-outline-variant transition-transform duration-150 active:scale-95"
        href="#"
      >
        <span className="material-symbols-outlined">query_stats</span>
        <span className="font-label-sm text-label-sm-mobile">Analyze</span>
      </a>
      <a
        className="flex flex-col items-center gap-1 text-outline-variant transition-transform duration-150 active:scale-95"
        href="#"
      >
        <span className="material-symbols-outlined">insert_chart</span>
        <span className="font-label-sm text-label-sm-mobile">Stats</span>
      </a>
      <a
        className="flex flex-col items-center gap-1 text-outline-variant transition-transform duration-150 active:scale-95"
        href="#"
      >
        <span className="material-symbols-outlined">notifications_active</span>
        <span className="font-label-sm text-label-sm-mobile">Alerts</span>
      </a>
      <a
        className="flex flex-col items-center gap-1 text-outline-variant transition-transform duration-150 active:scale-95"
        href="#"
      >
        <span className="material-symbols-outlined">person</span>
        <span className="font-label-sm text-label-sm-mobile">Profile</span>
      </a>
    </div>
  </nav>
</>

  );
}

export default LandingPage;