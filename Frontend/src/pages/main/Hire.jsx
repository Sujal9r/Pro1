import React, { useState, useEffect } from "react";
import Footer from '../../components/layout/Footer/Footer';
import Navbar from '../../components/layout/Navbar/Navbar';

const Hire = () => {
  const [developers, setDevelopers] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [editingDeveloper, setEditingDeveloper] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    yearOfExperience: 0,
    title: "",
    developer: "",
    country: "",
    skills: [],
  });

  const [skillsInput, setSkillsInput] = useState("");

  const developerType = sessionStorage.getItem('developerType') || ""; 

  const fetchDevelopers = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:5000/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();
      setDevelopers(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      console.error("Error fetching developers:", err);
      showNotification("Failed to load developers", "error");
      setDevelopers([]); // fallback to empty array on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDevelopers();
    // eslint-disable-next-line
  }, []);
  console.log("Developer Type:", developerType);
  console.log("Developers:", developers);

  // See All Developers button handler
  const handleSeeAll = () => {
    sessionStorage.removeItem('developerType');
    window.location.reload(); // reload to re-fetch and show all
  };

  // Filter developers by type and search
  const filteredDevelopers = Array.isArray(developers)
    ? developers.filter((dev) =>
        (!developerType || dev.developer?.toLowerCase().includes(developerType.toLowerCase())) &&
        dev.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "yearOfExperience" ? parseInt(value) || 0 : value,
    });
  };

  const handleSkillsChange = (e) => {
    setSkillsInput(e.target.value);
  };

  const handleCreateDeveloper = (e) => {
    // e.preventDefault();
    setIsLoading(true);

    const skillsArray = skillsInput.split(',').map(skill => skill.trim()).filter(skill => skill !== '');

    fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, skills: skillsArray }),
    })
      .then(async (res) => {
        const data = await res.json();
        setIsLoading(false);
        if (res.ok) {
          showNotification("Developer created successfully", "success");
          fetchDevelopers();
          setFormVisible(false);
          resetForm();
        } else {
          showNotification(data.message || "Failed to create developer", "error");
        }
      })
      .catch((err) => {
        console.error("Error creating developer:", err);
        setIsLoading(false);
        showNotification("Failed to create developer", "error");
      });
  };

    const handleUpdateDeveloper = (data) => {

      // console.log(e.id,'hdhdhfsiuefiushefius')
      // data.preventDefault()
      console.log(data,'datakkjdhkdu')
      setIsLoading(true);

      const skillsArray = skillsInput.split(',').map(skill => skill.trim()).filter(skill => skill !== '');

      fetch(
        `http://localhost:5000/api/users/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, skills: skillsArray }),
        }
      )
        .then(async (res) => {
          const data = await res.json();
          setIsLoading(false);
          if (res.ok) {
            showNotification("Developer updated successfully", "success");
            fetchDevelopers();
            setFormVisible(false);
            setEditingDeveloper(null);
            resetForm();
          } else {
            showNotification(data.message || "Failed to update developer", "error");
          }
        })
        .catch((err) => {
          console.error("Error updating developer:", err);
          setIsLoading(false);
          showNotification("Failed to update developer", "error");
        });
    };


   
  const handleDeleteDeveloper = (id) => {
    setIsLoading(true);

    fetch(`http://localhost:5000/api/users/${id}`, {
      method: "DELETE",
    })
      .then(async (res) => {
        const data = await res.json();
        setIsLoading(false);
        if (res.ok) {
          showNotification("Developer deleted successfully", "success");
          fetchDevelopers();
          setDeleteConfirmId(null);
        } else {
          showNotification(data.message || "Failed to delete developer", "error");
        }
      })
      .catch((err) => {
        console.error("Error deleting developer:", err);
        setIsLoading(false);
        showNotification("Failed to delete developer", "error");
      });
  };

  const saveEdit = (e) => {
            return editingDeveloper ? handleUpdateDeveloper(e) : handleCreateDeveloper(e);
    };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      yearOfExperience: 0,
      title: "",
      developer: "",
      country: "",
      skills: [],
    });
    setSkillsInput("");
  };

  const openEditForm = (dev) => {
    setEditingDeveloper(dev);
    setFormData({
      id: dev._id,
      name: dev.name,
      email: dev.email,
      yearOfExperience: dev.yearOfExperience || 0,
      title: dev.title || "",
      developer: dev.developer || "",
      country: dev.country || "",
      skills: dev.skills || [],
    });
    setSkillsInput(dev.skills ? dev.skills.join(", ") : "");
    setFormVisible(true);
  };

  const getSkillColorClass = (skillName) => {
    const colors = [
      "from-purple-800 to-fuchsia-700",
      "from-emerald-800 to-lime-700",
      "from-amber-800 to-orange-700",
      "from-sky-800 to-teal-700",
      "from-pink-800 to-red-700",
    ];
    let hash = 0;
    for (let i = 0; i < skillName.length; i++) {
      hash = skillName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % colors.length);
    return colors[index];
  };

  // Button label dynamic
  const addButtonLabel = developerType
    ? `Add ${developerType}`
    : "Add New Developer";

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 180}deg)`,
              background: `linear-gradient(90deg, rgba(56,189,248,0.5) 0%, rgba(56,189,248,0) 100%)`,
            }}
          />
        ))}

        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-sm animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `rgba(56, 189, 248, ${Math.random() * 0.5 + 0.1
                })`,
            }}
          />
        ))}
      </div>

      <Navbar />
      <div className="w-full">
        <div className="container mx-auto px-4 py-16 pt-16">
          <div className="text-center mb-16">
            <h1 className="pt-[12vh] text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Developer Management
              </span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Add, view, update, and manage your development team in one place
            </p>
          </div>

          <div className="w-full max-w-3xl mx-auto mb-8">
            <div className="flex flex-wrap gap-4 justify-center">

              <button
                onClick={() => {
                  sessionStorage.removeItem('developerType');
                  window.location.reload();
                }}
                className={`
                  px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-300
                  border-2 border-indigo-700 bg-gradient-to-r from-gray-800 to-indigo-900 text-white/80
                  hover:from-indigo-700 hover:to-gray-800 hover:text-white
                  ${!developerType ? "ring-4 ring-indigo-400/40 border-indigo-400 scale-110" : ""}
                `}
              >
                All
              </button>

              {[...new Set(developers.map(dev => dev.developer).filter(Boolean))].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    sessionStorage.setItem('developerType', type);
                    window.location.reload();
                  }}
                  className={`
                    px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-300
                    border-2 border-transparent
                   transition-all duration-300
                  border-2 border-indigo-700 bg-gradient-to-r from-gray-800 to-indigo-900 text-white/80
                  hover:from-indigo-700 hover:to-gray-800 hover:text-white
                    ${developerType === type ? "ring-4 ring-fuchsia-400/40 border-fuchsia-400 scale-110" : ""}
                  `}
                  style={{
                    letterSpacing: "0.5px",
                    boxShadow: developerType === type
                      ? "0 4px 24px 0 rgba(139,92,246,0.25)"
                      : "0 2px 8px 0 rgba(55,48,163,0.10)",
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className=" flex flex-col md:flex-row items-center justify-center gap-4 mb-12 w-full max-w-3xl mx-auto">
            <div className="relative w-full flex">
              <input
                type="text"
                placeholder="Search Developer"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-5 border-2 border-cyan-700 rounded-l-md shadow-xl text-lg bg-black/30 backdrop-blur-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
              />
              <button
                onClick={() => {
                  setFormVisible(true);
                  setEditingDeveloper(null);
                  resetForm();
                  if (developerType) {
                    setFormData((prev) => ({
                      ...prev,
                      developer: developerType,
                    }));
                  }
                }}
                className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-r-md text-white text-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform"
                style={{ minWidth: "160px" }}
              >
                {addButtonLabel}
              </button>
            </div>
          </div>

          {notification.show && (
            <div
              className={`fixed top-5 right-5 p-4 rounded-md shadow-lg z-50 transition-all duration-300 ${notification.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
            >
              <p className="text-white font-medium">{notification.message}</p>
            </div>
          )}

          {formVisible && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-gray-900 border border-cyan-800/50 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {editingDeveloper ? "Edit Developer" : "Add New Developer"}
                  </h2>
                  <button
                    onClick={() => {
                      setFormVisible(false);
                      setEditingDeveloper(null);
                      resetForm();
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>

                <form
                  onSubmit={
                    (e)=>{
                      e.preventDefault();
                      saveEdit(formData);
                    }
                      
                  }
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-300 mb-1">
                        Developer Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        readOnly={!!editingDeveloper}
                        className={`w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 ${editingDeveloper ? "cursor-not-allowed opacity-70" : ""
                          }`}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        readOnly={!!editingDeveloper}
                        className={`w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 ${editingDeveloper ? "cursor-not-allowed opacity-70" : ""
                          }`}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-blue-300 mb-1">
                          Years of Experience
                        </label>
                        <input
                          type="number"
                          name="yearOfExperience"
                          value={formData.yearOfExperience}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          required
                          min="0"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-blue-300 mb-1">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-300 mb-1">
                        Developer Type
                      </label>
                      <input
                        type="text"
                        name="developer"
                        value={formData.developer}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        placeholder="e.g. React.js Developer, MERN Stack Developer"
                        required
                        readOnly={!!developerType}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-300 mb-1">
                        Title/Description
                      </label>
                      <textarea
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        placeholder="Brief description of services or expertise"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-300 mb-1">
                        Skills
                      </label>
                      <input
                        type="text"
                        name="skills"
                        value={skillsInput}
                        onChange={handleSkillsChange}
                        className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        placeholder="e.g. React, Node.js, MongoDB (comma-separated)"
                      />
                      <p className="text-xs text-gray-400 mt-1">Enter skills as a comma-separated list (e.g., React, Node.js, Express).</p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setFormVisible(false);
                        setEditingDeveloper(null);
                        resetForm();
                      }}
                      className="px-4 py-2 bg-gray-700 rounded-md text-gray-200 hover:bg-gray-600 transition-colors duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-md text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 ${isLoading ? "opacity-75 cursor-not-allowed" : ""
                        }`}
                      disabled={isLoading}
                    >
                      {isLoading
                        ? "Processing..."
                        : editingDeveloper
                          ? "Update Developer"
                          : "Add Developer"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {deleteConfirmId && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-gray-900 border border-red-800/50 rounded-lg w-full max-w-md p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-900/30 mb-4">
                    <svg
                      className="w-8 h-8 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    Confirm Deletion
                  </h2>
                  <p className="text-gray-300 mt-2">
                    Are you sure you want to delete this developer? This action
                    cannot be undone.
                  </p>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => setDeleteConfirmId(null)}
                    className="px-4 py-2 bg-gray-700 rounded-md text-gray-200 hover:bg-gray-600 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDeleteDeveloper(deleteConfirmId)}
                    className={`px-4 py-2 bg-red-600 rounded-md text-white font-medium hover:bg-red-700 transition-colors duration-300 ${isLoading ? "opacity-75 cursor-not-allowed" : ""}`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Deleting..." : "Delete Developer"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {isLoading && developers.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-16 h-16 border-t-4 border-b-4 border-cyan-500 rounded-md animate-spin"></div>
            </div>
          ) : filteredDevelopers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 mb-16">
              {filteredDevelopers.map((dev) => (
                <div
                  key={dev._id}
                  className={`relative bg-black/20 backdrop-blur-md p-8 rounded-md shadow-2xl border border-cyan-800/50 group transition-all duration-500 transform hover:scale-105 hover:shadow-cyan-900/30 hover:shadow-lg overflow-hidden ${activeCard === dev._id ? "scale-105" : ""
                    }`}
                  onMouseEnter={() => setActiveCard(dev._id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                  <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>

                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                        {dev.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <div className="ml-4">
                        <h2 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {dev.name}
                        </h2>
                        <p className="text-blue-200 text-sm">
                          {dev.developer}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-white flex items-center">
                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center rounded-sm bg-cyan-500/30">
                          <svg
                            className="w-3 h-3 text-cyan-200"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                        </span>
                        {dev.email}
                      </p>
                      <p className="text-white flex items-center">
                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center rounded-sm bg-blue-500/30">
                          <svg
                            className="w-3 h-3 text-blue-200"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        {dev.country || "Not specified"}
                      </p>
                      <p className="text-white flex items-center">
                        <span className="w-5 h-5 mr-2 inline-flex items-center justify-center rounded-sm bg-indigo-500/30">
                          <svg
                            className="w-3 h-3 text-indigo-200"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            ></path>
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                          </svg>
                        </span>
                        {dev.yearOfExperience}{" "}
                        {dev.yearOfExperience === 1 ? "year" : "years"} of
                        experience
                      </p>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-blue-200 mb-2">
                        PROJECT TITLE
                      </h3>
                      <p className="text-sm text-gray-300">{dev.title}</p>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-blue-200 mb-2">
                        TOP SKILLS
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {dev.skills && dev.skills.length > 0 ? (
                          dev.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 bg-gradient-to-r ${getSkillColorClass(skill)} rounded-sm text-xs font-medium text-white inline-block transform transition-all duration-300 hover:shadow-md hover:shadow-cyan-800/50`}
                            >
                              {skill}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-400 text-sm">No skills specified</span>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <button
                        onClick={() => openEditForm(dev)}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-sm text-white text-sm font-medium transition-all duration-300 hover:shadow-md hover:shadow-blue-700/50"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(dev._id)}
                        className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-700 rounded-sm text-white text-sm font-medium transition-all duration-300 hover:shadow-md hover:shadow-red-700/50"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="absolute top-1 right-1 h-4 w-4 rounded-sm bg-green-400 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center mt-10 mb-16">
              <div className="w-64 h-64 bg-black/30 backdrop-blur-md rounded-md flex items-center justify-center mb-8 relative overflow-hidden">
                <div className="absolute inset-0 h-2 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent top-1/2 animate-pulse"></div>
                <div className="z-10 text-6xl">🔍</div>
              </div>
              <p className="text-white text-3xl font-bold mb-4">
                No developers found
              </p>
              <p className="text-blue-200 text-lg max-w-md text-center">
                We couldn't find any developers matching your search criteria.
                Please try with a different name.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hire;