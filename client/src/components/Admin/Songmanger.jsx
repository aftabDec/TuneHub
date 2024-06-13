import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

const SongManager = () => {
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    album: "",
    image: null,
    fileUrl: null, // Change to null to handle file input
    releaseDate: "", // New field for release date
    genre: "", // New field for genre
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSong({ ...newSong, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewSong({ ...newSong, image: e.target.files[0] });
  };

  const handleSongFileChange = (e) => {
    setNewSong({ ...newSong, fileUrl: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", newSong.title);
      formData.append("artist", newSong.artist);
      formData.append("image", newSong.image);
      formData.append("fileUrl", newSong.fileUrl);
      formData.append("releaseDate", newSong.releaseDate);
      formData.append("genre", newSong.genre);
      formData.append("album", newSong.album);

      const response = await axios.post(
        "http://localhost:5000/api/songs/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSongs([...songs, response.data]); // Assuming the response data contains the added song details
      setNewSong({
        title: "",
        artist: "",
        album: "",
        image: null,
        fileUrl: null,
        releaseDate: "",
        genre: "",
      });
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };

  return (
    <div>
      <h1>Song List</h1>
      <form className="grid grid-cols-3 gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="file-input  file-input-bordered p-3 file-input-primary w-full max-w-xs"
          placeholder="Title"
          value={newSong.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          className="file-input file-input-bordered p-3 file-input-primary w-full max-w-xs"
          placeholder="Artist"
          value={newSong.artist}
          onChange={handleChange}
        />
        <input
          type="text" // Correct the input type to "text"
          name="album" // Correct the name attribute
          placeholder="Album"
          className="file-input file-input-bordered p-3 file-input-primary w-full max-w-xs"
          value={newSong.album}
          onChange={handleChange}
        />
        <input
          type="file"
          className="file-input file-input-bordered p-3 file-input-primary w-full max-w-xs"
          placeholder="Add Image"
          onChange={handleFileChange}
        />
        <input
          type="file"
          name="fileUrl"
          className="file-input file-input-bordered p-3 file-input-primary w-full max-w-xs"
          placeholder="Song File"
          onChange={handleSongFileChange}
        />
        <input
          type="text"
          name="releaseDate"
          className="file-input file-input-bordered p-3 file-input-primary w-full max-w-xs"
          placeholder="Release Date"
          value={newSong.releaseDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          className="file-input file-input-bordered p-3 file-input-primary w-full max-w-xs"
          placeholder="Genre"
          value={newSong.genre}
          onChange={handleChange}
        />
        <button className="btn btn-primary max-w-52" type="submit">
          Add Song
        </button>
      </form>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongManager;
