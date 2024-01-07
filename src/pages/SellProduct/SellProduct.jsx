import { useState } from "react";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { FileUploader } from "react-drag-drop-files";
import { v4 as uuidv4 } from "uuid";
import "./sellproduct.css";

const fileTypes = ["JPEG", "JPG", "PNG"];
const SellProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
  });

  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFile = () => {
    iziToast.error({
      title: "Error",
      message: "File Should be less tha 3 mb ",
      position: "topCenter",
    });
    return;
  };
  const handleChange = (files) => {
    const selectedFile = files;
    setFile(selectedFile);
    const fileBlob = new Blob([selectedFile]);

    const objectURL = URL.createObjectURL(fileBlob);
    setImageUrl(objectURL);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title.trim() === "") {
      iziToast.error({
        title: "Error",
        message: "Please enter a title",
        position: "topCenter",
      });
      return;
    }
    if (formData.price.trim() === "") {
      iziToast.error({
        title: "Error",
        message: "Please enter a price",
        position: "topCenter",
      });
      return;
    }

    if (!file) {
      iziToast.error({
        title: "Error",
        message: "Please upload a image .",
        position: "topCenter",
      });
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const fileData = e.target.result;
      console.log(fileData);

      const formDataWithFile = {
        ...formData,
        image: fileData,
        id: uuidv4(),
      };

      const existingData = JSON.parse(localStorage.getItem("products")) || [];
      const updatedData = [...existingData, formDataWithFile];

      localStorage.setItem("products", JSON.stringify(updatedData));

      iziToast.success({
        title: "Success",
        message: "Product Successfully Added",
        position: "topCenter",
      });

      setFormData({
        title: "",
        price: "",
        image: "",
      });
      setFile(null);
      setImageUrl(null);
    };

    fileReader.readAsDataURL(file);
  };

  const handleDelete = () => {
    setFile(null);
    setImageUrl(null);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form_main">
        <h1 className="heading">Sell Product</h1>
        <div className="inputContainer">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            className="inputField"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="inputContainer">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            className="inputField"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </div>
        {file ? (
          <div className="inputContainer">
            <img src={imageUrl} alt="Uploaded" width="150px" />
            <span
              onClick={handleDelete}
              style={{
                transform: "translate(336%, 24%)",
                position: "relative",
                top: "-55px",
                left: "-87px",
              }}
            >
              ❌
            </span>
            <p>File name: {file.name}</p>
          </div>
        ) : (
          <div className="inputContainer">
            <FileUploader
              multiple={false}
              handleChange={handleChange}
              name="file"
              className="inputField"
              types={fileTypes}
              maxSize={3}
              onSizeError={handleFile}
            />
          </div>
        )}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default SellProduct;
