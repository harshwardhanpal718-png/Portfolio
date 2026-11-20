import os
import subprocess
import shutil

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Harshwardhan Pal - Data Analyst Resume</title>
  <style>
    @page {
      size: A4;
      margin: 12mm 15mm 12mm 15mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #1a1a1a;
      line-height: 1.38;
      font-size: 9.6pt;
      background: #ffffff;
    }
    a {
      color: #0b57d0;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    
    /* Header */
    .header {
      text-align: center;
      border-bottom: 2px solid #222222;
      padding-bottom: 10px;
      margin-bottom: 12px;
    }
    .header h1 {
      font-size: 21pt;
      font-weight: 800;
      letter-spacing: 0.5px;
      color: #111111;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .header .subtitle {
      font-size: 11pt;
      font-weight: 600;
      color: #8c5b35;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 5px;
    }
    .header .contact-links {
      font-size: 8.8pt;
      color: #444444;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
    }
    .contact-links span {
      display: inline-flex;
      align-items: center;
    }

    /* Section Headers */
    .section-title {
      font-size: 10.5pt;
      font-weight: 800;
      color: #111111;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      border-bottom: 1px solid #d0d0d0;
      padding-bottom: 2px;
      margin-top: 10px;
      margin-bottom: 6px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    /* Summary */
    .summary-text {
      font-size: 9.2pt;
      color: #333333;
      text-align: justify;
      margin-bottom: 8px;
    }

    /* Skills */
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3px;
      margin-bottom: 8px;
      font-size: 9pt;
    }
    .skill-category {
      display: flex;
    }
    .skill-label {
      font-weight: 700;
      color: #111111;
      min-width: 175px;
    }
    .skill-items {
      color: #333333;
      flex: 1;
    }

    /* Items (Experience / Project / Education) */
    .entry {
      margin-bottom: 8px;
    }
    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1px;
    }
    .entry-title {
      font-size: 9.7pt;
      font-weight: 700;
      color: #111111;
    }
    .entry-company {
      font-weight: 600;
      color: #8c5b35;
    }
    .entry-date {
      font-size: 8.8pt;
      font-weight: 600;
      color: #555555;
    }
    .entry-subhead {
      display: flex;
      justify-content: space-between;
      font-size: 8.8pt;
      color: #555555;
      font-style: italic;
      margin-bottom: 3px;
    }
    
    /* Bullet points */
    ul {
      list-style-type: disc;
      padding-left: 17px;
      margin-top: 2px;
    }
    li {
      margin-bottom: 2.5px;
      font-size: 9pt;
      color: #2b2b2b;
      text-align: justify;
    }
    li strong {
      color: #111111;
    }
    .badge {
      display: inline-block;
      background: #f1ede6;
      border: 1px solid #dfd8ce;
      padding: 0 5px;
      border-radius: 3px;
      font-size: 7.5pt;
      font-weight: 700;
      color: #6d4726;
      text-transform: uppercase;
      margin-left: 6px;
      vertical-align: middle;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <div class="header">
    <h1>Harshwardhan Pal</h1>
    <div class="subtitle">Data Analyst • Business Intelligence Specialist</div>
    <div class="contact-links">
      <span>📍 Jaipur, Rajasthan, India</span>
      <span>✉️ <a href="mailto:harshwardhanpal718@gmail.com">harshwardhanpal718@gmail.com</a></span>
      <span>🔗 <a href="https://linkedin.com/in/harshwardhan-pal-3a0726293" target="_blank">linkedin.com/in/harshwardhan-pal</a></span>
      <span>🐙 <a href="https://github.com/harshwardhanpal718-png" target="_blank">github.com/harshwardhanpal718-png</a></span>
      <span>🌐 <a href="https://harshbitverse.vercel.app" target="_blank">harshbitverse.vercel.app</a></span>
    </div>
  </div>

  <!-- Summary -->
  <div class="section-title">Professional Summary</div>
  <p class="summary-text">
    Results-driven <strong>Data Analyst</strong> and Computer Science Engineering student with verified industry internship experience at Knowx Innovations. Adept at engineering scalable analytical pipelines across <strong>SQL, Python, Power BI, and Advanced Excel</strong>. Proven track record turning complex transactional datasets (96,000+ orders) into high-impact executive dashboards, automating RFM segmentation models, and deploying low-latency AI accessibility systems. Passionate about leveraging data modeling, DAX aggregations, and exploratory data analysis (EDA) to drive commercial revenue and optimize operational efficiency.
  </p>

  <!-- Skills -->
  <div class="section-title">Technical Expertise</div>
  <div class="skills-grid">
    <div class="skill-category">
      <span class="skill-label">Languages & Libraries:</span>
      <span class="skill-items">Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn), SQL (MySQL, PostgreSQL), DAX</span>
    </div>
    <div class="skill-category">
      <span class="skill-label">Business Intelligence:</span>
      <span class="skill-items">Power BI, Tableau, Star-Schema Dimensional Modeling, KPI Reporting, Executive Cockpits, Data Storytelling</span>
    </div>
    <div class="skill-category">
      <span class="skill-label">Spreadsheets & Wrangling:</span>
      <span class="skill-items">Advanced MS Excel (XLOOKUP, Dynamic Pivot Tables, Power Query, What-If Analysis, Data Validation)</span>
    </div>
    <div class="skill-category">
      <span class="skill-label">Methodologies & Tools:</span>
      <span class="skill-items">Exploratory Data Analysis (EDA), RFM Cohort Modeling, Git, GitHub, VS Code, Jupyter, Vercel, Audio Processing (PyAudio)</span>
    </div>
  </div>

  <!-- Experience -->
  <div class="section-title">Industry Experience</div>
  <div class="entry">
    <div class="entry-header">
      <span class="entry-title">Artificial Intelligence & Data Science Intern <span class="badge">Verified Credential</span></span>
      <span class="entry-date">July 2026 — August 2026</span>
    </div>
    <div class="entry-subhead">
      <span class="entry-company">Knowx Innovations Pvt. Ltd. (Corporate Office & Works)</span>
      <span>Bangalore, Karnataka, India</span>
    </div>
    <ul>
      <li>Gained hands-on proficiency across <strong>Pandas, NumPy, TensorFlow, Scikit-learn, Matplotlib, PyAudio, Job-Lib, and RAG</strong>.</li>
      <li>Developed and delivered end-to-end real-time production project: <strong>Speech to Sign Language Translator</strong>.</li>
      <li>Engineered live acoustic speech streaming and spectral feature extraction via PyAudio & FFT, achieving <strong>&lt;150ms processing latency</strong>.</li>
      <li>Integrated TensorFlow deep classification and RAG dictionary retrieval, yielding <strong>92.4% gesture translation accuracy</strong> on standard benchmarks.</li>
      <li>Automated exception telemetry dispatches using SMTP protocols and packaged model weights with Job-Lib for edge inference.</li>
    </ul>
  </div>

  <!-- Projects -->
  <div class="section-title">Featured Analytics Projects</div>

  <!-- Project 1 -->
  <div class="entry">
    <div class="entry-header">
      <span class="entry-title">E-Commerce Customer Analysis & Executive Cockpit (Olist Suite)</span>
      <span class="entry-date"><a href="https://e-commerce-customer-analysis-olive.vercel.app/" target="_blank">Live Dashboard ↗</a></span>
    </div>
    <div class="entry-subhead">
      <span>Tech: Power BI, DAX, Python, MySQL, RFM Segmentation, Vercel</span>
      <span><a href="https://github.com/harshwardhanpal718-png/Portfolio" target="_blank">GitHub Repo ↗</a></span>
    </div>
    <ul>
      <li>Analyzed <strong>96,478 delivered orders</strong> and 1.5M relational records from the Olist Brazilian retail ecosystem to track macro revenue trajectory.</li>
      <li>Constructed a normalized <strong>Star-Schema model</strong> connecting Fact Orders with Customer, Product, and Geographic dimensions.</li>
      <li>Engineered interactive Power BI cockpit tracking <strong>R$ 15.42M Gross Merchandise Value (GMV)</strong> (+14.2% MoM) and 97.02% fulfillment rate.</li>
      <li>Automated RFM segmentation for <strong>93,358 active customers</strong> and isolated top 5 categories (Health & Beauty, Watches) driving 42% of GMV.</li>
    </ul>
  </div>

  <!-- Project 2 -->
  <div class="entry">
    <div class="entry-header">
      <span class="entry-title">Netflix Global Data Network — Quantum War Room</span>
      <span class="entry-date"><a href="https://netflix-quantum-analytics-iliq.vercel.app/command_center.html" target="_blank">Live War Room ↗</a></span>
    </div>
    <div class="entry-subhead">
      <span>Tech: Plotly.js, Python, Pandas, Cyberpunk HUD, Telemetry Stream</span>
      <span><a href="https://github.com/harshwardhanpal718-png/Portfolio" target="_blank">GitHub Repo ↗</a></span>
    </div>
    <ul>
      <li>Built a responsive 16:9 Quantum Command Center evaluating content evolution across <strong>8,807 Netflix catalog titles</strong> (2008–2021).</li>
      <li>Uncovered episodic transition showing TV Shows expanding from 18% to <strong>48% of platform additions</strong> to optimize subscriber retention.</li>
      <li>Identified a <strong>+310% acceleration</strong> in international production corridors spearheaded by South Korea, India, and Spain.</li>
    </ul>
  </div>

  <!-- Project 3 -->
  <div class="entry">
    <div class="entry-header">
      <span class="entry-title">Commercial Sales Performance & Margin Leakage Diagnostics</span>
      <span class="entry-date"><a href="https://github.com/harshwardhanpal718-png" target="_blank">Case Study ↗</a></span>
    </div>
    <div class="entry-subhead">
      <span>Tech: Microsoft Power BI, SQL, Advanced Excel, DAX Calculations</span>
      <span>Enterprise Dataset</span>
    </div>
    <ul>
      <li>Modeled <strong>$2.8M+ in transactional sales</strong>; formulated custom DAX measures for Year-over-Year (YoY) revenue variances and 3-month moving averages.</li>
      <li>Conducted Pareto (80/20) inventory analysis; isolated the bottom 12% negative-margin SKUs to recover <strong>$140,000 in gross profit</strong>.</li>
    </ul>
  </div>

  <!-- Education -->
  <div class="section-title">Education & Credentials</div>
  <div class="entry">
    <div class="entry-header">
      <span class="entry-title">B.Tech in Computer Science & Engineering</span>
      <span class="entry-date">2023 — 2027 (Expected)</span>
    </div>
    <div class="entry-subhead">
      <span class="entry-company">Jagannath University, Jaipur, Rajasthan</span>
      <span>Reg. No: 1BG23CS407</span>
    </div>
    <ul>
      <li><strong>Core Focus:</strong> Relational Database Management Systems (RDBMS / SQL), Data Structures & Algorithms, Probability & Statistics, Machine Learning Foundations.</li>
      <li><strong>Credentials:</strong> AI & Data Science Industry Certification (Knowx Innovations) • SQL & Relational Databases • Power BI Business Intelligence.</li>
    </ul>
  </div>

</body>
</html>
"""

def generate_pdf():
    temp_html = os.path.expandvars(r"%TEMP%\harshwardhan_resume.html")
    temp_pdf = os.path.expandvars(r"%TEMP%\Harshwardhan_Pal_Resume.pdf")
    
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)
    print("HTML resume template written.")

    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={temp_pdf}",
        temp_html
    ]
    
    print("Printing to vector PDF via Chrome headless...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(temp_pdf):
        size = os.path.getsize(temp_pdf)
        print(f"Generated PDF ({size} bytes) successfully!")
        
        # Copy to public and dist folders
        target_public = r"public\Harshwardhan_Pal_Resume.pdf"
        target_dist = r"dist\Harshwardhan_Pal_Resume.pdf"
        
        shutil.copyfile(temp_pdf, target_public)
        shutil.copyfile(temp_pdf, target_dist)
        print(f"Copied to {target_public} and {target_dist}!")
    else:
        print("Failed to generate PDF:", res.stderr)

if __name__ == "__main__":
    generate_pdf()
