const pageElem = document.querySelector('.web-content');
const homeLink = document.querySelector('.home-page-link');
const aboutLink = document.querySelector('.about-page-link');
const exploreLink = document.querySelector('.explore-link');
const contactLink = document.querySelector('.contact-page-link');

homeLink.addEventListener('click', ()=>{
    pageElem.innerHTML = `
    <div class="hero">
            <h1>Travel Your Dreams</h1>
            <p>Travel Your Dreams is a website which provides recommendations for best places to travel.</p>
            <div>Best Places For Your Travel <button class="hero-button explore-link" onclick="explorePage()">Explore</button></div>
        </div>
        <div>
            <h2>Recommendations for Beaches</h2>
            <h2>The ABC Beach</h2>
            <div>
                <img src="images/beach pic1.jpg" alt="beach-pic1">
                <img src="images/beach pic2.jpg" alt="beach-pic2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia perspiciatis necessitatibus, labore impedit praesentium dolores, deserunt voluptates repellat veniam nihil commodi. Consequatur, neque accusantium distinctio officia tempore corporis dolorum.</p>
            </div>
            <h2>Siesta Beach, Florida</h2>
            <div>
                <img src="images/siesta key beach pic1.jpg" alt="siesta-beach">
                <img src="images/siesta key beach pic2.jpeg" alt="siesta-beach2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tenetur. Assumenda quasi provident nam ex rerum dolorum blanditiis odio placeat atque obcaecati doloremque, hic modi consequatur incidunt officia neque. Eaque!</p>
            </div>
        </div>
        <div>
            <h2>Recommendations for Temples</h2>
            <h2>The Somnath Temple, India</h2>
            <div>
                <img src="images/Somanath_Temple.jpg" alt="Somanath_Temple">
                <img src="images/Somnath-Temple.jpg" alt="Somanath_Temple">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia perspiciatis necessitatibus, labore impedit praesentium dolores, deserunt voluptates repellat veniam nihil commodi. Consequatur, neque accusantium distinctio officia tempore corporis dolorum.</p>
            </div>
            <h2>The Golden Temple, India</h2>
            <div>
                <img src="images/golden temple 1.jpg" alt="golden-temple">
                <img src="images/golden temple 2.jpg" alt="golden-temple">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tenetur. Assumenda quasi provident nam ex rerum dolorum blanditiis odio placeat atque obcaecati doloremque, hic modi consequatur incidunt officia neque. Eaque!</p>
            </div>
        </div>
    `
});

aboutLink.addEventListener('click', ()=>{
    pageElem.innerHTML = `
    <div>
    <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores exercitationem accusantium magni at corporis laboriosam autem quo! Officiis dolorem rem quisquam magnam asperiores amet odit quis, sequi iure quae similique.</p>
    </div>
    <div>
        <h2>Why choose us?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis adipisci placeat, atque culpa suscipit facilis minus dolorem totam soluta earum corrupti necessitatibus aut tenetur. Accusantium magnam nemo blanditiis repudiandae id?</p>
    </div>
    `
});

contactLink.addEventListener('click', ()=>{
    pageElem.innerHTML = `
    <form action="mailto:someone@example.com" method="post">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="name" required>
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="E-mail" required>
        <label for="message">Message</label>
        <input type="text" name="message" id="message" placeholder="message" required>
        <input type="button" value="Send">
    </form>
    `
});

function tabButton(button) {
    document.querySelectorAll('.tab-button').forEach((button)=>{
        button.classList.remove("active-tab-button")
    })
    button.classList.add("active-tab-button");
    document.querySelector(".tab-name").innerHTML = button.innerHTML;
}

function selectLocation(selection) {
    document.querySelectorAll(".js-location").forEach(text => {
        text.innerHTML = selection.value;
    })
}

function explorePage() {
    pageElem.innerHTML = `
    <div>
        <h2>Explore the best places for your travel</h2>
        <div class="select-location-div">
            <label for="location">Select your location: </label>
            <select name="location" class="select-location" onchange="selectLocation(this)">
                <option value="United-state">United States</option>
                <option value="Japan">Japan</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
            </select>
        </div>
        <div class="tab-buttons">
            <button class="tab-button active-tab-button" onclick="tabButton(this)">Most Visited</button><button class="tab-button" onclick="tabButton(this)">Most Liked</button><button class="tab-button" onclick="tabButton(this)">Best View</button>
        </div>
        <div class="tab-body">
            <h2 class="tab-name">Most Visited</h2>
            <h3>Recommendations for Beaches</h3>
            <div>
                <h2>The ABC Beach, <span class="js-location"></span></h2>
                <div>
                    <img src="images/beach pic1.jpg" alt="beach-pic1">
                    <img src="images/beach pic2.jpg" alt="beach-pic2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia perspiciatis necessitatibus, labore impedit praesentium dolores, deserunt voluptates repellat veniam nihil commodi. Consequatur, neque accusantium distinctio officia tempore corporis dolorum.</p>
                </div>
            </div>
            <div>
                <h2>The ABC Beach, <span class="js-location"></span></h2>
                <div>
                    <img src="images/beach pic1.jpg" alt="beach-pic1">
                    <img src="images/beach pic2.jpg" alt="beach-pic2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia perspiciatis necessitatibus, labore impedit praesentium dolores, deserunt voluptates repellat veniam nihil commodi. Consequatur, neque accusantium distinctio officia tempore corporis dolorum.</p>
                </div>
            </div>
            <h3>Recommendations for Temples</h3>
            <div>
                <h2>The ABC Temple, <span class="js-location"></span></h2>
                <div>
                    <img src="images/Somanath_Temple.jpg" alt="Somanath_Temple">
                    <img src="images/Somnath-Temple.jpg" alt="Somanath_Temple">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia perspiciatis necessitatibus, labore impedit praesentium dolores, deserunt voluptates repellat veniam nihil commodi. Consequatur, neque accusantium distinctio officia tempore corporis dolorum.</p>
                </div>
            </div>
            <div>
                <h2>The ABC Temple, <span class="js-location"></span></h2>
                <div>
                    <img src="images/Somanath_Temple.jpg" alt="Somanath_Temple">
                    <img src="images/Somnath-Temple.jpg" alt="Somanath_Temple">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia perspiciatis necessitatibus, labore impedit praesentium dolores, deserunt voluptates repellat veniam nihil commodi. Consequatur, neque accusantium distinctio officia tempore corporis dolorum.</p>
                </div>
            </div>
        </div>
    </div>
        `
}