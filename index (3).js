// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users") 
    const usersData = await users.json();
    const userListEl = document.querySelector(".user-list");
    console.log(usersData);
    userListEl.innerHTML = usersData
    .map (
        (user) => 
         `<div class="user-card">
            <div class="user-card__container">
              <h3>${user.name}</h4>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Website:</b> <a href="https://${user.website}" target="_blank">website.website</a></p>
                ${user.website}
            </div>
          </div>`
    )
    .join("");
}

main();