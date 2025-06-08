import { useState, useEffect } from "react";

export const useMenuImages = () => {
  const [menuImages, setMenuImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuImages = async () => {
      try {
        const isDevelopment = process.env.NODE_ENV === "development";
        const apiUrl = isDevelopment
          ? "http://localhost:8888/.netlify/functions/menu-images"
          : "/.netlify/functions/menu-images";

        const response = await fetch(apiUrl);
        const result = await response.json();

        if (result.success) {
          setMenuImages(result.data);
        } else {
          throw new Error(result.error || "Failed to fetch menu images");
        }
      } catch (err) {
        console.error("Failed to load menu images:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuImages();
  }, []);

  return { menuImages, loading, error };
};
