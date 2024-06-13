import React, { useState } from "react";

const CreatePlayList = () => {
  const items = [
    {
      songName: "if i can stop one heart from breaking",
      artistName: "robin",
      image: "robin4.png",
      albumName: "INSIDE",
      duration: "03:45",
    },
    {
      songName: "if i can stop one heart from breaking",
      artistName: "robin",
      image: "robin4.png",
      albumName: "INSIDE",
      duration: "03:45",
    },
    {
      songName: "if i can stop one heart from breaking",
      artistName: "robin",
      image: "robin4.png",
      albumName: "INSIDE",
      duration: "03:45",
    },
    {
      songName: "if i can stop one heart from breaking",
      artistName: "robin",
      image: "robin4.png",
      albumName: "INSIDE",
      duration: "03:45",
    },
    {
      songName: "if i can stop one heart from breaking",
      artistName: "robin",
      image: "robin4.png",
      albumName: "INSIDE",
      duration: "03:45",
    },
  ];
  const [newPlaylist, setNewPlaylist] = useState({
    name: "",
    songs: "", // Changed to a string to handle comma-separated song IDs
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlaylist({ ...newPlaylist, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewPlaylist({ ...newPlaylist, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newPlaylist.name);
    formData.append("songs", newPlaylist.songs);
    if (newPlaylist.image) {
      formData.append("image", newPlaylist.image);
    }

    try {
      const response = await fetch("http://localhost:5000/api/playlists", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Playlist created successfully:", data);
        // Handle success (e.g., update state, show success message)
      } else {
        const errorData = await response.json();
        console.error("Error creating playlist:", errorData);
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error("Error creating playlist:", error);
      // Handle error (e.g., show error message)
    }
  };
  return (
    <>
      {" "}
      <div className="h-full scrollbar-thin scrollbar-thumb-custom scrollbar-thumb-gray-600 rounded-4xl scrollbar-track-gray-900 overflow-y-auto  shadow-lg bg-[#04030c] p-4">
        <div className="relative mt-10 flex items-center">
          <img
            className="w-52 h-52 object-cover shadow-lg rounded-lg"
            src="we.jpg"
            alt="s"
          />
          <div className="flex mx-5 flex-col">
            <p>Public playlist</p>
            <h1 className="text-5xl">My Playlist #1</h1>
          </div>
        </div>
        <div className="bg-gray-950 mt-10 rounded-3xl text-white px-4 py-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Title</h2>
          <h2 className="text-lg font-semibold relative left-9">Album</h2>
          <h2 className="text-lg font-semibold">Duration</h2>
        </div>
        {items.map((item, index) => (
          <div className="max-w-3xl mx-auto" key={index}>
            <div className="mt-4">
              <div className="bg-gray-950 rounded-3xl shadow-md flex items-center justify-between p-4 mb-2 hover:text-white">
                <img
                  src={item.image}
                  alt={item.songName}
                  className="w-12 h-12 rounded-md mr-4"
                />
                <div className="flex-1 flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-base cursor-default overflow-hidden text-ellipsis text-nowrap font-semibold w-[225px]">
                      {item.songName}
                    </h3>
                    <p className="text-sm cursor-pointer font-bold text-gray-500">
                      {item.artistName}
                    </p>
                  </div>
                  <p className="text-sm font-bold relative right-72 text-gray-500">
                    {item.albumName}
                  </p>
                </div>
                <p className="text-lg">{item.duration}</p>
              </div>
            </div>
          </div>
        ))}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mt-5"
        >
          <input
            type="text"
            name="name"
            value={newPlaylist.name}
            onChange={handleChange}
            placeholder="Playlist Name"
            className="mb-2 p-1 border rounded"
            required
          />
          <input
            type="text"
            name="songs"
            value={newPlaylist.songs}
            onChange={handleChange}
            placeholder="Song IDs (comma-separated)"
            className="mb-2 p-1 border rounded"
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="mb-2"
            accept="image/*"
          />
          <button type="submit" className="p-1 bg-blue-500 text-white rounded">
            Create Playlist
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePlayList;
