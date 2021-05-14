import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./gallery.css";

const ImageGallery = ({ data }) => {
  const [images, setImages] = useState([]);
  const [hasMore, setMore] = useState(data.allMongodbGalleryArtworks.edges.length > 0);
  
  const fetchImages = () => {
    const currentLength = images.length;
    const more = currentLength < data.allMongodbGalleryArtworks.edges.length;
    const nextImages = more ? data.allMongodbGalleryArtworks.edges.slice(currentLength, currentLength + 10) : [];
    setMore(more);
    setImages([...images, ...nextImages]);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => fetchImages()}
      hasMore={hasMore}
      loader={<h4>Scroll down for more...</h4>}
    >
      <div className="image-grid">
        {images.map(image => (
            <div key={image.node.id} className="image-item">
                <img src={image.node.url} alt="artwork" />
            </div>
          ))}
      </div>
    </InfiniteScroll>
  );
};

const Gallery = ({ data }) => (
  <Layout>
    <SEO title="Gallery" />
    <h1 className="gallery-header">Past Student Artworks</h1>
    <ImageGallery data={data} />
  </Layout>
)

export default Gallery

export const query = graphql`
  query {
    allMongodbGalleryArtworks {
      edges {
        node {
          id
          url
        }
      }
    }
  }
`