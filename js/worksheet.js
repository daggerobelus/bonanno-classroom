/* ── Auto-expanding textareas ── */
document.querySelectorAll('textarea').forEach(ta => {
    const resize = () => {
        ta.style.height = 'auto';
        ta.style.height = ta.scrollHeight + 'px';
    };
    ta.addEventListener('input', resize);
});

/* ── Download as PDF (triggers browser print dialog) ── */
function downloadPDF() {
    window.print();
}

/* ── Reset all fields ── */
function resetForm() {
    if (!confirm('Clear all your responses? This cannot be undone.')) return;
    document.querySelectorAll('input[type="text"], textarea').forEach(el => {
        el.value = '';
    });
    document.querySelectorAll('input[type="checkbox"]').forEach(el => {
        el.checked = false;
    });
    // Reset textarea heights
    document.querySelectorAll('textarea').forEach(ta => {
        ta.style.height = 'auto';
    });
}
