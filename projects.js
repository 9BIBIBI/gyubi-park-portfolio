/* 프로젝트 데이터. 사이트 Manage 수정 내용은 브라우저에 별도 저장됩니다. */
window.ARCHIVE_SEED = [
  {
    id: "korean-garden", title: "Korean Garden", year: "2024", status: "Finished", featured: true,
    categories: ["3D 영상작업"], tools: ["Unreal", "C4D"],
    summary: "인천국제공항 탑승동 7,830 × 2,430 대형 LED를 위한 120초 3D 미디어아트",
    description: "한국의 놀이와 문화를 3D 미니어처 세계로 재해석해 공항 이용객에게 유쾌하게 전달한 프로젝트",
    period: "2023.11–2024.01 · 3 months",
    role: "기획 · Modeling · Material · Lighting · Animation · Level Design · Rendering",
    contribution: "Unreal Engine·Cinema 4D 기반 3D 콘텐츠 제작 전반 · 80% 이상",
    result: "인천국제공항 탑승동 대형 LED용 120초 콘텐츠 제작 및 실제 상영",
    target: "Unreal · Realtime · Media Art · 3D Generalist",
    portfolioPoint: "초광폭 LED의 시선 흐름을 설계하고 Modeling·Material·Lighting·Animation·Level Design을 연결해 전체 Scene 제작",
    notes: "Asset 선별·커스터마이징, 와이드 화면 공간 구성 및 시선 흐름 판단 경험",
    image: "./assets/korean-garden/cover.jpg",
    video: { src: "./assets/korean-garden/film.mp4", poster: "./assets/korean-garden/video-poster.jpg", title: "Korean Garden — Final Film", wide: true },
    mainImages: [
      { src: "./assets/korean-garden/main-day.jpg", title: "Korean Garden — Day" },
      { src: "./assets/korean-garden/main-night.jpg", title: "Korean Garden — Night" }
    ],
    process: [
      { src: "./assets/korean-garden/process-accessory-night-01.jpg", title: "Night Accessory Modeling 01" },
      { src: "./assets/korean-garden/process-accessory-night-02.jpg", title: "Night Accessory Modeling 02" },
      { src: "./assets/korean-garden/process-accessory-day-01.jpg", title: "Day Accessory Modeling 01" },
      { src: "./assets/korean-garden/process-accessory-day-02.jpg", title: "Day Accessory Modeling 02" },
      { src: "./assets/korean-garden/process-level-design-01.jpg", title: "Level Design 01", wide: true },
      { src: "./assets/korean-garden/process-level-design-02.jpg", title: "Level Design 02", wide: true },
      { src: "./assets/korean-garden/process-level-design-03.jpg", title: "Level Design 03", wide: true },
      { src: "./assets/korean-garden/process-scene-01.jpg", title: "Scene Production 01" },
      { src: "./assets/korean-garden/process-scene-02.jpg", title: "Scene Production 02" },
      { src: "./assets/korean-garden/process-scene-03.jpg", title: "Scene Production 03", wide: true }
    ],
    gallery: [
      { src: "./assets/korean-garden/airport-mockup.jpg", title: "Airport Display Mockup", wide: true },
      { src: "./assets/korean-garden/installation-01.jpg", title: "On-site Installation", wide: true }
    ],
    storyboard: [{ src: "./assets/korean-garden/storyboard.png", title: "한국정원 스토리보드", wide: true }],
    mediaOrder: ["film", "installation", "process", "storyboard"], palette: 0
  },
  {
    id: "ovo", title: "visionOS OVO", year: "2026", status: "Finished", featured: true,
    categories: ["XR/VR"], tools: ["visionOS", "C4D"],
    summary: "visionOS 환경에서 캐릭터와 공간 경험을 연결한 프로젝트",
    description: "공간 안에 등장한 OVO와 사용자가 만나고 반응하는 과정을 시각화한 visionOS 작업",
    role: "Spatial 3D · Character asset · Visual direction", contribution: "3D 캐릭터와 공간 연출, 실기기 테스트 자료 정리",
    result: "실기기 시연 영상과 비주얼 시퀀스 제작", target: "XR · Spatial Computing · visionOS · 3D Product",
    portfolioPoint: "평면 화면이 아닌 공간 안에서의 크기, 거리, 캐릭터 경험 설계", notes: "시연영상과 결과 이미지를 지정 순서대로 기록",
    image: "./assets/ovo-03.jpg",
    orderedMedia: [
      { type: "video", src: "./assets/ovo-demo-01.mp4", poster: "./assets/ovo-demo-01-poster.jpg", title: "시연영상" },
      { type: "video", src: "./assets/ovo-demo-02.mp4", poster: "./assets/ovo-demo-02-poster.jpg", title: "시연영상 02" },
      { type: "image", src: "./assets/ovo-03.jpg", title: "Meet OVO 03" },
      { type: "image", src: "./assets/ovo-04.jpg", title: "Meet OVO 04" },
      { type: "image", src: "./assets/ovo-screenshot.jpg", title: "실기기 스크린샷" },
      { type: "image", src: "./assets/ovo-step-into-vision.jpg", title: "Step Into Vision" },
      { type: "image", src: "./assets/ovo-four-cuts.jpg", title: "OVO 네 컷", small: true }
    ], palette: 1
  },
  {
    id: "poin", title: "PO:IN", year: "2026", status: "Finished", featured: false,
    categories: [], tools: [], summary: "포항에서 관심사가 맞는 사람을 찾는 소모임 앱",
    description: "포항 지역의 모임을 탐색하고 직접 만들 수 있도록 구성한 모바일 앱",
    role: "App concept · UI design · Low-fidelity sketch", contribution: "개인 작업 100%",
    result: "주요 화면과 로우파이 스케치 제작", target: "App Design · UI/UX · Local Community",
    portfolioPoint: "손으로 그린 로우파이에서 주요 화면과 기능 흐름을 구체화",
    notes: "앱 화면 → 메인 이미지 → 04-1 → 로우파이 순서", image: "./assets/poin-04-1.jpg",
    coverImage: "./assets/poin-04-1.jpg", coverPosition: "50% 50%", coverScale: 2.7, coverOrigin: "110% 23%", coverBackground: "#1d1d1f",
    heroPosition: "50% 50%", heroScale: 2.7, heroOrigin: "110% 23%",
    orderedMedia: [
      { type: "pair", items: [
        { src: "./assets/poin-screen-01.jpg", title: "App Screen 01" },
        { src: "./assets/poin-screen-02.jpg", title: "App Screen 02" }
      ] },
      { type: "pair", items: [
        { src: "./assets/poin-screen-03.jpg", title: "App Screen 03" },
        { src: "./assets/poin-screen-04.jpg", title: "App Screen 04" }
      ] },
      { type: "pair", items: [
        { src: "./assets/poin-screen-05.jpg", title: "App Screen 05" },
        { src: "./assets/poin-screen-06.jpg", title: "App Screen 06" }
      ] },
      { type: "pair", items: [
        { src: "./assets/poin-screen-07.jpg", title: "App Screen 07" },
        { src: "./assets/poin-screen-08.jpg", title: "App Screen 08" }
      ] },
      { type: "image", src: "./assets/poin-04-1.jpg", title: "PO:IN 04-1" },
      { type: "pair", items: [
        { src: "./assets/poin-05.jpg", title: "Low-fidelity 05" },
        { src: "./assets/poin-06.jpg", title: "Low-fidelity 06" }
      ] },
      { type: "image", src: "./assets/poin-main.jpg", title: "PO:IN Main" }
    ], palette: 2
  },
  {
    id: "techmap-unity", title: "Blue Dot", year: "2026", status: "In Progress", featured: true,
    categories: ["전시"], tools: ["Unity"], summary: "Unity 기반 인터랙션 전시 프로젝트",
    description: "전시 환경에서 실시간 인터랙션이 작동하도록 설계하고 구현한 작업",
    role: "Unity realtime · Interaction · Exhibition content", contribution: "인터랙션 설계 및 구현", result: "전시 기록 자료 추가 예정",
    target: "Creative Tech · Unity · Interactive Exhibition", portfolioPoint: "실제 공간에서 작동하는 인터랙션과 현장 대응 경험",
    notes: "설치도, 사용자 흐름, 기술 구성도 추가 예정", image: "./assets/blue-dot.jpg", coverImage: "./assets/blue-dot.jpg",
    coverPosition: "42% 58%", coverScale: 1.85, heroPosition: "42% 58%", heroScale: 1.85, palette: 2
  },
  {
    id: "c6", title: "visionOS 에스포항병원", year: "2026", status: "In Progress", featured: false,
    categories: ["XR/VR"], tools: ["visionOS"], summary: "리서치와 협업 과정이 포함된 visionOS 클라이언트 프로젝트",
    description: "클라이언트 요구와 공간 컴퓨팅 환경을 연결한 협업 프로젝트", role: "Research · Collaboration · Spatial asset support",
    contribution: "공개 가능 범위 확인 필요", result: "최종 산출물 추가 예정", target: "XR Product · Client Collaboration · Spatial Design",
    portfolioPoint: "리서치에서 결과물까지의 협업 과정", notes: "공개 범위를 확인한 뒤 자료 추가", image: "./assets/c6-hospital-tv.jpg",
    coverPosition: "50% 42%", palette: 3
  },
  {
    id: "visionos-puzzle", title: "visionOS Puzzle", year: "2026", status: "Finished", featured: false,
    categories: ["XR/VR"], tools: ["visionOS", "Blender"], summary: "visionOS에서 3D 퍼즐을 조작하는 공간형 프로젝트",
    description: "Blender로 제작한 3D 에셋을 Xcode로 옮겨 visionOS 시뮬레이터에서 동작을 테스트한 프로젝트",
    role: "visionOS test code · Blender modeling · Xcode integration", contribution: "개인 작업 100%",
    result: "3D 퍼즐 모델링과 visionOS 시뮬레이터 테스트 완료", target: "XR · visionOS · Spatial Interaction",
    portfolioPoint: "테스트 코드 작성부터 3D 에셋 제작, Xcode 적용까지 한 흐름으로 진행",
    notes: "영상 → 테스트 코드 → Blender 작업 → 완성 모델 → Xcode 테스트 → 발표 포스터 순서",
    image: "./assets/visionos-puzzle-01.jpg", coverImage: "./assets/visionos-puzzle-06.jpg", coverFilter: "saturate(.72)",
    orderedMedia: [
      { type: "video", src: "./assets/visionos-puzzle-film.m4v", poster: "./assets/visionos-puzzle-05.jpg", title: "Vision Puzzle" },
      { type: "image", src: "./assets/visionos-puzzle-01.jpg", title: "visionOS Test Code" },
      { type: "image", src: "./assets/visionos-puzzle-02.jpg", title: "Blender 01" },
      { type: "image", src: "./assets/visionos-puzzle-03.jpg", title: "Blender 02" },
      { type: "image", src: "./assets/visionos-puzzle-04.jpg", title: "Blender 03" },
      { type: "image", src: "./assets/visionos-puzzle-05.jpg", title: "Modeling Complete" },
      { type: "image", src: "./assets/visionos-puzzle-06.jpg", title: "Xcode & Simulator Test" },
      { type: "image", src: "./assets/visionos-puzzle-07.jpg", title: "Presentation Poster" }
    ], palette: 4
  },
  {
    id: "hasou", title: "HASOU", year: "2026", status: "Finished", featured: false,
    categories: ["브랜딩"], tools: [], summary: "제품과 공간 이미지를 하나의 시각 언어로 연결한 브랜딩 프로젝트",
    description: "HASOU의 로고와 제품 비주얼을 순차적으로 정리한 작업", role: "Brand visual · Art direction · Image production",
    contribution: "개인 작업 100%", result: "로고와 브랜드 비주얼 시리즈 제작", target: "Brand Visual · Creative Direction",
    portfolioPoint: "제품 이미지 전반에 일관된 분위기와 톤 구축", notes: "선택한 순서대로 정리", image: "./assets/hasou-01.jpg",
    orderedMedia: [
      { type: "image", src: "./assets/hasou-02.jpg", title: "HASOU 02" }, { type: "image", src: "./assets/hasou-03.jpg", title: "HASOU 03" },
      { type: "image", src: "./assets/hasou-01.jpg", title: "HASOU 01" }, { type: "image", src: "./assets/hasou-05.jpg", title: "HASOU 05" },
      { type: "image", src: "./assets/hasou-logo.jpg", title: "HASOU Logo" }
    ], palette: 5
  },
  {
    id: "stockholm-nft-exhibition", title: "Stockholm NFT", year: "2023", status: "Finished", featured: false,
    categories: ["전시"], tools: ["C4D"], summary: "실물 작품을 3D 애니메이션으로 확장해 스톡홀름에서 전시한 작업",
    description: "물리 작품의 형태를 디지털 오브젝트와 애니메이션으로 변환해 전시한 프로젝트",
    role: "3D scan · Cinema 4D · Animation · Exhibition output", contribution: "3D 콘텐츠 제작 및 전시 출력", result: "Stockholm NFT Exhibition 전시",
    target: "Media Art · Exhibition · Experimental 3D", portfolioPoint: "Physical → 3D Animation → Exhibition으로 이어지는 변환 과정",
    notes: "영상, 메인 이미지, 제작 화면, 기사 순서", image: "./assets/stockholm-main.jpg", plainMedia: true,
    orderedMedia: [
      { type: "video", src: "./assets/stockholm-film.mp4", poster: "./assets/stockholm-poster.jpg" },
      { type: "image", src: "./assets/stockholm-main.jpg" },
      { type: "image", src: "./assets/stockholm-installation-01.jpg" },
      { type: "image", src: "./assets/stockholm-installation-02.jpg" },
      { type: "image", src: "./assets/stockholm-installation-04.jpg", dividerBefore: true, sectionTitle: "Press" }
    ], palette: 6
  },
  {
    id: "visionos-competition", title: "HelixLab", year: "2026", status: "Finished", featured: false,
    categories: ["XR/VR"], tools: ["visionOS", "C4D"], summary: "visionOS에서 DNA 실험 과정을 체험하는 공간형 콘텐츠",
    description: "DNA 실험 과정을 공간 안에서 단계별로 체험하도록 구성한 visionOS 프로젝트", role: "3D assets · Spatial experience · Interaction design",
    contribution: "3D 에셋과 공간 연출 제작", result: "visionOS 경진대회 출품", target: "XR · visionOS · Spatial Experience",
    portfolioPoint: "실험 도구와 DNA 구조를 공간형 인터랙션으로 구성", notes: "01 → 02 → 03 → 04 → 05 순서", image: "./assets/helixlab-main.jpg",
    coverImage: "./assets/helixlab-02.jpg", coverPosition: "50% 48%", coverScale: 1.35, coverOrigin: "37% 65%",
    orderedMedia: [
      { type: "video", src: "./assets/helixlab-01.mp4", title: "HelixLab 01" },
      { type: "image", src: "./assets/helixlab-02.jpg", title: "HelixLab 02" },
      { type: "image", src: "./assets/helixlab-03.jpg", title: "HelixLab 03" },
      { type: "image", src: "./assets/helixlab-04.jpg", title: "HelixLab 04" },
      { type: "video", src: "./assets/helixlab-05.mp4", title: "HelixLab 05" }
    ], palette: 7
  },
  {
    id: "whipped-anamorphic", title: "WHIPPED", year: "2026", status: "In Progress", featured: false,
    categories: ["3D 영상작업"], tools: ["C4D"], summary: "제품을 위한 anamorphic 3D visual test",
    description: "제품 광고 맥락에서 아나모픽 공간감과 모션을 실험한 개인 작업", role: "Product visual · Anamorphic · Motion",
    contribution: "개인 작업 100%", result: "테스트 영상과 대표 이미지 제작", target: "Advertising · Brand Content · 3D Motion",
    portfolioPoint: "제품 연출과 아나모픽 효과를 함께 실험", notes: "개인 작업 아카이브", image: "./assets/whipped-main-01.jpg",
    video: { src: "./assets/whipped-film.mp4", poster: "./assets/whipped-main-01.jpg", title: "WHIPPED — Anamorphic Test" },
    mainImages: [{ src: "./assets/whipped-main-01.jpg", title: "WHIPPED Main 01" }, { src: "./assets/whipped-main-02.jpg", title: "WHIPPED Main 02" }], palette: 8
  },
  {
    id: "boseong-black-tea", title: "보성홍차 캐릭터 공모전", year: "2025", status: "Finished", featured: false,
    categories: ["캐릭터"], tools: ["C4D"], summary: "동원F&B 보성홍차 아이스티 캐릭터 공모전 1등 수상작",
    description: "보성홍차 아이스티 제품군에 맞춰 캐릭터와 패키지 활용 이미지를 제안한 프로젝트",
    role: "Character design · 3D visual · Mock-up", contribution: "개인 작업 100%",
    result: "라우드소싱 [동원F&B] 대한민국 NO.1 보성홍차 아이스티 캐릭터 공모전 1등 · 2025.06.24",
    target: "Character · Brand Visual · Commercial 3D", portfolioPoint: "캐릭터 설정부터 제품 적용 목업까지 하나의 브랜드 이미지로 연결",
    notes: "작업 이미지 01–10과 우승 증명서 기록", sansTitle: true, image: "./assets/boseong-01.jpg", coverPosition: "50% 92%", coverScale: 1.12, plainMedia: true,
    orderedMedia: [
      { type: "image", src: "./assets/boseong-01.jpg" }, { type: "image", src: "./assets/boseong-02.jpg" },
      { type: "image", src: "./assets/boseong-03.jpg" }, { type: "image", src: "./assets/boseong-04.jpg" },
      { type: "image", src: "./assets/boseong-05.jpg" }, { type: "image", src: "./assets/boseong-06.jpg" },
      { type: "image", src: "./assets/boseong-07.jpg" }, { type: "image", src: "./assets/boseong-08.jpg" },
      { type: "image", src: "./assets/boseong-09.jpg" }, { type: "image", src: "./assets/boseong-10.jpg" },
      { type: "image", src: "./assets/boseong-certificate.jpg", dividerBefore: true }
    ], palette: 9
  },
  {
    id: "c4-character", title: "RunMate Character", year: "2026", status: "Finished", featured: false,
    categories: ["캐릭터"], tools: ["C4D"], summary: "캐릭터를 중심으로 화면과 공간 경험을 구성한 프로젝트",
    description: "캐릭터 비주얼과 iOS 테스트, 온보딩 화면을 함께 기록한 작업", role: "Character visual · 3D asset · Experience image",
    contribution: "캐릭터와 주요 비주얼 제작", result: "iOS 테스트 영상과 사용자 여정 이미지 제작", target: "Character · 3D Content · Spatial Experience",
    portfolioPoint: "캐릭터가 화면과 실제 환경 안에서 보이는 방식을 함께 설계", notes: "지정된 순서대로 배치", image: "./assets/c4-screen-recording-poster.jpg",
    coverImage: "./assets/c4-running-04.jpg", coverPosition: "50% 67%",
    orderedMedia: [
      { type: "video", src: "./assets/c4-ios-test.mp4", poster: "./assets/c4-ios-test-poster.jpg", title: "iOS 테스트" },
      { type: "video", src: "./assets/c4-seoul.mp4", poster: "./assets/c4-seoul-poster.jpg", title: "서울" },
      { type: "image", src: "./assets/c4-runmate.jpg", title: "Runmate" },
      { type: "image", src: "./assets/c4-journey.jpg", title: "여정" },
      { type: "pair", items: [
        { src: "./assets/c4-main-b.jpg", title: "Main B" },
        { src: "./assets/c4-onboarding.jpg", title: "온보딩" }
      ] },
      { type: "video", src: "./assets/c4-screen-recording.mp4", poster: "./assets/c4-screen-recording-poster.jpg", title: "화면 기록" }
    ], palette: 10
  },
  {
    id: "saatchi", title: "Saatchi Gallery", year: "2023", status: "Finished", featured: false,
    categories: ["전시"], tools: ["C4D"], summary: "Moving Waterfall 비주얼을 영국 사치 갤러리에서 전시한 프로젝트",
    description: "자연의 표면과 인공 구조가 겹치는 Moving Waterfall 이미지를 전시 공간으로 확장한 작업",
    role: "3D visual · Exhibition output", contribution: "전시용 비주얼 제작", result: "영국 Saatchi Gallery 전시",
    target: "Media Art · Exhibition · Experimental Visual", portfolioPoint: "단일 비주얼을 실제 전시 환경까지 연결",
    notes: "전시 현장, 작품 이미지, 기사 순서", image: "./assets/saatchi-installation-01.jpg", plainMedia: true,
    orderedMedia: [
      { type: "image", src: "./assets/saatchi-installation-01.jpg" },
      { type: "image", src: "./assets/saatchi-main.jpg" },
      { type: "image", src: "./assets/saatchi-installation-02.jpg", dividerBefore: true }
    ], palette: 11
  },
  {
    id: "japanese-house", title: "Japanese House", year: "2024", status: "Archived", featured: false,
    categories: ["3D 영상작업"], tools: ["C4D", "Unreal"], summary: "일본 전통 건축 에셋을 활용한 environment scene",
    description: "전통 건축 구조를 모델링하고 환경 연출 가능성을 확인한 개인 작업", role: "Environment · Modeling",
    contribution: "개인 작업 100%", result: "모델링 테스트 이미지 제작", target: "Environment · 3D Modeling",
    portfolioPoint: "건축 형태와 구조를 3D로 정리", notes: "중단 작업 아카이브", image: "./assets/japanese-house-01.jpg",
    mainImages: [{ src: "./assets/japanese-house-01.jpg", title: "Japanese House 01" }, { src: "./assets/japanese-house-02.jpg", title: "Japanese House 02" }], palette: 12
  },
  {
    id: "incheon-hologram", title: "Incheon Airport: Hologram", year: "2024", status: "Finished", featured: false,
    categories: ["3D 영상작업"], tools: ["C4D"], summary: "인천국제공항 홀로그램 디스플레이용 3D 영상",
    description: "공항의 홀로그램 디스플레이 구조에 맞춰 전통 건축 요소와 빛을 구성한 영상",
    role: "3D scene · Lighting · Animation · Rendering", contribution: "홀로그램용 3D 콘텐츠 제작", result: "인천국제공항 홀로그램 콘텐츠 제작",
    target: "3D Motion · Media Art · Commercial CGI", portfolioPoint: "디스플레이 구조와 시점을 고려한 입체 장면 구성",
    notes: "최종 영상과 이미지 순서", image: "./assets/hologram-poster.jpg", plainMedia: true,
    orderedMedia: [
      { type: "video", src: "./assets/hologram-film.mp4", poster: "./assets/hologram-poster.jpg" },
      { type: "image", src: "./assets/hologram-poster.jpg" },
      { type: "image", src: "./assets/hologram-process-01.jpg" }
    ], palette: 0
  },
  {
    id: "incheon-seasons-spring", title: "Incheon Airport: Spring", year: "2024", status: "Finished", featured: false,
    categories: ["3D 영상작업"], tools: ["C4D"], summary: "인천국제공항 초광폭 LED를 위한 봄 시즌 영상",
    description: "꽃과 자연의 색을 초광폭 화면에 펼쳐 계절의 분위기를 전달한 미디어 콘텐츠", role: "3D visual · Animation · Rendering",
    contribution: "봄 시즌 3D 콘텐츠 제작", result: "인천국제공항 대형 LED 실제 상영", target: "3D Motion · Media Art · Commercial CGI",
    portfolioPoint: "초광폭 화면의 비율과 실제 공간에서의 시인성을 고려", notes: "영상, 메인 이미지, 현장, 스토리보드 순서",
    image: "./assets/seasons-main.jpg", video: { src: "./assets/seasons-film.mp4", poster: "./assets/seasons-main.jpg", title: "Spring — Final Film", wide: true },
    mainImages: [{ src: "./assets/seasons-main.jpg", title: "Spring Main Image" }],
    gallery: [{ src: "./assets/seasons-installation-01.jpg", title: "Airport Installation 01" }, { src: "./assets/seasons-installation-02.jpg", title: "Airport Installation 02" }],
    storyboard: [{ src: "./assets/seasons-storyboard.jpg", title: "봄 스토리보드", wide: true }], palette: 1
  },
  {
    id: "incheon-holiday-chuseok", title: "Incheon Airport: Chuseok", year: "2024", status: "Finished", featured: false,
    categories: ["3D 영상작업"], tools: ["C4D"], summary: "인천국제공항 초광폭 LED를 위한 추석 시즌 영상",
    description: "명절 오브젝트와 캐릭터를 활용해 추석의 분위기를 초광폭 화면에 구성한 프로젝트", role: "3D visual · Animation · Rendering",
    contribution: "추석 시즌 3D 콘텐츠 제작", result: "인천국제공항 대형 LED용 콘텐츠 제작", target: "3D Motion · Media Art · Commercial CGI",
    portfolioPoint: "긴 화면 안에서 오브젝트의 리듬과 시선 이동 설계", notes: "지정 영상 1개와 854 → 501 → 703 이미지 순서. old 폴더 제외",
    image: "./assets/holiday-main-01.jpg", video: { src: "./assets/holiday-film.mp4", poster: "./assets/holiday-main-01.jpg", title: "Chuseok — Final Film", wide: true },
    mainImages: [
      { src: "./assets/holiday-main-01.jpg", title: "Chuseok Main 854" }, { src: "./assets/holiday-main-02.jpg", title: "Chuseok Main 501" },
      { src: "./assets/holiday-main-03.jpg", title: "Chuseok Main 703" }
    ], palette: 2
  },
  {
    id: "mbc-from-then-on", title: "From Then On", year: "2023", status: "Finished", featured: false,
    categories: ["3D 영상작업"], tools: ["Unreal"], summary: "Unreal Engine 5 영상 작업",
    description: "Unreal Engine 5 환경과 카메라 연출을 연습한 프로젝트", role: "Environment · Lighting · Camera · Rendering",
    contribution: "개인 작업 100%", result: "25초 영상 제작", target: "Unreal · Environment · Realtime 3D",
    portfolioPoint: "Unreal 환경 구성과 시네마틱 카메라 테스트", notes: "MBC 3D 작업", image: "./assets/mbc-from-then-on-poster.jpg",
    video: { src: "./assets/mbc-from-then-on-film.mp4", poster: "./assets/mbc-from-then-on-poster.jpg", title: "From Then On" }, palette: 4
  },
  {
    id: "mbc-crayon-shinchan", title: "Crayon Shin", year: "2023", status: "Finished", featured: false,
    categories: ["캐릭터"], tools: ["C4D"], summary: "짱구 캐릭터와 집을 재구성한 Cinema 4D 작업",
    description: "캐릭터, 건축, 소품을 하나의 장면으로 구성하고 렌더링한 프로젝트", role: "Modeling · Material · Lighting · Rendering",
    contribution: "개인 작업 100%", result: "완성 렌더와 제작 화면 기록", target: "3D Generalist · Environment · Character",
    portfolioPoint: "캐릭터와 환경을 함께 구성한 씬 제작 연습", notes: "MBC 3D 작업", image: "./assets/mbc-crayon-01.jpg",
    orderedMedia: [
      { type: "image", src: "./assets/mbc-crayon-01.jpg", title: "짱구 하우스 01" }, { type: "image", src: "./assets/mbc-crayon-02.jpg", title: "짱구 하우스 02" },
      { type: "image", src: "./assets/mbc-crayon-03.jpg", title: "짱구 하우스 03" }, { type: "image", src: "./assets/mbc-crayon-04.jpg", title: "짱구 하우스 04" },
      { type: "image", src: "./assets/mbc-crayon-05.jpg", title: "짱구 하우스 05" }, { type: "image", src: "./assets/mbc-crayon-06.jpg", title: "짱구 하우스 06" },
      { type: "image", src: "./assets/mbc-crayon-process-01.jpg", title: "Process 01", dividerBefore: true, sectionTitle: "Process" }, { type: "image", src: "./assets/mbc-crayon-process-02.jpg", title: "Process 02" },
      { type: "image", src: "./assets/mbc-crayon-process-03.jpg", title: "Process 03" }
    ], palette: 5
  },
  {
    id: "mbc-figure", title: "Figure Box", year: "2023", status: "Finished", featured: false,
    categories: ["캐릭터"], tools: ["C4D"], summary: "피규어와 패키지를 구성한 Cinema 4D 개인 작업",
    description: "캐릭터 피규어와 투명 패키지를 제품 비주얼로 구성한 작업", role: "Modeling · Material · Lighting · Rendering",
    contribution: "개인 작업 100%", result: "제품 렌더 이미지 제작", target: "Product Visual · 3D Generalist",
    portfolioPoint: "재질과 패키지 표현 연습", notes: "MBC 3D 작업", image: "./assets/mbc-figure.jpg",
    mainImages: [{ src: "./assets/mbc-figure.jpg", title: "Figure Box" }], palette: 6
  },
  {
    id: "mbc-mars", title: "Mars", year: "2023", status: "Finished", featured: false,
    categories: ["3D 영상작업"], tools: ["Unreal"], summary: "Unreal Engine 4로 구성한 화성 환경 영상",
    description: "화성의 지형과 조명을 구성해 짧은 시네마틱으로 완성한 작업", role: "Environment · Lighting · Camera · Rendering",
    contribution: "개인 작업 100%", result: "10초 영상 제작", target: "Unreal · Environment · Realtime 3D",
    portfolioPoint: "지형과 분위기 중심의 환경 연출", notes: "MBC 3D 작업", image: "./assets/mbc-mars-poster.jpg",
    video: { src: "./assets/mbc-mars-film.mp4", poster: "./assets/mbc-mars-poster.jpg", title: "Mars" }, palette: 7
  },
  {
    id: "mbc-merry-christmas", title: "Merry Christmas", year: "2023", status: "Finished", featured: false,
    categories: ["3D 영상작업"], tools: ["C4D"], summary: "Cinema 4D로 제작한 크리스마스 모션 작업",
    description: "크리스마스 오브젝트와 짧은 모션을 구성한 프로젝트", role: "Modeling · Material · Lighting · Animation",
    contribution: "개인 작업 100%", result: "10초 영상 제작", target: "3D Motion · Commercial CGI",
    portfolioPoint: "짧은 루프 안에서 오브젝트와 분위기 구성", notes: "MBC 3D 작업", image: "./assets/mbc-christmas-poster.jpg",
    video: { src: "./assets/mbc-christmas-film.mp4", poster: "./assets/mbc-christmas-poster.jpg", title: "Merry Christmas" }, palette: 8
  },
  {
    id: "mbc-the-other-side", title: "The Other Side", year: "2023", status: "Finished", featured: false,
    categories: ["3D 영상작업"], tools: ["Unreal"], summary: "Unreal Engine 4로 제작한 환경 시네마틱",
    description: "어두운 공간과 조명을 활용해 장면의 분위기와 카메라 이동을 연습한 프로젝트",
    role: "Environment · Lighting · Camera · Rendering", contribution: "개인 작업 100%", result: "14초 영상 제작",
    target: "Unreal · Environment · Realtime 3D", portfolioPoint: "분위기 중심의 조명과 카메라 연출", notes: "MBC 3D 작업",
    image: "./assets/mbc-other-side-main.jpg", video: { src: "./assets/mbc-other-side-film.mp4", poster: "./assets/mbc-other-side-main.jpg", title: "The Other Side" }, palette: 9
  },
  {
    id: "mbc-hogwarts", title: "Hogwarts", year: "2022", status: "Finished", featured: false,
    categories: ["3D 영상작업"], tools: ["C4D"], summary: "Cinema 4D로 제작한 Hogwarts 환경 영상",
    description: "건축 환경, 밤 장면, 물 재질과 조명을 구성한 프로젝트", role: "Modeling · Material · Lighting · Animation · Rendering",
    contribution: "개인 작업 100%", result: "26초 영상과 제작 과정 이미지 완성", target: "Environment · 3D Generalist · Cinematic",
    portfolioPoint: "대형 환경 씬의 분위기와 카메라 연출 연습", notes: "MBC 3D 작업", image: "./assets/mbc-hogwarts-main.jpg",
    video: { src: "./assets/mbc-hogwarts-film.mp4", poster: "./assets/mbc-hogwarts-main.jpg", title: "Hogwarts" },
    process: [
      { src: "./assets/mbc-hogwarts-process-001.jpg", title: "Process 001" }, { src: "./assets/mbc-hogwarts-main.jpg", title: "Hogwarts — Main" },
      { src: "./assets/mbc-hogwarts-process-003.jpg", title: "Process 003" },
      { src: "./assets/mbc-hogwarts-process-004.jpg", title: "Process 004" }, { src: "./assets/mbc-hogwarts-process-005.jpg", title: "Process 005" },
      { src: "./assets/mbc-hogwarts-process-006.jpg", title: "Process 006" }, { src: "./assets/mbc-hogwarts-process-07.jpg", title: "Process 07" },
      { src: "./assets/mbc-hogwarts-process-08.jpg", title: "Process 08" }
    ], palette: 10
  }
];
