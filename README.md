# CAPE GURU — Official Website

> **Western Cape · Cape Town, South Africa**  
> Direct Line: **082 203 8548** / **+27 82 203 8548**  
> Email: **Capegurutech@gmail.com**  
> Website: **[Capeguru.co.za](https://capeguru.co.za)**

A high-end, responsive web application engineered for **CAPE GURU** (operating in synergy with **Guru Satellite Systems** and **Appliances Guru Mobile Repairs**). Built with React 19, TypeScript, Vite, and Tailwind CSS.

---

## 🌟 Services Featured

1. **Aircon Service & Climate Comfort** *(Flyers 2 & 4)*:
   - Installations of ultra-quiet inverter split units & multi-splits
   - Repairs (PCB boards, fan motors, compressor diagnostics)
   - Chemical coil wash, deep sanitisation & filter overhaul
   - R410A / R32 manifold gas testing & regassing
   - 24-hour on-site dispatch across Cape Town

2. **DStv & Openview Satellite Systems** *(Flyer 3)*:
   - Explora Ultra & HD decoder setups with Extra View heartbeat cabling
   - Openview HD free-to-air dish alignment with digital RF spectrum analyzers
   - Immediate signal recovery (E48-32, LNB replacements, rain fade)
   - Heavy-duty TV wall mounting with 100% concealed in-wall cabling

3. **Appliances Guru — Mobile Appliance Repairs** *(Flyer 1)*:
   - **1 Year Guarantee** on major component replacements and repairs
   - We Come To You — fully equipped mobile workshop vans
   - Washing machines, fridges, freezers, electric & gas stoves, ovens, dishwashers
   - Bosch, Samsung, LG, Smeg, Defy, Miele, Whirlpool, Hisense, AEG

4. **Fibre Services & High-Speed WiFi**:
   - Internal optical fibre line runs, ONT moves, and splice repairs
   - Tri-band WiFi 6 mesh networks for dead-spot elimination

5. **Morclick Satellite Internet**:
   - High-throughput Ka-band satellite broadband for remote estates, farms, and off-grid locations

6. **Audio Visual & Concealed Cabling**:
   - Architectural TV mounting, soundbar integration, and multi-room audio matrices

7. **Communal & Commercial Services**:
   - SMATV, MATV, centralized climate HVAC systems, and corporate boardroom tech

8. **Residential Tech Support**:
   - Home automation, smart lighting, and loadshedding backup inverter links

---

## 🚀 GitHub Pages Auto-Build & Deployment

This project includes a fully automated GitHub Actions CI/CD workflow at `.github/workflows/deploy.yml`.

### Setting Up GitHub Pages:

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy CAPE GURU website"
   git push origin main
   ```

2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every push to `main` or `master` will automatically build the site and deploy it to:
   `https://obsidianstudiodesigns.github.io/CAPE GURU/` (or your repository's configured GitHub Pages URL).

The `vite.config.ts` is configured with `base: './'` so all asset paths resolve properly regardless of repository sub-paths or custom domain mapping.

---

## 🛠️ Development & Local Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript typecheck
npm run lint

# Production build
npm run build
```
