# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains educational materials for a Strategic Management course ("Strategisch Management") focused on business thinking, AI, and knowledge work. The content combines theoretical frameworks (Bloom's Taxonomy, Kahneman's System 1/2 thinking, Strategy Maps) with interactive presentations and visualizations.

## Key Files and Structure

### Main Presentation Files
- [slides.html](slides.html) - Week 2 workshop presentation on "Bedrijfskundig Denken" (Business Thinking)
- [genius.html](genius.html) - Interactive visualization of the "Genius on Demand" AI value model
- [bk-evolutie.html](bk-evolutie.html) - Timeline infographic showing evolution of business management from BK 1.0 to BK 5.0

### Course Materials
- [lesplan.md](lesplan.md) - Detailed 90-minute lesson plan for Week 2 workshop including:
  - Bloom's Taxonomy teaching segment
  - Kahneman System 1/2 thinking exercises (ball-bat problem)
  - Strategy Map analysis
  - DESTEP group assignment on business evolution

### Background Documentation
- [background-docs/Bedrijfskunde_ AI, Kenniswerkers en Modellen.md](background-docs/Bedrijfskunde_%20AI,%20Kenniswerkers%20en%20Modellen.md) - Academic analysis of AI impact on knowledge work
- [background-docs/StrategyMaps.pdf](background-docs/StrategyMaps.pdf) - Strategy Map reference materials
- [background-docs/ai-value-matrix.html](background-docs/ai-value-matrix.html) - AI value visualization
- PDF materials on AI and strategic management theory

### Supporting Assets
- [bloom.jpg](bloom.jpg), [ball-bat.jpg](ball-bat.jpg), [system1-2-thinking.avif](system1-2-thinking.avif), [strat-map.png](strat-map.png) - Images used in presentations

## Working with HTML Presentations

All presentation files use **Reveal.js 4.3.1** (loaded via CDN) with custom styling and interactive components.

### Viewing Presentations
Open HTML files directly in a browser. The presentations include:
- Slide navigation (arrow keys, space bar)
- Speaker notes (press 'S' key)
- Animated backgrounds and transitions
- Interactive elements (timers, fragments)

### Presentation Structure
Each presentation follows this pattern:
```html
<div class="reveal">
  <div class="slides">
    <section><!-- Slide content --></section>
    <section><!-- Next slide --></section>
  </div>
</div>
```

### Custom Components

**Timer Widget** (in [slides.html](slides.html)):
- Located in group assignment slide
- Configurable countdown timer with start/pause/reset controls
- Audio feedback using Tone.js library
- Usage: Students get 12 minutes for DESTEP group work

**Animated Timeline** (in [bk-evolutie.html](bk-evolutie.html)):
- Scroll-triggered animations using IntersectionObserver
- DESTEP analysis frames positioned alternately left/right
- Responsive design with mobile stacking

### Styling Approach
- Uses Inter font family (Google Fonts)
- Glassmorphism design with backdrop filters
- CSS animations (fadeInUp, drawLine, pulse)
- Custom color schemes per BK evolution phase

## Core Educational Concepts

### System 1 vs System 2 Thinking (Kahneman)
- **System 1**: Fast, intuitive, automatic thinking
- **System 2**: Slow, analytical, deliberate thinking
- **Teaching tool**: Ball-bat problem (€1.10 total, bat costs €1 more than ball)
  - Intuitive (wrong) answer: €0.10
  - Analytical (correct) answer: €0.05
  - Solution method: System of equations shown in [lesplan.md](lesplan.md):43-77

### Business Model Evolution (BK 1.0 to 5.0)
Timeline structure in [bk-evolutie.html](bk-evolutie.html):
1. **BK 1.0** (Begin 20e eeuw - '50): Efficiency & Management (Scientific Management, standardization)
2. **BK 2.0** ('50 - '70): Human Relations & Organization (motivation, group dynamics)
3. **BK 3.0** ('80 - '90): IT & Strategy (information technology, globalization, competitive advantage)
4. **BK 4.0** (2000 - Present): Digital Transformation & Data (digitalization, Agile, customer focus)
5. **BK 5.0** (Near Future): AI, Sustainability & Ethics (Agentic AI, broad prosperity, Human-AI collaboration)

Each phase includes DESTEP analysis (Demographic, Economic, Social-cultural, Technological, Ecological, Political factors).

### Key Business Models Referenced
- **Strategy Map** (Kaplan & Norton): Balanced Scorecard framework linking Learning & Growth → Internal Processes → Customer → Financial perspectives
- **SWOT Analysis**: Internal strengths/weaknesses, external opportunities/threats
- **DESTEP Analysis**: Macro-environmental scanning framework
- **Porter's Five Forces**: Industry competitive forces analysis
- **7S Model**: Organizational alignment across Strategy, Structure, Systems, Shared Values, Skills, Staff, Style
- **6 Capitals Model**: Multi-capital value creation (financial, manufactured, intellectual, human, social, natural)

### AI and Knowledge Work Framework
From [background-docs/Bedrijfskunde_ AI, Kenniswerkers en Modellen.md](background-docs/Bedrijfskunde_%20AI,%20Kenniswerkers%20en%20Modellen.md):

**Knowledge Domain Model**:
- Knowledge space represented as continuum from 0 to 1
- Known point x₀ (established knowledge)
- Uncertainty increases with distance from x₀

**Worker Types**:
- **Routine Worker**: Applies existing knowledge, linear value function, operates within "comfort zone" (analogous to System 1)
- **Genius Worker**: Creates new knowledge, quadratic cost function, operates across entire domain (analogous to System 2)
- **AI Genius**: Like human genius but potentially unlimited supply once developed

**Key Insight**: AI shifts human genius workers to hyper-specialization at extreme knowledge boundaries due to comparative advantage.

## Modifying Course Materials

### Updating Presentations
When editing reveal.js slides:
1. Maintain consistent glassmorphism `.box` styling for content boxes
2. Use `.fragment` class for step-by-step reveals
3. Add speaker notes in `<aside class="notes">` tags
4. Keep QR codes functional for student feedback surveys

### Lesson Plan Updates
[lesplan.md](lesplan.md) structure:
- Clear timing allocations (totaling 90 minutes)
- Explicit transparency about exam vs. professional skill levels (Bloom's Taxonomy)
- Step-by-step mathematical explanations (like ball-bat problem)
- Group activity instructions with hints for discussion

### Adding New Visualizations
Follow existing patterns:
- Use Plotly.js for interactive charts ([genius.html](genius.html))
- Implement Tailwind CSS for styling ([bk-evolutie.html](bk-evolutie.html))
- Ensure mobile responsiveness with media queries
- Add IntersectionObserver for scroll-triggered animations

## Educational Philosophy

The course emphasizes:
1. **Metacognitive awareness**: Recognizing when to use System 1 vs System 2 thinking
2. **Model-based thinking**: Using structured frameworks to reduce complexity
3. **Context sensitivity**: Applying models within DESTEP environmental analysis
4. **Evolution awareness**: Understanding how business thinking evolves with societal changes
5. **Honesty about assessment**: Distinguishing between exam requirements (Remember level) and professional needs (Analyze/Evaluate levels)

Key pedagogical quote from [lesplan.md](lesplan.md):26: "We trainen hier voor het vak, niet alleen voor de toets" (We train here for the profession, not just for the exam).

## External References

Course uses these external resources:
- Student feedback: `https://hanbedrijfskunde.github.io/retrospective/?workshop=Strategisch%20Mgmt%20WK2`
- BK evolution infographic: `https://businessdatasolutions.github.io/ai-for-bms/infographic.html`
- DESTEP model answer key: `https://businessdatasolutions.github.io/ai-for-bms/evolution-destep.html`

## Working with This Repository

Since this is primarily a content repository (HTML/Markdown) with no build process:
- No package.json or dependencies to install
- Open HTML files directly in browser for testing
- Images referenced with relative paths
- All presentations are self-contained with CDN resources
