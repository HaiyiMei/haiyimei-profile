export interface PortfolioData {
  personal: {
    name: string;
    subtitle?: string;
    avatar: string; // path to image
    heroImage?: string; // Optional custom hero image
    role: string[];
    bio: string;
    social: {
      github: string;
      linkedin: string;
      youtube: string;
      scholar: string;
      email: string;
    };
  };
  skills: {
    languages: string[];
    tools: string[];
    frameworks: string[];
  };
  experience: {
    role: string;
    company: string;
    companyUrl: string;
    date: string;
    description: string;
  }[];
  education: {
    school: string;
    degree: string;
    date: string;
    imageUrl?: string;
    description: string;
    schoolUrl: string;
  }[];
  projects: {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    repoUrl: string;
    tags: string[];
    featured?: boolean;
  }[];
  publications: {
    title: string;
    authors: { name: string; url?: string; isMe?: boolean }[];
    venue: string;
    date: string;
    paperUrl: string;
    codeUrl?: string;
    imageUrl: string;
    description: string;
  }[];
  contact: {
    title: string;
    description: string;
    emailText: string;
    emailHref: string;
    buttonText: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Haiyi Mei",
    subtitle: "梅海艺",
    avatar: "/images/avatar.png",
    role: [
      "Agentic AI Engineer",
      "Algorithm Researcher",
      "Full-Stack Engineer",
      "Synthetic Data Engineer",
      "Vibe Coder",
      "Game Developer",
      "Amateur Musician"
    ],
    bio: `👋
I'm a committed algorithm researcher and backend engineer with 4+ years of industry experience.
Specializing in 3D synthetic data generation for computer vision tasks,
I have contributed to [10 papers](#publications) in top-tier conferences and journals.

I'm well-versed in the text-to-video generation pipeline,
contributing to VAE training, dataset preparation, automated annotation, and video acquisition using crawler techniques.

Beyond research, I'm passionate about developing autonomous AI agents,
leveraging my backend expertise and cutting-edge LLMs to create intelligent, scalable solutions.

I thrive on pushing the boundaries of AI systems and automation.

My expertise spans:
- Engine tools development: Unreal Engine, Blender, etc.
- Rendering techniques: PBR, differentiable rendering, NeRF, 3DGS, etc.
- 3D computer vision: Novel view synthesis, generative models on 3D, etc.
- Text/image-to-video generation: VAE, Diffusion models, dataset preparation (automated annotation, crawler techniques), etc.
- Backend development: FastAPI, Flask, scalable robust system design, etc.
- LLM and autonomous AI agents: LLM integration, prompt engineering, agentic framework, etc.
- Open-source projects: CI/CD, Docker, Kubernetes, etc.

Languages and tools I'm working with:

[![Python](https://img.shields.io/badge/Python-3776AB.svg?logo=Python&logoColor=white)](https://www.python.org)
[![C++](https://img.shields.io/badge/C++-00599C.svg?logo=c%2B%2B&logoColor=white)](https://www.w3schools.com/cpp/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?logo=PyTorch&logoColor=white)](https://pytorch.org/)
[![LangChain](https://img.shields.io/badge/LangChain-1C3C3C.svg?logo=langchain&logoColor=white)](https://www.langchain.com/)
[![Smolagents](https://img.shields.io/badge/Smolagents-FFD21E?logo=huggingface&logoColor=000)](https://huggingface.co/docs/smolagents/)
[![Claude Agent SDK](https://img.shields.io/badge/Claude_Agent_SDK-D97757.svg?logo=anthropic&logoColor=white)](https://platform.claude.com/docs/en/agent-sdk/overview)
<br>
[![Unreal Engine](https://img.shields.io/badge/-Unreal%20Engine-0E1128?logo=unrealengine&logoColor=white)](https://unrealengine.com/)
[![Blender](https://img.shields.io/badge/Blender-%23F5792A.svg?logo=Blender&logoColor=white)](https://www.blender.org/)
[![PyTorch3D Badge](https://custom-icon-badges.demolab.com/badge/PyTorch3D-white.svg?logo=pytorch3d&logoColor=white)](https://pytorch3d.org/)
[![Mitsuba Badge](https://custom-icon-badges.demolab.com/badge/Mitsuba-green.svg?logo=mitsuba&logoColor=white)](https://www.mitsuba-renderer.org/)
<br>
[![Docker](https://img.shields.io/badge/Docker-%232496ED.svg?logo=Docker&logoColor=white)](https://www.docker.com/)
[![Flask](https://img.shields.io/badge/Flask-black.svg?logo=Flask&logoColor=white)](https://flask.palletsprojects.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688.svg?logo=FastAPI&logoColor=white)](https://fastapi.tiangolo.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-%23326CE5.svg?logo=Kubernetes&logoColor=white)](https://kubernetes.io)
[![Git](https://img.shields.io/badge/Git-%23F05033.svg?logo=Git&logoColor=white)](https://git-scm.com/)
[![Linux](https://img.shields.io/badge/Linux-%23FCC624.svg?logo=Linux&logoColor=black)](https://www.linux.org/)
[![LaTex](https://img.shields.io/badge/LaTeX-%23008080.svg?logo=LaTeX&logoColor=white)](https://www.latex-project.org/)`,
    social: {
      github: "https://github.com/HaiyiMei",
      linkedin: "https://linkedin.com/in/haiyimei/",
      youtube: "https://www.youtube.com/@haiyimei",
      scholar: "https://scholar.google.com/citations?user=TOZ9wR4AAAAJ",
      email: "mailto:haiyimei@gmail.com"
    }
  },
  skills: {
    languages: ["Python", "C++", "TypeScript"],
    tools: ["Unreal Engine", "Blender", "Docker", "Kubernetes", "Git", "Linux", "LaTeX"],
    frameworks: ["PyTorch", "LangChain", "Smolagents", "Claude Agent SDK", "Flask", "FastAPI", "React", "Next.js", "Vite"]
  },
  experience: [
    {
      role: "R&D Engineer",
      company: "Creao AI",
      companyUrl: "https://www.creao.ai",
      date: "Apr 2025 - Present",
      description: `#### >> Code Agent System

As a key member of the development team, I designed and led the implementation of the core agentic framework for this production-grade autonomous system.
- Developed the agentic logic powering a platform that has successfully scaled to over **100,000 registered users**.
- Collaborated on building scalable backend infrastructure to enable seamless creation and deployment of AI-native applications.
- Led benchmark testing and performance evaluation to ensure high-quality system delivery and reliable production shipping.`
    },
    {
      role: "Mid-Level Algorithm Researcher",
      company: "SenseTime",
      companyUrl: "https://www.sensetime.com",
      date: "June 2021 - Apr 2025",
      description: `#### >> Text/Image-to-Video Generation

I'm well-versed in the entire T2V pipeline and passionate about pushing the boundaries of innovation in this field.

- Led VAE training, successfully reproducing results comparable to the VAE of [CogVideo](https://github.com/THUDM/CogVideo) with similar performance.
- Contributed to the data annotation process by supporting the application of textual, visual, and qualitative analyses to ensure high-quality video datasets.
- Developed automated solutions for video content acquisition from various online platforms lacking direct API support.

----

#### >> Synthetic Data Generation

----

##### >>>> XRFeitoria

I spearheaded the development of [XRFeitoria](https://github.com/openxrlab/xrfeitoria), a rendering toolbox designed to streamline synthetic data generation. This tool simplifies the construction of pipelines for topics including human mesh recovery, novel view synthesis, etc, leading to the publishing of several papers within a short timeframe.

----

##### >>>> SynBody

I held a principal role in designing [SynBody](https://synbody.github.io/), a large-scale synthetic dataset with layered human models.

- Participated in designing SMPL-XL, which enriches SMPL-X in hair, garments, accessories, and textures.
- Built a System of synthetic data generation as a Software-as-a-Service (SaaS) platform, including layered human creation, motion retargeting, scene composition, rendering pipeline, and flow control.
- Published a paper presented at ICCV 2023 as co-first author.

----

#### >> Demo videos

I'm proficient in crafting advanced technology demonstration videos.`
    },
    {
      role: "Visiting Research Intern",
      company: "NLPR | CASIA",
      companyUrl: "http://www.nlpr.ia.ac.cn/en/",
      date: "2018 - 2021",
      description: `Started to work on synthetic data generation for computer vision tasks.
- <i class="fa-regular fa-lightbulb"></i> Patent filed with CNIPA: [CN113011334A](https://patents.google.com/patent/CN113011334A).
- <i class="fa-regular fa-file-lines"></i> [One paper](http://www.txxb.com.cn/EN/abstract/abstract1967.shtml) related to synthetic data.

Had the experience of reproducing the SOTA methods in video captioning.
[<i class="fa-brands fa-github"></i> Code](https://github.com/HaiyiMei/s2vt_transformer)`
    }
  ],
  education: [
    {
      school: "Shandong University",
      degree: "Master of Biomedical/Medical Engineering",
      date: "2019 - 2022",
      schoolUrl: "https://en.sdu.edu.cn/",
      description: `I Published:
- 💡 Patent filed with CNIPA: [CN114429436A](https://patents.google.com/patent/CN114429436A).`
    },
    {
      school: "Nanjing University of Science and Technology",
      degree: "Bachelor of Automation",
      date: "2015 - 2019",
      schoolUrl: "https://english.njust.edu.cn/",
      description: `I Published:
- 💡 Patent filed with CNIPA: [CN108453742B](https://patents.google.com/patent/CN108453742B).
- 📄 Mian ZHANG, Ying HUANG, **Haiyi MEI**, Yu GUO. Intelligent interaction method for power distribution robot based on Kinect. Journal of Shandong University(Engineering Science), 2018, 48(5): 103-108.

Extracurricular Activities
- 🎵 Head of the Symphony Orchestra of School, 2016 - 2018.
- 🎵 First Place Award, National University Piano Competition, Chinese Golden Bell Award for Music, 2017.`
    }
  ],
  projects: [
    {
      title: "XRFeitoria: Rendering Toolbox for Synthetic Data Generation",
      description: `- Control over engine (UE/Blender) through RPC using system python.
- Support multiple engine backends, including Unreal Engine and Blender.
- Render photorealistic images with ground-truth annotations.
- Manage assets/cameras, including import, place, export, and delete.
- CLI tools to render images from a mesh file.
- Streamline building rendering pipelines across various domains, effectively implemented in over **8 projects**.`,
      imageUrl: "/images/projects/XRFeitoria_small.gif",
      projectUrl: "https://xrfeitoria.readthedocs.io",
      repoUrl: "https://github.com/openxrlab/xrfeitoria",
      tags: ["Python", "C++", "Blender", "Unreal Engine"],
      featured: true
    }
  ],
  publications: [
    {
      title: "SMPLest-X: Ultimate Scaling for Expressive Human Pose and Shape Estimation",
      authors: [
        { name: "Wanqi Yin" },
        { name: "Zhongang Cai" },
        { name: "Ruisi Wang" },
        { name: "Ailing Zeng" },
        { name: "Chen Wei" },
        { name: "Qingping Sun" },
        { name: "Haiyi Mei", isMe: true },
        { name: "Yanjun Wang" },
        { name: "Hui En Pang" },
        { name: "Mingyuan Zhang" },
        { name: "Lei Zhang" },
        { name: "Chen Change Loy" },
        { name: "Atsushi Yamashita" },
        { name: "Lei Yang" },
        { name: "Ziwei Liu" }
      ],
      venue: "TPAMI 2025",
      date: "2025",
      imageUrl: "/images/projects/2025_tpami_smplest_x.png",
      paperUrl: "https://arxiv.org/abs/2501.09782",
      codeUrl: "https://github.com/wqyin/SMPLest-X",
      description: "SMPLest-X achieves ultimate scaling for expressive human pose and shape estimation (EHPS), building upon the SMPLer-X foundation model with the largest collection of human body datasets."
    },
    {
      title: "Differentiable Convex Polyhedra Optimization from Multi-view Images",
      authors: [
        { name: "Daxuan Ren" },
        { name: "Haiyi Mei", isMe: true },
        { name: "Hezi Shi" },
        { name: "Jianmin Zheng" },
        { name: "Jianfei Cai" },
        { name: "Lei Yang" }
      ],
      venue: "ECCV 2024",
      date: "2024",
      imageUrl: "/images/projects/2024_eccv_DiffConvex.png",
      paperUrl: "https://arxiv.org/abs/2407.15686",
      codeUrl: "https://github.com/kimren227/DiffConvex",
      description: "A method for differentiable rendering of convex polyhedra, combining hyperplane intersection with vertex optimization."
    },
    {
      title: "WHAC: World-grounded Humans and Cameras",
      authors: [
        { name: "Wanqi Yin" },
        { name: "Zhongang Cai" },
        { name: "Ruisi Wang" },
        { name: "Fanzhou Wang" },
        { name: "Chen Wei" },
        { name: "Haiyi Mei", isMe: true },
        { name: "Weiye Xiao" },
        { name: "Zhitao Yang" },
        { name: "Qingping Sun" },
        { name: "Atsushi Yamashita" },
        { name: "Ziwei Liu" },
        { name: "Lei Yang" }
      ],
      venue: "ECCV 2024",
      date: "2024",
      imageUrl: "/images/projects/2024_eccv_whac.jpg",
      paperUrl: "https://arxiv.org/abs/2403.12959",
      codeUrl: "https://github.com/wqyin/WHAC",
      description: "WHAC, a framework for jointly estimating human models (SMPL-X) and camera poses from monocular video."
    },
    {
      title: "Digital Life Project: Autonomous 3D Characters with Social Intelligence",
      authors: [
        { name: "Zhongang Cai" },
        { name: "Jianping Jiang" },
        { name: "Zhongfei Qing" },
        { name: "Xinying Guo" },
        { name: "Mingyuan Zhang" },
        { name: "Zhengyu Lin" },
        { name: "Haiyi Mei", isMe: true },
        { name: "Chen Wei" },
        { name: "Ruisi Wang" },
        { name: "Wanqi Yin" },
        { name: "Xiangyu Fan" },
        { name: "Han Du" },
        { name: "Liang Pan" },
        { name: "Peng Gao" },
        { name: "Zhitao Yang" },
        { name: "Yang Gao" },
        { name: "Jiaqi Li" },
        { name: "Tianxiang Ren" },
        { name: "Yunkun Wei" },
        { name: "Xiaogang Wang" },
        { name: "Chen Change Loy" },
        { name: "Lei Yang" },
        { name: "Ziwei Liu" }
      ],
      venue: "CVPR 2024",
      date: "2024",
      imageUrl: "/images/projects/digital-life-project.jpg",
      paperUrl: "https://arxiv.org/abs/2312.04547",
      description: "The Digital Life Project creates autonomous 3D characters capable of engaging in social interactions and expressing through body motions."
    },
    {
      title: "AiOS: All-in-One-Stage 3D Wholebody Mesh Recovery",
      authors: [
        { name: "Qingping Sun" },
        { name: "Yanjun Wang" },
        { name: "Ailing Zeng" },
        { name: "Wanqi Yin" },
        { name: "Chen Wei" },
        { name: "Wenjia Wang" },
        { name: "Haiyi Mei", isMe: true },
        { name: "Chi Sing Leung" },
        { name: "Ziwei Liu" },
        { name: "Lei Yang" },
        { name: "Zhongang Cai" }
      ],
      venue: "CVPR 2024",
      date: "2024",
      imageUrl: "/images/projects/2024_cvpr_aios.gif",
      paperUrl: "https://arxiv.org/abs/2303.16160",
      codeUrl: "https://github.com/ttxskk/AiOS",
      description: "AiOS performs human localization and SMPL-X estimation in a progressive manner."
    },
    {
      title: "PrimDiffusion: Volumetric Primitives Diffusion for 3D Human Generation",
      authors: [
        { name: "Zhaoxi Chen" },
        { name: "Fangzhou Hong" },
        { name: "Haiyi Mei", isMe: true },
        { name: "Guangcong Wang" },
        { name: "Lei Yang" },
        { name: "Ziwei Liu" },
      ],
      venue: "NeurIPS 2023",
      date: "2023",
      imageUrl: "/images/projects/primdiffusion.gif",
      paperUrl: "https://arxiv.org/abs/2312.04559",
      codeUrl: "https://github.com/FrozenBurning/PrimDiffusion",
      description: "PrimDiffusion performs the diffusion and denoising process on a set of primitives which compactly represent 3D humans."
    },
    {
      title: "SMPLer-X: Advanced 3D Human Body Modeling",
      authors: [
        { name: "Zhongang Cai" },
        { name: "Wanqi Yin" },
        { name: "Ailing Zeng" },
        { name: "Chen Wei" },
        { name: "Qingping Sun" },
        { name: "Yanjun Wang" },
        { name: "Hui En Pang" },
        { name: "Haiyi Mei", isMe: true },
        { name: "Mingyuan Zhang" },
        { name: "Lei Zhang" },
        { name: "Chen Change Loy" },
        { name: "Lei Yang" },
        { name: "Ziwei Liu" }
      ],
      venue: "NeurIPS 2023",
      date: "2023",
      imageUrl: "/images/projects/smplerx.gif",
      paperUrl: "https://arxiv.org/abs/2309.17448",
      codeUrl: "https://github.com/caizhongang/SMPLer-X",
      description: "SMPLer-X is the first generalist foundation model for Expressive human pose and shape estimation (EHPS)."
    },
    {
      title: "SynBody: Synthetic Dataset with Layered Human Models",
      authors: [
        { name: "Zhitao Yang" },
        { name: "Zhongang Cai" },
        { name: "Haiyi Mei", isMe: true },
        { name: "Shuai Liu" },
        { name: "Zhaoxi Chen" },
        { name: "Weiye Xiao" },
        { name: "Yukun Wei" },
        { name: "Zhongfei Qing" },
        { name: "Chen Wei" },
        { name: "Bo Dai" },
        { name: "Wayne Wu" },
        { name: "Chen Qian" },
        { name: "Dahua Lin" },
        { name: "Ziwei Liu" },
        { name: "Lei Yang" }
      ],
      venue: "ICCV 2023",
      date: "2023",
      imageUrl: "/images/projects/SynBody_small.gif",
      paperUrl: "https://arxiv.org/abs/2303.17368",
      description: "SynBody is a large-scale synthetic dataset with massive number of subjects and high-quality annotations."
    },
    {
      title: "Zolly: Zoom Focal Length Correctly",
      authors: [
        { name: "Wenjia Wang" },
        { name: "Yongtao Ge" },
        { name: "Haiyi Mei", isMe: true },
        { name: "Zhongang Cai" },
        { name: "Qingping Sun" },
        { name: "Yanjun Wang" },
        { name: "Chunhua Shen" },
        { name: "Lei Yang" },
        { name: "Taku Komura" }
      ],
      venue: "ICCV 2023 (Oral)",
      date: "2023",
      imageUrl: "/images/projects/zolly.jpg",
      paperUrl: "https://arxiv.org/abs/2303.13796",
      codeUrl: "https://github.com/WenjiaWang0312/Zolly",
      description: "Zolly, the first 3DHMR method focusing on perspective-distorted images."
    },
    {
      title: "SHERF: Generalizable Human NeRF from a Single Image",
      authors: [
        { name: "Shoukang Hu" },
        { name: "Fangzhou Hong" },
        { name: "Liang Pan" },
        { name: "Haiyi Mei", isMe: true },
        { name: "Lei Yang" },
        { name: "Ziwei Liu" }
      ],
      venue: "ICCV 2023",
      date: "2023",
      imageUrl: "/images/projects/SHERF.png",
      paperUrl: "https://arxiv.org/abs/2303.12791",
      codeUrl: "https://github.com/skhu101/SHERF",
      description: "Reconstruct human NeRF from a single image in one forward pass!"
    },
    {
      title: "HumanLiff: Layer-wise 3D Human Generation with Diffusion Model",
      authors: [
        { name: "Shoukang Hu" },
        { name: "Fangzhou Hong" },
        { name: "Tao Hu" },
        { name: "Liang Pan" },
        { name: "Haiyi Mei", isMe: true },
        { name: "Weiye Xiao" },
        { name: "Lei Yang" },
        { name: "Ziwei Liu" }
      ],
      venue: "Preprint",
      date: "2023",
      imageUrl: "/images/projects/HumanLiff_thumbnail.gif",
      paperUrl: "https://arxiv.org/abs/2308.09712",
      codeUrl: "https://github.com/skhu101/HumanLiff",
      description: "HumanLiff learns the layer-wise 3D human generative model with a unified diffusion process."
    }
  ],
  contact: {
    title: "Get in Touch",
    description: "🥳 Contact me for any questions or want to collaborate! Always open to new opportunities.",
    emailText: "haiyimei [at] gmail.com",
    emailHref: "mailto:haiyimei@gmail.com",
    buttonText: "Mail me"
  }
};
