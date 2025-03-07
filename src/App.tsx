function App() {
  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("http://localhost:8080/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("File uploaded successfully!");
    } else {
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) handleUpload(e.target.files[0]);
        }}
      />
    </div>
  );
}


export default App;