const lessons = {
  diri: {
    kicker: "JENIS PERTAMA · KATA GANTI NAMA DIRI",
    title: "Kata Ganti Nama Diri",
    body: `<p>Kata ganti nama diri digunakan untuk menggantikan nama orang. Kita memilih kata yang sesuai dengan orang yang bercakap, orang yang dilawan bercakap atau orang yang diperkatakan.</p><h3>Orang pertama — orang yang bercakap</h3><ul><li><strong>saya</strong> / <strong>aku</strong> — seorang</li><li><strong>kami</strong> — saya dan orang lain, tidak termasuk pendengar</li><li><strong>kita</strong> — saya dan orang lain, termasuk pendengar</li></ul><h3>Orang kedua — orang yang dilawan bercakap</h3><ul><li><strong>kamu</strong>, <strong>awak</strong>, <strong>anda</strong> atau <strong>kalian</strong> (sekumpulan orang)</li></ul><h3>Orang ketiga — orang yang diperkatakan</h3><ul><li><strong>dia</strong>, <strong>ia</strong>, <strong>beliau</strong> atau <strong>mereka</strong></li></ul><p><strong>Contoh:</strong> “Aina dan saya membaca buku.” Nama Aina dan orang yang bercakap digantikan dengan kata <em>saya</em>.</p>`
  },
  tunjuk: {
    kicker: "JENIS KEDUA · KATA GANTI NAMA TUNJUK",
    title: "Kata Ganti Nama Tunjuk",
    body: `<p>Kata ganti nama tunjuk digunakan untuk menunjukkan orang, benda atau tempat. Kata ini terbahagi kepada kata ganti nama tunjuk umum dan kata ganti nama tunjuk tempat.</p><h3>Kata ganti nama tunjuk umum</h3><ul><li><strong>ini</strong> — menunjukkan orang atau benda yang dekat. Contoh: “<em>Ini</em> buku saya.”</li><li><strong>itu</strong> — menunjukkan orang atau benda yang jauh. Contoh: “<em>Itu</em> pokok bunga raya.”</li></ul><h3>Kata ganti nama tunjuk tempat</h3><ul><li><strong>sini</strong> — tempat yang dekat dengan orang yang bercakap.</li><li><strong>situ</strong> — tempat yang dekat dengan orang yang dilawan bercakap.</li><li><strong>sana</strong> — tempat yang jauh daripada orang yang bercakap dan orang yang dilawan bercakap.</li></ul><p><strong>Contoh:</strong> “Sila duduk di <em>sini</em>.” “Beg kamu di <em>situ</em>.” “Perpustakaan di <em>sana</em>.”</p>`
  }
};

const dialog = document.querySelector(".lesson-dialog");
document.querySelectorAll(".lesson-card").forEach((card) => {
  card.addEventListener("click", () => {
    const lesson = lessons[card.dataset.lesson];
    document.querySelector("#dialog-kicker").textContent = lesson.kicker;
    document.querySelector("#dialog-title").textContent = lesson.title;
    document.querySelector("#dialog-body").innerHTML = lesson.body;
    dialog.showModal();
  });
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });

document.querySelectorAll(".quiz-question").forEach((question) => {
  question.querySelectorAll(".quiz-options button").forEach((button) => {
    button.addEventListener("click", () => {
      question.querySelectorAll(".quiz-options button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      const feedback = question.querySelector(".quiz-feedback");
      const correct = button.dataset.correct === "true";
      feedback.classList.toggle("is-correct", correct);
      feedback.classList.toggle("is-wrong", !correct);
      feedback.textContent = correct
        ? "Betul! Jawapan kamu tepat."
        : "Belum tepat. Cuba fikirkan semula kata ganti nama yang sesuai.";
    });
  });
});

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".hero-copy > *", { y: 24, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" });
  gsap.utils.toArray(".lesson-card img").forEach((image) => {
    gsap.from(image, { clipPath: "inset(0 100% 0 0)", duration: 1.1, ease: "power2.inOut", scrollTrigger: { trigger: image, start: "top 88%", once: true } });
  });
  gsap.utils.toArray(".intro-grid, .practice-art, .practice-copy, .closing > *").forEach((element) => {
    gsap.from(element, { y: 32, opacity: 0, duration: 0.75, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
  });
}
