import { post, searchPost, updatePost } from "../scripts/api.js";
import { renderPosts } from "./home.js";

const noModal = document.getElementById("no-modal");
const token = localStorage.getItem("token");
const reqPost = await searchPost(token);

export function newPost(){

    const showModal = document.createElement("div");
    const modal = document.createElement("div");
    const creatExit = document.createElement("div");
    const create = document.createElement("h3");
    const exit = document.createElement("p");
    const title = document.createElement("label");
    const inputTitle = document.createElement("input");
    const content = document.createElement("label");
    const inputContent = document.createElement("textarea");
    const buttons = document.createElement("div");
    const cancel = document.createElement("button");
    const publish = document.createElement("button");

    modal.classList.add("modal");
    showModal.classList.add("show-modal");

    create.innerText = "Criando novo post";
    exit.innerText = "x";
    title.innerText = "Título do post";
    inputTitle.placeholder = "Digite o título aqui...";
    content.innerText = "Conteúdo do post";
    inputContent.placeholder = "Desenvolva o conteúdo do post aqui...";
    inputContent.cols = 48;
    cancel.innerText = "Cancelar";
    publish.innerText = "Publicar";

    exit.addEventListener("click", () => {
        noModal.classList.toggle("no-modal")
    })
    cancel.addEventListener("click", () => {
        noModal.classList.toggle("no-modal")
    })
    publish.addEventListener("click", async (e) => {
        e.preventDefault();
        const body = { title: `${inputTitle.value}`,
            content: `${inputContent.value}`
    }
            await post(body, token);
            noModal.classList.toggle("no-modal");
            reqPost.forEach((elem) => {
                renderPosts(elem)
            });
        }
)

    creatExit.append(create, exit);
    buttons.append(cancel, publish);
    modal.append(creatExit,title,inputTitle,content,inputContent,buttons);
    showModal.appendChild(modal);
    noModal.appendChild(showModal)
}

export function editPost(){

    const titlePost = document.getElementById("title-post");
    const contentPost = document.getElementById("content-post");  

    const showModal = document.createElement("div");
    const modal = document.createElement("div");
    const editExit = document.createElement("div");
    const edit = document.createElement("h3");
    const exit = document.createElement("p");
    const title = document.createElement("label");
    const inputTitle = document.createElement("textarea");
    const content = document.createElement("label");
    const inputContent = document.createElement("textarea");
    const buttons = document.createElement("div");
    const cancel = document.createElement("button");
    const save = document.createElement("button");

    modal.classList.add("modal");
    showModal.classList.add("show-modal");

    edit.innerText = "Edição";
    exit.innerText = "x";
    title.innerText = "Título do post";
    inputTitle.innerText = `${titlePost.innerText}`;
    content.innerText = "Conteúdo do post";
    inputContent.innerText = `${contentPost.innerText}`;
    inputContent.cols = 48;
    cancel.innerText = "Cancelar";
    save.innerText = "Salvar Alterações";

    const find = reqPost.find(async (e) => {
        e.title == titlePost.innerText
    })

    exit.addEventListener("click", () => {
        noModal.classList.toggle("no-modal")
    })
    cancel.addEventListener("click", () => {
        noModal.classList.toggle("no-modal")
    })
    save.addEventListener("click", async (e) => {
        e.preventDefault();
        const body = { title: `${inputTitle.value}`,
            content: `${inputContent.value}`
    }
    console.log(body)
            await updatePost(find.id, body, token);
            noModal.classList.toggle("no-modal");
            reqPost.forEach((elem) => {
                renderPosts(elem)
            });
        }
)

    editExit.append(edit, exit);
    buttons.append(cancel, save);
    modal.append(editExit,title,inputTitle,content,inputContent,buttons);
    showModal.appendChild(modal);
    noModal.appendChild(showModal)
}