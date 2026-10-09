(function () {
  "use strict";

  const STORAGE_KEY = "gyubi-park-portfolio-v4";
  const CATEGORY_OPTIONS = ["3D 영상작업", "XR/VR", "캐릭터", "브랜딩", "전시", "스터디"];
  const TOOL_OPTIONS = ["Unreal", "C4D", "Blender", "Unity", "visionOS"];
  const palettes = [
    ["#d6d0bd", "linear-gradient(135deg,#f6f0d5,#76876d)", "38% 62% 48% 52%"],
    ["#8c83a8", "linear-gradient(145deg,#e8e4ef,#302948)", "48% 52% 20% 80%"],
    ["#c7d62f", "linear-gradient(135deg,#effb9a,#2c3416)", "14% 86% 62% 38%"],
    ["#1c1d20", "linear-gradient(135deg,#b9c2c9,#3f4453)", "50% 10% 50% 20%"],
    ["#d8c8c0", "linear-gradient(135deg,#fff7ed,#8b6e67)", "70% 30% 50% 25%"],
    ["#a9b9b2", "linear-gradient(135deg,#e9f7f0,#4f625c)", "24% 76% 38% 62%"],
    ["#8f999b", "linear-gradient(135deg,#e7e9e8,#3c484a)", "50% 50% 8% 92%"],
    ["#d7d3cc", "linear-gradient(145deg,#ffffff,#7b747c)", "50% 20% 50% 80%"],
    ["#caa9b8", "linear-gradient(135deg,#ffecf2,#794a62)", "28% 72% 62% 38%"],
    ["#aa3b2f", "linear-gradient(135deg,#f7b348,#681b17)", "50% 50% 18% 82%"],
    ["#37628a", "linear-gradient(135deg,#b9ddf3,#203a62)", "34% 66% 12% 88%"],
    ["#b5ac9d", "linear-gradient(135deg,#f5efe3,#544b43)", "12% 88% 38% 62%"],
    ["#4e4b46", "linear-gradient(135deg,#cbbca1,#262624)", "44% 56% 72% 28%"]
  ];

  const state = {
    projects: loadProjects(),
    filters: { category: "ALL", tool: "ALL", year: "ALL", status: "ALL" },
    search: "",
    view: localStorage.getItem("gyubi-portfolio-view") || "grid",
    activeProjectId: null
  };

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const grid = $("#projectGrid");
  const dialog = $("#managerDialog");
  const form = $("#projectForm");
  const toast = $("#toast");

  function cloneSeed() {
    return JSON.parse(JSON.stringify(window.ARCHIVE_SEED || []));
  }

  function loadProjects() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : cloneSeed();
    } catch (error) {
      console.warn("저장 데이터를 불러오지 못해 초기 데이터를 사용합니다.", error);
      return cloneSeed();
    }
  }

  function saveProjects() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.projects));
  }

  function escapeHTML(value = "") {
    return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  }

  function slugify(value) {
    return value.trim().toLowerCase().replace(/[^a-z0-9가-힣]+/g, "-").replace(/^-|-$/g, "") || `project-${Date.now()}`;
  }

  function splitTags(value) {
    return value.split(",").map((item) => item.trim()).filter(Boolean);
  }

  function unique(field) {
    const values = state.projects.flatMap((project) => Array.isArray(project[field]) ? project[field] : [project[field]]);
    return [...new Set(values.filter(Boolean))].sort((a, b) => field === "year" ? Number(b) - Number(a) : String(a).localeCompare(String(b)));
  }

  function init() {
    renderFilters();
    setView(state.view);
    renderProjects();
    bindEvents();
    handleRoute();
  }

  function renderFilters() {
    const definitions = [
      ["category", "categoryFilters", CATEGORY_OPTIONS],
      ["tool", "toolFilters", TOOL_OPTIONS],
      ["year", "yearFilters", unique("year")],
      ["status", "statusFilters", ["Finished", "In Progress", "Study", "Archived"].filter((item) => unique("status").includes(item))]
    ];

    definitions.forEach(([type, containerId, options]) => {
      const container = $(`#${containerId}`);
      container.innerHTML = ["ALL", ...options].map((option) => `
        <button class="filter-chip ${state.filters[type] === option ? "is-active" : ""}" type="button" data-filter-type="${type}" data-filter-value="${escapeHTML(option)}" aria-pressed="${state.filters[type] === option}">
          ${escapeHTML(option)}
        </button>
      `).join("");
    });
  }

  function getFilteredProjects() {
    const search = state.search.trim().toLowerCase();
    return state.projects
      .filter((project) => {
        const haystack = [
          project.title, project.summary, project.description, project.role,
          project.target, project.notes, ...(project.categories || []), ...(project.tools || [])
        ].join(" ").toLowerCase();
        if (search && !haystack.includes(search)) return false;
        if (state.filters.category !== "ALL" && !project.categories?.includes(state.filters.category)) return false;
        if (state.filters.tool !== "ALL" && !project.tools?.includes(state.filters.tool)) return false;
        if (state.filters.year !== "ALL" && String(project.year) !== state.filters.year) return false;
        if (state.filters.status !== "ALL" && project.status !== state.filters.status) return false;
        return true;
      })
      .sort((a, b) => Number(b.featured) - Number(a.featured) || Number(b.year) - Number(a.year));
  }

  function coverStyle(project) {
    const palette = palettes[Number(project.palette ?? 0) % palettes.length];
    return `--card-bg:${palette[0]};--card-shape:${palette[1]};--shape-radius:${palette[2]};--shape-rotate:${((Number(project.palette) || 0) % 5) * 5 - 10}deg`;
  }

  function renderProjects() {
    const projects = getFilteredProjects();
    $("#resultCount").textContent = projects.length;
    $("#heroProjectCount").textContent = state.projects.length;
    $("#emptyState").hidden = projects.length > 0;
    grid.hidden = projects.length === 0;

    grid.innerHTML = projects.map((project, index) => `
      <article class="project-card">
        <a class="project-card-link" href="#project/${encodeURIComponent(project.id)}" aria-label="${escapeHTML(project.title)} 상세 보기">
          <div class="project-cover ${project.image ? "has-image" : ""}" style="${coverStyle(project)}">
            ${project.image ? `<img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)} 커버" loading="lazy" />` : ""}
            <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
            <span class="project-status">${escapeHTML(project.status)}</span>
            ${project.featured ? `<span class="featured-mark">KEY PROJECT</span>` : ""}
          </div>
          <div class="project-info">
            <h3>${escapeHTML(project.title)}</h3>
            <span class="year">${escapeHTML(project.year)}</span>
            <p>${escapeHTML(project.summary)}</p>
            <div class="project-tags">${[...(project.categories || []), ...(project.tools || [])].slice(0, 5).map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
          </div>
        </a>
      </article>
    `).join("");
    renderActiveFilters();
  }

  function renderActiveFilters() {
    const container = $("#activeFilters");
    const buttons = [];
    if (state.search) buttons.push(`<button class="active-filter" data-remove-search>“${escapeHTML(state.search)}” ×</button>`);
    container.innerHTML = buttons.join("");
  }

  function toggleFilter(type, value) {
    state.filters[type] = value;
    $$(`[data-filter-type="${type}"]`).forEach((button) => {
      const isActive = button.dataset.filterValue === value;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    renderProjects();
  }

  function clearFilters() {
    Object.keys(state.filters).forEach((type) => { state.filters[type] = "ALL"; });
    state.search = "";
    $("#searchInput").value = "";
    $$(".filter-chip").forEach((button) => {
      const isAll = button.dataset.filterValue === "ALL";
      button.classList.toggle("is-active", isAll);
      button.setAttribute("aria-pressed", String(isAll));
    });
    renderProjects();
  }

  function setView(view) {
    state.view = view;
    localStorage.setItem("gyubi-portfolio-view", view);
    grid.classList.toggle("list-view", view === "list");
    $$(".view-toggle").forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  }

  function renderDetail(project) {
    state.activeProjectId = project.id;
    const heroStyle = coverStyle(project).replaceAll("--card-", "--detail-");
    $("#projectDetail").innerHTML = `
      <div class="detail-hero" style="${heroStyle};background:${palettes[Number(project.palette ?? 0) % palettes.length][0]}">
        ${project.image ? `<img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)} 대표 이미지" />` : ""}
        <div class="detail-hero-content">
          <div class="detail-meta">
            <span>${escapeHTML(project.year)}</span><span>·</span><span>${escapeHTML(project.status)}</span>
            ${project.featured ? `<span>·</span><span>Key project</span>` : ""}
          </div>
          <h1 id="detailTitle">${escapeHTML(project.title)}</h1>
          <p>${escapeHTML(project.summary)}</p>
        </div>
      </div>
      <div class="detail-body">
        <div class="detail-lead">
          <h2>${escapeHTML(project.description || project.summary)}</h2>
          <p>${escapeHTML(project.portfolioPoint || "포트폴리오 포인트를 기록해두세요.")}</p>
        </div>
        ${renderProjectMedia(project)}
        <div class="detail-records">
          ${project.period ? record("Period", project.period) : ""}
          ${record("Role", project.role)}
          ${record("Contribution", project.contribution)}
          ${record("Result", project.result)}
          ${record("Good fit for", project.target)}
          ${record("Private memo", project.notes)}
          <div class="record"><span class="record-label">Tags & tools</span><div class="tag-list">${[...(project.categories || []), ...(project.tools || [])].map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div></div>
        </div>
      </div>
    `;
    $("#projectView").hidden = false;
    document.body.style.overflow = "hidden";
    $("#projectView").scrollTop = 0;
  }

  function record(label, value) {
    return `<div class="record"><span class="record-label">${label}</span><p>${escapeHTML(value || "아직 기록되지 않았습니다.")}</p></div>`;
  }

  function renderProjectMedia(project) {
    const video = project.video;
    const gallery = Array.isArray(project.gallery) ? project.gallery : [];
    const storyboard = Array.isArray(project.storyboard) ? project.storyboard : [];

    if (!video && gallery.length === 0 && storyboard.length === 0) return "";

    return `
      <div class="detail-media">
        ${video ? `
          <section class="media-section">
            <div class="media-section-heading"><span>01</span><h3>Film</h3></div>
            <video class="project-film" controls playsinline preload="metadata" poster="${escapeHTML(video.poster || project.image || "")}">
              <source src="${escapeHTML(video.src)}" type="video/mp4" />
            </video>
          </section>
        ` : ""}
        ${gallery.length ? `
          <section class="media-section">
            <div class="media-section-heading"><span>02</span><h3>Installation</h3></div>
            <div class="media-grid">
              ${gallery.map((item) => mediaFigure(item)).join("")}
            </div>
          </section>
        ` : ""}
        ${storyboard.length ? `
          <section class="media-section">
            <div class="media-section-heading"><span>03</span><h3>Storyboard</h3></div>
            <div class="storyboard-grid">
              ${storyboard.map((item) => mediaFigure(item)).join("")}
            </div>
          </section>
        ` : ""}
      </div>
    `;
  }

  function mediaFigure(item) {
    return `
      <figure class="media-figure ${item.wide ? "is-wide" : ""}">
        <img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.title || "프로젝트 이미지")}" loading="lazy" />
        ${item.title ? `<figcaption>${escapeHTML(item.title)}</figcaption>` : ""}
      </figure>
    `;
  }

  function closeDetail() {
    $("#projectView").hidden = true;
    document.body.style.overflow = "";
    state.activeProjectId = null;
    if (location.hash.startsWith("#project/")) history.replaceState(null, "", "#/" );
  }

  function handleRoute() {
    const match = location.hash.match(/^#project\/(.+)$/);
    if (!match) return;
    const id = decodeURIComponent(match[1]);
    const project = state.projects.find((item) => item.id === id);
    if (project) renderDetail(project);
  }

  function openManager(project = null) {
    form.reset();
    $("#managerTitle").textContent = project ? "프로젝트 수정" : "새 프로젝트 추가";
    $("#deleteProject").hidden = !project;
    if (project) fillForm(project);
    dialog.showModal();
  }

  function fillForm(project) {
    Object.entries(project).forEach(([key, value]) => {
      const field = form.elements[key];
      if (!field) return;
      if (field.type === "checkbox") field.checked = Boolean(value);
      else field.value = Array.isArray(value) ? value.join(", ") : value ?? "";
    });
  }

  function formToProject() {
    const data = new FormData(form);
    const existingId = data.get("id");
    const existing = state.projects.find((item) => item.id === existingId);
    return {
      ...(existing || {}),
      id: existingId || uniqueId(slugify(data.get("title"))),
      title: data.get("title").trim(),
      year: data.get("year").trim(),
      status: data.get("status"),
      featured: form.elements.featured.checked,
      categories: splitTags(data.get("categories")),
      tools: splitTags(data.get("tools")),
      summary: data.get("summary").trim(),
      description: data.get("description").trim(),
      role: data.get("role").trim(),
      contribution: data.get("contribution").trim(),
      result: data.get("result").trim(),
      target: data.get("target").trim(),
      portfolioPoint: data.get("portfolioPoint").trim(),
      notes: data.get("notes").trim(),
      image: data.get("image").trim(),
      palette: existing?.palette ?? state.projects.length % palettes.length
    };
  }

  function uniqueId(base) {
    let id = base;
    let count = 2;
    while (state.projects.some((item) => item.id === id)) id = `${base}-${count++}`;
    return id;
  }

  function exportJSON() {
    const blob = new Blob([JSON.stringify(state.projects, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `gyubi-park-portfolio-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("JSON 백업을 내보냈습니다.");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
  }

  function bindEvents() {
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("scroll", () => $("#siteHeader").classList.toggle("is-sticky", window.scrollY > window.innerHeight * 0.75), { passive: true });

    $("#searchInput").addEventListener("input", (event) => {
      state.search = event.target.value;
      renderProjects();
    });
    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        $("#searchInput").focus();
        $("#archive").scrollIntoView({ behavior: "smooth" });
      }
      if (event.key === "Escape" && !$("#projectView").hidden) closeDetail();
    });

    $(".filters").addEventListener("click", (event) => {
      const chip = event.target.closest(".filter-chip");
      if (chip) toggleFilter(chip.dataset.filterType, chip.dataset.filterValue);
      const heading = event.target.closest(".filter-heading");
      if (heading) {
        const options = heading.nextElementSibling;
        options.hidden = !options.hidden;
        heading.setAttribute("aria-expanded", String(!options.hidden));
        heading.lastElementChild.textContent = options.hidden ? "+" : "−";
      }
    });

    $("#activeFilters").addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      if (button.hasAttribute("data-remove-search")) {
        state.search = "";
        $("#searchInput").value = "";
        renderProjects();
      }
    });

    $("#clearFilters").addEventListener("click", clearFilters);
    $("[data-clear]").addEventListener("click", clearFilters);
    $$(".view-toggle").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));

    $("#openManager").addEventListener("click", () => openManager());
    $("#closeManager").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    $("#closeDetail").addEventListener("click", closeDetail);
    $("#editFromDetail").addEventListener("click", () => {
      const project = state.projects.find((item) => item.id === state.activeProjectId);
      if (project) openManager(project);
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const project = formToProject();
      const index = state.projects.findIndex((item) => item.id === project.id);
      if (index >= 0) state.projects[index] = project;
      else state.projects.unshift(project);
      saveProjects();
      renderFilters();
      renderProjects();
      dialog.close();
      if (state.activeProjectId === project.id) renderDetail(project);
      showToast(index >= 0 ? "프로젝트를 수정했습니다." : "프로젝트를 추가했습니다.");
    });

    $("#deleteProject").addEventListener("click", () => {
      const id = form.elements.id.value;
      if (!id || !confirm("이 프로젝트를 아카이브에서 삭제할까요? JSON 백업이 없다면 되돌릴 수 없습니다.")) return;
      state.projects = state.projects.filter((item) => item.id !== id);
      saveProjects();
      renderFilters();
      renderProjects();
      dialog.close();
      closeDetail();
      showToast("프로젝트를 삭제했습니다.");
    });

    $("#resetData").addEventListener("click", () => {
      if (!confirm("브라우저에서 수정한 내용을 모두 지우고 초기 데이터로 복원할까요?")) return;
      state.projects = cloneSeed();
      saveProjects();
      renderFilters();
      clearFilters();
      form.reset();
      dialog.close();
      showToast("초기 데이터로 복원했습니다.");
    });

    $("#exportData").addEventListener("click", exportJSON);
    $("#exportFooter").addEventListener("click", exportJSON);
    $("#importData").addEventListener("click", () => $("#importFile").click());
    $("#importFile").addEventListener("change", async (event) => {
      const file = event.target.files[0];
      if (!file) return;
      try {
        const parsed = JSON.parse(await file.text());
        if (!Array.isArray(parsed) || !parsed.every((item) => item.id && item.title)) throw new Error("형식 오류");
        state.projects = parsed;
        saveProjects();
        renderFilters();
        clearFilters();
        dialog.close();
        showToast(`${parsed.length}개 프로젝트를 불러왔습니다.`);
      } catch (error) {
        alert("올바른 아카이브 JSON 파일이 아닙니다.");
      } finally {
        event.target.value = "";
      }
    });
  }

  init();
})();
