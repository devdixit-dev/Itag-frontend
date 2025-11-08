import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Trash2 } from "lucide-react";

interface StudyMaterialState {
  active: "reports" | "guides" | "videos";
}

export default function Admin() {
  const { toast } = useToast();
  const navigate = useNavigate();

  // Authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  // UI State
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [studyMaterials, setStudyMaterials] = useState<StudyMaterialState>({ active: "reports" });

  // Data States
  const [fetchStudyReports, setFetchStudyReports] = useState<any[]>([]);
  const [fetchStudyGuides, setFetchStudyGuides] = useState<any[]>([]);
  const [fetchStudyVideos, setFetchStudyVideos] = useState<any[]>([]);

  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

  /** -----------------------------
   *  AUTHENTICATION LOGIC
   *  ----------------------------- */
  const handleLogin = async () => {
    if (!loginForm.username || !loginForm.password) {
      return toast({
        title: "Missing credentials",
        description: "Please enter both username and password",
        variant: "destructive",
      });
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${VITE_BASE_URL}/auth/login/admin`,
        loginForm,
        { withCredentials: true }
      );

      if (res.status === 200) {
        localStorage.setItem("isAuth", "true");
        setIsLoggedIn(true);
        toast({
          title: "Login Successful",
          description: "Welcome back, Admin!",
        });
      }
    } catch (err: any) {
      toast({
        title: "Login failed",
        description: err.response?.data?.message || "Invalid credentials",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${VITE_BASE_URL}/auth/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error("Logout failed:", err);
    }

    localStorage.removeItem("isAuth");
    setIsLoggedIn(false);
    setLoginForm({ username: "", password: "" });
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  /** -----------------------------
   *  VERIFY SESSION
   *  ----------------------------- */
  useEffect(() => {
    const checkLogin = async () => {
      const isAuth = localStorage.getItem("isAuth");
      if (isAuth === "true") {
        try {
          const response = await axios.get(`${VITE_BASE_URL}/auth/verify/admin`, {
            withCredentials: true,
          });
          if (response.status === 200 && response.data.loggedIn) {
            setIsLoggedIn(true);
          } else {
            localStorage.removeItem("isAuth");
            setIsLoggedIn(false);
          }
        } catch (err) {
          localStorage.removeItem("isAuth");
          setIsLoggedIn(false);
        }
      }
    };
    checkLogin();
  }, []);

  /** -----------------------------
   *  FETCH STUDY MATERIALS
   *  ----------------------------- */
  useEffect(() => {
    const fetchStudyData = async () => {
      if (!isLoggedIn) return;
      try {
        setLoading(true);
        const [reports, guides, videos] = await Promise.all([
          axios.get(`${VITE_BASE_URL}/admin/reports`, { withCredentials: true }),
          axios.get(`${VITE_BASE_URL}/admin/guides`, { withCredentials: true }),
          axios.get(`${VITE_BASE_URL}/admin/videos`, { withCredentials: true }),
        ]);

        setFetchStudyReports(reports.data.reports || []);
        setFetchStudyGuides(guides.data.guides || []);
        setFetchStudyVideos(videos.data.videos || []);
      } catch (err) {
        toast({
          title: "Error loading materials",
          description: "Failed to fetch study materials.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStudyData();
  }, [isLoggedIn]);

  /** -----------------------------
   *  DELETE HANDLERS
   *  ----------------------------- */
  const handleDeleteReport = async (id: string, e: any) => {
    e.preventDefault();
    try {
      await axios.delete(`${VITE_BASE_URL}/admin/reports/${id}`, { withCredentials: true });
      setFetchStudyReports((prev) => prev.filter((r) => r._id !== id));
      toast({ title: "Deleted", description: "Report removed successfully." });
    } catch {
      toast({ title: "Error", description: "Failed to delete report.", variant: "destructive" });
    }
  };

  const handleDeleteGuide = async (id: string, e: any) => {
    e.preventDefault();
    try {
      await axios.delete(`${VITE_BASE_URL}/admin/guides/${id}`, { withCredentials: true });
      setFetchStudyGuides((prev) => prev.filter((g) => g._id !== id));
      toast({ title: "Deleted", description: "Guide removed successfully." });
    } catch {
      toast({ title: "Error", description: "Failed to delete guide.", variant: "destructive" });
    }
  };

  const handleDeleteVideo = async (id: string, e: any) => {
    e.preventDefault();
    try {
      await axios.delete(`${VITE_BASE_URL}/admin/videos/${id}`, { withCredentials: true });
      setFetchStudyVideos((prev) => prev.filter((v) => v._id !== id));
      toast({ title: "Deleted", description: "Video removed successfully." });
    } catch {
      toast({ title: "Error", description: "Failed to delete video.", variant: "destructive" });
    }
  };

  /** -----------------------------
   *  RENDER
   *  ----------------------------- */
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={loginForm.username}
              onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            />
            <Button onClick={handleLogin} disabled={loading} className="w-full">
              {loading ? <Loader2 className="animate-spin" /> : "Login"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <div className="w-[250px] bg-white border-r p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
          <div className="space-y-2">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </Button>
            <Button
              variant={activeTab === "study-materials" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("study-materials")}
            >
              Study Materials
            </Button>
          </div>
        </div>
        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        {activeTab === "dashboard" && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <p className="text-muted-foreground">Welcome, Admin. Use the sidebar to manage content.</p>
          </div>
        )}

        {activeTab === "study-materials" && (
          <div className="w-[80%] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Study Materials</h2>
                <p className="text-muted-foreground">Manage reports, guides, and videos</p>
              </div>
            </div>

            {/* Study Material Tabs */}
            <div className="flex gap-6 border-b mb-6">
              {["reports", "guides", "videos"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setStudyMaterials({ ...studyMaterials, active: tab as any })}
                  className={`pb-2 ${
                    studyMaterials.active === tab
                      ? "border-b-2 border-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {loading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="animate-spin text-muted-foreground" />
              </div>
            ) : (
              <>
                {/* Reports */}
                {studyMaterials.active === "reports" && (
                  <div className="grid gap-4">
                    {fetchStudyReports.length > 0 ? (
                      fetchStudyReports.map((report) => (
                        <Card key={report._id}>
                          <CardContent className="pt-4 flex justify-between items-center">
                            <div>
                              <p className="font-semibold">{report.name}</p>
                              <span className="text-sm text-muted-foreground">
                                {new Date(report.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <Button variant="destructive" onClick={(e) => handleDeleteReport(report._id, e)}>
                              <Trash2 className="w-4 h-4 mr-2" /> Delete
                            </Button>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <p className="text-center text-muted-foreground">No reports uploaded yet.</p>
                    )}
                  </div>
                )}

                {/* Guides */}
                {studyMaterials.active === "guides" && (
                  <div className="grid gap-4">
                    {fetchStudyGuides.length > 0 ? (
                      fetchStudyGuides.map((guide) => (
                        <Card key={guide._id}>
                          <CardContent className="pt-4 flex justify-between items-center">
                            <div>
                              <p className="font-semibold">{guide.name}</p>
                              <p className="text-sm text-muted-foreground">{guide.desc}</p>
                            </div>
                            <Button variant="destructive" onClick={(e) => handleDeleteGuide(guide._id, e)}>
                              <Trash2 className="w-4 h-4 mr-2" /> Delete
                            </Button>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <p className="text-center text-muted-foreground">No guides uploaded yet.</p>
                    )}
                  </div>
                )}

                {/* Videos */}
                {studyMaterials.active === "videos" && (
                  <div className="grid gap-4">
                    {fetchStudyVideos.length > 0 ? (
                      fetchStudyVideos.map((video) => (
                        <Card key={video._id}>
                          <CardContent className="pt-4 flex justify-between items-center">
                            <div>
                              <p className="font-semibold">{video.name}</p>
                              <a
                                href={video.videoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline text-sm"
                              >
                                Watch
                              </a>
                            </div>
                            <Button variant="destructive" onClick={(e) => handleDeleteVideo(video._id, e)}>
                              <Trash2 className="w-4 h-4 mr-2" /> Delete
                            </Button>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <p className="text-center text-muted-foreground">No videos uploaded yet.</p>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
