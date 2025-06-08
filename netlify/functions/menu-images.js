const fs = require("fs").promises;
const path = require("path");

// Simple file-based storage for menu images
const dataFile = "/tmp/menu-images.json";

// Default menu structure
const defaultMenuData = {
  specials: { name: "Specials", imageUrl: null, updatedAt: null },
  dinner: { name: "Dinner", imageUrl: null, updatedAt: null },
  brunch: { name: "Brunch", imageUrl: null, updatedAt: null },
  lunch: { name: "Lunch", imageUrl: null, updatedAt: null },
  desserts: { name: "Desserts", imageUrl: null, updatedAt: null },
  drinks: { name: "Drinks", imageUrl: null, updatedAt: null },
};

// Read menu data from file
async function readMenuData() {
  try {
    const data = await fs.readFile(dataFile, "utf8");
    const existingData = JSON.parse(data);

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
    // File doesn't exist, return default data
    return defaultMenuData;
  }
}

// Write menu data to file
async function writeMenuData(data) {
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2));
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
