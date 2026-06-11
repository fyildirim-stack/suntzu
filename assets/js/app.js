// Veri-güdümlü modül motoru: window.MODULE_DATA'yı okuyup
// animasyonlu alıntıyı, prensip kartlarını, senaryoları, quiz'i ve pratik listesini kurar.
(function () {
  const data = window.MODULE_DATA;
  if (!data) return;

  /* ---------- Animasyonlu giriş alıntısı ---------- */
  const quoteEl = document.getElementById("heroQuote");
  if (quoteEl) {
    const words = data.quote.split(" ");
    quoteEl.innerHTML = words
      .map((w, i) => `<span class="word" style="animation-delay:${(i * 0.12).toFixed(2)}s">${w}</span>`)
      .join(" ");
    const author = document.getElementById("heroQuoteAuthor");
    if (author) author.textContent = "— " + data.quoteAuthor;
  }

  /* ---------- Prensip kartları (akordeon) ---------- */
  const prBox = document.getElementById("principles");
  if (prBox) {
    prBox.innerHTML = data.principles.map((p, i) => `
      <div class="principle ${p.cls}" data-i="${i}">
        <button type="button" aria-expanded="false">
          <span class="rank">${p.rank}</span>
          <span>${p.title}</span>
          <span class="chev">›</span>
        </button>
        <div class="body"><div class="body-inner">${p.body}</div></div>
      </div>`).join("");
    prBox.querySelectorAll(".principle button").forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.parentElement;
        const open = card.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---------- Senaryolar ---------- */
  const scBox = document.getElementById("scenarios");
  if (scBox) {
    const verdictLabel = { best: "✓", mid: "△", poor: "✗" };
    scBox.innerHTML = data.scenarios.map((s, si) => `
      <div class="scenario" data-si="${si}">
        <span class="domain-tag">${s.domain}</span>
        <h3>${s.title}</h3>
        <p class="setup">${s.setup}</p>
        <div class="choices">
          ${s.choices.map((c, ci) => `<button type="button" data-ci="${ci}">${c.text}</button>`).join("")}
        </div>
        <div class="feedback"></div>
        <button type="button" class="retry" hidden>↺ Tekrar dene</button>
        <p class="suntzu-note" hidden>${s.note}</p>
      </div>`).join("");

    scBox.querySelectorAll(".scenario").forEach(el => {
      const s = data.scenarios[+el.dataset.si];
      const buttons = el.querySelectorAll(".choices button");
      const fb = el.querySelector(".feedback");
      const retry = el.querySelector(".retry");
      const note = el.querySelector(".suntzu-note");

      buttons.forEach(btn => btn.addEventListener("click", () => {
        const c = s.choices[+btn.dataset.ci];
        buttons.forEach(b => (b.disabled = true));
        btn.classList.add("picked-" + c.grade);
        fb.className = "feedback show " + c.grade;
        fb.innerHTML = `<span class="verdict">${verdictLabel[c.grade]} ${c.verdict}</span>${c.feedback}`;
        note.hidden = false;
        retry.hidden = c.grade === "best";
      }));

      retry.addEventListener("click", () => {
        buttons.forEach(b => {
          b.disabled = false;
          b.className = "";
        });
        fb.className = "feedback";
        fb.innerHTML = "";
        note.hidden = true;
        retry.hidden = true;
      });
    });
  }

  /* ---------- Quiz ---------- */
  const quizBox = document.getElementById("quiz");
  if (quizBox) {
    let i = 0, score = 0;

    function renderQuestion() {
      const q = data.quiz[i];
      quizBox.innerHTML = `
        <div class="quiz-progress">SORU ${i + 1} / ${data.quiz.length} · DOĞRU: ${score}</div>
        <h3>${q.q}</h3>
        <div class="choices">
          ${q.choices.map((c, ci) => `<button type="button" data-ci="${ci}">${c}</button>`).join("")}
        </div>
        <p class="explain"></p>
        <button type="button" class="next-btn">${i + 1 === data.quiz.length ? "Sonucu Gör" : "Sonraki Soru →"}</button>`;

      const buttons = quizBox.querySelectorAll(".choices button");
      buttons.forEach(btn => btn.addEventListener("click", () => {
        const picked = +btn.dataset.ci;
        buttons.forEach(b => (b.disabled = true));
        buttons[q.answer].classList.add("correct");
        if (picked === q.answer) score++;
        else btn.classList.add("wrong");
        quizBox.querySelector(".explain").textContent = q.explain;
        quizBox.querySelector(".explain").classList.add("show");
        quizBox.querySelector(".quiz-progress").textContent =
          `SORU ${i + 1} / ${data.quiz.length} · DOĞRU: ${score}`;
        quizBox.querySelector(".next-btn").classList.add("show");
      }));

      quizBox.querySelector(".next-btn").addEventListener("click", () => {
        i++;
        if (i < data.quiz.length) renderQuestion();
        else renderResult();
      });
    }

    function renderResult() {
      const total = data.quiz.length;
      let msg;
      if (score === total) msg = "Kusursuz. \"Kendini ve düşmanını bilirsen, yüz savaştan korkmana gerek yoktur.\"";
      else if (score >= total * 0.66) msg = "Sağlam bir temel. Yanlışlarının açıklamalarını tekrar okuyup senaryolara dön.";
      else msg = "Acele etme — Sun Tzu da uzun savaştan değil, hazırlıktan yanadır. Modülü baştan gez ve tekrar dene.";
      quizBox.innerHTML = `
        <div class="quiz-result">
          <div class="score">${score} / ${total}</div>
          <p>${msg}</p>
          <button type="button" class="restart-btn show">↺ Quiz'i Tekrarla</button>
        </div>`;
      quizBox.querySelector(".restart-btn").addEventListener("click", () => {
        i = 0; score = 0; renderQuestion();
      });
    }

    renderQuestion();
  }

  /* ---------- Pratik listesi (localStorage'da kalıcı) ---------- */
  const prList = document.getElementById("practiceList");
  if (prList) {
    const storeKey = "suntzu-practice-modul-" + data.chapter;
    const saved = JSON.parse(localStorage.getItem(storeKey) || "[]");

    prList.innerHTML = data.practice.map((p, i) => `
      <label class="practice-item ${saved.includes(i) ? "done" : ""}">
        <input type="checkbox" data-i="${i}" ${saved.includes(i) ? "checked" : ""} />
        <span class="txt"><strong>${p.title}</strong><span>${p.desc}</span></span>
      </label>`).join("");

    prList.querySelectorAll("input").forEach(cb => cb.addEventListener("change", () => {
      cb.closest(".practice-item").classList.toggle("done", cb.checked);
      const done = [...prList.querySelectorAll("input:checked")].map(c => +c.dataset.i);
      localStorage.setItem(storeKey, JSON.stringify(done));
    }));
  }
})();
