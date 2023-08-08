const postsListsEl = document.querySelector('.post-list');

function onSearchChange(event) {
    console.log(event.target.value)
}

async function main () {
    const id = localStorage.getItem("id")
    const posts = await fetch (`https://jsonplaceholder.typicode.com/users`)
    const postsData = await posts.json();
    console.log.(postsData)

    postsListsEl.innerHTML = postsData.map(post => `
    <div class="post">
    <div class="post__title">
    Post Title
    </div>
    <p class="post__body">
    Post Body
    </p>
    </div>
    `).join('');
}

main();
