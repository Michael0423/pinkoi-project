import configApi from "./config/config.api";

export async function getProducts() {
    return await fetch(configApi.productsAPI).then(res => res.json());
}

export async function getBlogs() {
    return await fetch(configApi.blogsAPI).then(res => res.json());
}