const { getStore } = require("@netlify/blobs");

// Default menu structure
const defaultMenuData = {
  specials: { name: "Specials", imageUrl: null, updatedAt: null },
  dinner: { name: "Dinner", imageUrl: null, updatedAt: null },
  brunch: { name: "Brunch", imageUrl: null, updatedAt: null },
  lunch: { name: "Lunch", imageUrl: null, updatedAt: null },
  desserts: { name: "Desserts", imageUrl: null, updatedAt: null },
  drinks: { name: "Drinks", imageUrl: null, updatedAt: null },
};

// Initialize Netlify Blobs store
const menuStore = getStore("menu-images");

// Read menu data from Netlify Blobs
async function readMenuData() {
  try {
    const existingData = await menuStore.get("menu-data", { type: "json" });

    if (!existingData) {
      // No data exists yet, return default data
      return defaultMenuData;
    }

    // Merge with default structure to ensure all sections exist
    // This handles migration when new sections are added
    const mergedData = { ...defaultMenuData };

    // Copy over existing data
    Object.keys(existingData).forEach((key) => {
      if (mergedData[key]) {
        mergedData[key] = existingData[key];
      }
    });

    return mergedData;
  } catch (error) {
    console.error("Error reading from Netlify Blobs:", error);
    // Return default data on error
    return defaultMenuData;
  }
}

// Write menu data to Netlify Blobs
async function writeMenuData(data) {
  try {
    await menuStore.set("menu-data", JSON.stringify(data));
  } catch (error) {
    console.error("Error writing to Netlify Blobs:", error);
    throw error;
  }
}

exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    const menuData = await readMenuData();

    if (event.httpMethod === "GET") {
      // Return current menu image data
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, data: menuData }),
      };
    }

    if (event.httpMethod === "POST") {
      const { section, imageUrl } = JSON.parse(event.body);

      // Validate input
      if (!section || !imageUrl) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            error: "Section and imageUrl are required",
          }),
        };
      }

      if (!menuData[section]) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            error: `Invalid section: ${section}`,
          }),
        };
      }

      // Update the menu section with new image
      menuData[section].imageUrl = imageUrl;
      menuData[section].updatedAt = new Date().toISOString();

      await writeMenuData(menuData);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: `Updated ${section} menu image`,
          data: menuData[section],
        }),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: "Method not allowed" }),
    };
  } catch (error) {
    console.error("Menu images function error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: "Internal server error",
      }),
    };
  }
};
