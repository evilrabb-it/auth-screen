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
            width={96}
            height={96}
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-[#666666]">
              <input
                type="checkbox"
                className="w-4 h-4 border border-[#333333] bg-black checked:bg-black checked:border-[#333333] focus:ring-white"
                />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="text-[#FFFFFF] hover:text-[#444444]">
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
          <a href="/register" className="text-[#FFFFFF] hover:text-[#444444]">
            Sign Up
          </a>
        </div>
      </Card>
    </div>
  )
}
