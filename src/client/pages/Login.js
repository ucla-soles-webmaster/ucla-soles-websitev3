/* global google */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import sun from "../photos/sunblue 1.png";
import "./Login.css";

export default function Login() {
  
  const navigate = useNavigate();

  const [user, setUser] = useState(null); // {name,email,picture,major,gradDate}
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showFirstTimeForm, setShowFirstTimeForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    major: "",
    otherMajor: "",
    graduationDate: "", // YYYY-MM
  });
  const [isOtherMajor, setIsOtherMajor] = useState(false);

  const majorsList = [
    "Aerospace Engineering","BioEngineering","Chemical Engineering",
    "Civil & Environmental Engineering","Computer Engineering","Computer Science",
    "Computer Science & Engineering","Electrical Engineering","Materials Engineering",
    "Mathematics","Mechanical Engineering","Other"
  ];

  const monthToPretty = (ym) => {
    if (!ym) return "";
    const d = new Date(`${ym}-01T00:00:00Z`);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", timeZone: "UTC" });
  };

  useEffect(() => {
    const cached = localStorage.getItem("user");
    if (cached) {
      const u = JSON.parse(cached);
      setUser(u);
      setIsSignedIn(true);
      setShowFirstTimeForm(!(u.major && u.gradDate));
      return;
    }

    google.accounts.id.initialize({
      client_id: "744790478987-ndu4hi5qtf1nk9lfkhjoj3ii9105aui6.apps.googleusercontent.com",
      callback: handleGoogleCallback,
      auto_select: true,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleGoogleCallback(resp) {
    setError("");
    try {
      const profile = jwtDecode(resp.credential);
      const { data } = await axios.post("http://localhost:5555/register", {
        email: profile.email,
        name: profile.name,
        picture: profile.picture,
      });

      const u = {
        name: profile.name,
        email: profile.email,
        picture: profile.picture,
        major: data.user?.major || "",
        gradDate: data.user?.gradDate || "",
      };

      setUser(u);
      setIsSignedIn(true);
      const needsInfo = !(u.major && u.gradDate);
      setShowFirstTimeForm(needsInfo);

      localStorage.setItem("user", JSON.stringify(u));

      if (needsInfo) {
        setForm((f) => ({
          ...f,
          major: u.major || "",
          graduationDate: u.gradDate || "",
          otherMajor: "",
        }));
        setIsOtherMajor(u.major === "Other");
      }
    } catch (e) {
      console.error(e);
      setError("Sign-in failed. Please try again.");
    }
  }

  function handleSignOut() {
    setUser(null);
    setIsSignedIn(false);
    setShowFirstTimeForm(false);
    setForm({ major: "", otherMajor: "", graduationDate: "" });
    setIsOtherMajor(false);
    setError("");
    localStorage.removeItem("user");
  }

  function onFormChange(e) {
    const { name, value } = e.target;
    if (name === "major") {
      const other = value === "Other";
      setIsOtherMajor(other);
      setForm((f) => ({ ...f, major: other ? "" : value }));
      return;
    }
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onFirstTimeSubmit(e) {
    e.preventDefault();
    setError("");

    const finalMajor = isOtherMajor ? form.otherMajor.trim() : form.major;
    if (!finalMajor) return setError("Please enter your major.");
    if (!form.graduationDate) return setError("Please select your graduation month.");

    const payload = {
      ...user,
      major: finalMajor,
      gradDate: form.graduationDate,
    };

    try {
      setSaving(true);
      const { data } = await axios.post("http://localhost:5555/register", payload);
      const updated = {
        ...payload,
        major: data.user?.major ?? payload.major,
        gradDate: data.user?.gradDate ?? payload.gradDate,
      };
      setUser(updated);
      localStorage.setItem("user", JSON.stringify(updated));
      setShowFirstTimeForm(false);
    } catch (e) {
      console.error(e);
      setError("Couldn’t save your info. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (!isSignedIn || (isSignedIn && showFirstTimeForm)) {
    return (
      <div className="container d-flex align-items-center justify-content-center py-4">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              {error && <div className="alert alert-danger">{error}</div>}

              <div className="text-center mb-3">
                <img src={sun} alt="logo" className="img-fluid mb-2" style={{ width: 96 }} />
                <h5 className="mb-1">Welcome to SOLES</h5>
                <small className="text-muted">
                  {isSignedIn ? "Just a couple quick details." : "Sign in to continue."}
                </small>
              </div>

              {!isSignedIn && (
                <div className="d-flex justify-content-center">
                  <div id="signInDiv" />
                </div>
              )}

              {isSignedIn && showFirstTimeForm && (
                <>
                  <div className="d-flex align-items-center gap-3 my-3">
                    <img
                      src={user?.picture}
                      alt="profile"
                      className="rounded-circle"
                      style={{ width: 56, height: 56, objectFit: "cover" }}
                    />
                    <div className="text-start">
                      <div className="fw-semibold">{user?.name}</div>
                      <div className="text-muted small">{user?.email}</div>
                    </div>
                  </div>

                  <form onSubmit={onFirstTimeSubmit} noValidate>
                    <div className="mb-3">
                      <label className="form-label">Major</label>
                      <select
                        name="major"
                        className="form-select"
                        value={isOtherMajor ? "Other" : form.major}
                        onChange={onFormChange}
                        required
                      >
                        <option value="">Select Major</option>
                        {majorsList.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>

                    {isOtherMajor && (
                      <div className="mb-3">
                        <label className="form-label">Enter Major</label>
                        <input
                          type="text"
                          name="otherMajor"
                          className="form-control"
                          placeholder="e.g., Computational Biology"
                          value={form.otherMajor}
                          onChange={onFormChange}
                          required
                        />
                      </div>
                    )}

                    <div className="mb-3">
                      <label className="form-label">Graduation Month</label>
                      <input
                        type="month"
                        name="graduationDate"
                        className="form-control"
                        value={form.graduationDate}
                        onChange={onFormChange}
                        required
                      />
                    </div>

                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-primary" disabled={saving}>
                        {saving ? "Saving..." : "Save & Continue"}
                      </button>
                      <button type="button" className="btn btn-outline-secondary" onClick={handleSignOut}>
                        Sign Out
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="banner p-3 position-relative">
        <button
          onClick={handleSignOut}
          className="btn btn-outline-dark position-absolute top-0 end-0 m-3"
          style={{ zIndex: 10 }}
        >
          Sign Out
        </button>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-12 position-relative text-center mb-3 mb-md-0">
              <img src={sun} alt="logo" className="img-fluid" style={{ width: 160, maxWidth: "100%" }} />
              <img
                src={user.picture}
                alt="profile"
                className="rounded-circle border border-white position-absolute"
                style={{
                  width: 75, height: 75, objectFit: "cover",
                  top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1,
                }}
              />
            </div>

            <div className="col-md-8 col-12 text-md-start text-center">
              <h4 className="fs-2 mb-4 fw-bold">{user.name}</h4>
              <h5 className="fs-6">
                Major: <span className="fw-bold">{user.major || "Not Provided"}</span>
              </h5>
              <h5 className="fs-6">
                Expected Graduation: <span className="fw-bold">{user.gradDate ? monthToPretty(user.gradDate) : "Not Provided"}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="resources mt-5">
        <div className="resourceTitle"><h3 className="ms-5 fw-bold mb-2">SOLECITO RESOURCES</h3></div>
        <div className="resourceButtons d-flex flex-wrap gap-2 ms-5 me-5">
          <button className="resourceButton btn btn-secondary" type="button" onClick={() => navigate("/alumnet")}>Alumni Network</button>
          <button className="resourceButton btn btn-secondary" type="button" onClick={() => window.open("https://photos.google.com/share/AF1QipNgBJUn6SYd-xPVUKh6jJUIMQ1YhkTALIawn4lVaBQgnMR0CaO0eG_M_uSrHblKLg?key=ejNRTnBscUswRHhoY2ZHWnd6cElrMUYybVhfc3B3")}>Photo Album</button>
          <button className="resourceButton btn btn-secondary" type="button" onClick={() => window.open("", "_blank")}>Textbook Bank</button>
          <button className="resourceButton btn btn-secondary" type="button" onClick={() => window.open("", "_blank")}>Test Bank Google Drive</button>
          <button className="resourceButton btn btn-secondary" type="button" onClick={() => window.open("", "_blank")}>MentorSHPE Slack Channel</button>
        </div>
      </div>
    </div>
  );
}