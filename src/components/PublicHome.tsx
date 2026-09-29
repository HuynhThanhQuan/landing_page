"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
const labs = [
  {
    id: "bandits",
    topic: "DECISION SCIENCE",
    title: ["The cost of learning", "Cái giá của việc học"],
    body: [
      "Four allocation rules. The same uncertain world.",
      "Bốn chính sách phân bổ, cùng một thế giới bất định.",
    ],
    bars: [28, 55, 44, 78, 65, 92],
  },
  {
    id: "causal-inference",
    topic: "MEASUREMENT",
    title: ["The wrong comparison", "Một so sánh sai"],
    body: [
      "What changes when the confounder is hidden?",
      "Điều gì thay đổi khi yếu tố gây nhiễu bị ẩn?",
    ],
    bars: [85, 68, 52, 71, 38, 26],
  },
  {
    id: "mlops",
    topic: "ENGINEERING",
    title: ["When a model goes quiet", "Khi mô hình im lặng"],
    body: [
      "A closer look at drift, thresholds and false alarms.",
      "Nhìn kỹ drift, ngưỡng cảnh báo và báo động giả.",
    ],
    bars: [35, 37, 34, 58, 75, 96],
  },
];
const services = [
  {
    title: ["Find the right question", "Đặt đúng câu hỏi"],
    text: [
      "An advisory session to map the decision, available data and a measurable success criterion.",
      "Buổi tư vấn để làm rõ quyết định, dữ liệu sẵn có và tiêu chí thành công đo được.",
    ],
    output: [
      "Decision brief + next steps",
      "Bản mô tả bài toán + bước tiếp theo",
    ],
  },
  {
    title: ["Build a focused prototype", "Làm prototype có trọng tâm"],
    text: [
      "A scoped data or AI experiment with a baseline, evaluation and a handover you can reproduce.",
      "Thử nghiệm Data/AI có phạm vi rõ, baseline, đánh giá và bàn giao tái lập được.",
    ],
    output: ["Working demo + evaluation", "Demo chạy được + đánh giá"],
  },
  {
    title: ["Learn by building", "Học bằng cách làm"],
    text: [
      "Project-led mentoring or a team workshop, shaped around your context and current skill level.",
      "Mentoring theo dự án hoặc workshop cho đội ngũ, theo bối cảnh và trình độ hiện tại.",
    ],
    output: ["Learning plan + hands-on exercises", "Lộ trình + bài thực hành"],
  },
];
export function PublicHome() {
  const { language, setLanguage } = useLanguage();
  const vi = language === "vi";
  const pick = (values: string[]) => values[vi ? 1 : 0];
  return (
    <div className="public-site">
      <a className="public-skip" href="#content">
        {vi ? "Đến nội dung" : "Skip to content"}
      </a>
      <header className="public-nav">
        <Link href="/" className="public-brand">
          <span>CM</span>Curious Machine
        </Link>
        <nav aria-label="Main">
          <a href="#labs">Labs</a>
          <Link href="/notes/">{vi ? "Bài viết" : "Notes"}</Link>
          <a href="#services">{vi ? "Hợp tác" : "Work together"}</a>
        </nav>
        <button
          type="button"
          onClick={() => setLanguage(vi ? "en" : "vi")}
          aria-label={vi ? "Switch to English" : "Chuyển sang tiếng Việt"}
        >
          {vi ? "EN" : "VI"} ↔
        </button>
      </header>
      <main id="content">
        <section className="public-hero">
          <div>
            <p className="public-kicker">
              INDEPENDENT DATA & AI STUDIO · VIETNAM / EVERYWHERE
            </p>
            <h1>
              {vi ? "Tò mò là khởi đầu." : "Stay curious."}
              <br />
              <em>{vi ? "Bằng chứng là điểm đến." : "Build the evidence."}</em>
            </h1>
            <p className="public-lede">
              {vi
                ? "Curious Machine là không gian của Quan dành cho Data Science ứng dụng: những thí nghiệm có thể khám phá, cách nghĩ có thể kiểm chứng và những hệ thống có thể sử dụng."
                : "A space by Quan for applied data science: experiments you can explore, ideas you can question, and systems you can use."}
            </p>
            <div className="public-actions">
              <a className="public-primary" href="/experiments.html">
                {vi ? "Khám phá 11 thí nghiệm" : "Explore 11 experiments"} ↗
              </a>
              <a href="#contact">
                {vi ? "Cùng làm một dự án" : "Bring a question"} →
              </a>
            </div>
            <p className="public-small">
              {vi
                ? "Mở trong trình duyệt · Không đăng nhập · Ghi rõ giới hạn"
                : "Open in your browser · No sign-in · Limitations included"}
            </p>
          </div>
          <div
            className="public-diagram"
            aria-label="Question, Experiment, Evidence, Decision"
          >
            <span className="public-kicker">THE CURIOUS LOOP / 001</span>
            <div className="public-orbit">
              <span>?</span>
              <strong>CM</strong>
              <span>↗</span>
            </div>
            <ol>
              {["Question", "Experiment", "Evidence", "Decision"].map(
                (step, i) => (
                  <li key={step}>
                    <span>0{i + 1}</span>
                    {step}
                    <span aria-hidden="true">↗</span>
                  </li>
                ),
              )}
            </ol>
            <p>
              {vi
                ? "Ý tưởng tốt chịu được những câu hỏi khó."
                : "Good ideas survive better questions."}
            </p>
          </div>
        </section>
        <section id="labs" className="public-section">
          <div className="public-section-head">
            <div>
              <p className="public-kicker">01 / FIELD NOTES</p>
              <h2>
                {vi
                  ? "Đừng chỉ đọc. Thử đi."
                  : "Less hand-waving. More hands-on."}
              </h2>
            </div>
            <a href="/experiments.html">
              {vi ? "Xem tất cả 11 lab" : "All 11 experiments"} ↗
            </a>
          </div>
          <div className="public-grid">
            {labs.map((lab, n) => (
              <article className="public-lab" key={lab.id}>
                <div className="public-lab-top">
                  <span>{lab.topic}</span>
                  <span>0{n + 1}</span>
                </div>
                <div className="public-bars" aria-hidden="true">
                  {lab.bars.map((height, i) => (
                    <span key={i} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <p className="public-small">
                  {vi
                    ? "Minh họa · dữ liệu mô phỏng"
                    : "Illustration · synthetic data"}
                </p>
                <h3>
                  <a href={`/showcase/${lab.id}/index.html`}>
                    {pick(lab.title)} ↗
                  </a>
                </h3>
                <p>{pick(lab.body)}</p>
              </article>
            ))}
          </div>
          <p className="public-small">
            {vi
              ? "Demo và phương pháp bằng tiếng Anh. Đây là thí nghiệm giáo dục, không phải kết quả khách hàng."
              : "Demos and methods are in English. These are educational experiments, not client results."}
          </p>
        </section>
        <section id="services" className="public-section">
          <div className="public-section-head">
            <div>
              <p className="public-kicker">02 / WORK TOGETHER</p>
              <h2>
                {vi
                  ? "Từ câu hỏi đến thứ dùng được."
                  : "From a question to something useful."}
              </h2>
            </div>
          </div>
          <div className="public-grid">
            {services.map((s, i) => (
              <article className="public-service" key={i}>
                <span className="public-kicker">0{i + 1}</span>
                <h3>{pick(s.title)}</h3>
                <p>{pick(s.text)}</p>
                <p className="public-deliverable">↳ {pick(s.output)}</p>
              </article>
            ))}
          </div>
          <div className="public-engagement">
            <strong>{vi ? "Cách bắt đầu" : "How it starts"}</strong>
            <p>
              {vi
                ? "Gửi bối cảnh → trao đổi khám phá → thống nhất phạm vi, thời gian và báo giá. Không có gói tự động hay cam kết hiệu quả trước khi hiểu bài toán. Có thể làm việc từ xa bằng tiếng Việt hoặc tiếng Anh."
                : "Share the context → discovery conversation → agreed scope, timeline and quote. No automatic subscription or outcome promise before we understand the problem. Remote collaboration in English or Vietnamese."}
            </p>
          </div>
        </section>
        <section className="public-section public-about">
          <div>
            <p className="public-kicker">03 / BEHIND THE WORK</p>
            <h2>
              {vi
                ? "Một người làm nghề. Một tinh thần tò mò."
                : "A practitioner. An open notebook."}
            </h2>
          </div>
          <div>
            <p>
              {vi
                ? "Mình là Huỳnh Thanh Quan, người sáng lập Curious Machine. Mình quan tâm đến recommendation, bandits, đo lường nhân quả và cách biến mô hình thành quyết định tốt hơn."
                : "I’m Huỳnh Thanh Quan, founder of Curious Machine. My work explores recommendation, bandits, causal measurement and turning models into better decisions."}
            </p>
            <a href="https://portfolio.hthquan28.workers.dev/">
              {vi ? "Xem portfolio cá nhân" : "Meet the person behind CM"} ↗
            </a>
            <br />
            <Link href="/notes/">
              {vi ? "Đọc ghi chép kỹ thuật" : "Read the field notes"} ↗
            </Link>
          </div>
        </section>
        <section id="contact" className="public-contact">
          <p className="public-kicker">LET’S FIND OUT.</p>
          <h2>
            {vi ? "Bạn đang tò mò điều gì?" : "What are you curious about?"}
          </h2>
          <p>
            {vi
              ? "Gửi bài toán, dữ liệu bạn có và điều bạn muốn thay đổi. Bắt đầu bằng một cuộc trò chuyện."
              : "Tell me about the decision, the data you have and what you want to change. Start with a conversation."}
          </p>
          <a
            className="public-primary"
            href="mailto:hthquan28@gmail.com?subject=Curious%20Machine%20Project%20inquiry"
          >
            hthquan28@gmail.com ↗
          </a>
          <p className="public-small">
            {vi
              ? "Link mở ứng dụng email của bạn; website không lưu hoặc gửi thông tin tự động."
              : "Opens your email app. This website does not collect or send your message automatically."}
          </p>
          <a href="https://linkedin.com/in/charles-huynh">LinkedIn ↗</a>
        </section>
      </main>
      <footer className="public-footer">
        <span>© 2026 Curious Machine · Built by Quan</span>
        <span>Vietnam-based. Globally curious.</span>
        <a href="https://github.com/HuynhThanhQuan/curious-machine">
          GitHub ↗
        </a>
      </footer>
    </div>
  );
}
