import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"

export default function TeamAuth() {
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState("member")
  const [isRequestingAccess, setIsRequestingAccess] = useState(false)
  const [accessEmail, setAccessEmail] = useState("")
  const [accessReason, setAccessReason] = useState("")
  const [requestStatus, setRequestStatus] = useState<"idle" | "submitted" | "error">("idle")

  // Login handler
  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    // Validasi
    if (!role) {
      alert("Please select a role")
      return
    }
    alert(`Logged in as ${role}`)
  }

  // Request akses
  function handleRequestAccess(e: React.FormEvent) {
    e.preventDefault()
    if (!accessEmail || !accessReason) {
      setRequestStatus("error")
      return
    }
    setRequestStatus("submitted")
    // Reset form
    setAccessEmail("")
    setAccessReason("")
  }  
  return (
  <div className="min-h-screen flex items-center justify-center px-4 bg-black">
    <Card className="w-full max-w-md p-8 space-y-6 shadow-xl rounded-md border" style={{ backgroundColor: "#000", borderColor: "#333" }}>
      {!isRequestingAccess ? (
        <>
          <div className="text-center space-y-3">
            <Image src="/evilrabbit.svg" alt="Evil Rabbit" width={80} height={80} className="mx-auto" />
            <h1 className="text-2xl font-semibold tracking-tight text-white">Welcome, Team Members</h1>
            <p className="text-sm text-[#A0A0A0]">Log in to access your team workspace</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm text-[#A0A0A0]">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@example.com"
                required
                className="bg-black border text-[#FFFFFF] placeholder-[#2E2E2E] focus:border-white focus:ring-white"
                style={{ borderColor: "#333333" }}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-sm text-[#A0A0A0]">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="bg-black border text-[#FFFFFF] placeholder-[#2E2E2E] focus:border-white focus:ring-white pr-10"
                  style={{ borderColor: "#333333" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-[#666666] hover:text-white"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="role" className="text-sm text-[#A0A0A0]">Role</Label>
              <div className="relative">
                <select
                  id="role"
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  className="appearance-none bg-black border border-[#333333] text-[#666666] p-2 rounded w-full focus:border-white focus:ring-white"
                >
                  <option value="select role">Select Role</option>
                  <option value="designer">Designer</option>
                  <option value="developer">Developer</option>
                  <option value="admin">Admin</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-[#666666]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm mt-1">
              <label className="flex items-center space-x-2 text-[#A0A0A0]">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-[#333333] bg-black checked:bg-black checked:border-[#333333] focus:ring-white"
                />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="text-[#FFFFFF] hover:text-[#666666]">Forgot Password?</a>
            </div>

            <Button type="submit" className="w-full bg-white text-black font-medium border border-transparent hover:bg-[#2E2E2E] hover:text-white">
              Log In
            </Button>
          </form>

          <div className="text-center text-sm text-[#A0A0A0] mt-2">
            Don’t have access yet?{" "}
            <button
              className="text-[#FFFFFF] hover:text-[#666666] focus:outline-none"
              onClick={() => {
                setIsRequestingAccess(true)
                setRequestStatus("idle")
              }}
            >
              Request Access
            </button>
          </div>
        </>
      ) : (
          <>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white">Request Team Access</h2>
              <p className="text-sm mt-1 text-[#A0A0A0]">Fill the form below and wait for admin approval</p>
            </div>

            <form onSubmit={handleRequestAccess} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="accessEmail" className="text-[#A0A0A0]">Email</Label>
                <Input
                  id="accessEmail"
                  type="email"
                  value={accessEmail}
                  onChange={e => setAccessEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-black border text-[#666666] placeholder-[#2E2E2E] focus:border-white focus:ring-white"
                  style={{ borderColor: "#333333" }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="accessReason" className="text-[#A0A0A0]">Reason for Access</Label>
                <textarea
                  id="accessReason"
                  value={accessReason}
                  onChange={e => setAccessReason(e.target.value)}
                  placeholder="Explain why you need access"
                  required
                  className="bg-black border text-[#666666] placeholder-[#2E2E2E] focus:border-white focus:ring-white w-full p-2 rounded"
                  style={{ borderColor: "#333333" }}
                />
              </div>

              {requestStatus === "error" && (
                <p className="text-red-500 text-sm">Please fill all fields.</p>
              )}
              {requestStatus === "submitted" && (
                <p className="text-green-500 text-sm">Request submitted! Please wait for approval.</p>
              )}

              <div className="flex justify-between">
                <Button type="button" variant="secondary" onClick={() => setIsRequestingAccess(false)}>
                  Back to Login
                </Button>
                <Button type="submit" className="bg-white text-black font-medium border border-transparent hover:bg-[#2E2E2E] hover:text-white">
                  Submit Request
                </Button>
              </div>
            </form>
          </>
        )}
      </Card>
    </div>
  )
}
