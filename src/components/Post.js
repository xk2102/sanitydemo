import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { Link } from "react-router-dom";

export default function Post() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{title, slug, mainImage{asset->{_id, url},alt}}`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

    return (
        <div>

            {post && post.map((post, index) => (
                <>
                    <Link to={"/post/" + post.slug.current} key={post.slug.current}>Link</Link>
                    {/* <img src={post.mainImage.asset.url} alt={post.mainImage.alt} /> */}
                    {console.log(post)}
                </>
            ))}



        </div>
    )
}

