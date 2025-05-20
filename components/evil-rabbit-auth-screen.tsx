import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function EvilRabbitAuthScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <Card
        className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 space-y-6 shadow-xl rounded-xl border"
        style={{ backgroundColor: "#000000", borderColor: "#333333" }}
      >
        <div className="text-center">
          <Image
            src="/evilrabbit.svg"
            alt="Evil Rabbit"
            width={80}
            height={80}
            className="mx-auto"
          />
          <h1 className="text-2xl font-semibold mt-4 tracking-tight text-white">
            Hello, Evil Rabbit
          </h1>
          <p className="text-sm mt-2 text-[#666666]">
            Log in to access your space
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#A0A0A0]">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              className="bg-black border text-[#666666] placeholder-[#2E2E2E] focus:border-white focus:ring-white"
              style={{ borderColor: "#333333" }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#A0A0A0]">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="bg-black border text-[#666666] placeholder-[#2E2E2E] focus:border-white focus:ring-white"
              style={{ borderColor: "#333333" }}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-2">
            <label className="flex items-center space-x-2 text-[#666666]">
              <input type="checkbox" className="accent-white" />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="text-[#666666] underline hover:text-gray-400 text-right">
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black font-medium border border-transparent hover:bg-[#333333] hover:text-white"
          >
            Login
          </Button>
        </form>

        <div className="text-center text-sm text-[#666666]">
          Don’t have an account?{" "}
          <a href="/register" className="underline hover:text-gray-400">
            Register
          </a>
        </div>
      </Card>
    </div>
  )
}
