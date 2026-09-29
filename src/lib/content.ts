// src/lib/content.ts
export type Bi = readonly [string, string];
export const pick = (v: Bi, vi: boolean) => v[vi ? 1 : 0];

export const EMAIL = "hthquan28@gmail.com";

export type Lab = { id: string; topic: string; title: Bi; body: Bi; bars: number[] };
export type Service = { title: Bi; text: Bi; output: Bi };

export const labs: Lab[] = [
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

export const services: Service[] = [
  {
    title: ["Find the right question", "Đặt đúng câu hỏi"],
    text: [
      "An advisory session to map the decision, available data and a measurable success criterion.",
      "Buổi tư vấn để làm rõ quyết định, dữ liệu sẵn có và tiêu chí thành công đo được.",
    ],
    output: ["Decision brief + next steps", "Bản mô tả bài toán + bước tiếp theo"],
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

export const stats: { value: number; label: Bi }[] = [
  { value: 11, label: ["experiments", "thí nghiệm"] },
  { value: 3, label: ["field notes", "bài ghi chép"] },
  { value: 2, label: ["languages", "ngôn ngữ"] },
  { value: 0, label: ["sign-ins needed", "lần đăng nhập"] },
];

export const topics = [
  "Bandits",
  "Causal inference",
  "MLOps",
  "Recommender systems",
  "Experimentation",
  "Dynamic pricing",
  "Marketing mix",
  "Reinforcement learning",
  "Online learning",
];

export const sections: { id: string; label: Bi }[] = [
  { id: "labs", label: ["Labs", "Labs"] },
  { id: "services", label: ["Work together", "Hợp tác"] },
  { id: "about", label: ["About", "Giới thiệu"] },
];
