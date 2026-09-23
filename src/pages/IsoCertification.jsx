import { useState } from "react";
import { Link } from "react-router-dom";
import cardImg from "../assets/iso-card.jpg";

const C = {
  green: "#1a3d2b",
  greenDk: "#0d2b1c",
  greenMd: "#2a5a3e",
  gold: "#b8962e",
  goldLt: "#d4aa42",
  cream: "#f5f0e8",
  creamDk: "#ede6d6",
  white: "#ffffff",
  textDk: "#1a2e23",
  muted: "#6a8a7a",
};

const pdfList = [
  "BVSPL- P-04 Certification Decisions.pdf",
  "BVSPL-A-22 Data Base of Certificates Issued and Withdrawn.pdf",
  "BVSPL-F-23- Certification Agreement.pdf",
  "BVSPL-QP-01 Application review.pdf",
  "BVSPL-QP-05 Complaints and Appeals Process.pdf",
  "BVSPL-QP-13 Use of NABCB Accredited Marks.pdf",
  "BVSPL-QP-16 Risk of Imparitiality Analysis.pdf",
  "BVSPL-QP-18 Audit Procedure.pdf",
  "BVSPL-QP-24 Suspending, withdrawing or reducing the scope of certification.pdf"
];

const Label = ({ children }) => (
  <p className="text-[11px] font-bold tracking-[4px] uppercase mb-3" style={{ color: C.gold }}>
    {children}
  </p>
);

const GoldBar = ({ center }) => (
  <div className={`w-14 h-[3px] mb-6 ${center ? "mx-auto" : ""}`} style={{ background: C.gold }} />
);

export default function IsoCertification() {
  const [showDetails, setShowDetails] = useState(false);

  if (showDetails) {
    return (
      <div style={{ background: C.cream, fontFamily: "'DM Sans', sans-serif" }}>
        {/* HERO */}
        <section
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${C.greenDk} 0%, ${C.green} 60%, #1e4d35 100%)`,
          }}
        >
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{ background: C.gold }}
          />

          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
            <button
              onClick={() => setShowDetails(false)}
              className="inline-flex items-center gap-2 mb-8 text-sm font-bold hover:opacity-80 transition-opacity"
              style={{ color: C.goldLt }}
            >
              ← Back to ISO Certification
            </button>

            <div className="max-w-4xl">
              <p
                className="text-[12px] font-bold tracking-[4px] uppercase mb-4"
                style={{ color: C.gold }}
              >
                CERTIFICATION
              </p>

              <h1
                className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                ISO 9001:2015 QUALITY MANAGEMENT SYSTEM CERTIFICATION
              </h1>

              <p
                className="text-lg md:text-xl leading-relaxed max-w-3xl"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Independent and impartial Quality Management System (QMS) certification services for organizations seeking to demonstrate their commitment to quality and continual improvement.
              </p>
            </div>
          </div>

          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 70"
            preserveAspectRatio="none"
            style={{ height: 70 }}
          >
            <path
              d="M0,64L80,58.7C160,53,320,43,480,37.3C640,32,800,32,960,42.7C1120,53,1280,75,1360,85.3L1440,96L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
              fill={C.cream}
            />
          </svg>
        </section>

        {/* CONTENT */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
            {/* LEFT */}
            <div className="lg:col-span-2">
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  background: C.white,
                  border: "1px solid #e9dfcf",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.05)",
                }}
              >
                {/* top */}
                <div className="p-8 md:p-10 border-b border-[#eee3d3]">
                  <div className="flex items-center gap-5 flex-wrap">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${C.green}10`,
                        color: C.green,
                      }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="m9 12 2 2 4-4"/>
                      </svg>
                    </div>

                    <div>
                      <h2
                        className="text-3xl font-black mb-2"
                        style={{
                          color: C.textDk,
                          fontFamily:
                            "'Playfair Display', Georgia, serif",
                        }}
                      >
                        ISO 9001:2015
                      </h2>
                    </div>
                  </div>
                </div>

                {/* body */}
                <div className="p-8 md:p-10">
                  <h3
                    className="text-2xl font-black mb-5"
                    style={{ color: C.green }}
                  >
                    Building Confidence Through Quality, Consistency and Continual Improvement
                  </h3>

                  <p
                    className="text-[15px] leading-[2] mb-4"
                    style={{ color: C.muted }}
                  >
                    Brajvidhya Services Private Limited (BVSPL) provides independent and impartial <strong>Quality Management System (QMS) certification services against ISO 9001:2015</strong> for organizations seeking to demonstrate their commitment to quality, customer satisfaction, process effectiveness and continual improvement.
                  </p>
                  <p
                    className="text-[15px] leading-[2] mb-4"
                    style={{ color: C.muted }}
                  >
                    ISO 9001:2015 is an internationally recognized standard that provides a systematic framework for organizations to establish, implement, maintain and continually improve a Quality Management System.
                  </p>
                  <p
                    className="text-[15px] leading-[2] mb-12"
                    style={{ color: C.muted }}
                  >
                    Through our certification process, BVSPL evaluates whether an organization's Quality Management System is effectively implemented and meets the applicable requirements of ISO 9001:2015.
                  </p>

                  <h3
                    className="text-2xl font-black mb-6"
                    style={{ color: C.green }}
                  >
                    Certification Scope
                  </h3>
                  <p className="text-[15px] leading-[2] mb-6" style={{ color: C.muted }}>
                    BVSPL provides ISO 9001:2015 certification services for the following applicable IAF sectors:
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    <div className="p-5 rounded-2xl" style={{ background: "#faf6ef", border: "1px solid #eee3d3" }}>
                      <h4 className="font-bold text-lg mb-2" style={{ color: C.green }}>IAF 01 – Agriculture, Forestry & Fishing</h4>
                      <p className="text-sm" style={{ color: C.muted }}>Organizations involved in agricultural activities, forestry, fishing and related processes, as applicable to their defined certification scope.</p>
                    </div>
                    
                    <div className="p-5 rounded-2xl" style={{ background: "#faf6ef", border: "1px solid #eee3d3" }}>
                      <h4 className="font-bold text-lg mb-2" style={{ color: C.green }}>IAF 03 – Food Products, Beverages & Tobacco</h4>
                      <p className="text-sm" style={{ color: C.muted }}>Organizations involved in the manufacture, processing, preservation, packaging and related activities associated with food products, beverages and tobacco products.</p>
                    </div>
                    
                    <div className="p-5 rounded-2xl" style={{ background: "#faf6ef", border: "1px solid #eee3d3" }}>
                      <h4 className="font-bold text-lg mb-2" style={{ color: C.green }}>IAF 30 – Hotels & Restaurants</h4>
                      <p className="text-sm" style={{ color: C.muted }}>Organizations providing accommodation, hospitality, food service, restaurant and related customer-service activities.</p>
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-black mb-6"
                    style={{ color: C.green }}
                  >
                    What We Evaluate
                  </h3>
                  <p className="text-[15px] leading-[2] mb-6" style={{ color: C.muted }}>
                    Our certification audits focus on the effective implementation and performance of the organization's Quality Management System, including:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Customer focus and customer satisfaction",
                      "Leadership and organizational commitment",
                      "Planning and management of risks and opportunities",
                      "Competence and awareness of personnel",
                      "Operational planning and control",
                      "Monitoring, measurement and evaluation",
                      "Management of nonconformities and corrective actions",
                      "Internal audits and management review",
                      "Continual improvement of the Quality Management System"
                    ].map((item, index) => (
                      <li key={index} className="flex gap-3 text-[15px]" style={{ color: C.muted }}>
                        <span style={{ color: C.gold }}>✓</span>
                        <span className="font-medium text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[15px] leading-[2] mb-12" style={{ color: C.muted }}>
                    The audit approach is based on objective evidence and the defined certification scope of the organization.
                  </p>

                  <h3
                    className="text-2xl font-black mb-6"
                    style={{ color: C.green }}
                  >
                    Certification Process
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                    {[
                      "Application", "Application Review", "Audit Planning",
                      "Stage 1 Audit", "Stage 2 Audit", "Certification Decision",
                      "Certificate", "Surveillance", "Recertification"
                    ].map((step, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-xl relative flex flex-col justify-center border border-[#eee3d3] bg-[#faf6ef] overflow-hidden group hover:shadow-md transition-shadow"
                      >
                        <div className="absolute -right-4 -bottom-4 text-6xl font-black opacity-[0.05] group-hover:opacity-10 transition-opacity" style={{ color: C.green }}>
                          {idx + 1}
                        </div>
                        <div className="flex items-center gap-3 relative z-10">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm shrink-0" style={{ backgroundColor: C.gold }}>
                            {idx + 1}
                          </div>
                          <span className="font-semibold text-sm leading-tight" style={{ color: C.greenDk }}>
                            {step}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3
                    className="text-2xl font-black mb-6"
                    style={{ color: C.green }}
                  >
                    Our Commitment
                  </h3>
                  <p className="text-[15px] leading-[2] mb-6" style={{ color: C.muted }}>
                    BVSPL is committed to providing certification services that are:
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {[
                      "Impartial", "Independent", "Competent", 
                      "Consistent", "Confidential", "Evidence-Based"
                    ].map((val, idx) => (
                      <div 
                        key={idx}
                        className="px-5 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-sm border border-[#eee3d3]"
                        style={{ color: C.gold, backgroundColor: C.white }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>
                  <p className="text-[15px] leading-[2] mb-4" style={{ color: C.muted }}>
                    Our certification activities are conducted in accordance with applicable requirements of <strong>ISO/IEC 17021-1:2015</strong> and relevant accreditation and certification requirements.
                  </p>
                  <p className="text-[15px] leading-[2] mb-12" style={{ color: C.muted }}>
                    We maintain appropriate controls to protect impartiality and confidentiality throughout the certification process.
                  </p>

                  {/* PDFs */}
                  <div className="pt-8 border-t border-[#eee3d3]">
                    <h3
                      className="text-2xl font-black mb-6"
                      style={{ color: C.green }}
                    >
                      Certification Documents
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pdfList.map((pdf, idx) => (
                        <a
                          key={idx}
                          href={`/pdfs/${pdf}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 p-4 rounded-lg border border-[#eee3d3] hover:border-[#b8962e] transition-all group"
                          style={{ background: "#faf6ef" }}
                        >
                          <div className="mt-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-sm group-hover:text-[#b8962e] transition-colors" style={{ color: C.textDk }}>
                              {pdf.replace('.pdf', '')}
                            </p>
                            <p className="text-xs mt-1 uppercase tracking-wider" style={{ color: C.muted }}>PDF Document</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT (SIDEBAR) */}
            <div>
              <div
                className="sticky top-24 rounded-3xl p-8"
                style={{
                  background: C.white,
                  border: "1px solid #e9dfcf",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.05)",
                }}
              >
                <p
                  className="text-[11px] font-bold tracking-[3px] uppercase mb-3"
                  style={{ color: C.gold }}
                >
                  Need Assistance?
                </p>

                <h3
                  className="text-3xl font-black mb-4"
                  style={{
                    color: C.green,
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  Talk to Our Experts
                </h3>

                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: C.muted }}
                >
                  Get professional guidance, inspection scheduling and compliance
                  support from our certified audit team.
                </p>

                <Link
                  to="/contact"
                  className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300 hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, ${C.green}, ${C.greenDk})`,
                    color: "white",
                  }}
                >
                  Enquire Now

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>

                <div
                  className="mt-8 pt-8 border-t"
                  style={{ borderColor: "#eee3d3" }}
                >
                  <div className="space-y-4">
                    {[
                      "NABCB ACCREDITED IB",
                      "PAN India Service",
                      "Certified Auditors",
                      "Transparent Reporting",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: C.gold }}
                        />

                        <p
                          className="text-sm font-medium"
                          style={{ color: C.textDk }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen flex flex-col" style={{ backgroundColor: C.cream, color: C.textDk }}>
      {/* ── HERO SECTION ── */}
      <section
        className="relative pt-32 pb-24 px-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.greenDk} 0%, ${C.green} 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <Label>Certification</Label>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ISO Certification
          </h1>
          <GoldBar center />
          <p className="text-lg text-[#e8e0d0] max-w-2xl mx-auto leading-relaxed">
            Independent and impartial Quality Management System (QMS) certification services.
          </p>
        </div>
      </section>

      <section className="flex-1 py-20 px-6 max-w-[1280px] mx-auto w-full flex justify-center">
        <div 
          onClick={() => setShowDetails(true)}
          className="cursor-pointer max-w-xl w-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl flex flex-col group"
          style={{ backgroundColor: C.white, border: "1px solid #e9dfcf" }}
        >
          <div className="h-64 overflow-hidden relative">
            <img 
              src={cardImg} 
              alt="ISO Certification" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
          <div className="p-8 flex flex-col items-center text-center relative">
            <div className="absolute -top-10 bg-white p-2 rounded-full shadow-lg">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${C.gold}20` }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 mt-6 group-hover:text-[#b8962e] transition-colors" style={{ color: C.greenDk }}>
              ISO 9001:2015 QUALITY MANAGEMENT SYSTEM CERTIFICATION
            </h2>
            <p className="text-gray-600 mb-6">
              Click to view certification details and processes.
            </p>
            <button className="px-8 py-3 rounded text-white text-sm font-bold tracking-wider uppercase transition-colors hover:opacity-90 shadow-md" style={{ backgroundColor: C.gold }}>
              View Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
