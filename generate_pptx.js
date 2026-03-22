import pptxgen from "pptxgenjs";

const resumeData = {
  personalInfo: {
    name: "赵博洋",
    role: "新媒体运营 / 内容运营",
    phone: "17539817059",
    email: "1547548860@qq.com",
    location: "上海市宝山区",
    birthDate: "2003.08.01",
    tagline: "懂心理学的爆款制造者",
    interests: "资深 ACG / 二次元文化受众",
  },
  coreAdvantages: [
    {
      title: "从 0 到 1 账号孵化",
      description: "独立完成抖音冷启动，累计获取42.1万粉丝。打造出单条播放破千万爆款视频，成功实现变现。",
    },
    {
      title: "长短视频制作",
      description: "具备 B 站长线叙事能力（无推流 Vlog 获 4.5 万播放）。熟练使用 DaVinci/剪映，熟悉 Sora 等 AI 工具。",
    },
    {
      title: "社群运营与维护",
      description: "协助管理百万粉网红社群，具突发事件处理能力。化解社群意见分歧，维护良好氛围。",
    },
    {
      title: "数据分析与洞察",
      description: "心理学背景，熟练使用 SPSS 进行数据分析。曾通过 A/B 测试量化分析配乐对受众情绪的影响。",
    },
  ],
  education: [
    {
      school: "河南师范大学",
      major: "心理学",
      degree: "本科",
      period: "2021.09 - 2025.06",
      courses: "普通心理学、管理心理学、临床心理学等",
    }
  ],
  workExperience: [
    {
      company: "抖音平台 / 泛二次元内容创作者",
      role: "个人项目",
      period: "2019.05 - 2021.01",
      highlights: [
        { label: "爆款策划", content: "预测 ACG 圈层“转生类”题材热度，结合卡点剪辑，产出两条播放破千万、点赞破百万视频。" },
        { label: "账号变现", content: "从 0 到 1 完成账号定位和内容迭代，积累粉丝 42.1 万。后续成功将账号转手变现。" },
      ],
    },
    {
      company: "B 站 / 中长视频与垂直社区创作者",
      role: "个人项目",
      period: "2022.09 - 至今",
      highlights: [
        { label: "长线叙事", content: "策划、拍摄并剪辑 28 分钟 Vlog。无官方推荐下单条获 4.5 万播放，转化 300+ 关注。" },
        { label: "垂直吸粉", content: "针对音乐/ACG 区受众，发布架子鼓翻奏视频。3 条视频获得 2 万+ 播放。" },
      ],
    },
    {
      company: "“小兰花”（百万级网红）团队",
      role: "社群管理",
      period: "2024.01 - 2024.12",
      highlights: [
        { label: "粉丝维系", content: "担任百万粉博主群管，负责抛出日常话题、引导讨论并维系主要粉丝关系。" },
        { label: "危机控制", content: "处理直播间封禁引发的风波，协同博主发布声明，2小时内平息。调解新老粉丝冲突。" },
      ],
    },
  ],
  campusProjects: [
    {
      title: "新媒体账号“河师大教育学部”",
      role: "运营统筹",
      period: "2021.09 - 2024.05",
      items: [
        "审核视频脚本、指导拍摄并把控最终成片质量。",
        "结合高考热点策划学部宣传片，取得年度最佳曝光。",
      ],
    },
    {
      title: "校级宣传视频《百年征程》",
      role: "后期制作",
      period: "2023.05 - 2023.07",
      items: [
        "使用 Adobe AE 制作特效，DaVinci Resolve 调色。作品获校级特等奖。"
      ]
    },
    {
      title: "“游戏配乐与玩家情绪”研究",
      role: "大创项目（组长）",
      period: "2022.01 - 2024.05",
      items: [
        "设计测试情境，通过定量分析得出3节拍快节奏配乐更能激发玩家情绪的结论。"
      ]
    },
    {
      title: "心理教师（实习）",
      role: "郑州实验外国语学校",
      period: "2024.02 - 2024.06",
      items: [
        "处理学生抑郁倾向等事件。因授课效果良好，第二周被委任负责 20 个班的教学。"
      ]
    },
  ],
  skills: [
    { category: "软件运用", content: "DaVinci Resolve、Adobe 系列、Studio One、剪映、SPSS、E-prime" },
    { category: "音乐与语言", content: "架子鼓（十级）、钢琴、CET-6" },
    { category: "综合能力", content: "优秀的公众演讲与统筹能力" },
    { category: "AIGC探索", content: "ollama 本地部署，积极探索 ChatGPT、Sora 等" },
  ],
};

const pptx = new pptxgen();
pptx.defineLayout({ name: 'A4', width: 8.27, height: 11.69 });
pptx.layout = 'A4';

const slide = pptx.addSlide();

// Colors
const COL_LEFT_BG = "F7F9FA";
const COL_RIGHT_BG = "FFFFFF";
const TEXT_DARK = "1F2937";
const TEXT_GRAY = "4B5563";
const TEXT_LIGHT = "6B7280";
const ACCENT = "3B82F6"; // Blue accent

// Left Column Background
slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: 2.8, h: 11.69, fill: { color: COL_LEFT_BG } });

// Helper to calculate text height
function getDynamicHeight(text, charsPerLine) {
    let lines = Math.ceil(text.length / charsPerLine);
    return lines * 0.18; // approx 0.18 inches per line
}

// =================== LEFT COLUMN ===================
let leftY = 0.5;

// Name & Role
slide.addText(resumeData.personalInfo.name, {
    x: 0.3, y: leftY, w: 2.2, h: 0.4,
    fontSize: 22, bold: true, color: TEXT_DARK, fontFace: "Arial"
});
leftY += 0.35;

slide.addText(resumeData.personalInfo.role, {
    x: 0.3, y: leftY, w: 2.2, h: 0.2,
    fontSize: 11, color: ACCENT, fontFace: "Arial", bold: true
});
leftY += 0.35;

// Tagline
slide.addText(resumeData.personalInfo.tagline, {
    x: 0.3, y: leftY, w: 2.2, h: 0.2,
    fontSize: 9.5, color: TEXT_GRAY, italic: true, fontFace: "Arial"
});
leftY += 0.4;

function addLeftHeader(title, y) {
    slide.addText(title, {
        x: 0.3, y: y, w: 2.2, h: 0.25,
        fontSize: 13, bold: true, color: TEXT_DARK,
        border: { type: "bottom", pt: 1, color: "D1D5DB" }
    });
    return y + 0.35;
}

// Contact
leftY = addLeftHeader("个人信息", leftY);
const contacts = [
    resumeData.personalInfo.birthDate,
    resumeData.personalInfo.phone,
    resumeData.personalInfo.email,
    resumeData.personalInfo.location
];
contacts.forEach(c => {
    slide.addText(c, { x: 0.3, y: leftY, w: 2.2, h: 0.15, fontSize: 9, color: TEXT_GRAY });
    leftY += 0.2;
});
leftY += 0.25;

// Education
leftY = addLeftHeader("教育背景", leftY);
resumeData.education.forEach(edu => {
    slide.addText(edu.school, { x: 0.3, y: leftY, w: 2.2, h: 0.15, fontSize: 10, bold: true, color: TEXT_DARK });
    leftY += 0.2;
    slide.addText(`${edu.major} | ${edu.degree}`, { x: 0.3, y: leftY, w: 2.2, h: 0.15, fontSize: 9, color: TEXT_GRAY });
    leftY += 0.2;
    slide.addText(edu.period, { x: 0.3, y: leftY, w: 2.2, h: 0.15, fontSize: 8.5, color: TEXT_LIGHT });
    leftY += 0.25;
});

// Skills
leftY = addLeftHeader("专业技能", leftY);
resumeData.skills.forEach(skill => {
    slide.addText(skill.category, { x: 0.3, y: leftY, w: 2.2, h: 0.15, fontSize: 10, bold: true, color: TEXT_DARK });
    leftY += 0.2;
    let h = getDynamicHeight(skill.content, 18); // Approx 18 chars per line in left col
    slide.addText(skill.content, { x: 0.3, y: leftY, w: 2.2, h: h, fontSize: 9, color: TEXT_GRAY, valign: "top", lineSpacing: 12 });
    leftY += h + 0.1;
});


// =================== RIGHT COLUMN ===================
let rightY = 0.5;
const RIGHT_X = 3.0;
const RIGHT_W = 4.9;

function addRightHeader(title, y) {
    slide.addText(title, {
        x: RIGHT_X, y: y, w: RIGHT_W, h: 0.25,
        fontSize: 14, bold: true, color: ACCENT,
        border: { type: "bottom", pt: 1.5, color: ACCENT }
    });
    return y + 0.35;
}

// Core Advantages
rightY = addRightHeader("核心优势", rightY);
resumeData.coreAdvantages.forEach(adv => {
    let textStr = adv.title + "  |  " + adv.description;
    let h = getDynamicHeight(textStr, 38); // Approx 38 chars per line in right col
    slide.addText([{ text: adv.title + "  |  ", options: { bold: true, color: TEXT_DARK, fontSize: 10 } }, { text: adv.description }], {
        x: RIGHT_X, y: rightY, w: RIGHT_W, h: h, fontSize: 10, color: TEXT_GRAY, valign: "top", lineSpacing: 14
    });
    rightY += h + 0.12;
});
rightY += 0.1;

// Work Experience
rightY = addRightHeader("项目与工作经历", rightY);
resumeData.workExperience.forEach(exp => {
    slide.addText(exp.company, { x: RIGHT_X, y: rightY, w: 3.1, h: 0.2, fontSize: 10.5, bold: true, color: TEXT_DARK });
    slide.addText(exp.period, { x: RIGHT_X + 3.1, y: rightY, w: 1.8, h: 0.2, fontSize: 9, color: TEXT_LIGHT, align: "right" });
    rightY += 0.2;
    slide.addText(exp.role, { x: RIGHT_X, y: rightY, w: RIGHT_W, h: 0.2, fontSize: 9.5, italic: true, color: TEXT_GRAY });
    rightY += 0.22;
    
    exp.highlights.forEach(hl => {
        let textStr = "• " + hl.label + ": " + hl.content;
        let h = getDynamicHeight(textStr, 38);
        slide.addText([{ text: "• " + hl.label + ": ", options: { bold: true } }, { text: hl.content }], {
            x: RIGHT_X + 0.1, y: rightY, w: RIGHT_W - 0.1, h: h, fontSize: 9, color: TEXT_GRAY, valign: "top", lineSpacing: 12
        });
        rightY += h + 0.05;
    });
    rightY += 0.15;
});

// Campus Projects
rightY = addRightHeader("校园经历与荣誉", rightY);
resumeData.campusProjects.forEach(proj => {
    slide.addText(proj.title, { x: RIGHT_X, y: rightY, w: 3.1, h: 0.2, fontSize: 10.5, bold: true, color: TEXT_DARK });
    slide.addText(proj.period, { x: RIGHT_X + 3.1, y: rightY, w: 1.8, h: 0.2, fontSize: 9, color: TEXT_LIGHT, align: "right" });
    rightY += 0.2;
    slide.addText(proj.role, { x: RIGHT_X, y: rightY, w: RIGHT_W, h: 0.2, fontSize: 9.5, italic: true, color: TEXT_GRAY });
    rightY += 0.22;
    
    proj.items.forEach(item => {
        let textStr = "• " + item;
        let h = getDynamicHeight(textStr, 38);
        slide.addText([{ text: "• " }, { text: item }], {
            x: RIGHT_X + 0.1, y: rightY, w: RIGHT_W - 0.1, h: h, fontSize: 9, color: TEXT_GRAY, valign: "top", lineSpacing: 12
        });
        rightY += h + 0.05;
    });
    rightY += 0.15;
});

console.log(`Final leftY: ${leftY}, rightY: ${rightY}, Page Height: 11.69`);

pptx.writeFile({ fileName: "Resume_A4.pptx" }).then(fileName => {
    console.log(`Successfully generated ${fileName}`);
}).catch(err => {
    console.error("Error generating PPTX:", err);
});
