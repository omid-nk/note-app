// add new note page
const newNoteBtn = document.querySelector("#newNoteBtn");
const newNotePage = document.querySelector("#newNotePage");
const notePageArrowBtn = document.querySelector("#notePageArrowBtn");

newNoteBtn.addEventListener("click", toggleNewNotePage);
notePageArrowBtn.addEventListener("click", toggleNewNotePage);

function toggleNewNotePage() {
  newNotePage.classList.toggle("hidden");
}

// search
const searchBtn = document.querySelector("#searchBtn");
const searchPage = document.querySelector("#searchPage");
const searchPageArrowBtn = document.querySelector("#searchPageArrowBtn");

searchBtn.addEventListener("click", toggleSearchPage);
searchPageArrowBtn.addEventListener("click", toggleSearchPage);

function toggleSearchPage() {
  searchPage.classList.toggle("hidden");
}

// check main screen is empty or not
const mainScreen = document.querySelector("#mainScreen");
const emptyScreen = document.querySelector("#emptyScreen");

function toggleEmptyScreen() {
  if (mainScreen.children.length > 0) {
    emptyScreen.classList.add("hidden");
  } else {
    emptyScreen.classList.remove("hidden");
  }
}

toggleEmptyScreen();

const observer = new MutationObserver(toggleEmptyScreen);

observer.observe(mainScreen, { childList: true });

// color picker
const colorPicker = document.querySelectorAll(".colorPicker");
let selectedColor = null;

colorPicker.forEach(function (item) {
  item.addEventListener("click", function () {
    colorPicker.forEach((c) => c.classList.remove("selectedColor"));
    item.classList.add("selectedColor");
    selectedColor = item.dataset.color;
  });
});

// create new note

const screen = document.querySelector("#mainScreen");
const titleInput = document.querySelector("#titleInput");
const textarea = document.querySelector("#textareaInput");
const saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", createNewNote);

function createNewNote() {
  const articleElem = document.createElement("article");
  const h3Elem = document.createElement("h3");
  const pElem = document.createElement("p");
  const spanElem = document.createElement("span");
  articleElem.className = "notes";
  h3Elem.className = "notes__header";
  pElem.className = "notes__body";
  spanElem.className = "notes-delete-btn";
  articleElem.appendChild(h3Elem);
  articleElem.appendChild(pElem);
  articleElem.appendChild(spanElem);
  const titleValue = titleInput.value.trim();
  const textValue = textarea.value.trim();
  h3Elem.innerHTML = titleValue;
  pElem.innerHTML = textValue;
  if (selectedColor) {
    articleElem.classList.add(selectedColor);
  } else {
    articleElem.classList.add("bg-dark");
  }
  if (h3Elem.innerHTML.length > 3) {
    screen.append(articleElem);
    newNotePage.classList.toggle("hidden");
    titleInput.value = "";
    textarea.value = "";
  } else {
    alert("Title cannot be empty");
  }
}

// delete notes
screen.addEventListener("click", function (e) {
  if (e.target.classList.contains("notes-delete-btn")) {
    e.target.parentElement.remove();
  }
});
