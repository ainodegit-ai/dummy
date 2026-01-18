// import AdminLayout from "../components/AdminLayout";

// export default function Gallery() {
//   return (
//     <AdminLayout>
//       <h2>Gallery</h2>
//       <p>Coming Soon...</p>
//     </AdminLayout>
//   );
// }


import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../api/axiosConfig";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const BASE_URL = import.meta.env.VITE_API_URL;

  const fetchImages = async () => {
    const res = await api.get("/gallery");
    setImages(res.data || []);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const uploadImage = async () => {
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", file);

    try {
      await api.post("/gallery/upload", formData);
      setFile(null);
      fetchImages();
      alert("Image uploaded");
    } catch (err) {
      console.log(err);
      alert("Upload failed");
    }
  };

  const deleteImage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      await api.delete(`/gallery/${id}`);
      fetchImages();
      alert("Image deleted");
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  return (
    <AdminLayout>
      <h2>Gallery</h2>

      {/* Upload Section */}
      <div style={{ marginBottom: 20 }}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={uploadImage} style={{ marginLeft: 10 }}>
          Upload
        </button>
      </div>

      {/* Images Grid */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 15 }}>
        {images.map((img) => (
          <div
            key={img.id}
            style={{
              width: 150,
              height: 150,
              position: "relative",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={`${BASE_URL}assets/gallery/${img.image}`}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Delete Button */}
            <button
              onClick={() => deleteImage(img.id)}
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                background: "rgba(255,0,0,0.8)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 28,
                height: 28,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
              }}
              title="Delete image"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
