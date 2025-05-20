import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function EvilRabbitAuthScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md p-6 space-y-4 shadow-xl rounded-xl border" style={{ backgroundColor: "#000000", borderColor: "#333333" }}>
        <div className="text-center space-y-2">
          <Image
            src="/evilrabbit.svg"
            alt="Evil Rabbit"
            width={72}
            height={72}
            className="mx-auto w-18 h-18"
          />
          <h1 className="text-xl font-semibold text-white tracking-tight">Hello, Evil Rabbit</h1>
          <p className="text-sm text-neutral-400">Log in to access your space</p>
        </div>

        <form className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="email" className="text-neutral-300">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              className="bg-[#1a1a1a] border-[#333333] text-white placeholder-neutral-500 focus:border-white focus:ring-white"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password" className="text-neutral-300">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="bg-[#1a1a1a] border-[#333333] text-white placeholder-neutral-500 focus:border-white focus:ring-white"
            />
          </div>
          <Button type="submit" className="w-full bg-white text-black font-medium hover:bg-neutral-200">
            Login
          </Button>
        </form>

        <div className="text-center text-sm text-neutral-500">
          Don’t have an account?{" "}
          <a href="/register" className="underline hover:text-black">
            Register
          </a>
        </div>
      </Card>
    </div>
  )
}
