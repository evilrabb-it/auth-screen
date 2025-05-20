import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function EvilRabbitAuthScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md p-6 space-y-6 shadow-xl rounded-xl border" style={{ backgroundColor: "#000000", borderColor: "#333333" }}>
        <div className="text-center">
          <Image
            src="/evilrabbit.svg"
            alt="Evil Rabbit"
            width={72}
            height={72}
            className="mx-auto"
          />
          <h1 className="text-2xl font-semibold text-white mt-4 tracking-tight">Hello, Evil Rabbit</h1>
          <p className="text-sm" style={{ color: "#1a1a1a" }}>Log in to access your space</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" style={{ color: "#1a1a1a" }}>Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              className="text-white focus:border-white focus:ring-white"
              style={{
                backgroundColor: "#1a1a1a",
                borderColor: "#333333",
                color: "#fff",
                placeholderColor: "#1a1a1a"
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" style={{ color: "#1a1a1a" }}>Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="text-white focus:border-white focus:ring-white"
              style={{
                backgroundColor: "#1a1a1a",
                borderColor: "#333333",
                color: "#fff",
                placeholderColor: "#1a1a1a"
              }}
            />
          </div>
          <Button type="submit" className="w-full bg-white text-black font-medium hover:bg-neutral-200">
            Login
          </Button>
        </form>

        <div className="text-center text-sm" style={{ color: "#1a1a1a" }}>
          Don’t have an account?{" "}
          <a href="/register" className="underline hover:text-black">
            Register
          </a>
        </div>
      </Card>
    </div>
  )
}
