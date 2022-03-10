const BaseUrl = "https://api.hatchways.io/assessment/blog/posts"

async function getPostsByTag(tag){
    try {
        const response = await fetch(`${BaseUrl}?tag=${tag}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                tag
            }
        })

        const posts = await response.json();
        console.log(posts);
        return posts;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {getPostsByTag}