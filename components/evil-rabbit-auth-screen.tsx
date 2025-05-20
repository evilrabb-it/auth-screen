import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function EvilRabbitAuthScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#000000", padding: "1rem" }}>
      <Card
        className="w-full max-w-md p-8 space-y-6 shadow-xl rounded-xl border"
        style={{ backgroundColor: "#000000", borderColor: "#333333" }}
      >
        <div className="text-center">
          <Image
            src="/evilrabbit.svg"
            alt="Evil Rabbit"
            width={72}
            height={72}
            className="mx-auto"
          />
          <h1 className="text-2xl font-semibold mt-4 tracking-tight" style={{ color: "#FFFFFF" }}>
            Hello, Evil Rabbit
          </h1>
          <p className="text-sm mt-2" style={{ color: "#666666" }}>
            Log in to access your space
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" style={{ color: "#878787" }}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              className="bg-black border text-gray-600 placeholder-[#2E2E2E] focus:border-white focus:ring-white"
              style={{ borderColor: "#333333" }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" style={{ color: "#878787" }}>
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="bg-black border text-gray-600 placeholder-[#2E2E2E] focus:border-white focus:ring-white"
              style={{ borderColor: "#333333" }}
            />
          </div>

          <div className="text-center">
            <a href="/forgot-password" className="text-sm underline" style={{ color: "#666666" }}>
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black font-medium hover:bg-black hover:text-white border border-transparent"
          >
            Login
          </Button>
        </form>

        <div className="text-center text-sm" style={{ color: "#666666" }}>
          Don’t have an account?{" "}
          <a href="/register" className="underline hover:text-gray-400">
            Register
          </a>
        </div>
      </Card>
    </div>
  )
}
