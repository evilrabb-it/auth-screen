import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function EvilRabbitAuthScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md p-8 space-y-6 shadow-xl rounded-xl border border-neutral-800" style={{ backgroundColor: "#000000" }}>
        <div className="text-center">
          <Image
            src="/evilrabbit.svg"
            alt="Evil Rabbit"
            width={112}
            height={112}
            className="mx-auto w-28 h-28"
            />
          <h1 className="text-2xl font-semibold text-white mt-4 tracking-tight">Hello Evil Rabbit</h1>
          <p className="text-sm text-neutral-400 mt-2">Log in to access your space</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-neutral-300">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-white focus:ring-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-neutral-300">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-white focus:ring-white"
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
