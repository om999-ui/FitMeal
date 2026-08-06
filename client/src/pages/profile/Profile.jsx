import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";
import {
  getProfile,
  updateProfile,
} from "../../services/profileService";

function Profile() {
  const [loading, setLoading] = useState(false);

  const [profile, setProfile] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "Male",
    activityLevel: "Moderate",
  });

  const fetchProfile = async () => {
    try {
      const response = await getProfile();

      if (response.profile) {
        setProfile({
          age: response.profile.age,
          height: response.profile.height,
          weight: response.profile.weight,
          gender: response.profile.gender,
          activityLevel: response.profile.activityLevel,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load profile");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateProfile(profile);

      toast.success("Profile updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="rounded-3xl bg-white p-5 shadow-sm md:p-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your personal information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8"
        >

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={profile.age}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-green-500"
            />

            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={profile.height}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-green-500"
            />

            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={profile.weight}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-green-500"
            />

            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-green-500"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <div className="md:col-span-2">

              <select
                name="activityLevel"
                value={profile.activityLevel}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-green-500"
              >
                <option>Sedentary</option>
                <option>Light</option>
                <option>Moderate</option>
                <option>Active</option>
                <option>Very Active</option>
              </select>

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-60 md:w-auto md:px-8"
          >
            {loading ? "Saving..." : "Save Profile"}
          </button>

        </form>

      </div>
    </DashboardLayout>
  );
}

export default Profile;