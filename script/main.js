const $app = document.getElementById("app");
const Avatar = params => {
    const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
    return `
    <picture>
    <img src="${src}"/>
    ${params.name}
</picture>
    `;
};

$app.innerHTML += Avatar({ id: 5, name: "Andrea" });
$app.innerHTML += Avatar({ id: 6, name: "Manuela" });

$app.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('disabled')
    })
})