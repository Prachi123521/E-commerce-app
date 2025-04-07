import {useRouter} from "next/router";
import React,{useState,useEffect} from "react";
import {image34,image35,image36} from "@/assets";

const data = [
    { slug: "how-to-style-winter-whites", src: "image34.src", title: "How To Style Winter Whites", title1: "Style" },
    { slug: "we-won-a-glossy-award", src: "image35.src", title: "We Won A Glossy Award", title1: "Transparency" },
    { slug: "coordinate-your-style", src: "image36.src", title: "Coordinate Your Style", title1: "Style" }
  ];

const BlogDetail = () => {
    const router = useRouter();
    const { slug } = router.query; 
    const [postData, setPostData] = useState<any>(null);

    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      if (!slug) return;
  
      const fetchData = async () => {
        const postSlug = Array.isArray(slug) ? slug[0] : slug;


        const post = data.find((item) => item.slug === slug);
        if (post) {
          setPostData(post);
        }
        setLoading(false);
      };
  
      fetchData();
    }, [slug]);
  
    if (loading) {
      return (
        <div className="loading">
          <p>Loading...</p>
        </div>
      );
    }
  
    if (!postData) {
      return (
        <div>
          <p> Post not found.</p>
        </div>
      );
    }
  
    return (
      <div className="blog-detail">
        <h1>{postData.title}</h1>
        <img src={postData.src} alt={postData.title} />
        <p>{postData.title1}</p>
      </div>
    );
  };
  
  export default BlogDetail;