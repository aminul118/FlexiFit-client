import axios from "axios";
import { TiCloudStorage } from "react-icons/ti";
const FireUpload = () => {
  const handleImageUpload = async (e) => {
    e.preventDefault();

    // Access the file input field via its name attribute
    const fileInput = e.target.elements.photo;
    const file = fileInput.files[0]; // Get the first selected file

    if (!file) {
      console.error("No file selected!");
      return;
    }

    // Prepare FormData for the file upload
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
        formData
      );

      console.log("Image Uploaded Successfully:", response.data);
      alert("Image Uploaded Successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image!");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleImageUpload}
        className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Upload Your File
        </h2>

        {/* File Input */}
        <label>
          <input
            type="file"
            name="photo"
            className="border p-2 w-full rounded-md hidden"
          />
          <div className="text-5xl cursor-pointer border p-8 flex justify-center">
            <TiCloudStorage />
          </div>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FireUpload;
