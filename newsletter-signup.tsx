import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function NewsletterSignup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
      <Card className="w-full max-w-md p-8 space-y-6 shadow-lg">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">Z</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Subscribe to Zenith</h1>
          <p className="text-gray-600 mt-2">Get weekly insights on productivity and mindfulness</p>
        </div>

        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" aria-label="Sign up with Facebook">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Sign up with Twitter">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Sign up with LinkedIn">
            <Linkedin className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <form className="space-y-4">
          <Input type="email" placeholder="Enter your email" required />
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Subscribe Now
          </Button>
        </form>

        <div className="text-center text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Terms
          </a>
          {" • "}
          <a href="#" className="hover:underline">
            Privacy
          </a>
          {" • "}
          <a href="#" className="hover:underline">
            Help
          </a>
        </div>

        <div className="text-center text-xs text-gray-400">We respect your privacy. Unsubscribe at any time.</div>
      </Card>
    </div>
  )
}

