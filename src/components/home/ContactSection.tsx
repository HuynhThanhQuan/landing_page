// src/components/home/ContactSection.tsx
"use client";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { EMAIL } from "@/lib/content";

export function ContactSection() {
  const { language } = useLanguage();
  const vi = language === "vi";
  return (
    <section id="contact" className="lab-section lab-section-tight">
      <div className="lab-container">
        <Reveal>
          <div className="lab-contact">
            <p className="lab-kicker">LET’S FIND OUT.</p>
            <h2 className="lab-h2">{vi ? "Bạn đang tò mò điều gì?" : "What are you curious about?"}</h2>
            <p className="lab-lede">
              {vi
                ? "Gửi bài toán, dữ liệu bạn có và điều bạn muốn thay đổi. Bắt đầu bằng một cuộc trò chuyện."
                : "Tell me about the decision, the data you have and what you want to change. Start with a conversation."}
            </p>
            <div className="lab-actions">
              <Magnetic>
                <a className="lab-btn" href={`mailto:${EMAIL}?subject=Curious%20Machine%20Project%20inquiry`}>
                  {EMAIL} ↗
                </a>
              </Magnetic>
              <a className="lab-link" href="https://linkedin.com/in/charles-huynh">
                LinkedIn ↗
              </a>
            </div>
            <p className="lab-small">
              {vi
                ? "Link mở ứng dụng email của bạn; website không lưu hoặc gửi thông tin tự động."
                : "Opens your email app. This website does not collect or send your message automatically."}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
