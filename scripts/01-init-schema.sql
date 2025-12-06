-- Create subscribers table for newsletter
CREATE TABLE IF NOT EXISTS subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create blog table for mock blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt VARCHAR(500),
  author VARCHAR(255),
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert mock blog posts with security and AI content
INSERT INTO blog_posts (title, slug, content, excerpt, author, image_url, created_at) VALUES
(
  'The Rise of AI-Powered Cybersecurity',
  'ai-powered-cybersecurity',
  '<p>Artificial Intelligence is fundamentally transforming how organizations approach cybersecurity. Traditional rule-based security systems are giving way to intelligent, adaptive systems that can detect anomalies and respond to threats in real-time.</p><h2>The Challenge</h2><p>The volume and sophistication of cyber attacks have grown exponentially. Security teams are overwhelmed with false positives, making it difficult to identify genuine threats. This is where AI makes a significant difference.</p><h2>AI-Powered Solutions</h2><p>Machine learning models can analyze vast amounts of network traffic and security logs to identify patterns indicative of attacks. These systems learn from historical data and continuously improve their detection capabilities.</p><ul><li>Real-time threat detection and prevention</li><li>Behavioral analytics for identifying compromised accounts</li><li>Automated incident response and remediation</li><li>Predictive threat intelligence</li></ul><h2>Implementation Considerations</h2><p>While AI-powered security solutions offer tremendous benefits, organizations must consider data privacy, model interpretability, and the need for human oversight. The goal is to augment human security experts, not replace them.</p>',
  'Discover how artificial intelligence is revolutionizing the way we detect and prevent cyber threats in real-time.',
  'Security Specialist',
  '/placeholder.svg?height=400&width=600',
  NOW() - INTERVAL '15 days'
),
(
  'Zero Trust Architecture: The Future of Security',
  'zero-trust-architecture',
  '<p>Zero Trust Architecture represents a fundamental shift in how we think about security. Instead of assuming everything inside the network perimeter is trustworthy, zero trust requires verification for every access request.</p><h2>Core Principles</h2><p>Zero Trust is built on several core principles that challenge traditional network security models.</p><ul><li>Never trust, always verify</li><li>Assume breach mentality</li><li>Verify explicitly with available data points</li><li>Secure every access with least-privilege principles</li></ul><h2>Implementation Strategy</h2><p>Moving to a zero trust architecture requires careful planning and phased implementation. Organizations should start with inventory of assets and users, then gradually implement controls.</p><h2>Benefits</h2><p>Organizations adopting zero trust see significant improvements in security posture, faster breach detection, and reduced lateral movement of attackers.</p>',
  'Learn why zero trust architecture is becoming the gold standard for protecting modern enterprise networks and cloud infrastructure.',
  'Security Specialist',
  '/placeholder.svg?height=400&width=600',
  NOW() - INTERVAL '10 days'
),
(
  'Machine Learning Models for Threat Detection',
  'ml-threat-detection',
  '<p>Machine learning models are revolutionizing threat detection by enabling systems to learn patterns from data and identify anomalies without explicit programming.</p><h2>How ML Enhances Detection</h2><p>Traditional rule-based systems require security analysts to manually create rules for each threat type. ML models can automatically identify new and evolved threats by learning from historical incidents.</p><h2>Common ML Algorithms</h2><ul><li>Isolation Forests for anomaly detection</li><li>Random Forests for classification tasks</li><li>Neural Networks for complex pattern recognition</li><li>Clustering algorithms for identifying groups of related threats</li></ul><h2>Practical Applications</h2><p>Organizations are deploying ML models for network intrusion detection, malware analysis, phishing detection, and user behavior analytics. The key to success is quality training data and continuous model tuning.</p>',
  'Explore how machine learning models can identify anomalies and predict security threats before they impact your organization.',
  'AI Specialist',
  '/placeholder.svg?height=400&width=600',
  NOW() - INTERVAL '5 days'
),
(
  'Quantum Computing and Cryptography',
  'quantum-cryptography',
  '<p>Quantum computing represents one of the most significant challenges to modern cryptography. While quantum computers are still in early stages, their potential impact on encryption is already driving changes in security strategies.</p><h2>The Quantum Threat</h2><p>Current RSA and ECC encryption, which protect most of the internet, are vulnerable to quantum computers. A sufficiently powerful quantum computer could break these algorithms in hours.</p><h2>Post-Quantum Cryptography</h2><p>NIST has been standardizing post-quantum cryptographic algorithms that are resistant to quantum attacks. Organizations need to begin transition planning now for future-proofing their systems.</p><h2>Migration Strategy</h2><p>The transition to quantum-resistant algorithms will be gradual and complex. Organizations should start by identifying critical systems and planning migration strategies.</p>',
  'Understanding the implications of quantum computing on current encryption methods and the transition to quantum-resistant algorithms.',
  'Security Specialist',
  '/placeholder.svg?height=400&width=600',
  NOW() - INTERVAL '28 days'
),
(
  'LLMs in Security Operations',
  'llms-security-ops',
  '<p>Large Language Models are transforming security operations by automating routine tasks and enhancing analyst productivity.</p><h2>Use Cases</h2><p>LLMs can assist with threat analysis, incident response documentation, vulnerability assessment, and security alert analysis. They can process and summarize vast amounts of security data quickly.</p><h2>Challenges</h2><p>While LLMs are powerful, they require careful validation. Security teams must ensure outputs are accurate and don\'t introduce false confidence in threat assessment.</p><h2>Best Practices</h2><p>Use LLMs as augmentation tools for human analysts, not replacements. Implement validation procedures and maintain human oversight for critical decisions.</p>',
  'How large language models are transforming security operations centers and improving incident response capabilities.',
  'AI Specialist',
  '/placeholder.svg?height=400&width=600',
  NOW() - INTERVAL '20 days'
),
(
  'Supply Chain Security in 2025',
  'supply-chain-security',
  '<p>Supply chain security has become critical as attackers increasingly target the weakest links in software development and distribution.</p><h2>Key Threats</h2><p>Compromised dependencies, malicious code injection, and insecure development practices pose significant risks. The SolarWinds incident highlighted the catastrophic impact of supply chain compromises.</p><h2>Security Measures</h2><ul><li>Software Bill of Materials (SBOM) tracking</li><li>Dependency vulnerability scanning</li><li>Code signing and verification</li><li>Secure development practices enforcement</li><li>Third-party security assessments</li></ul><h2>Looking Ahead</h2><p>Organizations must implement defense-in-depth strategies for their supply chains. This includes vendor assessment, continuous monitoring, and incident response planning.</p>',
  'Best practices and emerging technologies for securing your software supply chain against evolving threats.',
  'Security Specialist',
  '/placeholder.svg?height=400&width=600',
  NOW() - INTERVAL '15 days'
) ON CONFLICT (slug) DO NOTHING;

-- Create indices for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
